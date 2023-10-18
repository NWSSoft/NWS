import { LightningElement, track, wire } from 'lwc';
import { registerListener, unregisterAllListeners} from 'c/pubsubFile';
import { CurrentPageReference } from 'lightning/navigation';

export default class SecondsubscriberCmp extends LightningElement {
    @wire (CurrentPageReference) pageRef;
    
    @track Message;
    connectedCallback() {
        registerListener('message', this.handleMessage, this);
    }
   
    handleMessage(myMessage) {
        this.Message = myMessage;
        //Add your code here
    }
   
    disconnectCallback() {
        unregisterAllListeners(this);
    }
}