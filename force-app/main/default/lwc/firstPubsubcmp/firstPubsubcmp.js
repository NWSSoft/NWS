import { LightningElement, wire } from 'lwc';
import {  fireEvent } from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';

export default class FirstPubsubcmp extends LightningElement {
    
    @wire(CurrentPageReference) pageRef;

    handleChange(event){
  
         var inputval = event.target.value;
        fireEvent(this.pageRef,'message',inputval);

    }
}