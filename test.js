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

// Contoh penggunaan fungsi hitungUmur
let tanggalLahir = '1995-06-15'; // Format: 'YYYY-MM-DD'
let umur = hitungUmur(tanggalLahir);

console.log('Umur Anda: ' + umur + ' tahun');
