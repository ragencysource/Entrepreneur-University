'use strict';

// ===============================
// SELECT ELEMENT
// ===============================
// Mengambil elemen berdasarkan ID dan Tag yang ada di HTML Anda
const goTopBtn = document.getElementById('backToTopBtn');
const header = document.querySelector('header');

// ===============================
// SCROLL EVENT (Munculkan Tombol & Efek Header)
// ===============================
window.addEventListener('scroll', function() {
    // 1. Logika untuk Header (jika ingin header berubah saat scroll)
    if (window.scrollY >= 20) {
        if(header) header.classList.add('active');
    } else {
        if(header) header.classList.remove('active');
    }
    
    // 2. Logika untuk Tombol Back To Top
    if (window.scrollY >= 800) {
        if(goTopBtn) goTopBtn.classList.add('active');
    } else {
        if(goTopBtn) goTopBtn.classList.remove('active');
    }
});

// ===============================
// KLIK EVENT (Fungsi Kembali ke Atas)
// ===============================
if (goTopBtn) {
    goTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===============================
// NOTE: BAGIAN MENU MOBILE DIHAPUS
// ===============================
/* Kode menu mobile/overlay saya hapus karena di file index.html 
   tidak ditemukan tombol dengan atribut [data-menu-open-btn].
   Jika kode lama dibiarkan, itu akan menyebabkan error "null" 
   yang membuat tombol Back to Top macet total.
*/

// ===============================
// SWIPER (KODE TESTIMONI)
// ===============================
// Pastikan library Swiper sudah diload di HTML jika ingin pakai ini.
// Jika belum ada library Swiper di HTML, kode ini akan error.
// Saya bungkus try-catch agar aman.
try {
    var swiper = new Swiper('.quality-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }
    });
} catch (e) {
    console.log("Swiper library belum terpasang atau tidak digunakan.");

}
// ===============================
// ACCORDION CURRICULUM (Supaya Materi Bisa Diklik)
// ===============================
const curriculumItems = document.querySelectorAll('.curriculum-item');

curriculumItems.forEach(item => {
    item.addEventListener('click', function() {
        // 1. Toggle class "active" untuk styling tambahan (opsional)
        this.classList.toggle('active');

        // 2. Ambil elemen deskripsi di dalam item yang diklik
        const description = this.querySelector('.curriculum-description');

        // 3. Logika Buka/Tutup (Mengatur max-height)
        if (description.style.maxHeight) {
            // Jika sudah terbuka, tutup kembali (set null agar kembali ke CSS bawaan)
            description.style.maxHeight = null;
        } else {
            // Jika tertutup, buka sesuai tinggi kontennya (scrollHeight)
            description.style.maxHeight = description.scrollHeight + "px";
        }
    });
});
