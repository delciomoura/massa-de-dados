import {
    end,
    cid,
    texto,
    foto,
    nomeCompleto,
    numeroCartaoCredito,
    CVV
} from '../utils.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número de vezes que a massa de dados será gerada: ', function (n) {
    for (let i = 0; i < n; i++) {
        const cadastroPessoa = [
            {
                dadosPessoa: {
                    nome: nomeCompleto(),
                    rua: end(),
                    cidade: cid()
                },
                dadosCartao: {
                    numeroCartao: numeroCartaoCredito('####-####-####-####'),
                    CVV: CVV(),
                    fotoRosto: foto()
                },
                observacao: {
                    texto: texto(5)
                }
            }
        ]
        console.log(cadastroPessoa);
    }
    rl.close();
});
