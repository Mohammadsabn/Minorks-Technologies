import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userForm!: FormGroup

  constructor(private router:Router,
    private http:HttpClient,
    private api:ApiserviceService){}
  output:any;
  ngOnInit(): void {
  //   this.api.getuser().subscribe((res)=>{
  //     console.log('get all',res);
  //     this.output=res.data;
  //   })
  }


  employeeId:any;
  register=new FormGroup<any>({
    employeeId: new FormControl('', [Validators.required])

  })
 login(item:any){
    console.log(item);
    // this.api.createData(item.employeeId).subscribe((res)=>{
    //   console.log(res,'Data added succerfully')
    // })

  //   this.http.post('http://localhost:3000/insert', item, { responseType: 'text' })
  // .subscribe(
  //   response => console.log(response),
  //   error => console.log(error)
  // );

  
  }

  get(){
    return this.login
  }


}