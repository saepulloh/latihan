// Import module 'readline' untuk membaca input dari command line
const readline = require('readline');

// Membuat interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk menghitung umur
function hitungUmur(tanggalLahir) {
    // Ubah input menjadi objek Date
    let dateOfBirth = new Date(tanggalLahir);
    
    // Dapatkan tanggal dan tahun saat ini
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();
    
    // Hitung umur
    let umur = currentYear - dateOfBirth.getFullYear();
    let monthDifference = currentMonth - dateOfBirth.getMonth();
    let dayDifference = currentDay - dateOfBirth.getDate();
    
    // Sesuaikan umur jika perlu
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        umur--;
    }
    
    return umur;
}

// Fungsi untuk memvalidasi format tanggal lahir
function validasiTanggalLahir(tanggalLahir) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(tanggalLahir);
}



// Menanyakan tanggal lahir kepada pengguna
rl.question('Masukkan tanggal lahir Anda (format: YYYY-MM-DD): ', (tanggalLahir) => {
    if (validasiTanggalLahir(tanggalLahir)) {
        // Memanggil fungsi hitungUmur dan menampilkan hasilnya
        let umur = hitungUmur(tanggalLahir);
        console.log('Umur Anda: ' + umur + ' tahun');
    } else {
        console.log('Format tanggal lahir tidak valid. Silakan masukkan dalam format: YYYY-MM-DD');
    }
    
    // Menutup interface readline
    rl.close();
});
