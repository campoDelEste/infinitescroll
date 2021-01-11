import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeBackendService } from '../fake-backend.service';
import { ScrollerComponent } from './scroller.component';

describe('ScrollerComponent', () => {
  let component: ScrollerComponent;
  let fixture: ComponentFixture<ScrollerComponent>;
  // faking asynchrony 
  let _delay = () => new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true);
    }, 3010);
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrollerComponent],
      providers: [FakeBackendService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Items from the (fake) backend service, when triggered through intersection Observer', async () => {
    component.intersectionCallback([{ isIntersecting: true }], null);
    await _delay(); //TODO: find more elegant solution 
    expect(component.items.length).toBeGreaterThan(0);
  });
});
