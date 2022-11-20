import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseStyleBindingComponent } from './classe-style-binding.component';

describe('ClasseStyleBindingComponent', () => {
  let component: ClasseStyleBindingComponent;
  let fixture: ComponentFixture<ClasseStyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasseStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasseStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
