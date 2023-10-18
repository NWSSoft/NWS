import { LightningElement,track } from 'lwc';
import getResultFromHeroku from '@salesforce/apex/CalloutHeroku.getResultFromHeroku';
export default class CalloutHeroku extends LightningElement {

  @track callanimals;
   
  calloutHerokuHandler(){
    getResultFromHeroku()
        .then(result => {
            this.callanimals = result;
            alert(JSON.stringify(this.callanimals));
        })
        .catch(error => {
            this.error = error;
        });
}
}