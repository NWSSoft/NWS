import { LightningElement,wire,api,track } from 'lwc';
import getrequestrecords from '@salesforce/apex/requestfetch.getrequestrecords';
import moregetrequestrecords from '@salesforce/apex/requestfetch.moregetrequestrecords';
import senPaymentLink from '@salesforce/apex/Rozarpay.senPaymentLink';
import { NavigationMixin } from 'lightning/navigation';
export default class RequestForShelter extends NavigationMixin(LightningElement) {

  @track requestId;

@api reqRec;
@api error;
 @track isShowModal = false;
   // @track isShowlink = false;
    error;
    customerName;
    customerAmount;
customerEmail;
customerPhone;
 @wire(getrequestrecords) wiredAccounts({ error, data }) {
        if (data) {
            this.reqRec = data;
        } else if (error) {
            this.error = error;
        }
    };


 showMoreHandler()
 {
 moregetrequestrecords()
      .then((result) => {
        this.reqRec = result;
      })
      .catch((error) => {
        this.error = error;
      });
 }
 
    showModalBox(event) {  
      this.requestId=event.target.dataset.recid;
      console.log('request Id is '+this.requestId);
        this.isShowModal = true;

    }
  navigateToWebPage() {
        senPaymentLink({name:this.customerName,contact:this.customerPhone,amount:this.customerAmount,email:this.customerEmail, requestId:this.requestId})
      .then((result) => {
        //this.Url = result;
       //alert('result............'+result);
        // Navigate to a URL
        this.isShowModal = false;
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: result

            }
        },
        true // Replaces the current page in your browser history with the URL
      );
        
      })
      .catch((error) => {
        this.error = error;
      });
       
       
    }

    hideModalBox() {  

        this.isShowModal = false;

    }

    name(event){

this.customerName=event.target.value;

console.log(this.customerName);

    }

    email(event){

this.customerEmail=event.target.value;

console.log(this.customerEmail);

    }
    Amount(event){

        this.customerAmount=(event.target.value)*100;
        
        console.log(this.customerAmount);
        
            }
            contact(event){

                this.customerPhone=event.target.value;
                
                console.log(this.customerPhone);
                
                    }
}