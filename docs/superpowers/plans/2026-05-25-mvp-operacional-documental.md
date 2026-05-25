# MVP Operacional Documental Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first operational documentation layer that turns the approved autonomous law office blueprint into usable workflows, templates, agent instructions, governance controls, and validation simulations.

**Architecture:** This implementation is documentation-first. Each operational unit lives in a focused Markdown file under `docs/`, with cross-links from the existing strategic files. The MVP avoids software automation and tool lock-in; it creates the operational assets needed to later automate CRM, document intake, AI agents, and dashboards.

**Tech Stack:** Markdown, Git, GitHub, existing `docs/` structure, no external runtime dependencies.

---

## File Structure

- Create: `docs/operacao/esteira-ponta-a-ponta.md`  
  Owns the full 10-step operational workflow with input, output, owner, AI support, human review, templates, automations, and metrics per stage.

- Create: `docs/operacao/fluxo-piloto-pessoa-fisica.md`  
  Owns the first simulated client journey for an individual planning patrimonial and succession protection.

- Create: `docs/operacao/fluxo-piloto-pessoa-juridica.md`  
  Owns the second simulated client journey for an entrepreneur/company needing tax, corporate, and patrimonial risk review.

- Create: `docs/templates/comercial/mensagem-inicial.md`  
  Owns the first client-facing response pattern.

- Create: `docs/templates/comercial/roteiro-triagem.md`  
  Owns the lead qualification script.

- Create: `docs/templates/comercial/proposta-estrutura.md`  
  Owns the reusable proposal structure.

- Create: `docs/templates/operacao/checklist-onboarding.md`  
  Owns onboarding and document intake checklist.

- Create: `docs/agentes/agente-triagem-comercial.md`  
  Owns the prompt, inputs, outputs, rules, and limits for commercial triage.

- Create: `docs/agentes/agente-diagnostico-estrategico.md`  
  Owns the prompt, inputs, outputs, rules, and limits for preliminary strategic diagnosis.

- Create: `docs/agentes/agente-documental.md`  
  Owns the prompt, inputs, outputs, rules, and limits for document organization.

- Create: `docs/governanca/checklist-qualidade.md`  
  Owns mandatory human review checks before any client-facing legal delivery.

- Create: `docs/metricas/dashboard-mvp.md`  
  Owns the first KPI dictionary for commercial, operational, quality, and recurrence metrics.

- Modify: `docs/01-blueprint-estrategico.md`  
  Link to the new operational workflow and MVP assets.

- Modify: `docs/03-operacao-e-processos.md`  
  Link to the detailed workflow and pilot simulations.

- Modify: `docs/04-agentes-de-ia.md`  
  Link to the first agent definitions.

- Modify: `docs/05-documentos-e-templates.md`  
  Link to the first templates.

- Modify: `docs/07-governanca-e-qualidade.md`  
  Link to the quality checklist and metrics.

- Modify: `docs/decisoes.md`  
  Record the decision that the first implementation cycle is a documentation-first MVP.

---

### Task 1: Create Operational Directory Structure

**Files:**
- Create directory: `docs/operacao/`
- Create directory: `docs/templates/comercial/`
- Create directory: `docs/templates/operacao/`
- Create directory: `docs/agentes/`
- Create directory: `docs/governanca/`
- Create directory: `docs/metricas/`

- [ ] **Step 1: Create directories**

Run:

```powershell
New-Item -ItemType Directory -Force -Path `
  'docs\operacao', `
  'docs\templates\comercial', `
  'docs\templates\operacao', `
  'docs\agentes', `
  'docs\governanca', `
  'docs\metricas'
```

Expected: PowerShell prints the created or existing directory paths.

- [ ] **Step 2: Verify directories exist**

Run:

```powershell
Test-Path 'docs\operacao'
Test-Path 'docs\templates\comercial'
Test-Path 'docs\templates\operacao'
Test-Path 'docs\agentes'
Test-Path 'docs\governanca'
Test-Path 'docs\metricas'
```

Expected: six `True` lines.

- [ ] **Step 3: Commit directory scaffolding together with Task 2 files**

Do not commit empty directories. Git will only track them after Task 2 creates files inside them.

---

### Task 2: Write the Detailed 10-Step Operational Workflow

**Files:**
- Create: `docs/operacao/esteira-ponta-a-ponta.md`

- [ ] **Step 1: Create the workflow file**

Create `docs/operacao/esteira-ponta-a-ponta.md` with this content:

