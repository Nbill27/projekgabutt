function checkKhodam() {
    var name = document.getElementById('nameInput').value;
    var resultText = document.getElementById('resultText');
    var retryButton = document.getElementById('retryButton');

    var khodams = [
        "Air Cucian Beras", "Api Menyala", "Angin Sejuk", "Batu Karang", "Cahaya Bulan",
        "Daun Rimbun", "Embun Pagi", "Gurun Pasir", "Hujan Deras", "Pelangi Indah",
        "Sungai Mengalir", "Tanah Subur", "Sepeda Ontel", "Titid Terbang", "Layangan Putus",
        "Baju Robek", "Buaya Putih", "Kuntilanak Merah", "Pocong Bambu", "Tuyul Emas"
    ];

    if (name) {
        var randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
        resultText.innerHTML = `Khodam yang ada di dalam diri <b>${name}</b>: <br><span style="font-size: 24px;">${randomKhodam}</span><br>Jangan lupa share ke yang lain agar mereka tahu sosok aseli yang ada di dalam diri kamu`;
        retryButton.style.display = 'inline-block';
    } else {
        resultText.innerHTML = 'Mohon masukkan nama kamu.';
    }
}

function retry() {
    document.getElementById('nameInput').value = '';
    document.getElementById('resultText').innerHTML = '';
    document.getElementById('retryButton').style.display = 'none';
}
