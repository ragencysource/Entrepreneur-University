// JavaScript for FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        // Tutup semua item lain
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = 0;
            }
        });

        // Buka/tutup item yang diklik
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});
// JavaScript untuk Accordion Materi Kuliah (Transisi Smooth)
const curriculumItems = document.querySelectorAll('.curriculum-item');

curriculumItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', () => {
        // Langsung tutup item LAIN yang mungkin sedang terbuka
        curriculumItems.forEach(otherItem => {
            if (otherItem !== clickedItem) {
                otherItem.classList.remove('active');
            }
        });

        // Buka atau tutup item yang baru saja di-klik
        clickedItem.classList.toggle('active');
    });
});
// === FUNGSI UNTUK TOMBOL BACK TO TOP ===

// Ambil elemen tombolnya
const backToTopBtn = document.getElementById("backToTopBtn");

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", () => {
    // Jika pengguna scroll lebih dari 300px ke bawah
    if (window.scrollY > 300) {
        // Tampilkan tombolnya dengan menambahkan class 'active'
        backToTopBtn.classList.add("active");
    } else {
        // Sembunyikan lagi tombolnya
        backToTopBtn.classList.remove("active");
    }
});

// Tambahkan event listener untuk mendeteksi klik
backToTopBtn.addEventListener("click", () => {
    // Scroll halaman kembali ke paling atas dengan animasi smooth
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
