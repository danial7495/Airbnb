import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let toggleButton = document.querySelector('.btn') as HTMLElement;
    let container = document.querySelector('.drop-down');

    toggleButton.addEventListener('click', function() {
      console.log("schon ausgeführt");
      container?.classList.toggle("active");
    });
  }
}
