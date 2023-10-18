import { LightningElement,wire,track } from 'lwc';

import getDeatils from '@salesforce/apex/pubsubimgclass.getDeatils';
 
import {CurrentPageReference} from 'lightning/navigation';

import { registerListener, unregisterAllListeners } from 'c/pubsubFile';

export default class Assign3subscriber extends LightningElement {

    @wire(CurrentPageReference) pageRef;

     @track BikeData;
    
     recId;
    
     image;
    
     connectedCallback(){
    
     registerListener('Publish the Data', this.accountView, this);
    
     }
    
     accountView(data){
    
     this.recId = data;
    
     getDeatils({recId : this.recId}).then(result =>{
    
     this.BikeData = result;
    
    })
    
    .catch(error =>{
    
    console.log('error occured '+error);
    
     })
    
     }
    
    }