import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntdBackgroundComponent } from './antd-background.component';

describe('AntdBackgroundComponent', () => {
  let component: AntdBackgroundComponent;
  let fixture: ComponentFixture<AntdBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntdBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntdBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
