import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Loc Pham';
  public age = 15;
  public traiCay = ['Tao', 'Nho', 'Cam', 'Quyt'];
  public traiCay2 = [
    { ten: 'Tao', gia: -100, haGia: true },
    { ten: 'Nho', gia: 900, haGia: false },
    { ten: 'Cam', gia: 200, haGia: false },
    {
      ten: 'Quyt',
      gia: 500,
      haGia: true,
    },
  ];

  public districts: string[] = ['quan / huyen'];
  public vietnamData = [
    { city: 'Chon TP', district: ['Quan / Huyen'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];

  constructor() {}
  public ngOnInit(): void {
    console.log('city = ', this.vietnamData);
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    console.log('event', city);
    if (!city) {
      return;
    }

    // cach 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);

    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }

    // cách 2

    this.districts =
      this.vietnamData.find((data) => data.city === city)?.district || [];
  }
}
