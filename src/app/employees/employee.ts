export class Employee{
	public _id:string;
	public firstName:string;
	public lastName:string;
	public email:string;
	public title:string;
	public language:string;
	public dob:string;
	public phone:string;
	public address:string;
	public salary:string;
	public gender:string;
	public family:string;
	public projectName:string;
	//public address:Address;

	constructor(employee?){
		this._id = (employee && employee.id) || undefined;
		this.firstName = (employee && employee.firstName) || '';
		this.lastName = (employee && employee.lastName) || '';
		this.email = (employee && employee.email) || '';
		this.title = (employee && employee.title) || '';
		this.language = (employee && employee.language) || '';
		this.dob = (employee && employee.dob) || '';
		this.phone = (employee && employee.phone) || '';
		this.address = (employee && employee.address) || '';
		this.salary = (employee && employee.salary) || '';
		this.gender = (employee && employee.gender) || '';
		this.family = (employee && employee.family) || '';
		this.projectName = (employee && employee.projectName) || '';

		//this.address = employee.address || '';
	}
}

// export class Address {
//   constructor(
//   public street : string,
//   public city : string,
//   public state : string,
//   public zip : string,
// 	){}
// }



	
