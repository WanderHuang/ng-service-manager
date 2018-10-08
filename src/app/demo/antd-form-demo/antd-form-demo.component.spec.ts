import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdFormDemoComponent } from './antd-form-demo.component';

describe('AntdFormDemoComponent', () => {
  let component: AntdFormDemoComponent;
  let fixture: ComponentFixture<AntdFormDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdFormDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
