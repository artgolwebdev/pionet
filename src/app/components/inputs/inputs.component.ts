import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  containers:any=[];
  currentXumber:number=0;

  
  constructor(private api : ApiService) { }

  
  ngOnInit(): void {
    console.log(this.containers.length)
  }  

  getData(xnumber:any){
    //alert(xnumber);
    // 2AU9DFH
    this.currentXumber = xnumber;
    this.api.getContainer(xnumber).subscribe(response=>{
        if(response.code == 1){
          alert(response.errorMessage);
        }
        if(response.code == 0){
          this.containers = response.data;
          console.log(this.containers);
        }
    })
  }

  SMS(phone:any){
    this.api.doSMS(this.currentXumber,phone).subscribe(response=>{
      console.log(response);
      if(response.code == 0){
        alert('ok');
      }
      if(response.code == 3){
        alert(response.errorMessage);
      }
    })
  }

}
