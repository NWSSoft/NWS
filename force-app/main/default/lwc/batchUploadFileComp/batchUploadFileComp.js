import { LightningElement,api } from 'lwc';
import loadData from '@salesforce/apex/FileUploadController.loadData';

export default class BatchUploadFileComp extends LightningElement {
        @api
        myRecordId;
    
        get acceptedFormats() {
            return ['.pdf', '.png', '.xml','.docx',];
        }
    
        handleUploadFinished(event) {
            // Get the list of uploaded files
            const uploadedFiles = event.detail.files;
            alert('No. of files uploaded : ' + uploadedFiles.length);
        }
        handleFileUpload(event) {
            const files = event.detail.files;
        
            if (files.length > 0) {
              const file = files[0];
              
              // start reading the uploaded csv file
              this.read(file);
            }
          }
          
          async read(file) {
            try {
              const result = await this.load(file);
              
              // execute the logic for parsing the uploaded csv file
              this.parse(result);
            } catch (e) {
              this.error = e;
            }
          }
        
          async load(file) {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
        
              reader.onload = () => {
                resolve(reader.result);
              };
              reader.onerror = () => {
                reject(reader.error);
              };
              reader.readAsText(file);
            });
          }
    }