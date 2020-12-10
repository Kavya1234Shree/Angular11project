import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserdComponent } from './adduserd.component';

describe('AdduserdComponent', () => {
  let component: AdduserdComponent;
  let fixture: ComponentFixture<AdduserdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
