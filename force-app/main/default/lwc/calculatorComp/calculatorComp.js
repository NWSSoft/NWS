import { LightningElement, track } from 'lwc';

export default class CalculatorComp extends LightningElement {


   //  create property to store the values.
    firstNumber;
    secondNumber;
    @track operationresult;

    changeHandlerOne(event){
       this.firstNumber=event.target.value;
    }

    changeHandlerTwo(event){
        this.secondNumber = event.target.value;
    }

    additionhandler(){
      this.operationresult = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
    subtractionhandler(){
        this.operationresult = parseInt(this.firstNumber) - parseInt(this.secondNumber);
    }
    multiplicationhandler(){
        this.operationresult = parseInt(this.firstNumber) * parseInt(this.secondNumber);
    }
    divisionhandler(){
        this.operationresult = parseInt(this.firstNumber) / parseInt(this.secondNumber);
    }
    modulushandler(){
        this.operationresult = parseInt(this.firstNumber) % parseInt(this.secondNumber);
    }

}