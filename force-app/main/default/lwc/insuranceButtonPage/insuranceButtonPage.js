import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class InsuranceButtonPage extends LightningElement {
    adminHomepage = true;
    agentPage = false;
    policyHolderPage =false;
    lifeInsurancePage = false;
    motorInsurancePage = false;
    showAgentmodel=false;
    showPHmodel = false;
//related to agent
    agenthandler(){
        this.adminHomepage = false;
        this.agentPage=true;
        this.showAgentmodel = false;
    }
    addAgentOnClick(){
        this.showAgentmodel=true;
    }
    agentHideModalBox(){
        this.showAgentmodel=false;
    }
    agentSaveOnsuccesss(){
        const toastEvent= new ShowToastEvent({
            title : 'Successfully',
            message : 'Record inserted successfully.',
            variant : 'success'
        });
        this.dispatchEvent(toastEvent);
        this.agentHideModalBox();
    }

    //related to policy holder
    policyhandler(){
        this.adminHomepage = false;
       this.policyHolderPage =true;
    }
    //related to life insurance
    lifeInsurncehandler(){
        this.adminHomepage = false;
        this.lifeInsurancePage = true;
    }

    //related to motor insurance
    motorinsurancehandler(){
        this.adminHomepage = false;
        this.motorInsurancePage = true;

    }
}