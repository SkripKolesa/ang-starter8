import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleShellComponent } from './example-shell.component';

describe('ExampleShellComponent', () => {
  let component: ExampleShellComponent;
  let fixture: ComponentFixture<ExampleShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
