import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MycomponentPage } from './mycomponent.page';

describe('MycomponentPage', () => {
  let component: MycomponentPage;
  let fixture: ComponentFixture<MycomponentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MycomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
