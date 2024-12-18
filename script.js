function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const company = document.getElementById('company').value || '-';
    const orderDetails = document.getElementById('order-details').value;
    const deadline = document.getElementById('deadline').value;
    const des = document.getElementById('des').value;

    // Validasi form
    if (!name || !orderDetails || !deadline || !des) {
        alert("Harap lengkapi semua field yang wajib diisi!");
        return false;
    }

    // Rangkai pesan
    const message = `Halo, saya ingin konsultasi terkait:\n\n` +
        `*Nama:* ${name}\n` +
        `*Instansi:* ${company}\n\n` +
        `*Jenis Order:* ${orderDetails}\n` +
        `*Deadline:* ${deadline}\n` +
        `*Detail pekerjaan:* ${des}\n`;

    // Kirim ke WhatsApp
    const phone = "628979195660";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    return false; // Cegah pengiriman form agar tidak refresh halaman
}
