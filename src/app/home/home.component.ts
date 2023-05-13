import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = "Loc Pham"
  public age = 15;
  public traiCay = ['Tao', 'Nho', 'Cam', 'Quyt']

  constructor() { }
  public ngOnInit(): void {
    console.log('trai cay = ', this.traiCay)
  }

}
