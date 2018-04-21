import { AbstractControl,ValidatorFn} from '@angular/forms';



export function startEndDateValidator(control:AbstractControl){
	console.log(control.value)
	// if(!control.value) return null;
	// var atPos= control.value.indexOf("@");
	// var dotPos= control.value.lastIndexOf(".");
	// return (atPos<1 || dotPos<atPos+2 || dotPos+2>=control.value.length) ? {"emailError": {value: control.value + " is not valid email"}} : null
}