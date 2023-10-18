import { LightningElement } from 'lwc';
export default class FirstPage extends LightningElement {
areDetailsVisible = true;
aboutClick(){
this.areDetailsVisible = true; 
}
    donorClick() {
       
        this.areDetailsVisible = false;
        alert(',,,,,,,');
    }

}