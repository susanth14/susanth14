import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {
  constructor (private route:ActivatedRoute){}
    selecteditems: any [] = []
    ngOnInit(): void {
      this.route.queryParams.subscribe(params=>{
        if(params && params['items']){
      this.selecteditems=JSON.parse(params['items'])
      }}
      )

}
}