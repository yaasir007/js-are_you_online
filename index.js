const result = document.querySelector('span');

if (window.navigator.onLine) {
  setOnline();
} else {
  setOffline();
}

window.addEventListener('offline', () => {
  setOffline();
});


window.addEventListener('online', () => {
  setOnline();
});

function setOnline() {
  result.innerHTML = 'online';
}

function setOffline() {
  result.innerHTML = 'offline';
}

function reload() {
  window.location.reload();
}
