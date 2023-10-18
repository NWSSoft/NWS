import { LightningElement,wire } from 'lwc';
 
import getimg from '@salesforce/apex/fetchtheimages.getimg';


export default class DesignMenuItem extends LightningElement {
    @wire(getimg) getimg;
   




}