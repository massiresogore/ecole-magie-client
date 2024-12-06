import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagicienInfoComponent } from '../magicien-info/magicien-info.component';

describe('MagicienInfoComponent', () => {
  let component: MagicienInfoComponent;
  let fixture: ComponentFixture<MagicienInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicienInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicienInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