```markdown
# Esteira Ponta a Ponta

Este documento transforma o blueprint estrategico da LB Inteligencia Juridica em uma rotina operacional executavel.

## Como usar

Cada etapa deve ser executada em ordem. A etapa seguinte so comeca quando a saida esperada da etapa anterior estiver registrada.

## 1. Entrada do Lead

**Objetivo:** registrar a oportunidade e identificar origem, perfil e dor principal.

**Entradas:** WhatsApp, formulario, indicacao, e-mail, landing page ou contato direto.

**Saidas obrigatorias:**
- Lead registrado.
- Origem identificada.
- Area provavel marcada: patrimonial, tributaria, empresarial ou mista.
- Proximo passo definido.

**IA de apoio:** Agente de Recepcao e Registro.

**Revisao humana:** apenas para lead sensivel, urgente ou de alto potencial.

**Templates usados:** mensagem inicial e formulario curto de qualificacao.

**Metricas:** tempo de primeira resposta, origem do lead, taxa de resposta.

## 2. Triagem Inteligente

**Objetivo:** separar clientes qualificados de demandas fora do foco.

**Entradas:** respostas iniciais, perfil do cliente, problema declarado, patrimonio ou empresa envolvida, urgencia e expectativa.

**Saidas obrigatorias:**
- Lead qualificado, nutrido, recusado ou redirecionado.
- Motivo da classificacao registrado.
- Recomendacao de proximo passo.

**IA de apoio:** Agente de Triagem Comercial.

**Revisao humana:** obrigatoria para casos de alto valor, duvida de enquadramento ou risco reputacional.

**Templates usados:** roteiro de triagem, mensagens de qualificacao e mensagem de recusa elegante.

**Metricas:** taxa de qualificacao, motivos de desqualificacao, taxa de agendamento.

## 3. Diagnostico Estrategico

**Objetivo:** entender a dor real e traduzir riscos juridicos em perdas financeiras, familiares ou empresariais evitaveis.

**Entradas:** reuniao diagnostica, formulario detalhado, informacoes patrimoniais, societarias, tributarias e familiares.

**Saidas obrigatorias:**
- Resumo executivo da dor.
- Oportunidades detectadas.
- Riscos preliminares.
- Produto recomendado.

**IA de apoio:** Agente de Diagnostico Estrategico.

**Revisao humana:** conducao ou revisao por Luciano.

**Templates usados:** roteiro de reuniao, formulario diagnostico, matriz de dor e oportunidade.

**Metricas:** taxa de diagnosticos convertidos, tempo medio de diagnostico, ticket potencial estimado.

## 4. Proposta Comercial

**Objetivo:** transformar a dor detectada em solucao clara, com escopo, beneficios, prazo, honorarios e proximos passos.

**Entradas:** diagnostico, produto recomendado, complexidade, documentos disponiveis e urgencia.

**Saidas obrigatorias:**
- Proposta personalizada.
- Mensagem de envio.
- Plano de follow-up.

**IA de apoio:** Agente de Propostas.

**Revisao humana:** aprovacao final de escopo, honorarios e promessas comerciais.

**Templates usados:** estrutura de proposta, mensagem de envio e sequencia de follow-up.

**Metricas:** taxa de aceite, tempo ate envio, valor medio de proposta e motivo de perda.

## 5. Contratacao e Onboarding

**Objetivo:** formalizar a relacao e iniciar o trabalho com clareza operacional.

**Entradas:** aceite da proposta, dados cadastrais, contrato de honorarios e definicao de responsaveis.

**Saidas obrigatorias:**
- Contrato assinado.
- Pasta criada.
- Cliente orientado.
- Checklist documental enviado.

**IA de apoio:** Agente de Onboarding.

**Revisao humana:** conferencia de contrato, escopo e risco de conflito.

**Templates usados:** contrato de honorarios, e-mail de boas-vindas e checklist inicial.

**Metricas:** tempo de assinatura, pendencias de onboarding e abandono apos aceite.

## 6. Coleta e Organizacao Documental

**Objetivo:** receber, classificar, resumir e apontar pendencias antes da analise tecnica.

**Entradas:** documentos pessoais, societarios, contabeis, fiscais, patrimoniais, contratos, certidoes e declaracoes.

**Saidas obrigatorias:**
- Pasta organizada.
- Indice documental.
- Resumo dos documentos.
- Lista de pendencias.

**IA de apoio:** Agente Documental.

**Revisao humana:** documentos criticos e validacao de pendencias.

**Templates usados:** checklist documental, matriz de pendencias e resumo documental.

**Metricas:** percentual de documentos recebidos, tempo ate pasta completa e numero de pendencias.

## 7. Analise Tecnica e Estrategia

**Objetivo:** definir a solucao juridica adequada, com premissas, riscos, alternativas e beneficios concretos.

**Entradas:** diagnostico, documentos, dados financeiros, composicao familiar ou societaria e objetivos do cliente.

**Saidas obrigatorias:**
- Estrategia juridica aprovada internamente.
- Matriz de riscos.
- Plano de acao.
- Estrutura recomendada.

**IA de apoio:** Agente de Estrategia Juridica.

**Revisao humana:** decisao estrategica obrigatoria por advogado.

**Templates usados:** matriz de estrategia, matriz de riscos, parecer interno e plano de acao.

**Metricas:** tempo de analise, retrabalho estrategico e riscos identificados antes da entrega.

## 8. Producao Juridica

**Objetivo:** gerar documentos, minutas, relatorios, pareceres e comunicacoes com padrao tecnico e linguagem clara.

**Entradas:** estrategia aprovada, templates, dados do cliente e documentos organizados.

**Saidas obrigatorias:**
- Minutas.
- Pareceres.
- Relatorios.
- Contratos.
- Atos societarios.
- Mensagens de entrega.

**IA de apoio:** Agente de Minutas e Redacao Juridica.

**Revisao humana:** revisao tecnica obrigatoria antes de envio externo.

**Templates usados:** minutas por produto, parecer estrategico, relatorio de diagnostico e e-mails de entrega.

**Metricas:** tempo de producao, volume de retrabalho e consistencia com template.

## 9. Revisao Humana e Controle de Qualidade

**Objetivo:** garantir precisao juridica, aderencia ao escopo, clareza, seguranca e qualidade antes da entrega.

**Entradas:** documentos produzidos, estrategia aprovada, proposta contratada e dados do cliente.

**Saidas obrigatorias:**
- Entrega aprovada.
- Ajustes solicitados.
- Bloqueio por risco, quando necessario.

**IA de apoio:** Agente de Auditoria e Clareza.

**Revisao humana:** revisao final obrigatoria por Luciano ou advogado responsavel.

**Templates usados:** checklist de qualidade, checklist de risco e checklist de linguagem clara.

**Metricas:** erros encontrados, retrabalho, tempo de revisao e documentos bloqueados.

## 10. Entrega, Follow-up e Recorrencia

**Objetivo:** entregar o trabalho com clareza, orientar proximos passos e converter projeto pontual em relacionamento recorrente.

**Entradas:** entrega aprovada, plano de acao, documentos finais e orientacoes.

**Saidas obrigatorias:**
- Entrega enviada.
- Reuniao de explicacao realizada ou agendada.
- Proximos passos definidos.
- Oferta de acompanhamento ou assinatura apresentada.

**IA de apoio:** Agente de Relacionamento e Recorrencia.

**Revisao humana:** reuniao de entrega, orientacao estrategica e oferta de continuidade.

**Templates usados:** e-mail de entrega, roteiro de reuniao final, plano de acompanhamento e follow-up pos-entrega.

**Metricas:** satisfacao, indicacoes, conversao em recorrencia e demandas adicionais.
```

