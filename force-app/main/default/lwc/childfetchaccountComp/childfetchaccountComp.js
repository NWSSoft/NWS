import { LightningElement, track } from 'lwc';

export default class ChildfetchaccountComp extends LightningElement {

   @track accName;
    handleChange(event){
        this.accName = event.target.value;
    }

    handleClick(){
        const selectEvent = new CustomEvent('mydata', {
            detail: this.accName
        });
       this.dispatchEvent(selectEvent);
}
}