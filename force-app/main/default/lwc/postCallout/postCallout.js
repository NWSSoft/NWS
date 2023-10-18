import { LightningElement,track } from 'lwc';

import getpostmethod from '@salesforce/apex/CalloutHeroku.getpostmethod';
export default class PostCallout extends LightningElement {

    @track callanimals;
    @track animallist;
   
    callouthndler(event){
        this.callanimals = event.target.value;


    }
    clickhandler(){
        getpostmethod({animalname:this.callanimals})
          .then(result => {
              this.animallist = result;
              
          })
          .catch(error => {
              this.error = error;
          });
  }

}