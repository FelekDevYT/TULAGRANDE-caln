document.addEventListener('DOMContentLoaded', function() {
  // Обработчики для кнопок просмотра
  document.querySelectorAll('.view-button').forEach(button => {
    button.addEventListener('click', function() {
      const imgSrc = this.previousElementSibling.src;
      const modal = document.getElementById('modalOverlay');
      const modalImg = modal.querySelector('.modal-image');
      modalImg.src = imgSrc;
      modal.style.display = 'flex';
    });
  });

  // Закрытие модального окна
  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if(e.target === this || e.target.classList.contains('close-btn')) {
      this.style.display = 'none';
    }
  });
});
