import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import OpenAI from 'openai';

// Configurações básicas de ambiente e caminhos
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5180;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Inicializa a API da OpenAI se a chave estiver presente
let openai = null;
if (OPENAI_API_KEY) {
  openai = new OpenAI({ apiKey: OPENAI_API_KEY });
  console.log('✔ Cliente OpenAI configurado com sucesso.');
} else {
  console.warn('⚠ ATENÇÃO: OPENAI_API_KEY não configurada no arquivo .env. O servidor responderá no modo SIMULAÇÃO/MOCK.');
}

// Helper para ler os prompts diretamente do diretório /docs/agentes
const getAgentPrompt = (filename) => {
  try {
    const filePath = path.join(__dirname, '../docs/agentes', filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
    console.error(`Prompt do agente não encontrado: ${filePath}`);
    return null;
  } catch (error) {
    console.error(`Erro ao carregar o prompt ${filename}:`, error);
    return null;
  }
};

// Middleware para validar se a chave da API está configurada (se não, responde com mock/teste)
const checkApiKey = (req, res, next) => {
  if (!openai) {
    // Modo de Simulação
    return res.status(200).json({
      modo: "simulacao_mock",
      mensagem: "Simulação de teste local. Configure OPENAI_API_KEY no arquivo .env para chamadas reais.",
      classificacao: req.body.classificacao_mock || "Qualificado para proposta",
      resumo_executivo: "Lead simulado demonstrando interesse em reorganização societária preventiva.",
      riscos_percebidos: [
        "Ausência de acordo de sócios",
        "Retiradas informais não documentadas"
      ],
      oportunidades_valor: [
        "Redução drástica do risco de dissolução litigiosa",
        "Preparação da governança para captação de investimento"
      ],
      perguntas_faltantes: [
        "Qual o faturamento bruto atual?",
        "Qual o regime de tributação atual?"
      ],
      proximo_passo: "Apresentar proposta comercial de Planejamento Societário.",
      mensagem_sugerida: "Olá! Com base no perfil inicial que conversamos, existem pontos importantes relacionados à segurança jurídica dos sócios e controle patrimonial. O melhor caminho agora é fazermos um diagnóstico empresarial detalhado. Vamos agendar?",
      revisao_humana: "Luciano precisa checar se o perfil do lead possui algum conflito com clientes atuais da banca."
    });
  }
  next();
};

// Rota de status do servidor
app.get('/api/status', (req, res) => {
  res.json({
    status: "online",
    servico: "LB Inteligência Jurídica - API de Agentes",
    openai_configurada: !!openai,
    porta: PORT
  });
});

// Endpoint do Agente Comercial Empresarial e Societário
app.post('/api/agente/comercial', checkApiKey, async (req, res) => {
  try {
    const { lead_dados } = req.body;
    if (!lead_dados) {
      return res.status(400).json({ erro: "Parâmetro 'lead_dados' é obrigatório." });
    }

    const systemPrompt = getAgentPrompt('agente-comercial-empresarial-societario.md');
    if (!systemPrompt) {
      return res.status(500).json({ erro: "Não foi possível carregar as diretrizes do Agente Comercial." });
    }

    console.log('Chamando GPT-4o para o Agente Comercial...');
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Analise o lead abaixo:\n\n${typeof lead_dados === 'object' ? JSON.stringify(lead_dados, null, 2) : lead_dados}` }
      ],
      temperature: 0.2
    });

    const output = response.choices[0].message.content;
    res.json({
      modo: "real_openai",
      resposta: output
    });
  } catch (error) {
    console.error('Erro na chamada do Agente Comercial:', error);
    res.status(500).json({ erro: "Erro ao processar chamada do agente de IA.", detalhes: error.message });
  }
});

// Endpoint do Agente de Diagnóstico Societário
app.post('/api/agente/diagnostico', checkApiKey, async (req, res) => {
  try {
    const { questionario } = req.body;
    if (!questionario) {
      return res.status(400).json({ erro: "Parâmetro 'questionario' é obrigatório." });
    }

    const systemPrompt = getAgentPrompt('agente-diagnostico-empresarial-societario.md');
    if (!systemPrompt) {
      return res.status(500).json({ erro: "Não foi possível carregar as diretrizes do Agente de Diagnóstico." });
    }

    console.log('Chamando GPT-4o para o Agente de Diagnóstico...');
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Analise as respostas do questionário para produzir o diagnóstico:\n\n${typeof questionario === 'object' ? JSON.stringify(questionario, null, 2) : questionario}` }
      ],
      temperature: 0.2
    });

    const output = response.choices[0].message.content;
    res.json({
      modo: "real_openai",
      resposta: output
    });
  } catch (error) {
    console.error('Erro na chamada do Agente de Diagnóstico:', error);
    res.status(500).json({ erro: "Erro ao processar diagnóstico.", detalhes: error.message });
  }
});

// Endpoint do Agente de Propostas
app.post('/api/agente/proposta', checkApiKey, async (req, res) => {
  try {
    const { diagnostico_aprovado } = req.body;
    if (!diagnostico_aprovado) {
      return res.status(400).json({ erro: "Parâmetro 'diagnostico_aprovado' é obrigatório." });
    }

    const systemPrompt = getAgentPrompt('agente-propostas-empresarial-societario.md');
    if (!systemPrompt) {
      return res.status(500).json({ erro: "Não foi possível carregar as diretrizes do Agente de Propostas." });
    }

    console.log('Chamando GPT-4o para o Agente de Propostas...');
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Gere a proposta comercial baseando-se no diagnóstico a seguir:\n\n${typeof diagnostico_aprovado === 'object' ? JSON.stringify(diagnostico_aprovado, null, 2) : diagnostico_aprovado}` }
      ],
      temperature: 0.3
    });

    const output = response.choices[0].message.content;
    res.json({
      modo: "real_openai",
      resposta: output
    });
  } catch (error) {
    console.error('Erro na chamada do Agente de Propostas:', error);
    res.status(500).json({ erro: "Erro ao gerar proposta comercial.", detalhes: error.message });
  }
});

// Endpoint do Agente de Revisão e Auditoria de Qualidade
app.post('/api/agente/revisao', checkApiKey, async (req, res) => {
  try {
    const { documento_minuta } = req.body;
    if (!documento_minuta) {
      return res.status(400).json({ erro: "Parâmetro 'documento_minuta' é obrigatório." });
    }

    const systemPrompt = getAgentPrompt('agente-revisao-qualidade.md');
    if (!systemPrompt) {
      return res.status(500).json({ erro: "Não foi possível carregar as diretrizes do Agente de Revisão." });
    }

    console.log('Chamando GPT-4o para o Agente de Revisão...');
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Audite e revise o documento abaixo:\n\n${documento_minuta}` }
      ],
      temperature: 0.1
    });

    const output = response.choices[0].message.content;
    res.json({
      modo: "real_openai",
      resposta: output
    });
  } catch (error) {
    console.error('Erro na chamada do Agente de Revisão:', error);
    res.status(500).json({ erro: "Erro ao revisar minuta de documento.", detalhes: error.message });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`\n=============================================================`);
  console.log(`✔ Servidor de Agentes LB rodando localmente.`);
  console.log(`✔ Acesse em: http://localhost:${PORT}`);
  console.log(`✔ Endpoints disponíveis:`);
  console.log(`  - GET  /api/status`);
  console.log(`  - POST /api/agente/comercial`);
  console.log(`  - POST /api/agente/diagnostico`);
  console.log(`  - POST /api/agente/proposta`);
  console.log(`  - POST /api/agente/revisao`);
  console.log(`=============================================================\n`);
});
