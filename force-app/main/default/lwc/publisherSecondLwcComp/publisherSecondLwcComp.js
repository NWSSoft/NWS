import { LightningElement,track, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import abcd from '@salesforce/messageChannel/abcd__c';

export default class PublisherSecondLwcComp extends LightningElement { 
    @track inpVal;
    @track messageArrayvar=[];
    @wire(MessageContext) MeesageContext;
        

    sendmsghandler(){
     this.inpVal=this.template.querySelector('lightning-input[data-king="sun"]').value;
      var currentmsgvar =({id:this.inpVal.length,
                                msg:this.inpVal,
                                messagesource:'lwc'});
                                this.messageArrayvar.push(currentmsgvar);
                                alert('Hii'+JSON.stringify(this.messageArrayvar));
                              publish(this.MeesageContext, abcd, this.messageArrayvar);
     
    }
}