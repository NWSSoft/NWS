import { LightningElement } from 'lwc';
import Donationlogo from "@salesforce/resourceUrl/wellcomepagelogo";
export default class Donationwelcomepage extends LightningElement {
donlogo=Donationlogo;
handledonor(){
    alert('donor is click');
}
handleShelter(){
    alert('shelter home is click');
}
}