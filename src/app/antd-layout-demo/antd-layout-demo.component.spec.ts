import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdLayoutDemoComponent } from './antd-layout-demo.component';

describe('AntdLayoutDemoComponent', () => {
  let component: AntdLayoutDemoComponent;
  let fixture: ComponentFixture<AntdLayoutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdLayoutDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdLayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
