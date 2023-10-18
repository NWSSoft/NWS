import { LightningElement,track } from 'lwc';

export default class SetterGetterCmp extends LightningElement {

   inpVal;
   //inpName;
   
   get inpName(){
    return this.inpVal;
   } 

   set inpName(value){
      alert(typeof value);
         this.inpVal = value;
   }

    changehandler(event){
   this.inpName = event.target.value;
    }
}