- [ ] **Step 2: Verify workflow headings**

Run:

```powershell
Select-String -Path 'docs\operacao\esteira-ponta-a-ponta.md' -Pattern '^## [0-9]\.'
```

Expected: 10 matches, one for each operational stage.

- [ ] **Step 3: Commit workflow**

Run:

```powershell
git add docs\operacao\esteira-ponta-a-ponta.md
git commit -m "docs: add operational workflow"
```

Expected: commit succeeds.

---

### Task 3: Create Commercial Templates

**Files:**
- Create: `docs/templates/comercial/mensagem-inicial.md`
- Create: `docs/templates/comercial/roteiro-triagem.md`
- Create: `docs/templates/comercial/proposta-estrutura.md`

- [ ] **Step 1: Create initial message template**

Create `docs/templates/comercial/mensagem-inicial.md` with this content:

```markdown
# Mensagem Inicial

## Objetivo

Responder rapidamente ao lead com tom sofisticado, direto e orientado a negocio, abrindo caminho para a triagem.

## Template

Olá, [Nome]. Obrigado pelo contato.

Sou Luciano Bolonha, da LB Inteligência Jurídica. Atuamos com planejamento patrimonial, sucessório, tributário e empresarial para proteger patrimônio, reduzir riscos e organizar decisões importantes com segurança.

Para entender se conseguimos ajudar com precisão, vou te fazer algumas perguntas rápidas:

- Você busca proteção patrimonial, organização sucessória, economia tributária ou estruturação empresarial?
- O caso envolve pessoa física, empresa ou ambos?
- Existe alguma urgência específica?
- Qual é o principal risco ou preocupação hoje?

Com essas respostas, eu consigo indicar o melhor próximo passo.

## Regras de Uso

- Não prometer resultado garantido.
- Não emitir opinião jurídica completa antes do diagnóstico.
- Manter parágrafos curtos.
- Evitar juridiquês.
```

