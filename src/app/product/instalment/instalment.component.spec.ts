import localeDE from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDE, 'de');
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { sampleProduct } from 'src/app/fake-sample-product';

import { InstalmentComponent } from './instalment.component';

describe('InstalmentComponent', () => {
  let component: InstalmentComponent;
  let fixture: ComponentFixture<InstalmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstalmentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalmentComponent);
    component = fixture.componentInstance;
    fixture.componentInstance.product = sampleProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
