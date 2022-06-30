import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComptesComponent } from './liste-comptes.component';

describe('ListeComptesComponent', () => {
  let component: ListeComptesComponent;
  let fixture: ComponentFixture<ListeComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
