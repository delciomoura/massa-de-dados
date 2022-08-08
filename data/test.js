import { nomeCompleto } from '../utils.js';

for (let i = 0; i < 10; i++) {
  let str = nomeCompleto();
  let regex = /o+/g;

  let result = (() => {
    return regex.test(str);
  });

  let nome = result();

  console.log(str);
  console.log(nome);
}

