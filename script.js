function generateScript() {
  const theme = document.getElementById("themeSelect").value;
  document.getElementById("scriptInput").value =
    theme === "scary"
      ? "You hear footsteps... but you're alone."
      : theme === "reddit"
      ? "I (29M) found something terrifying in my basement..."
      : theme === "monkey"
      ? "Today I stole a banana from a tourist 🤪🐒"
      : "Hi Dad\nHey son\nHow are you?\nI’m fine, what’s up?";
}

function previewVideo() {
  const script = document.getElementById("scriptInput").value;
  const preview = document.getElementById("previewOutput");
  preview.innerText = `🎬 Preview:\n${script}`;
}

function downloadVideo() {
  alert("This is a placeholder. Real video export will be integrated.");
}
