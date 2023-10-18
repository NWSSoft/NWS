import { LightningElement} from 'lwc';
import DonorLogin from '@salesforce/apex/LoginformDonorApexClass.DonorLogin';
import { NavigationMixin } from "lightning/navigation";

export default class LoginFormForSheltor extends NavigationMixin(LightningElement){
username;
password;

  usernameClick(event) {
    this.username = event.target.value;
  }
  passwordClick(event) {
    this.password = event.target.value;
  }
   HandleCancel(event){
     this.template.querySelectorAll('lightning-input[data-id="reset"]').forEach(element => {
      element.value = null;
    });
   }
  HandleLogin() {
    DonorLogin({ username: this.username, password: this.password })
      .then((result) => {//here result is array of object o/p:[{Id: '1234', Name:'saranghae', Rating:'Hot'}]
        if (result) {
          let record = result[0];// here if collect 1st element in array o/p:{Id: '1234', Name:'saranghae', Rating:'Hot'}
          alert('the data is'+JSON.stringify(result));    
          alert('Correct user id is '+record.Id);// record.id = 1234
          this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes: {
              objectApiName: 'Donor__c',
              actionName: 'view',
              recordId: record.Id
 }
          });

        }
        else {
          alert('wrong user');
        }
      })
      .catch((error) => {
        console.log('error occured. '+JSON.stringify(error));
      });
  }
  
}