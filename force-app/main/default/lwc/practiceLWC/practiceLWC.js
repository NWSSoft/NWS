import { LightningElement,track,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
// import wantAltubhabi from '@salesforce/apex/bhabhicomeon.wantAltubhabi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LeadSource from '@salesforce/schema/Contact.LeadSource';
export default class PracticeLWC extends LightningElement {

    showValidation;
  @track accsearch;
  contacts;
  error;
    changehandler(event){
     this.accsearch = event.target.value;
    }

    handleClick(){
        wantAltubhabi()
        .then(result => {
            this.contacts = result;
        })
        .catch(error => {
            this.error = error;
            console.log(this.error);
        });
}
@wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
contactInfo;

@wire(getPicklistValues,
    {
        recordTypeId: '$contactInfo.data.defaultRecordTypeId',
        fieldApiName: LeadSource
    }
)
leadSourceValues;

  handleFocus() {
    this.showValidation = true;
  }
  handleBlur() {
    this.showValidation = false;
  }
  handleChange(event) {
    // Validate lowercase letters
    let passwordValue = event.target.value;
    var lowerCaseLetters = /[a-z]/g;
    if (passwordValue.match(lowerCaseLetters)) {
      this.template
        .querySelector('[data-id="letter"]')
        .classList.remove("invalid");
      this.template.querySelector('[data-id="letter"]').classList.add("valid");
    } else {
      this.template
        .querySelector('[data-id="letter"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="letter"]')
        .classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (passwordValue.match(upperCaseLetters)) {
      this.template
        .querySelector('[data-id="capital"]')
        .classList.remove("invalid");
      this.template.querySelector('[data-id="capital"]').classList.add("valid");
    } else {
      this.template
        .querySelector('[data-id="capital"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="capital"]')
        .classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (passwordValue.match(numbers)) {
      this.template
        .querySelector('[data-id="number"]')
        .classList.remove("invalid");
      this.template.querySelector('[data-id="number"]').classList.add("valid");
    } else {
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
    } else {
      this.template
        .querySelector('[data-id="length"]')
        .classList.remove("valid");
      this.template
        .querySelector('[data-id="length"]')
        .classList.add("invalid");
    }
  }
    }