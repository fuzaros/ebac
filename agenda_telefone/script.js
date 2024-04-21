function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
  
    if (nome && telefone) {
      var tabela = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
      var novaLinha = tabela.insertRow(tabela.rows.length);

      var celulaNome = novaLinha.insertCell(0);
      var celulaTelefone = novaLinha.insertCell(1);

      celulaNome.innerHTML = nome;
      celulaTelefone.innerHTML = telefone;
  
      document.getElementById("nome").value = "";
      document.getElementById("telefone").value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  