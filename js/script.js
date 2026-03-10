// 1. Seleção dos elementos
const btnBuscar = document.querySelector("#btn-buscar");
const btnLimpar = document.querySelector("#btn-limpar");
const inputCep = document.querySelector("#cep");
const resultadoDiv = document.querySelector("#resultado");

// 2. Função para buscar o endereço
async function buscarEndereco() {
  const cep = inputCep.value.replace(/\D/g, "");

  if (cep.length !== 8) {
    alert("Digite um CEP válido com 8 números.");
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    resultadoDiv.style.display = "block";

    if (dados.erro) {
      resultadoDiv.innerHTML = `<p style="color: #f87171;">❌ CEP não encontrado.</p>`;
    } else {
      resultadoDiv.innerHTML = `
                <p><strong>📍 Rua:</strong> ${dados.logradouro}</p>
                <p><strong>🏘️ Bairro:</strong> ${dados.bairro}</p>
                <p><strong>🏙️ Cidade:</strong> ${dados.localidade} - ${dados.uf}</p>
            `;
    }
  } catch (error) {
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `<p style="color: #f87171;">⚠️ Erro ao conectar no servidor.</p>`;
  }
}

// 3. Função para LIMPAR os dados
function limparCampos() {
  inputCep.value = ""; // Limpa o texto digitado
  resultadoDiv.innerHTML = ""; // Apaga o texto do resultado
  resultadoDiv.style.display = "none"; // Esconde a div novamente
  inputCep.focus(); // Coloca o cursor de volta no campo
}

// 4. Eventos
btnBuscar.addEventListener("click", buscarEndereco);
btnLimpar.addEventListener("click", limparCampos);

inputCep.addEventListener("keypress", (e) => {
  if (e.key === "Enter") buscarEndereco();
});
