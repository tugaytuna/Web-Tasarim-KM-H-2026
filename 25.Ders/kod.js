console.log("Merhaba Dünya!");

function girisyap() {
  console.log("Giriş yapıldı!");
}

function renkdegis() {
  let renksecici = document.getElementById("exampleColorInput");
  let tumekran = document.getElementById("tumekran");

  tumekran.style = "background-color: " + renksecici.value;
  //   console.log(renksecici.value);
}
