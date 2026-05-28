# Simulador de Comparacao de Regimes Tributarios

## Objetivo

Definir a estrutura do simulador proprio da LB para comparar cenarios tributarios empresariais, com foco em Simples Nacional, Lucro Presumido, Lucro Real e impactos da transicao IBS/CBS quando aplicavel.

Este documento ainda nao e uma planilha automatizada. Ele especifica campos, premissas, formulas conceituais, alertas e saidas esperadas para a futura ferramenta LB.

## Principio de Uso

O simulador deve apoiar decisao empresarial, nao prometer economia. Toda conclusao depende de documentos, regime, atividade real, CNAE, margem, folha, setor, localidade, contador e legislacao vigente.

## Entradas

### Empresa

- razao social;
- CNPJ;
- setor;
- CNAE principal;
- atividades efetivamente exercidas;
- UF e municipio principal;
- quantidade de unidades;
- regime atual;
- contador responsavel;
- periodo analisado.

### Receita e Operacao

- receita bruta mensal;
- receita bruta anual;
- receita por produto, servico ou linha de negocio;
- percentual B2B e B2C;
- vendas interestaduais;
- exportacoes;
- devolucoes e cancelamentos;
- sazonalidade.

### Custos, Despesas e Folha

- custo de mercadorias ou servicos;
- despesas operacionais;
- folha de pagamento;
- pro-labore;
- beneficios;
- encargos;
- margem bruta;
- margem liquida estimada.

### Tributos e Creditos

- tributos pagos por regime atual;
- PIS/COFINS;
- IRPJ/CSLL;
- ISS;
- ICMS;
- IPI quando aplicavel;
- INSS patronal e terceiros;
- creditos aproveitados;
- creditos nao aproveitados;
- debitos, parcelamentos ou compensacoes.

### Reforma Tributaria

- impacto estimado de IBS/CBS;
- possibilidade de creditos;
- risco de split payment;
- contratos de longo prazo;
- necessidade de repasse tributario;
- maturidade do ERP e emissor fiscal.

## Cenarios Comparados

| Cenario | Quando analisar |
| --- | --- |
| Manter regime atual | Sempre, como linha de base |
| Simples Nacional | Empresas elegiveis ou em duvida sobre permanencia |
| Lucro Presumido | Empresas com margem efetiva superior a presuncao ou operacao simples |
| Lucro Real | Empresas com margens menores, creditos relevantes ou estrutura complexa |
| Cenario Reforma | Quando IBS/CBS, creditos, split payment ou precificacao forem relevantes |
| Cenario Hibrido | Quando parte da operacao exigir segregacao ou reestruturacao |

## Formulas Conceituais

### Carga Efetiva

`carga_efetiva = tributos_totais / receita_bruta`

### Margem Liquida Apos Tributos

`margem_liquida_apos_tributos = receita_bruta - custos - despesas - folha - tributos`

### Diferenca Entre Cenarios

`diferenca_financeira = custo_tributario_cenario_atual - custo_tributario_cenario_alternativo`

### Impacto Recorrente

`impacto_anual_estimado = diferenca_mensal_media * 12`

### Custo de Mudanca

`custo_mudanca = honorarios + custo_contabil + ajustes_sistemas + custo_operacional + risco_de_transicao`

### Atratividade

`atratividade = beneficio_financeiro_potencial + reducao_de_risco + ganho_de_previsibilidade - custo_mudanca - complexidade`

No MVP, a atratividade deve ser apresentada em faixas ou semaforo, evitando falsa precisao.

## Saidas Esperadas

- carga estimada por regime;
- diferenca mensal e anual entre cenarios;
- custo de mudanca;
- riscos por regime;
- impacto da reforma tributaria;
- premissas usadas;
- documentos que sustentam os numeros;
- alertas de dados ausentes;
- recomendacao preliminar: manter, aprofundar, migrar, reestruturar ou bloquear.

## Modelo de Resumo Executivo

| Cenario | Carga estimada | Complexidade | Risco | Observacao |
| --- | --- | --- | --- | --- |
| Atual | A preencher | A preencher | A preencher | Linha de base |
| Simples Nacional | A preencher | A preencher | A preencher | Depende de elegibilidade e anexos |
| Lucro Presumido | A preencher | A preencher | A preencher | Depende de margem e atividade |
| Lucro Real | A preencher | A preencher | A preencher | Depende de contabilidade e creditos |
| Reforma IBS/CBS | A preencher | A preencher | A preencher | Depende de transicao, creditos e caixa |

## Alertas Automaticos Desejados

- regime atual ausente;
- CNAE ou atividade real inconsistente;
- receita anual perto de limite relevante;
- margem liquida ausente;
- folha de pagamento ausente;
- contador nao validou dados;
- documentos fiscais incompletos;
- simulacao de reforma sem dados de fornecedores ou clientes;
- estimativa sem fonte de aliquota;
- diferenca financeira pequena diante do custo de mudanca.

## Ressalvas Obrigatorias

- Simulacoes sao estimativas.
- Parametros legais devem ser atualizados antes de uso real.
- A alternativa de menor carga estimada nao e necessariamente a mais segura.
- Mudanca de regime pode gerar custo operacional, contabil e fiscal.
- A decisao final exige revisao juridica e validacao contabil.
- Nenhuma saida deve prometer economia tributaria garantida.
