import { LightningElement } from 'lwc';

export default class ParentLwcDemo extends LightningElement {

    countvalue= 0;

    handelchildsubevnt(){
        this.countvalue--;
    }

    handlerchildaddevnt(){
        this.countvalue++;
    }
}