const btnBuscar = document.querySelector("#btn-buscar");
const btnLimpar = document.querySelector("#btn-limpar");
const inputCep = document.querySelector("#cep");

// Campos do formulário
const campoRua = document.querySelector("#rua");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const campoUf = document.querySelector("#uf");

async function buscarEndereco() {
  const cep = inputCep.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    alert("Por favor, digite um CEP válido.");
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  // --- INÍCIO DO LOADING ---
  btnBuscar.disabled = true;
  btnBuscar.innerText = "Buscando...";
  inputCep.classList.add("loading-input");
  // -------------------------

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado!");
      limparCampos();
    } else {
      campoRua.value = dados.logradouro;
      campoBairro.value = dados.bairro;
      campoCidade.value = dados.localidade;
      campoUf.value = dados.uf;
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro técnico ao consultar a API.");
  } finally {
    // --- FIM DO LOADING (Executa dando certo ou errado) ---
    btnBuscar.disabled = false;
    btnBuscar.innerText = "Buscar";
    inputCep.classList.remove("loading-input");
    // -------------------------------------------------------
  }
}

function limparCampos() {
  inputCep.value = "";
  campoRua.value = "";
  campoBairro.value = "";
  campoCidade.value = "";
  campoUf.value = "";
  inputCep.focus();
}

btnBuscar.addEventListener("click", buscarEndereco);
btnLimpar.addEventListener("click", limparCampos);

inputCep.addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscarEndereco();
});
