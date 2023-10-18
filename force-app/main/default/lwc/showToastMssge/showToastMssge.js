import { LightningElement } from 'lwc';

import{ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class ShowToastMssge extends LightningElement {


    Handleclick(){
     this.ShowToast();
    }


    ShowToast(){
        const event= new ShowToastEvent({
        tittle:'show toast demo' ,
        message:'buttton is clicked succesfully',
        variant: 'success',
        })
        this.dispatchEvent(event);
    };

    Handleclickoncancel(){
         this.ShowToastt();
    }

    ShowToastt(){
        const event = new ShowToastEvent({
            title:'show toast memo',
            message:'cancel Clicked is sucessfull',
            variant:'warning',
        })
        this.dispatchEvent(event);
    };

    Handleerrorclick(){
       this.ShowToaste();
    }
     ShowToaste(){
        const event = new ShowToastEvent({
            title:'give error',
            message:'Error come',
            variant:'error',

        })
        this.dispatchEvent(event);
     }


}