import { LightningElement,track, wire } from 'lwc';
import {
        subscribe,
        unsubscribe,
        APPLICATION_SCOPE,
        MessageContext,
    } from 'lightning/messageService';
import abcd from '@salesforce/messageChannel/abcd__c';
    
export default class SubscriberlwcComponent extends LightningElement {
    
    @track dataFromPublisher;
    subscription = null;

    @wire(MessageContext) contextMsg;
    connectedCallback(){
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.contextMsg,
                abcd,
                (message) => this.handleMessage(message),
               // { scope: APPLICATION_SCOPE }
            );
        }
    }
    handleMessage(msg){
        alert('data from publisher cmp  '+msg.recordName +' '+msg.recordData );
        this.dataFromPublisher=msg.recordName +' '+msg.recordData;
    }
}