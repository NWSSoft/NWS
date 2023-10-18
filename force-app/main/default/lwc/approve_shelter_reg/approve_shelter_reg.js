import { LightningElement} from 'lwc';
import shleter_obj from '@salesforce/schema/approve_shelter__c';
import NAME_FIELD from '@salesforce/schema/approve_shelter__c.Name';

import Address__FIELD from '@salesforce/schema/approve_shelter__c.Address__c';
fields = [NAME_FIELD,Address__FIELD,Gender__FIELD,Designation__FIELD,Mobile_number__FIELD,Causes_You_Support__FIELD,Last_Year_s_Income__FIELD,Last_Year_s_Expenditure__FIELD,Registration_of_NGO_as__FIELD,PAN__FIELD,X80G_Registration_Number__FIELD,X12A_Registration_Number__FIELD];
export default class Approve_shelter_reg extends LightningElement

{
 


      objectApiName=shleter_obj;
   
}