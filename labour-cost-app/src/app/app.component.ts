import { Component, NgModule, Renderer2 } from '@angular/core';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'labour-cost-app';

  testData : any = [{provider:"Direct Contractors", workers:13, complianceScore:0, grossPay:48158, payrollAdmin:'-'}, 
  {provider:"Canal Services Ltd", workers:1, complianceScore:0, grossPay:605, payrollAdmin:'-'},
  {provider:"CIS payments Ltd", workers:1, complianceScore:0, grossPay:2772, payrollAdmin:'-'},
  {provider:"Construction Management Limited", workers:1, complianceScore:0, grossPay:1586, payrollAdmin:'-'},
  {provider:"Hammer Pay Ltd", workers:4, complianceScore:0, grossPay:4409, payrollAdmin:'-'},
  {provider:"Northern Contracting Limited", workers:8, complianceScore:0, grossPay:10131, payrollAdmin:'-'},
  {provider:"Paddington Contracting Limited", workers:7, complianceScore:0, grossPay:1753, payrollAdmin:'-'},
  {provider:"Paul's Bulding Services Ltd", workers:1, complianceScore:0, grossPay:4500, payrollAdmin:'-'},
  {provider:"Personal Technology Limited", workers:1, complianceScore:0, grossPay:4014, payrollAdmin:'-'},
  {provider:"Reliable Security Ltd", workers:4, complianceScore:0, grossPay:9504, payrollAdmin:'-'},    
  {provider:"Senior Payroll Limited", workers:813, complianceScore:83, grossPay:1173494, payrollAdmin:'-'},
  {provider:"Simple Pay Limited", workers:10, complianceScore:0, grossPay:18711, payrollAdmin:'-'},  
  {provider:"The Agency Payroll Company Ltd", workers:1, complianceScore:0, grossPay:8494, payrollAdmin:'-'},
  {provider:"Tradies Ltd", workers:1, complianceScore:0, grossPay:1924, payrollAdmin:'-'},
  {provider:"Worker Exchange limited", workers:1, complianceScore:0, grossPay:421, payrollAdmin:'-'},  
  
  ];
  totalWorkers = 0;
  

  constructor(private renderer: Renderer2){
    this.totalWorkers = this.sumTotals("workers");
  }

  sortColumn(event: any, sort: string):void{    

    //const isSorted = event.target.classList.contains("sorted");
     this.renderer.addClass(event.target, 'sorted');

    this.testData = this.testData.sort((a,b) => {
      return b[sort] - a[sort];
    });

    if(sort === "provider"){
      let dirCont = this.testData.find(i => i.provider === "Direct Contractors");
      this.testData = this.testData.filter(i => i.provider !== "Direct Contractors");
      this.testData.unshift(dirCont);
    }

  }

  calculateWorkForce(workerCount:any):number{
    
    return (workerCount/this.totalWorkers) *100;
  }

  sumTotals(field: string):number{
    return this.testData.map(a => a[field]).reduce((a,b) => a + b, 0);
  }
  
}