- [ ] **Step 2: Create triage script**

Create `docs/templates/comercial/roteiro-triagem.md` with this content:

```markdown
# Roteiro de Triagem

## Objetivo

Classificar o lead como qualificado, nutrir, recusar ou redirecionar.

## Perguntas

1. Qual é o principal objetivo: proteger patrimônio, organizar sucessão, reduzir carga tributária, estruturar sociedade ou resolver conflito?
2. O caso envolve pessoa física, empresa ou grupo familiar empresarial?
3. Há bens imóveis, participações societárias, investimentos ou atividade empresarial relevante?
4. Existe prazo, conflito familiar, autuação fiscal, disputa societária ou evento sucessório em andamento?
5. Qual resultado prático você espera alcançar?
6. Você já possui advogado, contador ou consultor acompanhando o tema?
7. Você busca um projeto pontual ou acompanhamento estratégico contínuo?

## Critérios de Qualificação

Lead qualificado quando houver ao menos uma das condições:

- Patrimônio ou empresa a proteger.
- Risco sucessório, tributário ou societário concreto.
- Interesse em planejamento preventivo.
- Capacidade de contratar solução estratégica.
- Clareza de dor ou abertura para diagnóstico.

Lead não qualificado quando houver:

- Pedido genérico sem disposição para diagnóstico.
- Busca exclusiva por consulta gratuita.
- Demanda fora das áreas centrais.
- Expectativa de promessa de resultado absoluto.

## Saídas

- Qualificado para diagnóstico.
- Nutrir com conteúdo.
- Recusar com elegância.
- Redirecionar para outro profissional.
```

- [ ] **Step 3: Create proposal structure**

Create `docs/templates/comercial/proposta-estrutura.md` with this content:

```markdown
# Estrutura de Proposta Comercial

## 1. Diagnóstico

Descrever a dor detectada em linguagem clara:

- Risco patrimonial, sucessório, tributário ou societário.
- Impacto financeiro ou familiar provável.
- Consequência prática de não agir.

## 2. Solução Estratégica

Explicar como a LB Inteligência Jurídica resolverá o problema:

- Produto ou projeto recomendado.
- Etapas de execução.
- Documentos e análises incluídos.
- Pontos de decisão do cliente.

## 3. Benefícios Quantificáveis

Traduzir a solução em benefícios:

- Redução de risco.
- Economia tributária potencial, quando mensurável.
- Prevenção de conflito.
- Organização sucessória.
- Separação entre risco operacional e patrimônio pessoal.

## 4. Escopo

Listar entregáveis incluídos e exclusões.

## 5. Prazos

Informar prazo estimado por etapa e dependências do cliente.

## 6. Honorários

Informar valor, forma de pagamento e condições.

## 7. Próximos Passos

1. Aprovação da proposta.
2. Assinatura do contrato.
3. Envio do checklist documental.
4. Reunião de alinhamento inicial.

## Regras Comerciais

- Não garantir economia ou blindagem absoluta.
- Não vender estrutura sem diagnóstico mínimo.
- Sempre conectar técnica jurídica a benefício prático.
```

- [ ] **Step 4: Verify commercial templates**

Run:

```powershell
Select-String -Path 'docs\templates\comercial\*.md' -Pattern '^# '
```

Expected: three matches, one per template.

- [ ] **Step 5: Commit commercial templates**

Run:

```powershell
git add docs\templates\comercial
git commit -m "docs: add commercial templates"
```

Expected: commit succeeds.

---

### Task 4: Create Onboarding Checklist

**Files:**
- Create: `docs/templates/operacao/checklist-onboarding.md`

- [ ] **Step 1: Create onboarding checklist**

Create `docs/templates/operacao/checklist-onboarding.md` with this content:

