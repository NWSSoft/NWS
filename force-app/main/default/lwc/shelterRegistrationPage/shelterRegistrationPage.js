import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShelterRegistrationPage extends LightningElement {

    @api recordId;



    saveClick(event) {
      const evt = new ShowToastEvent({

            title: 'Success Message',
            message: 'Record Created successfully ',
            variant: 'destructive',
            mode: 'dismissible'
        });

        this.dispatchEvent(evt);

    }

}
