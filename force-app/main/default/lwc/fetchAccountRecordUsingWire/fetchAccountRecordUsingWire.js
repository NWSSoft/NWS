import { LightningElement, track, wire } from 'lwc';
import getAccounts from "@salesforce/apex/geRecordsController.getAccounts";
const COLUMNS = [
    {label: 'Accont Name', fieldName: 'Name', type : 'text'},
    {label: 'Industry', fieldName: 'Industry', type : 'text'},
    {label: 'Phone', fieldName: 'Phone', type : 'Phone'},
    {label: 'Rating', fieldName: 'Rating', type : 'text'},
];
export default class FetchAccountRecordUsingWire extends LightningElement {
    employeeColumns= COLUMNS;
    
   @track  accName;
    @wire(getAccounts, {searchkey : '$accName'}) accRecords;
    handlechange(event){
        event.preventdefault();
        this.accName = event.target.value;
        
    }

}