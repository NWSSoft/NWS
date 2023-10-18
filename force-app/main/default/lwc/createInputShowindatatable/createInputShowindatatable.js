import { LightningElement,track } from 'lwc';

export default class CreateInputShowindatatable extends LightningElement {

   
    @track serachrec;
     
    ChangeHandler(event){
    this.serachrec = event.target.value;
    }
     

}