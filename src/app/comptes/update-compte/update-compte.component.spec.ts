import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteComponent } from './update-compte.component';

describe('UpdateCompteComponent', () => {
  let component: UpdateCompteComponent;
  let fixture: ComponentFixture<UpdateCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
