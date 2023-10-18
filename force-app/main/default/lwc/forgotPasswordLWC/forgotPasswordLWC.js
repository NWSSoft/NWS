import { LightningElement,api } from 'lwc';
// import NAME_FIELD from '@salesforce/schema/Shelter_Home__c.Name';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
// import ACCOUNT_OBJECT from '@salesforce/schema/Shelter_Home__c';
import { NavigationMixin } from 'lightning/navigation';
export default class ForgotPasswordLWC extends NavigationMixin(LightningElement) {
    @api recordIdIs;
    showValidation=false;
    // @api objectApiName;
    // objectApiName = ACCOUNT_OBJECT;
    // nameField = NAME_FIELD;
    handleSuccess(event) {
      const toastEvent = new ShowToastEvent({
        title: 'Toast message',
        message: 'Password has been Updated Successfully',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(toastEvent);
//Navigate to home page.....
this[NavigationMixin.Navigate]({
  "type": "standard__webPage",
  "attributes": {
      "url": "https://nwssoft2022-dev-ed.develop.lightning.force.com/lightning/page/home"
  }
});
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    
    handleMouse(){
      this.showValidation=true;
    }
    handleChange(event) {
    // Validate lowercase letters
    event.preventDefault();
    this.showValidation=true;
    let passwordValue = event.target.value;
   
    var lowerCaseLetters = /[a-z]/g ;
    if (passwordValue.match(lowerCaseLetters)) {
      this.template.querySelector('[data-id="letter"]').classList.remove("invalid");
      this.template.querySelector('[data-id="letter"]').classList.add("valid"); 
    }
     else {
      this.template
        .querySelector('[data-id="letter"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="letter"]')
        .classList.add("invalid");
    }

//   Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (passwordValue.match(upperCaseLetters)) {
      this.template
        .querySelector('[data-id="capital"]')
        .classList.remove("invalid");
      this.template.querySelector('[data-id="capital"]').classList.add("valid");
    } 
else {
      this.template
        .querySelector('[data-id="capital"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="capital"]')
        .classList.add("invalid");
    }

//      Validate numbers
    var numbers = /[0-9]/g;
    if (passwordValue.match(numbers)) {
      this.template
        .querySelector('[data-id="number"]')
        .classList.remove("invalid");
      this.template.querySelector('[data-id="number"]').classList.add("valid");
    } 
else {
      this.template
        .querySelector('[data-id="number"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="number"]')
        .classList.add("invalid");
    }

     // Validate length
    if (passwordValue.length >= 8) {
      this.template
        .querySelector('[data-id="length"]')
        .classList.remove("invalid");
      this.template.querySelector('[data-id="length"]').classList.add("valid");
    } 
    else {
      this.template
        .querySelector('[data-id="length"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="length"]')
        .classList.add("invalid");
     }
      
   
    }
  }