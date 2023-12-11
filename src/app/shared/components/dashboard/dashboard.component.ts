import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { Ipost } from '../../module.ts/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit, OnDestroy {


  public latestResult: Ipost[] = [];
  public timeSpent: Ipost[] = [];
  public userData: any = [];
  public TodaysDate!: Date;
  public subscription: Subscription = new Subscription()
  day: any;
  constructor(
    private _apiService: ApiService
  ) { }

  ngOnInit(): void {




    this.TodaysDate = new Date()
    this.subscription.add(
      this._apiService.getAllData()
        .subscribe(res => {
          this.userData = res.userData[ 0 ]
          console.log(this.userData)
          this.latestResult = res[ 'lastestResults' ]
          this.latestResult.forEach(e => {
            e.score = +e.score.slice(0, 2)
          })
          for (let key in res[ 'timeSpentData' ].days) {
            console.log(res[ 'timeSpentData' ].days)

            let obj = {
              title: key,
              ...res[ 'timeSpentData' ].days[ key ]
            }
            console.log(obj)
            this.timeSpent.push(obj)

          }
          console.log(this.timeSpent)
        })


    )
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
