import { LightningElement,wire,track } from 'lwc';


 import getrecord from '@salesforce/apex/FetchMenuitems.getrecord';

export default class SearchMenu extends LightningElement {

    @track fetchvalue;
    searchValue='';
    @wire(getrecord)getrecord;



    searchKeyword(event){
        this.searchValue= event.target.value;
    }

    handleSearchKeyword(){
      
        getrecord({searchkey: this.searchValue})
                .then((data) =>{
                    this.fetchvalue=data;
                })
                .catch((error)=>{
                   this.fetchvalue=undefined;
                });
    }


}