import { Component, HostListener, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuItems = [
    {
      title: 'Espresso',
      description: 'Our espresso is made with selected beans and freshly roasted.',
      image: 'assets/about_IMG.jpg'
    },
    {
      title: 'Cappuccino',
      description: 'Creamy cappuccino with a touch of cinnamon and cocoa powder.',
      image: 'assets/about_IMG.jpg'
    },
    {
      title: 'Latte Macchiato',
      description: 'Steamed milk with a touch of espresso, served in layers.',
      image: 'assets/about_IMG.jpg'
    },
    {
      title: 'Mocha',
      description: 'Espresso with chocolate and steamed milk, topped with whipped cream.',
      image: 'assets/about_IMG.jpg'
    }
  ];

  currentSlide = 0;
  itemsPerSlide = 3;
  totalSlides = 0;
  windowWidth = window.innerWidth;

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
    this.updateCarouselSettings();
  }

  ngOnInit() {
    this.updateCarouselSettings();
  }

  private updateCarouselSettings() {
    if (this.windowWidth <= 768) {
      this.itemsPerSlide = 1;
    } else if (this.windowWidth <= 1024) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }
    
    this.totalSlides = Math.ceil(this.menuItems.length / this.itemsPerSlide);
    this.currentSlide = Math.min(this.currentSlide, this.totalSlides - 1);
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.totalSlides - 1;
    }
  }
}
