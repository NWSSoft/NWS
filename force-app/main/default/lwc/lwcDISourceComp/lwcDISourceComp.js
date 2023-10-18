import { RecordFieldDataType } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class LwcDISourceComp extends LightningElement {

    Kinghandler(event)
    {
      alert('Button Was Called By Vinnu Bhai');

      const selectedEvent = new CustomEvent('itemselectedevt', { detail:{recId:event.target.label}});

      // Disptach The Event
      this.dispatchEvent(selectedEvent);
    }
}