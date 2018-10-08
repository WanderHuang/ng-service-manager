import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdTableDemoComponent } from './antd-table-demo.component';

describe('AntdTableDemoComponent', () => {
  let component: AntdTableDemoComponent;
  let fixture: ComponentFixture<AntdTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
