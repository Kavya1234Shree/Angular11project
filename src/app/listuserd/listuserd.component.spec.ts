import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserdComponent } from './listuserd.component';

describe('ListuserdComponent', () => {
  let component: ListuserdComponent;
  let fixture: ComponentFixture<ListuserdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
