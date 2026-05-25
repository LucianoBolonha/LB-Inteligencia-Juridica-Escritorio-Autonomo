# Base de Conhecimento Tributaria

## Objetivo

Definir a estrutura da base interna da LB para armazenar informacoes tributarias usadas em diagnosticos, simulacoes, propostas, pareceres e projetos de adequacao empresarial.

Esta base deve ser auditavel. Nenhuma informacao legal, aliquota, entendimento ou tese deve ser usada sem fonte, data de conferencia e responsavel pela validacao.

## Escopo Inicial

- regimes tributarios;
- Simples Nacional;
- Lucro Presumido;
- Lucro Real;
- IBS/CBS e reforma tributaria;
- PIS/COFINS;
- IRPJ/CSLL;
- ISS;
- ICMS;
- IPI quando aplicavel;
- contribuicoes previdenciarias e terceiros;
- recuperacao de creditos;
- teses tributarias;
- obrigacoes acessorias;
- prazos e procedimentos.

## Estrutura de Registro

| Campo | Descricao |
| --- | --- |
| Tema | Assunto tributario principal |
| Subtema | Recorte especifico |
| Tipo | Lei, regulamento, jurisprudencia, orientacao, tese, aliquota, procedimento ou indice |
| Fonte | Link, norma, tribunal, portal oficial ou documento validado |
| Data da fonte | Data de publicacao ou vigencia |
| Data de conferencia | Data em que a LB verificou a informacao |
| Vigencia | Vigente, futura, revogada, transicao ou incerta |
| Nivel de confianca | Alto, medio ou baixo |
| Responsavel | Pessoa que validou |
| Aplicacao | Diagnostico, simulador, proposta, parecer, contencioso ou compliance |
| Ressalvas | Limites, divergencias ou necessidade de confirmacao |
| Proxima revisao | Data sugerida para nova conferencia |

## Nivel de Confianca

| Nivel | Criterio | Uso permitido |
| --- | --- | --- |
| Alto | Fonte oficial recente e regra clara | Pode apoiar diagnostico e simulacao com ressalva |
| Medio | Fonte oficial existe, mas ha duvida de interpretacao ou aplicacao | Exige revisao antes de proposta fechada |
| Baixo | Fonte indireta, antiga ou incompleta | Nao usar em entrega ao cliente |

## Vigencia

| Status | Significado |
| --- | --- |
| Vigente | Regra aplicavel no momento da analise |
| Futura | Regra publicada com aplicacao futura |
| Transicao | Regra coexistindo com modelo anterior |
| Revogada | Nao usar salvo contexto historico |
| Incerta | Depende de regulamentacao, decisao ou confirmacao |

## Modelo de Registro

```text
Tema:
Subtema:
Tipo:
Fonte:
Data da fonte:
Data de conferencia:
Vigencia:
Nivel de confianca:
Responsavel:
Aplicacao:
Ressalvas:
Proxima revisao:
```

## Uso por Produto

| Produto LB | Uso da base |
| --- | --- |
| Diagnostico tributario empresarial | Confirmar regime, riscos e oportunidades |
| Planejamento tributario empresarial | Parametrizar comparacao de regimes e recomendacoes |
| Adequacao a reforma tributaria | Separar regras vigentes, futuras e em transicao |
| Compliance recorrente | Monitorar obrigacoes, prazos e mudancas |
| Recuperacao de creditos | Validar tese, periodo, decadencia, documentos e jurisprudencia |
| Contencioso tributario | Apoiar fundamentos e estrategia, sempre com revisao humana |

## Fontes Preferenciais

- Constituicao Federal.
- Codigo Tributario Nacional.
- Leis complementares e ordinarias.
- Receita Federal.
- PGFN.
- SEFAZ estaduais.
- Prefeituras e secretarias municipais.
- Diario Oficial.
- STF.
- STJ.
- CARF.
- Tribunais regionais quando a estrategia exigir.
- Banco Central, IBGE ou fontes oficiais de indices quando aplicavel.

## Fluxo de Atualizacao

1. Identificar tema usado em entrega.
2. Buscar fonte oficial ou primaria.
3. Registrar fonte, data e vigencia.
4. Classificar nivel de confianca.
5. Registrar ressalvas.
6. Vincular ao produto ou simulador.
7. Submeter a revisao humana quando impactar cliente.
8. Definir proxima revisao.

## Bloqueios

Nao usar informacao quando:

- fonte nao foi identificada;
- vigencia esta incerta sem ressalva;
- aliquota ou regra pode ter mudado;
- jurisprudencia nao foi conferida;
- aplicacao depende de municipio, UF ou setor nao validado;
- impacto financeiro foi calculado sem premissa documentada.

## Rotina Recomendada

- revisar informacoes usadas em propostas antes do envio;
- revisar parametros de simuladores mensalmente ou antes de cada uso relevante;
- revisar temas de reforma tributaria sempre que houver nova norma;
- revisar teses tributarias antes de qualquer oferta ativa;
- manter historico de alteracoes relevantes.
