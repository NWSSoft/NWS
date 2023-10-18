import { LightningElement,track } from 'lwc';
import getAuthorizeMethod from '@salesforce/apex/CallOutSalesforceUtilController.getAuthorizeMethod';
import getAccountRec from '@salesforce/apex/CallOutSalesforceUtilController.getAccountRec';
import { NavigationMixin } from 'lightning/navigation';
 
export default class Salesforce_integration_lwc extends NavigationMixin(LightningElement) {
 
    @track anon;
    @track anon1;


 
    authorizeHandler()
    {
        getAuthorizeMethod().then(result => {
                this.anon = result;
                alert(result);
                 
                    // Navigate to the Account home page
                    this[NavigationMixin.Navigate]({
                        type: 'standard__webPage',
                        attributes: {
                            
                            url : this.anon
                        },
                    });
            })
            .catch(error => {
                this.error = error;
            });
    }
 
    getrecordHandler()
    {
        getAccountRec({recid:'0012w00001LZRzAAAX'}).then(result => {
            this.anon1 = result;
            alert(result);
            
        })
        .catch(error => {
            this.error = error;
        });
    }
}