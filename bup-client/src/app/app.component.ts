import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  students:any;
  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/v1/students').subscribe(data=>{
      this.students = data;
    });
  }


  onSave(id:any, name:any, age:any, science:any, math:any)
  {
    console.log(name.value);
    console.log(age.value);
    this.http.post('http://localhost:3000/api/v1/student', {
      "id": id.value,
      "name":name.value,
      "age": age.value,
      "marks" : {
        "math": math.value,
        "science": science.value
      }
    }).subscribe(data=>{
      //this.students = data;
      console.log(data);
      this.students.push(data);
    });
  }
}
