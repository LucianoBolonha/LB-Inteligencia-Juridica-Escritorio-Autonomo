const stages = [
  {
    title: "Lead e triagem",
    status: "Qualificado",
    objective: "Transformar contato inicial em oportunidade clara",
    description:
      "O contador parceiro indicou uma empresa familiar com dois socios 50/50, contrato social antigo, retiradas informais e receio de paralisia em eventos de saida ou sucessao.",
    actions: [
      "Registrar origem do lead e decisores envolvidos.",
      "Aplicar roteiro comercial consultivo empresarial/societario.",
      "Classificar como qualificado para diagnostico pago."
    ],
    artifacts: [
      "Roteiro comercial consultivo",
      "Agente Comercial Empresarial e Societario",
      "Pre-diagnostico empresarial/societario"
    ]
  },
  {
    title: "Diagnostico",
    status: "Aprovado com ajustes",
    objective: "Mapear riscos e lacunas antes da proposta",
    description:
      "A analise preliminar indica risco alto: contrato social generico, ausencia de acordo de socios, governanca reativa, confusao patrimonial e sucessao indefinida.",
    actions: [
      "Aplicar matriz de risco e governanca societaria.",
      "Gerar relatorio executivo com premissas e pendencias.",
      "Submeter pontos sensiveis a revisao humana."
    ],
    artifacts: [
      "Relatorio executivo empresarial/societario",
      "Matriz de risco e governanca",
      "Agente de Diagnostico Empresarial e Societario"
    ]
  },
  {
    title: "Proposta",
    status: "Pronta para revisao",
    objective: "Converter diagnostico em proposta comercial delimitada",
    description:
      "A proposta deve focar em regras entre socios, continuidade do negocio, separacao patrimonial, contratos criticos e governanca, sem prometer blindagem ou ausencia de conflito.",
    actions: [
      "Selecionar entregaveis aderentes ao caso.",
      "Registrar limites e exclusoes.",
      "Validar honorarios e prazos com Luciano."
    ],
    artifacts: [
      "Proposta Planejamento Empresarial e Societario 360",
      "Agente de Propostas",
      "Agente de Revisao de Qualidade"
    ]
  },
  {
    title: "Contrato e onboarding",
    status: "Aguardando assinatura",
    objective: "Iniciar projeto sem escopo solto",
    description:
      "A proposta aceita dispara contrato, pasta digital, responsaveis, checklist documental e reuniao de abertura. A analise so avanca com pendencias criticas registradas.",
    actions: [
      "Enviar contrato de honorarios.",
      "Criar pasta digital e canal oficial.",
      "Enviar onboarding e checklist documental."
    ],
    artifacts: [
      "Contrato de honorarios empresarial/societario",
      "Onboarding empresarial/societario",
      "Checklist documental empresarial/societario"
    ]
  },
  {
    title: "Entrega",
    status: "Em preparacao",
    objective: "Comunicar diagnostico e proximos passos",
    description:
      "A entrega deve explicar riscos, prioridades, dependencias e limites. A reuniao final confirma o plano de acao e define se a implementacao sera contratada.",
    actions: [
      "Aplicar revisao de qualidade.",
      "Enviar mensagem de entrega do diagnostico.",
      "Realizar reuniao de entrega e registrar decisoes."
    ],
    artifacts: [
      "Mensagem de entrega do diagnostico",
      "Plano de acao empresarial/societario",
      "Agente de Revisao de Qualidade"
    ]
  }
];

const risks = [
  ["Societario", "Contrato social antigo e sociedade 50/50 sem regra de desempate.", "alta"],
  ["Governanca", "Decisoes importantes pouco registradas e matriz de poderes indefinida.", "alta"],
  ["Patrimonial", "Uso de bens pessoais pela empresa e garantias sem controle consolidado.", "alta"],
  ["Contratos", "Modelos comerciais antigos e pouco padronizados para o porte atual.", "media"],
  ["Sucessao", "Socio-chave e familiares na operacao sem plano formal.", "alta"]
];

const quality = [
  "Escopo confirmado antes da proposta.",
  "Premissas e documentos analisados registrados.",
  "Sem promessa de economia, blindagem ou resultado.",
  "Dependencias contabeis e tributarias sinalizadas.",
  "Revisao humana obrigatoria antes do envio."
];

const timeline = [
  ["A1", "Confirmar quadro societario atual", "Aguardando documentos"],
  ["A3", "Levantar garantias pessoais vigentes", "Aguardando cliente"],
  ["M1", "Atualizar contrato social", "Planejado"],
  ["M2", "Criar acordo de socios", "Planejado"],
  ["B2", "Implantar revisao periodica de contratos", "Recorrencia"]
];

let activeStage = 0;

const stageList = document.querySelector("#stageList");
const prevStage = document.querySelector("#prevStage");
const nextStage = document.querySelector("#nextStage");

function renderStageButtons() {
  stageList.innerHTML = stages
    .map(
      (stage, index) => `
        <button class="stage-button ${index === activeStage ? "is-active" : ""}" type="button" data-stage="${index}">
          <span class="stage-number">${String(index + 1).padStart(2, "0")}</span>
          <span>${stage.title}</span>
        </button>
      `
    )
    .join("");
}

function renderStage() {
  const stage = stages[activeStage];
  document.querySelector("#stageKicker").textContent = `Etapa ${activeStage + 1} de ${stages.length}`;
  document.querySelector("#stageTitle").textContent = stage.title;
  document.querySelector("#stageStatus").textContent = stage.status;
  document.querySelector("#stageIndex").textContent = String(activeStage + 1).padStart(2, "0");
  document.querySelector("#stageObjective").textContent = stage.objective;
  document.querySelector("#stageDescription").textContent = stage.description;
  document.querySelector("#stageActions").innerHTML = stage.actions.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#stageArtifacts").innerHTML = stage.artifacts.map((item) => `<li>${item}</li>`).join("");
  renderStageButtons();
}

function renderStaticPanels() {
  document.querySelector("#riskList").innerHTML = risks
    .map(
      ([label, title, priority]) => `
        <div class="risk-row">
          <span class="risk-label">${label}</span>
          <strong class="risk-title">${title}</strong>
          <span class="priority ${priority}">${priority}</span>
        </div>
      `
    )
    .join("");

  document.querySelector("#qualityList").innerHTML = quality
    .map(
      (item) => `
        <div class="quality-row">
          <span class="check">OK</span>
          <strong>${item}</strong>
        </div>
      `
    )
    .join("");

  document.querySelector("#timeline").innerHTML = timeline
    .map(
      ([id, action, status]) => `
        <div class="timeline-row">
          <span class="timeline-id">${id}</span>
          <strong>${action}</strong>
          <span>${status}</span>
        </div>
      `
    )
    .join("");
}

stageList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-stage]");
  if (!button) return;
  activeStage = Number(button.dataset.stage);
  renderStage();
});

prevStage.addEventListener("click", () => {
  activeStage = Math.max(0, activeStage - 1);
  renderStage();
});

nextStage.addEventListener("click", () => {
  activeStage = Math.min(stages.length - 1, activeStage + 1);
  renderStage();
});

renderStaticPanels();
renderStage();
