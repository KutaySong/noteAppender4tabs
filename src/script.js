const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

const textarea = document.querySelector("textarea");
const çevir_btn = document.querySelector("çevir");


const handleChange = () => {
  dokunulmamış = textarea.value.split("\n")
};

çevir.addEventListener("click", () => {
  text = [...dokunulmamış]
  çevir()
  textarea.value = text.join("\n")
});


textarea.addEventListener("focus", () => {
  textarea.value = "";
  handleChange();
}, { once: true });


textarea.addEventListener("input", handleChange);

handleChange();