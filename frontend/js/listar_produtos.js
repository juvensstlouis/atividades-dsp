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
                    "<td>" + "R$ " + parseFloat(produtos[i].preco).toFixed(2) + "</td>" +
                  "</tr>";

      $("#corpo-tabela-produtos").append(linha);
    }
  }
});
