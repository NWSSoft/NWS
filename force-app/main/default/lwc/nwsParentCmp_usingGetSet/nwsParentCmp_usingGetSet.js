import { LightningElement,track } from 'lwc';

export default class NwsParentCmp_usingGetSet extends LightningElement {
    
@track nameVar;
@track ageVar;

@track student=[
            {'Name':'Adarsh','Age':26},
            {'Name':'Naina ','Age':30},
            {'Name':'vamsi','Age':28},
            {'Name':'rahul','Age':26},


];

addStudenthandler(event){
  this.nameVar=this.template.querySelector('lightning-input[data-recid=sun]').value;
  this.ageVar=this.template.querySelector('lightning-input[data-recid=mon]').value;
  alert(this.nameVar);
   alert(this.ageVar);
    this.student.push({Name:this.nameVar, Age:this.ageVar});

 }
}