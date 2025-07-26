function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleDateString("hu-HU") + '. ' + now.toLocaleTimeString("hu-HU", { hour: '2-digit', minute: '2-digit' });
  document.getElementById('clock').textContent = formatted;
}

setInterval(updateClock, 1000);
updateClock();
