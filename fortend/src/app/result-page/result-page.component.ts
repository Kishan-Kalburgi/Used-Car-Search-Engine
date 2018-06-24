import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css'],
  providers:[DatePipe]
})
export class ResultPageComponent implements OnInit {

  id: any;
  reportObj: any
  purchaseDay:any
  purchaseDiscount:any
  constructor(private route: ActivatedRoute, private dataService: DataService,private datePipe: DatePipe) { }

  ngOnInit() {
    console.log(this.datePipe.transform(new Date(),'dd'));
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.dataService.getUserList(this.id)
        .subscribe((data:any) => {
          console.log(data)
          this.reportObj = data.data[0]
          this.purchaseDay = this.datePipe.transform(this.reportObj.purchaseDate,'dd')
          this.purchaseDiscount = this.purchaseDay % 2 == 0 ? 40 : 30
        },
          err => {

          })
    },
      err => {

      }
    )
  }

}