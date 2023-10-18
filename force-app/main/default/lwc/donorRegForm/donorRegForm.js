import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import DonorName from '@salesforce/schema/Donor__c.Name';

import DonorEmail from'@salesforce/schema/Donor__c.Email__c';
import  DonorPhone from'@salesforce/schema/Donor__c.Phone__c';
import  Donorcountry from'@salesforce/schema/Donor__c.Country__c';
export default class DonorRegForm extends LightningElement {

    name =DonorName;
  
    email = DonorEmail;
    phone = DonorPhone;
    country =Donorcountry;
    donrId;
    
   
    handlesucess(event){
        this.donrId = event.detail.id;
         console.log('onsucess event recordEditForm'+this.donrId);
         const evt = new ShowToastEvent({
            title: 'Sucess!',
            message: 'Record has been created',
            variant: 'success',
          });
          this.dispatchEvent(evt);
           location.reload();
        }  
    }