import { LightningElement } from 'lwc';

export default class Helloworld_Component extends LightningElement {
  
 showMessage=false;
    changehandler()
    {
        alert('My name is darsh');
    }
    handleClick()
    {
     this.showMessage=true;
    }
}