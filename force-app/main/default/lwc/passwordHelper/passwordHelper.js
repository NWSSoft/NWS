import { LightningElement,api,wire } from 'lwc';
import loginForm1 from '@salesforce/apex/login.loginForm1';
import { CurrentPageReference } from 'lightning/navigation';
import { NavigationMixin } from 'lightning/navigation';
export default class PasswordHelper extends NavigationMixin(LightningElement) {
    // @api label;
    emailInp;
    GetEmail(event){
       this.emailInp=event.target.value;   
    }
//     @wire(CurrentPageReference)
// setCurrentPageReference(currentPageReference) {
//     this.parameter=currentPageReference.state?.record.Id;
//     console.log('parameter is '+this.parameter);
// }
    handleSubmit(event){
        loginForm1({ EmailInput: this.emailInp })
    .then((result) => {
        if(result){
            let record = result[0];// here if collect 1st element in array o/p:{Id: '1234', Name:'saranghae', Rating:'Hot'}
             alert('Correct user id is '+record.Id);
            //navigation....
            event.preventDefault();
            let componentDef = {
                componentDef: "c:forgotPasswordLWC",
                attributes: {
                    // label: 'Navigated From Another LWC Without Using Aura'
                  recordIdIs:record.Id
                }
            };
            // Encode the componentDefinition JS object to Base64 format to make it url addressable
            let encodedComponentDef = btoa(JSON.stringify(componentDef));
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: '/one/one.app#' + encodedComponentDef
                }
            });
        }
        else {
            alert('wrong user');
          }
    }).catch((e)=>{
        alert('error is'+JSON.stringify(e));
    }
        
    );
    }
}