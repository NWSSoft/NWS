import { LightningElement } from 'lwc';


import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import FullName from '@salesforce/schema/Shelter_Home__c.Name';
import Phone from'@salesforce/schema/Shelter_Home__c.Phone__c';
import  Email from'@salesforce/schema/Shelter_Home__c.Email_id__c';
import  address from'@salesforce/schema/Shelter_Home__c.Address__c';
import  country from'@salesforce/schema/Shelter_Home__c.Country__c';
import  zipcode from'@salesforce/schema/Shelter_Home__c.zip_code__c';

export default class Shelter_RegistrationForm extends LightningElement {
     
     Name =FullName;
     Phone = Phone;
     Email = Email;
     Address =address;
     country = country;
     ZipCode = zipcode;
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