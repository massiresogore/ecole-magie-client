import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UibuttonblockComponent } from './uibuttonblock.component';

describe('UibuttonblockComponent', () => {
  let component: UibuttonblockComponent;
  let fixture: ComponentFixture<UibuttonblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UibuttonblockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UibuttonblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