```markdown
# Checklist de Onboarding

## Objetivo

Garantir que o cliente entre na operação com escopo, documentos, responsáveis e próximos passos claros.

## Antes de Iniciar

- Proposta aprovada.
- Contrato de honorários assinado.
- Dados cadastrais recebidos.
- Responsável principal do cliente identificado.
- Canal oficial de comunicação definido.
- Pasta digital criada.

## Documentos Básicos Pessoa Física

- Documento de identificação.
- CPF.
- Comprovante de endereço.
- Certidão de casamento ou nascimento.
- Pacto antenupcial, se houver.
- Relação de bens.
- Matrículas de imóveis.
- Contratos sociais de empresas das quais participe.
- Declaração de imposto de renda mais recente.

## Documentos Básicos Pessoa Jurídica

- Contrato social ou estatuto.
- Alterações contratuais.
- Cartão CNPJ.
- Acordo de sócios ou acionistas, se houver.
- Balanços e balancetes recentes.
- Regime tributário atual.
- Relação de imóveis, participações e ativos relevantes.
- Contratos estratégicos.

## Mensagem de Envio

Olá, [Nome].

Para iniciarmos com precisão, segue o checklist documental do projeto. Esses documentos permitem mapear riscos, oportunidades e caminhos estratégicos com segurança.

Você pode enviar os arquivos por [canal definido]. Se algum item não existir ou não estiver disponível, basta sinalizar para registrarmos a pendência.

## Critério de Pronto para Análise

O projeto só avança para análise técnica quando:

- Os documentos essenciais foram recebidos.
- As pendências críticas estão registradas.
- O escopo contratado está confirmado.
- O advogado responsável autorizou o avanço.
```

- [ ] **Step 2: Verify checklist sections**

Run:

```powershell
Select-String -Path 'docs\templates\operacao\checklist-onboarding.md' -Pattern '^## '
```

Expected: at least six section headings.

- [ ] **Step 3: Commit onboarding checklist**

Run:

```powershell
git add docs\templates\operacao\checklist-onboarding.md
git commit -m "docs: add onboarding checklist"
```

Expected: commit succeeds.

---

### Task 5: Create First AI Agent Definitions

**Files:**
- Create: `docs/agentes/agente-triagem-comercial.md`
- Create: `docs/agentes/agente-diagnostico-estrategico.md`
- Create: `docs/agentes/agente-documental.md`

- [ ] **Step 1: Create commercial triage agent**

Create `docs/agentes/agente-triagem-comercial.md` with this content:

```markdown
# Agente de Triagem Comercial

## Missao

Classificar leads com rapidez, clareza e foco comercial, sem emitir parecer jurídico.

## Entradas

- Mensagem inicial do lead.
- Respostas ao roteiro de triagem.
- Origem do contato.
- Perfil pessoa física, pessoa jurídica ou misto.
- Urgência declarada.

## Saidas

- Classificacao: qualificado, nutrir, recusar ou redirecionar.
- Justificativa objetiva.
- Proximo passo recomendado.
- Mensagem sugerida ao cliente.

## Prompt Base

Você é o Agente de Triagem Comercial da LB Inteligência Jurídica. Sua função é analisar as informações iniciais do lead e classificar a oportunidade sem emitir parecer jurídico. Use linguagem clara, moderna e direta. Foque na dor do cliente, no potencial estratégico e na aderência às áreas de planejamento patrimonial, sucessório, tributário e empresarial.

Ao responder, entregue:

1. Classificação do lead.
2. Justificativa.
3. Riscos de atendimento, se houver.
4. Próximo passo recomendado.
5. Mensagem curta sugerida ao cliente.

## Limites

- Não prometer resultado.
- Não calcular economia tributária sem dados.
- Não orientar estrutura jurídica definitiva.
- Encaminhar casos sensíveis para revisão humana.
```

- [ ] **Step 2: Create strategic diagnosis agent**

Create `docs/agentes/agente-diagnostico-estrategico.md` with this content:

```markdown
# Agente de Diagnostico Estrategico

## Missao

Organizar as informações do cliente e produzir um diagnóstico preliminar de riscos, oportunidades e caminhos possíveis.

## Entradas

- Resumo da triagem.
- Respostas ao formulário diagnóstico.
- Informações patrimoniais, familiares, societárias e tributárias.
- Documentos disponíveis.

## Saidas

- Resumo executivo da dor.
- Riscos preliminares.
- Oportunidades estratégicas.
- Produto recomendado.
- Informações faltantes.

## Prompt Base

Você é o Agente de Diagnóstico Estratégico da LB Inteligência Jurídica. Analise as informações fornecidas e organize um diagnóstico preliminar. Traduza conceitos jurídicos em impactos práticos: segurança patrimonial, prevenção de conflitos, redução legítima de impostos, governança e continuidade dos bens ou da empresa.

Ao responder, entregue:

1. Resumo executivo.
2. Principais riscos.
3. Oportunidades.
4. Produto ou caminho recomendado.
5. Informações pendentes.
6. Pontos que exigem revisão humana.

## Limites

- Não apresentar decisão jurídica final.
- Não afirmar economia certa.
- Não sugerir estrutura definitiva sem documentos.
- Sempre destacar premissas e lacunas.
```

