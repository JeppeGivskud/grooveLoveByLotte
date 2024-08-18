import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriComponent } from './galleri.component';

describe('GalleriComponent', () => {
  let component: GalleriComponent;
  let fixture: ComponentFixture<GalleriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
