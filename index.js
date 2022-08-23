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

  let text = document.querySelector('#text');
  let test = 'fuck you bitch!!!';


  setTimeout(() => {
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

    let result  = test.repeat(1);
    text.textContent = result;

  }, 1000);

  setTimeout(() => {
    let result  = test.repeat(2);
    text.textContent = result;
  }, 2000);

  setTimeout(() => {
    let result  = test.repeat(3);
    text.textContent = result;
  }, 3000);

  setTimeout(() => {
    let result  = test.repeat(4);
    text.textContent = result;
  }, 4000);

  setTimeout(() => {
    let result  = test.repeat(5);
    text.textContent = result;
  }, 5000);

  setTimeout(() => {
    let result  = test.repeat(6);
    text.textContent = result;
  }, 6000);

  setTimeout(() => {
    let result  = test.repeat(7);
    text.textContent = result;
  }, 7000);

  setTimeout(() => {
    let result  = test.repeat(8);
    text.textContent = result;
  }, 8000);

  setTimeout(() => {
    let result  = test.repeat(9);
    text.textContent = result;
  }, 9000);

  setTimeout(() => {
    let result  = test.repeat(10);
    text.textContent = result;
  }, 10000);

});
