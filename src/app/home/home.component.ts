import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, tap } from 'rxjs';
import { Albums } from '../albums';

import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count = 1;
  inputString: string = "";
  getDataString : Albums[] = [];
  public http$! : Observable<Albums[]>;

  constructor(private http: HttpClient, private getDataService : GetDataService) { }

  @ViewChild('input', {static: true}) input? : ElementRef;

  ngOnInit(): void {
    fromEvent(this.input?.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(item => (item.target as HTMLInputElement).value)
      /* tap(i => console.log(i)) */
    ).subscribe(
     i => this.inputString = i
    );

   /*  this.getDataService.getAll().pipe(
      map((item) => item.filter((item) => item.id = 1)),
    ).subscribe(
      i => this.getDataString = i
    ); */

  }

}
