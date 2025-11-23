import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";

describe("Paragraphs", () => {
  let input, button, paragraphs;

  beforeEach(() => {
    document.body.innerHTML = `
      <input id="inputText" />
      <button id="addBtn" style="display:none;">Add</button>
      <div id="paragraphs"></div>
    `;

    input = document.getElementById("inputText");
    button = document.getElementById("addBtn");
    paragraphs = document.getElementById("paragraphs");

    input.addEventListener("input", () => {
      button.style.display = input.value.trim() ? "inline-block" : "none";
    });

    button.addEventListener("click", () => {
      const text = input.value.trim();
      if (!text) return;

      const p = document.createElement("p");
      p.textContent = text;
      paragraphs.appendChild(p);

      input.value = "";
      button.style.display = "none";

      const allP = paragraphs.querySelectorAll("p");
      if (allP.length > 5) {
        paragraphs.removeChild(allP[0]);
      }
    });
  });

  test("button shows/hides on input", () => {
    input.value = "";
    fireEvent.input(input);
    expect(button).toHaveStyle("display: none");

    input.value = "text";
    fireEvent.input(input);
    expect(button).toHaveStyle("display: inline-block");
  });

  test("adds paragraph and clears input", () => {
    input.value = "hello";
    fireEvent.input(input);
    fireEvent.click(button);

    expect(paragraphs.querySelectorAll("p")).toHaveLength(1);
    expect(paragraphs.querySelector("p")).toHaveTextContent("hello");
    expect(input.value).toBe("");
    expect(button).toHaveStyle("display: none");
  });

  test("does not add empty paragraph", () => {
    input.value = "   ";
    fireEvent.input(input);
    fireEvent.click(button);

    expect(paragraphs.querySelectorAll("p")).toHaveLength(0);
  });

  test("removes oldest paragraph when more than 5", () => {
    for (let i = 1; i <= 6; i++) {
      input.value = "para" + i;
      fireEvent.input(input);
      fireEvent.click(button);
    }

    const ps = paragraphs.querySelectorAll("p");
    expect(ps).toHaveLength(5);
    expect(ps[0]).toHaveTextContent("para2");
    expect(ps[4]).toHaveTextContent("para6");
  });
});
