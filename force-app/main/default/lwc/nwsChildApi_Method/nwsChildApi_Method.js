import { api, track,LightningElement } from 'lwc';

export default class NwsChildApi_Method extends LightningElement {
   
    @track  value = ['B'];

    options =
    [
            { label: 'A Checkbox', value: 'A' },
            { label: 'B Checkbox', value: 'B' },
            { label: 'C Checkbox', value: 'C' },
            { label: 'D Checkbox', value: 'D' }
            
        ];
 @api
 selectedCheckbox(inputVal){
   
    var selectdvalue = this.options.find(currentoption=>{
      return inputVal ==  currentoption.value;
    });
    if(selectdvalue){
        this.value=selectdvalue.value;
    }
 }
    
}