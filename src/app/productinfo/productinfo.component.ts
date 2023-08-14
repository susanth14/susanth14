import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit{
  user:any
  image!:string;
  name!:string;
  description!:string;
  constructor (private route:ActivatedRoute){}
  ngOnInit(){
      this.route.queryParams.subscribe(params => {
        this.image =params['image'];
        this.description = params['description'];
        this.name = params['name'];
        })
      }
    }






