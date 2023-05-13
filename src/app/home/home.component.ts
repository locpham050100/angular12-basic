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
  public traiCay2 = [{ ten: 'Tao', gia: -100, haGia: true }, { ten: 'Nho', gia: 900, haGia: false }, { ten: 'Cam', gia: 200, haGia: false }, { ten: 'Quyt', gia: 500, haGia: true }]

  constructor() { }
  public ngOnInit(): void {
    console.log('trai cay = ', this.traiCay)
  }

}
