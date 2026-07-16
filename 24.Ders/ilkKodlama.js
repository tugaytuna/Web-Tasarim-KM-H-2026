console.log("Merhaba Dünya!");

let isim = "Tugay";
let rakam1 = 21;

console.log("Merhaba " + isim);

console.log(rakam1 + 15);

function butonTiklandi() {
  console.log("Buton tıklandı!");
  alert("Butona Tıkladın!");
}

let anadivElementi = document.getElementById("anadiv");

function degistir() {
  console.log("değerler değiştiriliyor....");
  anadivElementi.innerHTML = "Js ile Değiştirildi!";
}
