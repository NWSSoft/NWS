import { LightningElement, track, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import fetchSpecificPaymentLinksById from '@salesforce/apex/Rozarpay.fetchSpecificPaymentLinksById';

export default class SuccessPage extends LightningElement {
    @track paymentId;
    paymentLinkId;
    @wire(CurrentPageReference)
    setCurrentPageReference(currentPageReference) {
        this.paymentLinkId = currentPageReference.state?.razorpay_payment_link_id;
        console.log('Payment link id is '+this.paymentLinkId);
    }
    connectedCallback(){
        fetchSpecificPaymentLinksById({paymentLinkId : this.paymentLinkId}).then(result =>{
            console.log('result is '+result);
            this.paymentId = result;
        })
        .catch(error =>{
            console.log('error is '+JSON.stringify(error));
        })
    }
}