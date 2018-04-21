import { AbstractControl,ValidatorFn} from '@angular/forms';

export function forbiddenNameValidator(name: string): ValidatorFn{
	return (function(control:AbstractControl){
		if(control.value === name){
			return {"forbiddenName": {value: "Name cannot be "+ control.value }}
		}else{
			return null;
		}
	})
}

export function isNumberValidator(control:AbstractControl){
	if((control.value == "")|| (!isNaN(control.value))){
		return null;
	}else {
		return {"numberError": {value: control.value + " is not a number"}}
	}
}

export function phoneNoValidator(control:AbstractControl){
		if(!control.value){
			return null;
		}else {
			return ((control.value > 999999999) && (control.value.length == 10)) ? null : {"phoneNo": {value: control.value + " is not valid number"}}
		}
}

export function emailFormatValidator(control:AbstractControl){
	if(!control.value) return null;
	var atPos= control.value.indexOf("@");
	var dotPos= control.value.lastIndexOf(".");
	return (atPos<1 || dotPos<atPos+2 || dotPos+2>=control.value.length) ? {"emailError": {value: control.value + " is not valid email"}} : null
}
