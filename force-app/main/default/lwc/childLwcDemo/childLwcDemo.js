import { LightningElement } from 'lwc';

export default class ChildLwcDemo extends LightningElement {

    handleadd(){
     this.dispatchEvent(new CustomEvent('add'));
    }

    handlesubtract(){
     this.dispatchEvent(new CustomEvent('subtract'));
    }
}