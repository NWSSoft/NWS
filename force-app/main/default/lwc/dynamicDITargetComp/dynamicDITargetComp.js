import { LightningElement,track,api } from 'lwc';

export default class DynamicDITargetComp extends LightningElement {

    @track finalRecordIdValue;

    @api get recordId()
    {
        return this.finalRecordIdValue;
    }

    set recordId(value)
    {
        this.finalRecordIdValue = value;
    }
}