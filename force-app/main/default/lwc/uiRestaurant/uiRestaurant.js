import { LightningElement,wire } from 'lwc';

 import getimg from  '@salesforce/apex/fetchtheimages.getimg'; 

 

export default class uiRestaurant extends LightningElement{

    @wire(getimg, { recordId: '$recordId', fields: FIELDS })
    Account;


    get IMG__c() {
        return this.Account.data.fields.Name.value;
    }


    }