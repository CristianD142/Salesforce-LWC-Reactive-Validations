import { LightningElement } from 'lwc';
import { areEqual } from 'c/util';

export default class AForm extends LightningElement {

    value1;
    value2;
    errorsField1 = [];
    errorsField2 = [];

    validate(){

        this.errorsField1 = [];
        this.errorsField2 = [];
        
        if(!areEqual(this.value1,this.value2)){
            this.errorsField1.push('error 1');
            this.errorsField2.push('error 2');
        }
    }

    updateValue1(event){
        this.value1 = event.detail.value;
    }

    updateValue2(event){
        this.value2 = event.detail.value;
    }

}