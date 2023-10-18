import { LightningElement } from 'lwc';

export default class LifeCycleHookComp extends LightningElement {


    Constructor(){
        Super();
        console.log('This is My Constructor');
    }

     connectedCallback(){

        console.log('This is My connectedCallback');

     }
     renderedCallback(){
        console.log('This is My renderedCallback');
     }

     

     disconnectedCallback(){
        console.log('This is My disconnectedCallback');
     }
     errorCallback(error, stack){
        console.log('This is My errorCallback');
     }


}