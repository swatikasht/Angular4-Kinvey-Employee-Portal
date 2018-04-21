export class Project{
	public _id:string;
	public projectName:string;
	public startDate:string;
	public endDate:string;
	public location:string;
	public empCount:string;
	
	constructor(project?){
		this._id = (project && project.id) || undefined;
		this.projectName = (project && project.projectName) || '';
		this.startDate = (project && project.startDate) || '';
		this.endDate = (project && project.endDate) || '';
		this.location = (project && project.location) || '';
		this.empCount = (project && project.empCount) || '';
	}
}




	
