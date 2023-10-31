import { LightningElement } from 'lwc';

import getAllStages from '@salesforce/apex/Opportunitycontroller.getAllStages';
const COLUMNS = [
    {label: 'Name', fieldName: 'Name', type:'text'},
    {label: 'Stage', fieldName: 'StageName', type:'text'}
];


export default class ImperativePractice extends LightningElement {

    columns = COLUMNS;

    opps;
    errorMsg;

    allStages(){
        getAllStages()
        .then(result =>{
            this.opps = result;
        })
        .catch(error =>{
            this.errorMsg = error;
        })
    }


}