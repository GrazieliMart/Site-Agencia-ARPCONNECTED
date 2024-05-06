$(document).ready(function() {
    var $img = $(".videointro img"); // Seleciona a imagem apenas uma vez

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var newWidth = 100 + scroll / 5 + "%"; // Calcula a nova largura da imagem
      $img.css("width", newWidth); // Define a nova largura da imagem
    });
  });