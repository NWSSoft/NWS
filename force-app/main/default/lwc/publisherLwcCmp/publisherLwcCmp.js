import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import abcd from '@salesforce/messageChannel/abcd__c';
export default class PublisherLwcCmp extends LightningElement{ 

    @wire(MessageContext)messageContext;


   sendPayloadHandler(){
   
    const payload = { recordName: 'Hii My Name is Boss baby..', recordData: 'Salesforce Is My Life'};
    publish(this.messageContext, abcd, payload);

   }
}