import { Component } from '@angular/core';

@Component({
  selector: 'app-dance',
  templateUrl: './dance.component.html',
  styleUrl: './dance.component.css'
})
export class DanceComponent 
{
  google=false;
  IBM=false;
  Amazon=false;
  Flipkart=false;
  saveForm(myform:any):void{
    console.log(myform)
  }
}
