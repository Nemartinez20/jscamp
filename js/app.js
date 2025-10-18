btns_aply = document.querySelectorAll(".btn_apply");
console.log("hola mundno");
console.log(btns_aply);

btns_aply.forEach((btn_aply) => {
  console.log(btn_aply);
  btn_aply.addEventListener("click", function () {
    console.log("haz dado click");
    this.textContent = "¡Aplicaste!";
  });
});
