import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoComponent } from './addpo.component';

describe('AddpoComponent', () => {
  let component: AddpoComponent;
  let fixture: ComponentFixture<AddpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
