import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  id: any;
  reportObj: any
  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.dataService.getUserList(this.id)
        .subscribe((data) => {
          console.log(data)
          this.reportObj = data
        },
          err => {

          })
    },
      err => {

      }
    )
  }

}