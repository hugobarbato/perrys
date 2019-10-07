import { Component, OnInit } from '@angular/core';
 
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {  

  constructor(
    public service: StoreService
  ) { }

  ngOnInit() { } 

}
