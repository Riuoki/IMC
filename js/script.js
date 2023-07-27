import { Modal } from './modal.js'
import {AlertError} from './alert-error.js'
import {IMC, notANumber} from './utils.js'

// variaveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


inputWeight.addEventListener('click', () => {
    AlertError.close();
});

inputHeight.addEventListener('click', () => {
    AlertError.close();
});



form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value


   const showAlertError = notANumber(weight) || notANumber(height)

   if (showAlertError){
    AlertError.open()
    return;
   }

   AlertError.close()

    const result = IMC(weight, height)
    const message = `seu IMC é de ${result}`
    
    Modal.message.innerText = message
    Modal.open()
   

}

