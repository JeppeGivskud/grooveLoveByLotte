import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvemerjegComponent } from './hvemerjeg.component';

describe('HvemerjegComponent', () => {
  let component: HvemerjegComponent;
  let fixture: ComponentFixture<HvemerjegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HvemerjegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvemerjegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
