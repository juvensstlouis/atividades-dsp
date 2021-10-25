$(function () {
  $.ajax({
    url: "http://localhost:5000/listar_produtos",
    method: "GET",
    dataType: "json",
    success: listar,
    error: function () {
      alert("Erro ao buscar os dados.");
    },
  });

  function listar(produtos) {
    for (var i in produtos) {

      var linha = "<tr>" +
                    "<td>" + produtos[i].id + "</td>" +
                    "<td>" + produtos[i].descricao + "</td>" +
                    "<td>" + formatarPreco(produtos[i].preco) + "</td>" +
                  "</tr>";

      $("#corpo-tabela-produtos").append(linha);
    }
  }

  function formatarPreco(preco) {
    var precoFormatado = parseFloat(preco).toFixed(2);
    precoFormatado = precoFormatado.replace('.', ',');
    precoFormatado = "R$ " + precoFormatado;
    return precoFormatado;
  }
});
