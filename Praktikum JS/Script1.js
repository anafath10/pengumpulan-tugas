function hitungLuasKelilingLingkaran() {
    // mengambil jari jari
    var radius = parseFloat(document.getElementById("radius").value);
  
    // menghitung luas
    var luas = 3.14 * radius * radius;
  
    // menghitung keliling
    var diameter = radius + radius;
    var keliling = 3.14 * diameter;
  
    document.getElementById("hasilKeliling").innerHTML = `Keliling: <b>${keliling}</b>`;
    document.getElementById("hasilLuas").innerHTML = `Luas: <b>${luas}</b>`;
  }