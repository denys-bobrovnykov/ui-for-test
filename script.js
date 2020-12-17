document.addEventListener('DOMContentLoaded', () => {
  console.log('Done');
  const input = document.querySelector('.command');
  const buttonGo = document.querySelector('.go-button');

  buttonGo.addEventListener('click', () => {
    fetch('https://floating-wildwood-27292.herokuapp.com/envelopes/').then(console.log);
  });
});
