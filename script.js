document.querySelectorAll('.game-block').forEach(block => {
  block.addEventListener('mouseenter', () => {
    block.style.boxShadow = '0 0 20px rgba(0,255,255,0.6)';
    block.style.transform = 'scale(1.02)';
  });
  block.addEventListener('mouseleave', () => {
    block.style.boxShadow = '0 0 10px rgba(0,255,255,0.2)';
    block.style.transform = 'scale(1)';
  });
});