- [ ] **Step 3: Create document agent**

Create `docs/agentes/agente-documental.md` with this content:

```markdown
# Agente Documental

## Missao

Classificar documentos, identificar pendências e preparar a base documental para análise técnica.

## Entradas

- Lista de documentos recebidos.
- Escopo contratado.
- Tipo de cliente: pessoa física, pessoa jurídica ou misto.
- Produto recomendado.

## Saidas

- Índice documental.
- Lista de documentos recebidos.
- Lista de pendências.
- Alertas de inconsistência.
- Resumo documental para o advogado.

## Prompt Base

Você é o Agente Documental da LB Inteligência Jurídica. Sua função é organizar documentos e apontar pendências. Não emita parecer jurídico. Trabalhe como apoio operacional para que o advogado tenha clareza sobre o material disponível antes da análise.

Ao responder, entregue:

1. Documentos recebidos por categoria.
2. Documentos faltantes.
3. Inconsistências ou dúvidas.
4. Resumo objetivo para análise técnica.
5. Recomendação de bloquear ou liberar a próxima etapa.

## Limites

- Não interpretar juridicamente cláusulas complexas.
- Não concluir validade de documentos.
- Não dispensar revisão humana.
- Bloquear avanço quando documento essencial estiver ausente.
```

- [ ] **Step 4: Verify agent files**

Run:

```powershell
Select-String -Path 'docs\agentes\*.md' -Pattern '^## Missao'
```

Expected: three matches.

- [ ] **Step 5: Commit agent definitions**

Run:

```powershell
git add docs\agentes
git commit -m "docs: add first ai agent definitions"
```

Expected: commit succeeds.

---

### Task 6: Create Governance and Metrics Assets

**Files:**
- Create: `docs/governanca/checklist-qualidade.md`
- Create: `docs/metricas/dashboard-mvp.md`

- [ ] **Step 1: Create quality checklist**

Create `docs/governanca/checklist-qualidade.md` with this content:

```markdown
# Checklist de Qualidade

## Objetivo

Impedir que qualquer entrega jurídica relevante seja enviada ao cliente sem revisão técnica, clareza e aderência ao escopo.

## Checklist Obrigatório

- O escopo contratado foi conferido.
- Os documentos analisados estão identificados.
- As premissas foram registradas.
- As limitações da análise foram registradas.
- Os riscos relevantes foram apontados.
- A linguagem está clara e sem juridiquês desnecessário.
- A entrega não promete resultado absoluto.
- A estratégia foi aprovada por advogado.
- As próximas ações do cliente estão claras.
- O arquivo final foi salvo na pasta correta.

## Bloqueios

A entrega deve ser bloqueada se:

- Documento essencial estiver ausente.
- Houver conflito entre proposta e entrega.
- A IA tiver produzido conclusão sem base documental.
- A economia ou proteção estiver apresentada como garantia absoluta.
- O advogado responsável não tiver revisado.

## Registro de Revisão

Registrar:

- Nome do revisor.
- Data da revisão.
- Ajustes solicitados.
- Status: aprovado, aprovado com ajustes ou bloqueado.
```

- [ ] **Step 2: Create MVP dashboard dictionary**

Create `docs/metricas/dashboard-mvp.md` with this content:

```markdown
# Dashboard MVP

## Objetivo

Definir as primeiras métricas para acompanhar velocidade, conversão, qualidade e recorrência.

## Comercial

| Métrica | Definição | Frequência |
| --- | --- | --- |
| Leads recebidos | Total de novos contatos registrados | Semanal |
| Tempo de primeira resposta | Tempo entre contato e primeira resposta | Semanal |
| Taxa de qualificação | Leads qualificados / leads recebidos | Semanal |
| Taxa de proposta | Propostas enviadas / leads qualificados | Mensal |
| Taxa de aceite | Propostas aceitas / propostas enviadas | Mensal |

## Operação

| Métrica | Definição | Frequência |
| --- | --- | --- |
| Tempo de onboarding | Aceite até checklist enviado | Semanal |
| Pasta completa | Clientes com documentos essenciais recebidos | Semanal |
| Tempo de análise | Pasta completa até estratégia aprovada | Mensal |
| Tempo de produção | Estratégia aprovada até entrega pronta | Mensal |

## Qualidade

| Métrica | Definição | Frequência |
| --- | --- | --- |
| Retrabalho | Entregas com ajustes relevantes | Mensal |
| Bloqueios de entrega | Entregas impedidas por risco ou pendência | Mensal |
| Erros detectados | Problemas encontrados antes do envio | Mensal |

## Recorrência

| Métrica | Definição | Frequência |
| --- | --- | --- |
| Conversão em acompanhamento | Projetos que viraram relação recorrente | Mensal |
| Indicações | Novos leads vindos de clientes | Mensal |
| Demandas adicionais | Novos assuntos após entrega | Mensal |
```

