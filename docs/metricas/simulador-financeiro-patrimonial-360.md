# Simulador Financeiro Patrimonial 360

## Objetivo

Definir a estrutura do simulador financeiro proprio da LB para comparar alternativas de planejamento patrimonial e sucessorio.

Este documento ainda nao e uma planilha automatizada. Ele especifica os campos, calculos e cuidados que a futura planilha deve conter.

## Principio de Uso

O simulador deve apoiar decisao, nao substituir analise juridica, contabil ou fiscal. A saida ideal e um resumo executivo com cenarios, premissas, custos estimados, riscos nao financeiros e perguntas pendentes.

## Alternativas a Comparar

- Inventario judicial ou extrajudicial.
- Doacao direta de bens.
- Doacao de quotas com reserva de usufruto.
- Holding patrimonial ou familiar.
- Solucao hibrida.
- Manutencao da estrutura atual.

## Entradas do Cliente

### Familia

- estado civil;
- regime de bens;
- quantidade de herdeiros;
- existencia de herdeiros menores ou incapazes;
- existencia de familia recomposta;
- existencia de conflito familiar.
- objetivo principal: evitar inventario, organizar sucessao, reduzir risco de conflito, melhorar governanca, planejar venda, reduzir carga fiscal potencial ou proteger continuidade empresarial.

### Patrimonio

- descricao do bem;
- tipo: imovel urbano, imovel rural, participacao societaria, investimento ou outro;
- valor declarado;
- valor estimado de mercado;
- titularidade;
- renda gerada;
- existencia de gravame ou restricao;
- intencao de venda.
- custo de aquisicao quando disponivel;
- data aproximada de aquisicao;
- percentual de propriedade;
- uso do bem: residencia, locacao, rural, operacional ou investimento.

### Tributario

- UF relevante para ITCMD;
- municipio relevante para ITBI;
- aliquota estimada de ITCMD;
- criterio de base de calculo;
- risco de ITBI na integralizacao;
- ganho de capital potencial;
- necessidade de validacao contabil.
- possibilidade de atualizacao de bens quando pertinente;
- tratamento pretendido para integralizacao em pessoa juridica;
- incidencia potencial de imposto de renda na pessoa fisica ou juridica.

### Custos

- honorarios advocaticios;
- honorarios contabeis;
- custos cartorarios;
- custos de junta comercial;
- ITCMD estimado;
- ITBI estimado;
- custos de avaliacao;
- custo anual de manutencao da estrutura.
- custo de oportunidade de manter a estrutura atual sem planejamento;
- custo estimado de revisoes periodicas.

## Formulas Conceituais

As formulas abaixo servem como desenho da futura planilha. Os percentuais e bases devem ser parametrizaveis.

### Cenario Inventario

`custo_inventario_estimado = ITCMD_estimado + custas_cartorarias_ou_judiciais + honorarios + custos_de_avaliacao + custo_de_tempo_e_conflito`

### Cenario Doacao Direta

`custo_doacao_direta = ITCMD_estimado + cartorio + registros + honorarios + eventual_ganho_de_capital + custo_de_reservas_ou_clausulas`

### Cenario Holding

`custo_holding_inicial = constituicao_ou_alteracao + registros + honorarios + contabilidade_inicial + ITBI_potencial + ITCMD_potencial + ganho_de_capital_potencial`

`custo_holding_recorrente = contabilidade_anual + obrigacoes_acessorias + revisoes_juridicas + manutencao_societaria`

### Cenario Hibrido

`custo_hibrido = custo_dos_instrumentos_aplicaveis + validacoes_externas + custo_recorrente_da_parte_societaria`

### Indice de Atratividade

`atratividade = economia_potencial_estimada + reducao_de_risco_sucessorio + ganho_de_governanca - custo_inicial - custo_recorrente - complexidade_operacional`

Este indice deve ser qualitativo ou semaforico no MVP, evitando falsa precisao.

## Saidas Esperadas

O simulador deve gerar:

- custo estimado de inventario;
- custo estimado de doacao direta;
- custo estimado de holding;
- custo estimado de estrutura hibrida;
- custo anual de manutencao;
- comparativo percentual entre alternativas;
- riscos nao financeiros;
- observacoes e premissas.
- alertas de dados ausentes;
- recomendacao preliminar: aprofundar, simplificar, bloquear ou validar externamente.

## Modelo de Tabela Comparativa

| Alternativa | Custo inicial estimado | Custo recorrente | Complexidade | Risco familiar | Observacao |
| --- | --- | --- | --- | --- | --- |
| Inventario | R$ [valor] | Nao aplicavel | Media/Alta | Alto se houver conflito | Depende do momento do falecimento |
| Doacao direta | R$ [valor] | Baixo | Media | Medio | Exige cuidado com legitima e usufruto |
| Holding | R$ [valor] | Medio | Alta | Reduz se houver governanca | Exige contabilidade e gestao recorrente |
| Solucao hibrida | R$ [valor] | Variavel | Alta | Variavel | Pode combinar instrumentos |
| Manter estrutura atual | R$ 0 imediato | Variavel | Baixa agora | Pode aumentar no futuro | Nao elimina risco sucessorio |

## Validacoes Automaticas Desejadas

- alertar quando valor de mercado estiver ausente;
- alertar quando UF de ITCMD nao estiver definida;
- alertar quando municipio do imovel nao estiver definido;
- alertar quando houver herdeiro menor ou incapaz;
- alertar quando custo recorrente superar beneficio financeiro estimado;
- alertar quando houver expectativa de blindagem absoluta;
- alertar quando ganho de capital nao tiver dado suficiente para estimativa.

## Indicadores de Decisao

### Holding tende a ganhar forca quando:

- ha patrimonio imobiliario relevante;
- ha multiplos herdeiros;
- ha familia empresaria;
- ha renda de locacao;
- ha necessidade de governanca;
- ha risco de conflito sucessorio;
- ha desejo de continuidade patrimonial;
- o cliente aceita custo de manutencao e formalidades.

### Holding tende a perder forca quando:

- patrimonio e simples ou baixo;
- custo de manutencao supera beneficios;
- cliente quer solucao imediata e sem formalidade;
- ha documentos insuficientes;
- ha expectativa de blindagem absoluta;
- ha risco tributario local nao validado;
- ha conflito familiar que inviabiliza consenso minimo.

## Ressalvas Obrigatorias

- O simulador trabalha com estimativas.
- Valores dependem de documentos e legislacao aplicavel.
- ITCMD varia por estado.
- ITBI varia por municipio e interpretacao local.
- Ganho de capital deve ser validado com contador.
- A comparacao financeira nao substitui analise juridica.
- A alternativa mais barata nao e necessariamente a mais segura.
- Nao ha garantia de economia tributaria.
- Projecoes devem ser revisadas quando houver mudanca legislativa, patrimonial ou familiar.
- Resultado financeiro deve ser apresentado como faixa estimada, nao como valor definitivo, salvo quando houver documento oficial suficiente.

## Proxima Evolucao

Transformar esta especificacao em planilha LB com:

- abas de familia, patrimonio, custos, alternativas e resumo executivo;
- campos editaveis;
- formulas auditaveis;
- area de premissas;
- alerta visual para risco alto;
- resumo para uso em proposta.
