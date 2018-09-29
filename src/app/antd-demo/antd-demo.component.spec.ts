import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdDemoComponent } from './antd-demo.component';

describe('AntdDemoComponent', () => {
  let component: AntdDemoComponent;
  let fixture: ComponentFixture<AntdDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
