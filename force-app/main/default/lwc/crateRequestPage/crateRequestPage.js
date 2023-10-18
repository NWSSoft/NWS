import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import RequestObj from '@salesforce/schema/Request__c';
import Name from '@salesforce/schema/Request__c.Name';
import Status from '@salesforce/schema/Request__c.Status__c';
import ShelterHome from '@salesforce/schema/Request__c.Shelter_Home__c';
import Commodity1 from '@salesforce/schema/Request__c.Commodity_Level_1__c';
import Commodity2 from '@salesforce/schema/Request__c.Commodity_Level_2__c';

 export default class CrateRequestPage extends LightningElement {
  @api recordId;
  objectApiName=RequestObj;;
  fields=[Name,Status,Commodity1,Commodity2,ShelterHome];
  handleSuccess(event) {
    const evt = new ShowToastEvent({
        title: 'Account created',
        message: 'Record ID: ' + event.detail.id,
        variant: 'success',
    });
    this.dispatchEvent(evt);
}
 }