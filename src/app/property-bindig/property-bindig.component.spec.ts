import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindigComponent } from './property-bindig.component';

describe('PropertyBindigComponent', () => {
  let component: PropertyBindigComponent;
  let fixture: ComponentFixture<PropertyBindigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBindigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBindigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
