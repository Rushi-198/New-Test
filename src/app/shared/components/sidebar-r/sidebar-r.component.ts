import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Ipost } from '../../module.ts/post';

@Component({
  selector: 'app-sidebar-r',
  templateUrl: './sidebar-r.component.html',
  styleUrls: [ './sidebar-r.component.scss' ]
})
export class SidebarRComponent implements OnInit, OnChanges {


  @Input() userObj!: any
  remindersArray: any[] = [];
  coursesArray: any[] = [];



  constructor() { }


  ngOnInit(): void {


  }



  ngOnChanges(changes: SimpleChanges): void {

    console.log();
    if (this.userObj) {

      this.remindersArray = this.userObj.reminders
      this.coursesArray = this.userObj.courses


      let arr = []
      for (let key in this.userObj.courses) {
        let obj = {
          subject: key,
          value: this.userObj.courses[ key ].slice(0, 2)
        }


        arr.push(obj)
      }
      this.coursesArray = arr

    }

    console.log(this.userObj);


  }




  openNav(mySidenav: HTMLElement) {
    mySidenav.classList.add('width-300')
  }

  openNav2(mySidenav: HTMLElement) {
    mySidenav.classList.add('width-300')
  }


  closeNav(mySidenav: HTMLElement) {
    mySidenav.classList.remove('width-300')
  }
  closeNav2(mySidenav: HTMLElement) {
    mySidenav.classList.remove('width-300')
  }
}
