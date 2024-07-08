

 document.addEventListener('mousemove', (e) => {
  const imageContainer = document.querySelector('.image-container');
  const image1 = document.querySelector('.image1');
  const rect = imageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  image1.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.1)`;
});

document.querySelector('.image1').addEventListener('mouseout', () => {
  document.querySelector('.image1').style.transform = 'rotateY(0) rotateX(0) scale(1)';
});



