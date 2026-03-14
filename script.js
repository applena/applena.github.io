const prompts = [
  "Prompt: Photograph an ordinary object as if it belongs in a fantasy novel.",
  "Prompt: Write five lines of dialogue between your present self and your 10-year-old self.",
  "Prompt: Capture one image that feels like a memory from a film that doesn't exist.",
  "Prompt: Build a tiny story using only three colors and one weather condition.",
  "Prompt: Find a shadow, and make it the main character."
];

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const promptButton = document.getElementById("new-prompt");
const promptText = document.getElementById("prompt-text");
if (promptButton && promptText) {
  promptButton.addEventListener("click", () => {
    const selection = prompts[Math.floor(Math.random() * prompts.length)];
    promptText.textContent = selection;
  });
}

const themeButton = document.getElementById("theme-toggle");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    const isSunset = document.body.dataset.theme === "sunset";
    document.body.dataset.theme = isSunset ? "" : "sunset";
    themeButton.textContent = isSunset ? "Switch color vibe" : "Switch to cool blue vibe";
  });
}
