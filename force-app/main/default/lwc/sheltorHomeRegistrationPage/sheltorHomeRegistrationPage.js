import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ShelterHomeObj from '@salesforce/schema/Shelter_Home__c';
import Name from '@salesforce/schema/Shelter_Home__c.Name';
import Phone from '@salesforce/schema/Shelter_Home__c.Phone__c';
import Country from '@salesforce/schema/Shelter_Home__c.Country__c';
import Email from '@salesforce/schema/Shelter_Home__c.Email_id__c';
import Address from '@salesforce/schema/Shelter_Home__c.Address__c';
import zipcode from '@salesforce/schema/Shelter_Home__c.zip_code__c';

 export default class SheltorHomeRegistrationPage extends LightningElement {
  @api recordId;
  objectApiName=ShelterHomeObj;;
  fields=[Name,Phone,Country,Email,Address,zipcode];
  handleSuccess(event) {
    const evt = new ShowToastEvent({
        title: 'Account created',
        message: 'Record ID: ' + event.detail.id,
        variant: 'success',
    });
    this.dispatchEvent(evt);
}
 }