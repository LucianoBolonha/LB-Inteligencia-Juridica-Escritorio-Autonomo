# Base de Conhecimento ITCMD e ITBI

## Objetivo

Definir a estrutura da base interna da LB para consulta e atualizacao de informacoes sobre ITCMD e ITBI em projetos de Planejamento Patrimonial e Sucessorio 360.

Este documento nao preenche aliquotas atuais. Regras tributarias estaduais e municipais mudam e devem ser conferidas em fonte oficial antes de qualquer uso com cliente.

## Principio de Atualizacao

- Usar fontes oficiais sempre que possivel.
- Registrar data de conferencia.
- Registrar responsavel pela validacao.
- Diferenciar lei, regulamento, entendimento administrativo, jurisprudencia e pratica local.
- Nao usar a base como unica fonte para parecer ou proposta.
- Revisar informacoes antes de simulacao financeira, proposta ou implementacao.

## Campos da Base ITCMD

| Campo | Descricao | Exemplo de preenchimento |
| --- | --- | --- |
| UF | Estado aplicavel | SP |
| Tributo | ITCMD | ITCMD |
| Fato analisado | Doacao, heranca, transmissao causa mortis, doacao de quotas | Doacao de quotas |
| Base de calculo | Criterio usado pela legislacao ou autoridade fiscal | Valor venal, valor de mercado ou outro criterio validado |
| Aliquota | Percentual aplicavel, quando confirmado | Preencher apos conferencia oficial |
| Progressividade | Indicar se ha faixas progressivas | Sim, nao ou nao confirmado |
| Isencoes relevantes | Hipoteses de isencao ou reducao | Preencher apos conferencia |
| Obrigacao acessoria | Declaracao, guia, sistema ou procedimento exigido | Preencher apos conferencia |
| Fonte oficial | Link ou referencia normativa | Portal da SEFAZ, lei estadual, decreto |
| Data de conferencia | Data em que a informacao foi verificada | 2026-05-25 |
| Responsavel | Pessoa que validou | Nome do revisor |
| Nivel de confianca | Alto, medio ou baixo | Alto se fonte oficial atualizada |
| Observacoes | Riscos, duvidas ou necessidade de consulta externa | Validar caso concreto |

## Campos da Base ITBI

| Campo | Descricao | Exemplo de preenchimento |
| --- | --- | --- |
| Municipio | Municipio do imovel | Sao Paulo |
| UF | Estado do municipio | SP |
| Tributo | ITBI | ITBI |
| Fato analisado | Compra e venda, integralizacao, reorganizacao, cessao | Integralizacao de imovel em holding |
| Base de calculo | Criterio municipal ou entendimento aplicavel | Valor venal de referencia, valor declarado ou outro criterio |
| Aliquota | Percentual aplicavel, quando confirmado | Preencher apos conferencia oficial |
| Tratamento de integralizacao | Como o municipio trata integralizacao de bens | Preencher apos conferencia |
| Excecoes ou imunidade | Hipoteses indicadas pela norma ou jurisprudencia | Preencher apos conferencia |
| Procedimento | Sistema, requerimento, guia ou documentos exigidos | Preencher apos conferencia |
| Fonte oficial | Link ou referencia normativa | Prefeitura, codigo tributario municipal, decreto |
| Data de conferencia | Data em que a informacao foi verificada | 2026-05-25 |
| Responsavel | Pessoa que validou | Nome do revisor |
| Nivel de confianca | Alto, medio ou baixo | Alto se fonte oficial atualizada |
| Observacoes | Riscos, divergencias locais ou necessidade de protocolo | Validar caso concreto |

## Nivel de Confianca

| Nivel | Criterio | Uso recomendado |
| --- | --- | --- |
| Alto | Fonte oficial conferida recentemente e regra clara | Pode apoiar simulacao preliminar com ressalva |
| Medio | Fonte oficial localizada, mas ha duvida de interpretacao ou pratica local | Exige validacao antes de proposta fechada |
| Baixo | Informacao antiga, indireta ou sem fonte oficial | Nao usar para estimativa ao cliente |

## Fluxo de Atualizacao

1. Identificar UF ou municipio relevante para o caso.
2. Buscar fonte oficial atualizada.
3. Registrar norma, link, data e responsavel.
4. Separar regra geral de excecoes.
5. Indicar incertezas interpretativas.
6. Validar com contador, fiscalista ou despachante quando necessario.
7. Atualizar simulador financeiro.
8. Registrar ressalvas na proposta ou relatorio.

## Uso na Esteira LB

| Etapa | Como usar a base |
| --- | --- |
| Triagem | Identificar estados e municipios relevantes |
| Diagnostico | Mapear riscos de ITCMD e ITBI |
| Proposta | Informar que custos tributarios dependem de validacao local |
| Simulador financeiro | Alimentar parametros conferidos |
| Implementacao | Confirmar procedimentos antes de protocolo ou ato externo |
| Recorrencia | Revisar mudancas legais periodicamente |

## Riscos a Controlar

- usar aliquota antiga;
- aplicar regra de um estado a outro;
- ignorar regra municipal especifica de ITBI;
- tratar imunidade ou nao incidencia como resultado garantido;
- estimar base de calculo sem documento suficiente;
- deixar de registrar fonte e data;
- apresentar simulacao como valor definitivo.

## Modelo de Registro

```text
UF/Municipio:
Tributo:
Fato analisado:
Base de calculo:
Aliquota confirmada:
Fonte oficial:
Data de conferencia:
Responsavel:
Nivel de confianca:
Pendencias:
Observacoes para o cliente:
```

## Rotina de Revisao

- revisar entradas usadas em propostas antes do envio;
- revisar entradas usadas em implementacao antes do protocolo;
- revisar estados e municipios recorrentes a cada trimestre;
- arquivar fonte consultada quando possivel;
- registrar mudanca relevante no playbook recorrente do cliente.
