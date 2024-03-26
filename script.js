let son = prompt("Son kiriting:");

while (son === null || son === "" || isNaN(son)) {
  son = prompt("Bu son emas. Iltimos, qaytadan kiriting:");
}

let daraja = prompt(" darajani kiriting:");

while ( daraja === null || daraja === "" || isNaN(daraja)) {
        daraja = prompt("Bu daraja emas. Iltimos, qaytadan kiriting:");
}
let natija = Math.pow(Number(son), Number(daraja));

alert("Javob: " + natija);