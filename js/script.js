// Seleção de elementos do DOM
const btnBuscar = document.querySelector("#btn-buscar");
const btnLimpar = document.querySelector("#btn-limpar");
const inputCep = document.querySelector("#cep");

// Campos do formulário (Inputs de saída)
const campoRua = document.querySelector("#rua");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoUf = document.querySelector("#uf");

/**
 * Função assíncrona para buscar dados de endereço via API
 */
async function buscarEndereco() {
  // Sanitização: remove caracteres não numéricos
  const cep = inputCep.value.replace(/\D/g, "");

  // Validação básica de integridade
  if (cep.length !== 8) {
    alert("Por favor, digite um CEP válido.");
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // --- ESTADO DE LOADING ---
  // Melhora a UX desativando o botão e dando feedback visual
  btnBuscar.disabled = true;
  btnBuscar.innerText = "Buscando...";
  inputCep.classList.add("loading-input");

  try {
    // Realiza a chamada para a API ViaCEP
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado!");
      limparCampos();
    } else {
      // Mapeia o resultado da API para os campos do formulário (Data Binding)
      campoRua.value = dados.logradouro;
      campoBairro.value = dados.bairro;
      campoCidade.value = dados.localidade;
      campoUf.value = dados.uf;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro técnico ao consultar a API.");
  } finally {
    // --- FINALIZAÇÃO DO LOADING ---
    // O bloco finally garante o reset do botão independente do sucesso ou erro
    btnBuscar.disabled = false;
    btnBuscar.innerText = "Buscar";
    inputCep.classList.remove("loading-input");
  }
}

// Reseta a interface para o estado inicial
function limparCampos() {
  inputCep.value = "";
  campoRua.value = "";
  campoBairro.value = "";
  campoCidade.value = "";
  campoUf.value = "";
  inputCep.focus();
}

// Event Listeners
btnBuscar.addEventListener("click", buscarEndereco);
btnLimpar.addEventListener("click", limparCampos);

// Melhora a usabilidade permitindo busca via teclado
inputCep.addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscarEndereco();
});
