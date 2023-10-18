import { LightningElement,api, wire } from 'lwc';

import findcontactrecordbyAccountid from"@salesforce/apex/ContactController.findcontactrecordbyAccountid"

export default class ContactListComp extends LightningElement {

columns = [ 
            { label: 'First name', fieldname :'FirstName', type :'text'},
            { label: 'Last name', fieldname :'LastName', type :'text'},
            { label: 'Phone',   fieldname :'Phone' ,type :'Phone'},
            { label: 'Email',   fieldname :'Email', type :'Email'},


];

   @api accountId;
    @wire(findcontactrecordbyAccountid,{accountid:'$account.name'}) contacts;

}