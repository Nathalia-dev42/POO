import PromptSync from "prompt-sync";
import { Controle } from "./controle";

let control: Controle = new Controle(0, 10);
let prompt = PromptSync();
let option: number = 0;

while (option !== 9) {
    console.log('==============MENU=============');
    console.log('1. Velocidade Permitida');
    console.log('2. Turbo');
    console.log('9. Sair');
    console.log('===============================');

    option = +prompt('Escolha uma ação: ');

    switch (option) {
        case 1:
            let valor: number = +prompt('Digite a velocidade permitida: ');
            control.permitida(valor);
            console.log(control.printpermitida());
            break;
        case 2:
            control.turbo();
            break;
        default:
            break;
    }
}
