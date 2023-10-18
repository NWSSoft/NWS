import { LightningElement,track,wire } from 'lwc';

 import fetchAGTRec from '@salesforce/apex/fetchAgentrecord.fetchAGTRec';

 import delteAGTRec from '@salesforce/apex/fetchAgentrecord.delteAGTRec';

 //import { deleteRecord } from 'lightning/uiRecordApi';
 import { NavigationMixin } from 'lightning/navigation';  

 import {refreshApex} from '@salesforce/apex'; // for refersh the page in delete case

 import { ShowToastEvent } from 'lightning/platformShowToastEvent';



 const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Agent_ID__c', fieldName: 'Agent_ID__c', type: 'text' },
    { label: 'Phone__c', fieldName: 'Phone__c', type: 'text' },
    { label: 'Email__c', fieldName: 'Email__c', type: 'text' },
    
      // for view icon 
    { 
        label: 'view',
         type: 'button-icon',typeAttributes: {  
         label: 'View', 
         iconName: 'action:preview',
         name: 'View',  
        title: 'View',  
         disabled: false,  
         value: 'view',  
         iconPosition: 'left',
         iconClass:'slds-icon-text-warning' 
     } }, 
     
   // for edit icon
{ 
    label: 'Edit',
     type: 'button-icon',typeAttributes: {  
     label: 'Edit', 
     iconName: 'utility:edit',
     name: 'Edit',  
    title: 'Edit',  
     disabled: false,  
     value: 'Edit',  
     iconPosition: 'left',
     iconClass:'slds-icon-text-success'  
 } }, 
       
 // for delete icon
 { 
    label: 'delete',
     type: 'button-icon',typeAttributes: {  
     label: 'delete', 
     iconName: 'utility:delete',
     name: 'delete',  
    title: 'delete',  
     disabled: false,  
     value: 'delete',  
     iconPosition: 'left',
     iconClass:'slds-icon-text-error'   
 } }, 
];

export default class Assign1 extends NavigationMixin(LightningElement) {
    @track data;
    columns= columns;
    @track refershTable;
    selectedRecords = [];
    
     @wire (fetchAGTRec)
     callApex(response){
        this.refershTable = response;
        if(response.data){
            this.data = response.data;
        }else if(response.error){
            console.log(error);
        }
     }
        

    callRowAction(event){
        alert('event.detail.row.Id...');
        const recId =  event.detail.row.Id;  
        const actionName = event.detail.action.name;  
        if ( actionName === 'Edit' ) {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Account',  
                    actionName: 'edit'  
                }  
            })  
  
        } else if ( actionName === 'View') {  
  
            this[NavigationMixin.Navigate]({  
                type: 'standard__recordPage',  
                attributes: {  
                    recordId: recId,  
                    objectApiName: 'Account',  
                    actionName: 'view'  
                }  
            }) 

  
        }else if  ( actionName === 'delete')
        {
             delteAGTRec({agid:recId}).then(()=>{

                this.dispatchEvent(
                    new ShowToastEvent({
             title: 'Success',
               message: 'Record is deleted successfully',
            variant: 'success'
     })
            );
               return refreshApex(this.refershTable);
            }).catch(error =>{
                console.log(error);
            })
        }         
  
    }  
    handleRowAction(event) {
        const selectedRows = event.detail.selectedRows;
        
        let conIds = new Set();
        for (let i = 0; i < selectedRows.length; i++) {
            conIds.add(selectedRows[i].Id);
        }
        this.selectedRecords = Array.from(conIds);
        
        alert('row.......'+JSON.stringify(this.selectedRecords))
    }

}