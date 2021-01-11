import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { sampleProduct } from 'src/app/fake-sample-product';


import { BankComponent } from './bank.component';

describe('BankComponent', () => {
  let component: BankComponent;
  let fixture: ComponentFixture<BankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.product = sampleProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should give the div the correct css-class, so that the bank logo is displayed', () => {
    let de = fixture.debugElement.query(By.css('.product__logo'));
    expect(de.classes.b72).toBeTruthy();
  })
});
