import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FakeBackendService } from '../fake-backend.service';
import { Item } from '../item';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.scss']
})
export class ScrollerComponent {
  loading: boolean;
  showEndMessage: boolean = false;
  
  constructor(private fakeBackend: FakeBackendService) {
    
    this.intersectionOptions = {
      root: this.scrollContainer,
      rootMargin: '40px'
    }
    this.observer = new IntersectionObserver(this.intersectionCallback, this.intersectionOptions);
  }
  
  
  @ViewChild('triggerElement') triggerElement: ElementRef;
  @ViewChild('scrollContainer') scrollContainer: ElementRef;
  items: Item[] = [];
  
  observer: IntersectionObserver;
  intersectionOptions = {};
  intersectionCallback = (entries: any, observer: any) => {
    entries.forEach(async (entry: any) => {
      if (entry.isIntersecting) {
        this.loading = true;
        try {
          this.items = await this.fakeBackend.getItems();
        } catch (err) {
          this.showEndMessage = true; //TODO: Move logic out of try catch...
        } finally {
          this.loading = false;
        }
      }
    });
  }


  ngAfterViewInit(): void {
    this.observer.observe(this.triggerElement.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer.unobserve(this.triggerElement.nativeElement);
  }
}
