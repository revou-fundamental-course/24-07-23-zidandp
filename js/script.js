document.addEventListener('DOMContentLoaded', function() {
  // Ambil referensi ke elemen-elemen yang dibutuhkan
  const ctaButton = document.getElementById('cta-btn');
  const popupForm = document.getElementById('popup-form');
  const cancelButton = document.getElementById('cancel-btn');
  const submitButton = document.querySelector('.submit-btn');
  const successPopup = document.getElementById('success-popup');

  function showPopupForm() {
    popupForm.style.display = 'block';
  }

  function hidePopupForm() {
    popupForm.style.display = 'none';
  }

  // Tampilkan pop-up form saat tombol "Call to Action" diklik
  ctaButton.addEventListener('click', function() {
    showPopupForm();
  });

  // Sembunyikan pop-up form saat tombol "Cancel" diklik
  cancelButton.addEventListener('click', function() {
    hidePopupForm();
  });

  // Sembunyikan pop-up form saat form dikirimkan (submit)
  popupForm.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan aksi default saat submit (misalnya mengirimkan data ke server)
    hidePopupForm();
    showSuccessPopup();
  });

  // Tampilkan notifikasi "Submit berhasil"
  function showSuccessPopup() {
    successPopup.style.display = 'block';
    setTimeout(function() {
      successPopup.style.display = 'none';
    }, 2000); // Notifikasi akan disembunyikan setelah 2 detik (2000 milidetik)
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.querySelector('.slideshow');
  const slides = slideshow.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(slideIndex) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
  }

  function showPostInfo(slideIndex) {
    const postInfo = slides[slideIndex].querySelector('.post');
    postInfo.style.opacity = '1';
  }

  function hidePostInfo(slideIndex) {
    const postInfo = slides[slideIndex].querySelector('.post');
    postInfo.style.opacity = '0';
  }

  function showUserInfo(slideIndex) {
    const userInfo = slides[slideIndex].querySelector('.user-info');
    userInfo.style.display = 'flex';
  }

  function hideUserInfo(slideIndex) {
    const userInfo = slides[slideIndex].querySelector('.user-info');
    userInfo.style.display = 'none';
  }

  function updateSlide() {
    hideUserInfo(currentSlide);
    hidePostInfo(currentSlide);

    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    showUserInfo(currentSlide);
    showPostInfo(currentSlide);
  }

  // Panggil updateSlide() setiap 3 detik
  setInterval(updateSlide, 3000);

  // Tampilkan slide pertama dan informasi postingan saat halaman dimuat
  showSlide(currentSlide);
  showUserInfo(currentSlide);
  showPostInfo(currentSlide);
});
