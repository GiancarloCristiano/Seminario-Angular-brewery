import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryContactComponent } from './brewery-contact.component';

describe('BreweryContactComponent', () => {
  let component: BreweryContactComponent;
  let fixture: ComponentFixture<BreweryContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
