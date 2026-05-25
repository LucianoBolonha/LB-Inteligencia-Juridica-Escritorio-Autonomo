# Patrimonial 360 Prioridade 3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar os artefatos da Prioridade 3 do Planejamento Patrimonial 360: biblioteca de minutas, playbook recorrente e base ITCMD/ITBI.

**Architecture:** A mudanca e documental, com arquivos focados por responsabilidade. Os artefatos ficam ligados aos documentos centrais para serem encontrados pela esteira comercial, operacional, documental e de governanca.

**Tech Stack:** Markdown, Git, verificacao por busca textual e checagem de links internos.

---

### Task 1: Biblioteca de Minutas Societarias

**Files:**
- Create: `docs/templates/minutas/biblioteca-minutas-societarias-originais.md`

- [x] **Step 1: Criar matriz de minutas**

Criar arquivo com finalidade, quando usar, entradas, riscos, revisao obrigatoria e status de cada minuta. A matriz nao deve conter texto copiado de terceiros nem minuta completa pronta para cliente.

- [x] **Step 2: Conferir restricoes**

Buscar termos de promessa indevida e indicar revisao humana obrigatoria.

### Task 2: Playbook Recorrente

**Files:**
- Create: `docs/operacao/playbook-acompanhamento-patrimonial-recorrente.md`

- [x] **Step 1: Criar rotina semestral/anual**

Criar roteiro de acompanhamento recorrente com gatilhos, revisao familiar, patrimonial, societaria, tributaria, documental e comercial.

- [x] **Step 2: Separar entrega juridica de oportunidade comercial**

Deixar claro o que e revisao contratada, o que e nova proposta e o que exige validacao externa.

### Task 3: Base ITCMD/ITBI

**Files:**
- Create: `docs/referencias/base-conhecimento-itcmd-itbi.md`

- [x] **Step 1: Criar estrutura parametrizavel**

Criar campos para UF, municipio, base de calculo, aliquota, fonte, data de conferencia, responsavel e nivel de confianca.

- [x] **Step 2: Evitar dados legais desatualizados**

Nao preencher aliquotas atuais sem pesquisa especifica. Registrar metodologia de atualizacao e validacao humana.

### Task 4: Linkagem e Verificacao

**Files:**
- Modify: `docs/01-blueprint-estrategico.md`
- Modify: `docs/02-produtos-e-ofertas.md`
- Modify: `docs/03-operacao-e-processos.md`
- Modify: `docs/05-documentos-e-templates.md`
- Modify: `docs/06-stack-e-automacoes.md`
- Modify: `docs/07-governanca-e-qualidade.md`
- Modify: `docs/referencias/holding-360-matriz-de-incorporacao.md`

- [x] **Step 1: Adicionar links nos documentos centrais**

Inserir os artefatos da Prioridade 3 nas secoes de produto, operacao, templates, automacoes, governanca e matriz de referencia.

- [x] **Step 2: Rodar verificacoes**

Executar checagem de links internos, busca por marcadores incompletos, busca por promessas indevidas, `git diff --check`, `git status` e publicar no PR.
