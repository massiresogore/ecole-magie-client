import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PouvoirslistComponent } from './pouvoirslist.component';

describe('PouvoirslistComponent', () => {
  let component: PouvoirslistComponent;
  let fixture: ComponentFixture<PouvoirslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PouvoirslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PouvoirslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
