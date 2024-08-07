import { api, LightningElement } from 'lwc';

export default class Text extends LightningElement {

    @api errors;
    @api value;
    
    get formatedErrors(){
        return this.errors.map((value, index) =>{
            return {value:value,index:index + 1}
        });
    }

    handleChange(eventSource){
        const event = new CustomEvent('change',{detail:eventSource.detail});        
        this.dispatchEvent(event);
    }

}