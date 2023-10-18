import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
export default class LwcLDS extends LightningElement {

    @track inpName;
    @track inpPhone;
    @track inpIndustry;

    namechangehandler(event)
    {
         this.inpName = event.target.value;
         console.log(this.inpName);
    }

    phonechangehandler(event)
    {
         this.inpPhone =event.target.value;
    }

    industrychangehandler(event)
    {
       this.inpIndustry = event.target.value;
    }
     
    createaccounthandler(event)
    {
          
        const fields = {
            'Name' : this.inpName,
            'Phone' :this.inpPhone,
            'Industry':this.inpIndustry


        };
        
        const recordInput = { apiName: 'Account', fields };
        createRecord(recordInput).then(response=>{
            console.log('Record Was Created Succesfully---'+response.id);
        }).catch(error=>{
            console.log('Errror Message'+error.body.message);
        });
    }

}