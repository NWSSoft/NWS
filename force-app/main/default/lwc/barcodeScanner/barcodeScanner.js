import { LightningElement } from 'lwc';

export default class BarcodeScanner extends LightningElement {

    myScannerOptions(){
    const myScannerOptions = {
        barcodeTypes: ["CODE_128", "QR", "EAN_13"],
        scannerSize: "LARGE",
      };
    }
}