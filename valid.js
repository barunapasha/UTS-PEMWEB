document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let nama = document.getElementById('name');
    let email = document.getElementById('email');
    let feedback = document.getElementById('feedback');
    let pesanError = document.getElementById('message');
    
    pesanError.textContent = '';
    pesanError.style.color = '#dc2626'; 
    
    [nama, email, feedback].forEach(field => {
        field.classList.remove('valid', 'invalid');
    });
    
    let formValid = true;
    let errors = [];
    
    if(!nama.value.trim()) {
        errors.push('Nama tidak boleh kosong');
        nama.classList.add('invalid');
        formValid = false;
    } else if(nama.value.length < 3) {
        errors.push('Nama minimal 3 huruf');
        nama.classList.add('invalid');
        formValid = false;
    } else {
        nama.classList.add('valid');
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.value.trim()) {
        errors.push('Email tidak boleh kosong');
        email.classList.add('invalid');
        formValid = false;
    } else if(!emailPattern.test(email.value)) {
        errors.push('Format email tidak valid');
        email.classList.add('invalid');
        formValid = false;
    } else {
        email.classList.add('valid');
    }
    
    if(!feedback.value.trim()) {
        errors.push('Feedback tidak boleh kosong');
        feedback.classList.add('invalid');
        formValid = false;
    } else if(feedback.value.length < 10) {
        errors.push('Feedback minimal 10 karakter');
        feedback.classList.add('invalid');
        formValid = false;
    } else {
        feedback.classList.add('valid');
    }
    
    if(!formValid) {
        pesanError.style.color = '#dc2626'; 
        pesanError.innerHTML = errors.map(error => `- ${error}`).join('<br>');
    } else {
        pesanError.style.color = '#1d4ed8'; 
        pesanError.textContent = 'Terima kasih! Feedback berhasil dikirim.';
        
        setTimeout(function() {
            nama.value = '';
            email.value = '';
            feedback.value = '';
            [nama, email, feedback].forEach(field => {
                field.classList.remove('valid', 'invalid');
            });
            pesanError.textContent = '';
        }, 3000);
    }
});

let gambarGaleri = document.querySelectorAll('.gallery-item img');
gambarGaleri.forEach(function(gambar) {
    gambar.addEventListener('mouseover', function() {
        this.style.cursor = 'pointer';
    });
    
    gambar.addEventListener('click', function() {
        alert('Fitur lihat gambar ukuran penuh masih dalam pengembangan!');
    });
});

let linkNavigasi = document.querySelectorAll('.nav-links a');
linkNavigasi.forEach(function(link) {
    link.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            let tujuan = document.querySelector(this.getAttribute('href'));
            if(tujuan) {
                tujuan.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

let cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

let formFeedback = document.getElementById('feedbackForm');
formFeedback.addEventListener('submit', function() {
    let tombolSubmit = this.querySelector('button[type="submit"]');
    let teksSemula = tombolSubmit.textContent;
    
    tombolSubmit.textContent = 'Mengirim...';
    tombolSubmit.disabled = true;
    
    setTimeout(function() {
        tombolSubmit.textContent = teksSemula;
        tombolSubmit.disabled = false;
    }, 2000);
});

function aktifkanDarkMode() {
    alert('Maaf, fitur dark mode masih dalam tahap pengembangan!');
}