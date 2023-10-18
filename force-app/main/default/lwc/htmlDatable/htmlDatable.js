import { LightningElement, track, wire } from 'lwc';

 // for search input
 import getrecord from'@salesforce/apex/FetchMenuitems.getrecord';

 //  Static resource images
import myResource from '@salesforce/resourceUrl/frontimg';
// import apex class for fetch the menu item records
 import getimg from '@salesforce/apex/fetchtheimages.getimg';



export default class HtmlDatable extends LightningElement {
    @wire(getimg)getimg;
    frontimg=myResource;
    dateFieldValue;
   @track imgList;
   @track error;
   inputValue='';


    handlesrch(event){
         this.inputValue = event.target.value;
    }

         handleclick(){
            getrecord({searchkey : this.inputValue})
            .then(result => {
                    this.imgList = result;
                    alert(JSON.stringify(this.imgList));
                    
                    
            })
            .catch(error => {
                console.log('Error Occured:- '+error.body.message);
            });

         }
       
    }