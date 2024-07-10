window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.parallax');
  let scrollPosition = window.pageYOffset;

  // Verifica se a largura da janela é maior que 768px e se não é um dispositivo móvel
  if (window.innerWidth > 768 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  }
});
