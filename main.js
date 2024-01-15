function convert(e) {
    e.preventDefault();
  var ex = document.querySelector(".ex").value;
  var amo = parseFloat(document.querySelector(".amo").value);

  var convertAmo;

  switch (ex) {
      case 'dollar':
          convertAmo = amo * 3.28;
          break;
      case 'dinar':
          convertAmo = amo * 5.3;
          break;
      case 'nis':
          convertAmo = amo * 1;
          break;
      default:
         
  }

  
     document.querySelector('.re').textContent = `${amo} ILS is ${convertAmo} ${ex}`;
  
}
