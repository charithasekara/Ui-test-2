import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComdaUiComponent } from './comda-ui.component';

describe('ComdaUiComponent', () => {
  let component: ComdaUiComponent;
  let fixture: ComponentFixture<ComdaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComdaUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComdaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
