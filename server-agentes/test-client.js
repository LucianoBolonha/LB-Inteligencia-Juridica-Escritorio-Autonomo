const PORT = process.env.PORT || 5180;
const BASE_URL = `http://localhost:${PORT}`;

async function runTests() {
  console.log('🚀 Iniciando testes do servidor de agentes locais...');
  
  // Teste 1: Status do servidor
  try {
    const res = await fetch(`${BASE_URL}/api/status`);
    const status = await res.json();
    console.log('\n[Teste 1] GET /api/status - SUCESSO');
    console.log(JSON.stringify(status, null, 2));
  } catch (err) {
    console.error('\n[Teste 1] GET /api/status - FALHA');
    console.error(err.message);
    return;
  }

  // Teste 2: Agente Comercial (Modo Simulação / Mock)
  try {
    const leadPayload = {
      lead_dados: {
        nome: "Carlos Augusto",
        empresa: "Augusto Importadora Ltda",
        socios: "Carlos (60%) e Ricardo (40%)",
        conflito: "Ricardo quer sair da sociedade mas não concordam com a avaliação da quota de capital.",
        patrimonio_imovel: "Galpão industrial avaliado em R$ 2.500.000 (em nome da PJ)."
      }
    };

    console.log('\n[Teste 2] POST /api/agente/comercial...');
    const res = await fetch(`${BASE_URL}/api/agente/comercial`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadPayload)
    });
    const result = await res.json();
    console.log('[Teste 2] POST /api/agente/comercial - COMPLETO');
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('\n[Teste 2] POST /api/agente/comercial - FALHA');
    console.error(err.message);
  }
}

runTests();
