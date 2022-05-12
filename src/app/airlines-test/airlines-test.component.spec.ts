import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesTestComponent } from './airlines-test.component';

describe('AirlinesTestComponent', () => {
  let component: AirlinesTestComponent;
  let fixture: ComponentFixture<AirlinesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
