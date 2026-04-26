const container = document.querySelector(".container");
const qrcodebrtn = document.querySelector(".qr-form button");
const qrcondeinput = document.querySelector(".qr-form input");
const qrcodeimg = document.querySelector(".qrcode img");

function generateqr() {
  const qrcodeinputvalue = qrcondeinput.value;

    if (!qrcodeinputvalue) return;

    qrcodebrtn.innerText = "Gerando Qr Code...";

    qrcodeimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeinputvalue}`;

    qrcodeimg.addEventListener("load", () => {
        container.classList.add("active");
         qrcodebrtn.innerText = "Qr code Gerado!";
    });
}

qrcodebrtn.addEventListener("click", () => {
  generateqr();
});

qrcondeinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateqr();
  }
});

qrcondeinput.addEventListener("keyup", () => {
    if (!qrcondeinput.value) {
        container.classList.remove("active");
        qrcodebrtn.innerText = "Gerar Qr Code";
    }
});