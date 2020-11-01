import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryDescriptionComponent } from './brewery-description.component';

describe('BreweryDescriptionComponent', () => {
  let component: BreweryDescriptionComponent;
  let fixture: ComponentFixture<BreweryDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
