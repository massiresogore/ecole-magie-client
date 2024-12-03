import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagiciensComponent } from '../magiciens.component';

describe('MagiciensComponent', () => {
  let component: MagiciensComponent;
  let fixture: ComponentFixture<MagiciensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagiciensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagiciensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
