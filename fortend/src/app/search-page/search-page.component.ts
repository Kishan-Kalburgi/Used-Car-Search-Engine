import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  car: Car;
  step: string;
  isSubmitted = false;
  model = ["Civic", "Odyssey", "Pilot", "Accord"]
  features = []

  constructor(private router: Router, private dataService: DataService) { 
    this.car = new Car;
    this.car.model = this.model[0];
    this.step = "1";
  }

  ngOnInit() {
  }

  addFeatures(item){
    if(this.features.includes(item)){
      this.features.splice(this.features.indexOf(item),1)
    }else{
      this.features.push(item)
    }
    
  }

  onFormNext({ value, valid }: { value: Car, valid: boolean }) {
    this.isSubmitted = true;
    this.step = "2";
    this.car = value;
  }

  onFormSubmit({ value, valid }: { value: Car, valid: boolean }) {
    this.isSubmitted = true
    console.log(value)
    // console.log(this.user);
    // console.log('valid: ' + valid);
    if (valid) {
      this.car.features = this.features.toString();
      // this.car.features = value.features;
    this.car.purchaseDate = value.purchaseDate;
      console.log(this.car);
      console.log('valid: ' + valid);      
      this.dataService.addUser(this.car)
        .subscribe((data :any) => {
          console.log(data)
          
          console.log("success")
          this.router.navigate(['/result/'+ data.id])
        },
          error => {
            console.log("Error Occured")
          });
    }
  }

}
