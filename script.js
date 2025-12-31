document.querySelectorAll(".socials a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const type = link.dataset.type;

    if (type === "instagram")
      window.open("https://www.instagram.com/YOUR_USERNAME/", "_blank");

    if (type === "gmail")
      window.location.href = "mailto:YOUR_EMAIL@gmail.com";

    if (type === "github")
      window.open("https://github.com/YOUR_GITHUB", "_blank");

    if (type === "linkedin")
      window.open("https://www.linkedin.com/in/YOUR_LINKEDIN/", "_blank");
  });
});
/* ================= HACKER BOOT LOADER LOGIC ================= */
let boot = 0;
const ring = document.getElementById("boot-ring");
const percent = document.getElementById("boot-percent");
const bar = document.getElementById("boot-bar");
const status = document.getElementById("boot-status");
const loader = document.getElementById("boot-loader");
const sound = document.getElementById("boot-sound");

const circumference = 339;

// try to play sound (browser may require user interaction)
setTimeout(() => {
  sound.volume = 0.4;
  sound.play().catch(() => {});
}, 300);

const bootMessages = [
  "LOADING KERNEL MODULES",
  "INITIALIZING NETWORK",
  "BYPASSING FIREWALL",
  "ESTABLISHING SECURE CHANNEL",
  "ACCESS GRANTED"
];

const bootInterval = setInterval(() => {
  boot++;
  const offset = circumference - (boot / 100) * circumference;
  ring.style.strokeDashoffset = offset;
  percent.textContent = boot + "%";
  bar.style.width = boot + "%";

  if (boot % 20 === 0 && boot < 100) {
    status.textContent = bootMessages[boot / 20 - 1];
  }

  if (boot >= 100) {
    clearInterval(bootInterval);
    status.textContent = "SYSTEM ONLINE";

    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";
      setTimeout(() => loader.remove(), 800);
    }, 600);
  }
}, 35);
