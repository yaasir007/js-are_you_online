const result = document.querySelector('span');
const btn = document.querySelector('#btn');
const text = document.querySelector('#text');

function setOffline() {
  result.innerHTML = 'offline';
  result.style.color = 'red';
}

function setOnline() {
  result.innerHTML = 'online';
  result.style.color = 'green';
}

function reload() {
  window.location.reload();
}


btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'Hello World';

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

  }, 1000);
});
