import { LightningElement, track, wire } from 'lwc';
import GetAccname from '@salesforce/apex/GetAccountRecordsController.GetAccname';


const COLUMNS = [
    { label: 'Name', fieldName: 'Name',type:'text'},
    { label: 'Id', fieldName: 'Id',type: 'Id'},
    { label: 'Industry', fieldName: 'Industry',type: 'text'},
    { label: 'Phone', fieldName: 'Phone',type: 'phone'}
];


export default class ParaentAccComp extends LightningElement {
    columns= COLUMNS;
    @track accName;
  
    handleMyData(event){
        this.accName = event.detail;              
    }
    @wire(GetAccname, {keysearch : '$accName'})accRecords;

}