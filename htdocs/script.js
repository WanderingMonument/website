const button = document.querySelector('#click');
const up = document.querySelector('#up')
const boSec = document.querySelector('#oSec')
var amount = 0;
var roc = 1;
var rSec = 0;
button.addEventListener('click', handleClick);

  function handleClick() {
    amount+=roc/2;
    document.getElementById("amount").innerHTML = amount;
  }

up.addEventListener('click', handleUp);
    function handleUp() {
      if(amount>=50) {
        amount+=-50;
        document.getElementById("amount").innerHTML = amount;
        roc = roc + 1;
        console.log("worked");
        document.cookie = "value=" + amount;
        document.getElementById("cookieValue").innerHTML = document.cookie;
      }
}
boSec.addEventListener('click', handleOSec);
    function handleOSec() {
      if(amount >=1000) {
        amount+=-1000;
        rSec=+1;
        document.getElementById("amount").innerHTML = amount;
        console.log("yay");
}
    }
function rrSec() {
  if(rSec>0)
  {
    amount+=rSec;
    document.getElementById("amount").innerHTML = amount;
  }
}

setInterval(rrSec,1000);
