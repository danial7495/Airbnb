import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const dropNav = document.querySelector(".dropNav");
    const modal = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");
    dropNav?.addEventListener('click', function() {
      modal?.classList.toggle("open-modal");
    });

    closeBtn?.addEventListener('click', function() {
      modal?.classList.remove("open-modal");
    });

    const regBtn = document.querySelector("active2");

    regBtn?.addEventListener('click', function() {
      dropNav?.classList.add("visHidden");
    });
  }

}
