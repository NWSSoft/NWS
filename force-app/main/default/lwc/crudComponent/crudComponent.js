import { LightningElement, api } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';  // ==>>>For Delete
import { updateRecord } from 'lightning/uiRecordApi';   // ===>For Update
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class CrudComponent extends NavigationMixin(LightningElement) {
@api recordId;
handleDelete(event) {
    deleteRecord(this.recordId)
        .then(() => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record deleted',
                    variant: 'success'
                })
            );
            // Navigate to a record home page after
            // the record is deleted, such as to the
            // contact home page
            this[NavigationMixin.Navigate]({
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'home',
                },
            });
        })
        .catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error deleting record',
                    message: 'Delete Failed.',
                    variant: 'error'
                })
            );
        });
}

UpdateRecordHandler(event){
    var fields = {};
    fields['Id'] = this.recordId;
    fields['Name']= "Universal Containers123";
    fields['Phone']  ="7890654321";

    var recordInput ={fields};
    updateRecord(recordInput).then(() => {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'update Success',
                message: 'Record update',
                variant: 'success'
            })
        );
})
}
}