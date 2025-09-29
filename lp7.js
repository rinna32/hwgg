const input = document.getElementById("inputText");
const button = document.getElementById("addBtn");
const paragraphsContainer = document.getElementById("paragraphs");

input.addEventListener("input", () => {
  button.style.display = input.value.trim() ? "inline-block" : "none";
});

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const p = document.createElement("p");
  p.textContent = text;
  paragraphsContainer.appendChild(p);

  input.value = "";
  button.style.display = "none";

  const allParagraphs = paragraphsContainer.querySelectorAll("p");
  if (allParagraphs.length > 5) {
    paragraphsContainer.removeChild(allParagraphs[0]);
  }
});
