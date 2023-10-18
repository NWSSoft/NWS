import { LightningElement } from 'lwc';

import getacc from '@salesforce/apex/assign2getaccrecord.getacc';




const columns = [

      { label: 'Account Name', fieldName: 'Name'},
      { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency'},
      { label: 'Phone', fieldName: 'Phone', type: 'phone' },
      { label: 'Industry', fieldName: 'Industry', type: 'text' },
      { label: 'Rating', fieldName: 'Rating', type: 'text' },
    
    ]

export default class Assignment2 extends LightningElement {

    columns =columns;
    selectedRowId;

    handleSaveOnClick(event){
    event.preventDefault();
    if(this.selectedRowId){
        let fields = event.detail.fields;
        this.template.querySelector('lightning-record-edit-form').submit(this.fields);
    }
      
    }
}