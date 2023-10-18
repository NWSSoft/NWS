import { LightningElement,track,wire } from 'lwc';
import latestShelter from '@salesforce/apex/showShelter.latestShelter';
export default class ShowLatestSheltor extends LightningElement {

@track shelterlist;
error;
@track recordId;
@wire(latestShelter) ShelterImages({data,error}){
 if(data){
        this.shelterlist=data;
    }
    if(error){
        this.error=error;
    }
}
nameClick(event){ 
    this.recordId=event.target.name;
    alert(JSON.stringify(this.recordId));
    } 
    }