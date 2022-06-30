import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsEntrepriseComponent } from './gestions-entreprise.component';

describe('GestionsEntrepriseComponent', () => {
  let component: GestionsEntrepriseComponent;
  let fixture: ComponentFixture<GestionsEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionsEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
