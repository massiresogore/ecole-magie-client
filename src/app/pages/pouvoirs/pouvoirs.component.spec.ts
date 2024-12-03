import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PouvoirsComponent } from './pouvoirs.component';

describe('PouvoirsComponent', () => {
  let component: PouvoirsComponent;
  let fixture: ComponentFixture<PouvoirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PouvoirsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PouvoirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
