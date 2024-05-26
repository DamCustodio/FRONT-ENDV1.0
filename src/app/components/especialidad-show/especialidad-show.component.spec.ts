import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadShowComponent } from './especialidad-show.component';

describe('EspecialidadShowComponent', () => {
  let component: EspecialidadShowComponent;
  let fixture: ComponentFixture<EspecialidadShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecialidadShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