- [ ] **Step 3: Verify governance and metrics files**

Run:

```powershell
Select-String -Path 'docs\governanca\checklist-qualidade.md','docs\metricas\dashboard-mvp.md' -Pattern '^# '
```

Expected: two matches.

- [ ] **Step 4: Commit governance and metrics**

Run:

```powershell
git add docs\governanca docs\metricas
git commit -m "docs: add governance and metrics assets"
```

Expected: commit succeeds.

---

### Task 7: Create Pilot Client Journey Simulations

**Files:**
- Create: `docs/operacao/fluxo-piloto-pessoa-fisica.md`
- Create: `docs/operacao/fluxo-piloto-pessoa-juridica.md`

- [ ] **Step 1: Create person-focused pilot flow**

Create `docs/operacao/fluxo-piloto-pessoa-fisica.md` with this content:

```markdown
# Fluxo Piloto Pessoa Física

## Cenário

Cliente com imóveis, família constituída e preocupação com inventário, conflitos familiares e proteção patrimonial.

## Jornada

1. Lead chega por indicação.
2. Mensagem inicial coleta objetivo e urgência.
3. Triagem identifica patrimônio e preocupação sucessória.
4. Diagnóstico aprofunda bens, família, regime de casamento, herdeiros e objetivos.
5. Proposta recomenda planejamento patrimonial e sucessório.
6. Onboarding coleta documentos pessoais, imóveis, empresas e imposto de renda.
7. Análise técnica compara caminhos como holding, doação com reserva de usufruto, testamento e acordo familiar.
8. Produção gera relatório estratégico, plano de ação e minutas necessárias.
9. Revisão humana valida premissas, riscos, linguagem e escopo.
10. Entrega explica benefícios, riscos mitigados e próximos passos.

## Resultado Esperado

Cliente entende como reduzir risco de inventário judicial, organizar sucessão em vida e proteger a família com estrutura clara.
```

- [ ] **Step 2: Create company-focused pilot flow**

Create `docs/operacao/fluxo-piloto-pessoa-juridica.md` with this content:

```markdown
# Fluxo Piloto Pessoa Jurídica

## Cenário

Empresário ou sócio de empresa com preocupação tributária, risco operacional, conflitos societários e proteção do patrimônio pessoal.

## Jornada

1. Lead chega por conteúdo ou indicação.
2. Mensagem inicial identifica empresa, atividade e dor principal.
3. Triagem verifica porte, regime tributário, sócios e urgência.
4. Diagnóstico aprofunda estrutura societária, contratos, passivos, tributação e patrimônio dos sócios.
5. Proposta recomenda planejamento empresarial, societário e tributário.
6. Onboarding coleta contrato social, alterações, balanços, regime tributário e documentos patrimoniais relevantes.
7. Análise técnica identifica riscos societários, oportunidades de elisão fiscal e separação entre risco operacional e patrimônio pessoal.
8. Produção gera relatório estratégico, matriz de riscos, recomendações contratuais e plano de ação.
9. Revisão humana valida aderência legal, limites da economia tributária e linguagem comercial.
10. Entrega orienta próximos passos e oferece acompanhamento recorrente.

## Resultado Esperado

Cliente entende como reduzir riscos operacionais, melhorar governança, prevenir conflito entre sócios e avaliar economia tributária legítima.
```

- [ ] **Step 3: Verify pilot flows**

Run:

```powershell
Select-String -Path 'docs\operacao\fluxo-piloto-*.md' -Pattern '^## Jornada'
```

Expected: two matches.

- [ ] **Step 4: Commit pilot flows**

Run:

```powershell
git add docs\operacao\fluxo-piloto-pessoa-fisica.md docs\operacao\fluxo-piloto-pessoa-juridica.md
git commit -m "docs: add pilot client journeys"
```

Expected: commit succeeds.

---

### Task 8: Link MVP Assets from Strategic Docs

**Files:**
- Modify: `docs/01-blueprint-estrategico.md`
- Modify: `docs/03-operacao-e-processos.md`
- Modify: `docs/04-agentes-de-ia.md`
- Modify: `docs/05-documentos-e-templates.md`
- Modify: `docs/07-governanca-e-qualidade.md`
- Modify: `docs/decisoes.md`

- [ ] **Step 1: Update `docs/01-blueprint-estrategico.md`**

Append this section:

