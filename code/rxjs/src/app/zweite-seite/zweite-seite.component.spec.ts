import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZweiteSeiteComponent } from './zweite-seite.component';

describe('ZweiteSeiteComponent', () => {
  let component: ZweiteSeiteComponent;
  let fixture: ComponentFixture<ZweiteSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZweiteSeiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZweiteSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
