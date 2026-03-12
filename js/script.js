const inputCep = document.getElementById("cep");

// Máscara Automática de CEP
inputCep.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\D/g, ""); // Remove letras
  if (valor.length > 5) {
    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
  }
  e.target.value = valor;
});

// Função de Busca via API
async function buscarCep() {
  const cep = inputCep.value.replace("-", "");

  if (cep.length !== 8) {
    alert("Digite um CEP válido com 8 números!");
    return;
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      alert("CEP não encontrado!");
      limparCampos();
    } else {
      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("localidade").value = data.localidade;
      document.getElementById("uf").value = data.uf;
    }
  } catch (error) {
    console.error("Erro na busca:", error);
    alert("Erro ao buscar o CEP. Tente novamente.");
  }
}

function limparCampos() {
  inputCep.value = "";
  document.getElementById("logradouro").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("uf").value = "";
}
