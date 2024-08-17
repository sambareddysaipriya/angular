import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent 
{
    nam="BTS"
    total:number=7
    curdate:Date=new Date()
}
