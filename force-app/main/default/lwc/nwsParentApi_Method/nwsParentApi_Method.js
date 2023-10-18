import { LightningElement, track} from 'lwc';

export default class NwsParentApi_Method extends LightningElement {
@track inputVal;
 flagMeHandler(event)
    { 
        var childCmp = this.template.querySelector('c-nws-child-api-_-method');

        childCmp.selectedCheckbox(this.inputVal);
         
    }

    Inputchangehandler(event)
    {
        this.inputVal = event.target.value;
    }

}