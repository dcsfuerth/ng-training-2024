import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErsteSeiteComponent } from './erste-seite.component';

describe('ErsteSeiteComponent', () => {
  let component: ErsteSeiteComponent;
  let fixture: ComponentFixture<ErsteSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErsteSeiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErsteSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
