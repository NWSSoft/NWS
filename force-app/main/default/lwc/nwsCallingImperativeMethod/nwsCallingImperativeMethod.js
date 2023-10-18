import { LightningElement } from 'lwc';

import myMethod  from '@salesforce/apex/callingMethodImperativelyController.myMethod';

export default class NwsCallingImperativeMethod extends LightningElement {

    nameVar;
    imperativeMethodHandler()
    {
        myMethod({name:this.nameVar}).then(response =>
            {
                 alert('my Name is..');
        }).catch(error =>
            
            {
                console.log(error.message.body)
        
        })

    
    }

    nameChnagehandler(event){
        this.nameVar = event.target.value;
    }

}