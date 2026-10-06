const pages = ["home", "chat", "create", "schedule", "analytics"];

function showPage(id) {
  pages.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.classList.toggle("active", p === id);
  });
  window.scrollTo(0, 0);
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();

  if (!text) return;

  addBubble(text, "user");
  input.value = "";

  setTimeout(() => {
    addBubble(
      "I can prepare the content plan, caption, hashtags and publishing workflow. Social publishing will require connecting the official platform APIs first.",
      "ai"
    );
  }, 400);
}

function addBubble(text, type) {
  const box = document.getElementById("messages");
  if (!box) return;

  const d = document.createElement("div");
  d.className = "bubble " + type;
  d.textContent = text;

  box.appendChild(d);
  box.scrollTop = box.scrollHeight;
}

function generateContent() {
  const topic = document.getElementById("topic")?.value || "";
  const platform = document.getElementById("platform")?.value || "Facebook";
  const goal = document.getElementById("goal")?.value || "";
  const result = document.getElementById("result");

  if (!result) return;

  result.classList.remove("hidden");

  result.innerHTML = `
    <h3>✨ AI Content Plan</h3>
    <p><b>Hook:</b> Wait for the final crushing moment! 🔥🪨</p>
    <p><b>Title:</b> ${topic || "Giant Stone Crushing"} 🤯🔥</p>
    <p><b>Platform:</b> ${platform}</p>
    <p><b>Goal:</b> ${goal}</p>
    <p><b>Caption:</b> Watch this massive stone get crushed