```markdown

## Artefatos MVP

- [Esteira ponta a ponta](operacao/esteira-ponta-a-ponta.md)
- [Fluxo piloto pessoa física](operacao/fluxo-piloto-pessoa-fisica.md)
- [Fluxo piloto pessoa jurídica](operacao/fluxo-piloto-pessoa-juridica.md)
- [Dashboard MVP](metricas/dashboard-mvp.md)
```

- [ ] **Step 2: Update `docs/03-operacao-e-processos.md`**

Append this section:

```markdown

## Detalhamento Operacional

- [Esteira ponta a ponta](operacao/esteira-ponta-a-ponta.md)
- [Fluxo piloto pessoa física](operacao/fluxo-piloto-pessoa-fisica.md)
- [Fluxo piloto pessoa jurídica](operacao/fluxo-piloto-pessoa-juridica.md)
- [Checklist de onboarding](templates/operacao/checklist-onboarding.md)
```

- [ ] **Step 3: Update `docs/04-agentes-de-ia.md`**

Append this section:

```markdown

## Agentes MVP

- [Agente de Triagem Comercial](agentes/agente-triagem-comercial.md)
- [Agente de Diagnóstico Estratégico](agentes/agente-diagnostico-estrategico.md)
- [Agente Documental](agentes/agente-documental.md)
```

- [ ] **Step 4: Update `docs/05-documentos-e-templates.md`**

Append this section:

```markdown

## Templates MVP

- [Mensagem inicial](templates/comercial/mensagem-inicial.md)
- [Roteiro de triagem](templates/comercial/roteiro-triagem.md)
- [Estrutura de proposta](templates/comercial/proposta-estrutura.md)
- [Checklist de onboarding](templates/operacao/checklist-onboarding.md)
```

- [ ] **Step 5: Update `docs/07-governanca-e-qualidade.md`**

Append this section:

```markdown

## Controles MVP

- [Checklist de qualidade](governanca/checklist-qualidade.md)
- [Dashboard MVP](metricas/dashboard-mvp.md)
```

- [ ] **Step 6: Update `docs/decisoes.md`**

Append this decision:

```markdown
- O primeiro ciclo de implementacao sera um MVP operacional documental, sem software customizado e sem automacoes reais.
```

- [ ] **Step 7: Verify links were added**

Run:

```powershell
Select-String -Path 'docs\01-blueprint-estrategico.md','docs\03-operacao-e-processos.md','docs\04-agentes-de-ia.md','docs\05-documentos-e-templates.md','docs\07-governanca-e-qualidade.md' -Pattern 'MVP|Esteira ponta a ponta|Agentes MVP|Templates MVP|Controles MVP'
```

Expected: at least five matches.

- [ ] **Step 8: Commit strategic links**

Run:

```powershell
git add docs\01-blueprint-estrategico.md docs\03-operacao-e-processos.md docs\04-agentes-de-ia.md docs\05-documentos-e-templates.md docs\07-governanca-e-qualidade.md docs\decisoes.md
git commit -m "docs: link mvp assets from strategic docs"
```

Expected: commit succeeds.

---

### Task 9: Final Validation and Push

**Files:**
- Verify all files created in Tasks 2 through 8.

- [ ] **Step 1: Verify required files exist**

Run:

```powershell
$files = @(
  'docs\operacao\esteira-ponta-a-ponta.md',
  'docs\operacao\fluxo-piloto-pessoa-fisica.md',
  'docs\operacao\fluxo-piloto-pessoa-juridica.md',
  'docs\templates\comercial\mensagem-inicial.md',
  'docs\templates\comercial\roteiro-triagem.md',
  'docs\templates\comercial\proposta-estrutura.md',
  'docs\templates\operacao\checklist-onboarding.md',
  'docs\agentes\agente-triagem-comercial.md',
  'docs\agentes\agente-diagnostico-estrategico.md',
  'docs\agentes\agente-documental.md',
  'docs\governanca\checklist-qualidade.md',
  'docs\metricas\dashboard-mvp.md'
)
$files | ForEach-Object { "$_ = $(Test-Path $_)" }
```

Expected: every line ends with `True`.

- [ ] **Step 2: Scan for incomplete-marker language**

Run:

```powershell
rg -n "T[B]D|TO[D]O|FI[X]ME|placeh[o]lder|preench[e]r dep[o]is|defin[i]r dep[o]is" docs
```

Expected: no output and exit code `1`.

- [ ] **Step 3: Verify repository status**

Run:

```powershell
git status --short
```

Expected: no output.

- [ ] **Step 4: Push to GitHub**

Run:

```powershell
git push
```

Expected: push succeeds to `origin/master`.
```
