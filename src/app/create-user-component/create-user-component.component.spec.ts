import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserComponentComponent } from './create-user-component.component';

describe('CreateUserComponentComponent', () => {
  let component: CreateUserComponentComponent;
  let fixture: ComponentFixture<CreateUserComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUserComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
