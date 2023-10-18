import { LightningElement,wire,track } from 'lwc';
 
import getrecacc from '@salesforce/apex/pubsubimgclass.getrecacc';

import { CurrentPageReference } from 'lightning/navigation'; 

import { fireEvent } from 'c/pubsubFile';

export default class Assignment3pubsub extends LightningElement {

     @wire(CurrentPageReference) pageRef; 
     @track BikeData;
     @wire(getrecacc)
      getbikesdata({data, error}){
                 if(data){
        this.BikeData = data;
         }else if(error){
        console.log('error occured '+JSON.stringify(error));
        }
        }

      handleOnClick(event){

        event.preventDefault();
        
         const Bikerec = event.target.name;
        
        fireEvent(this.pageRef, 'Publish the Data', Bikerec);
        
         }
        
        }