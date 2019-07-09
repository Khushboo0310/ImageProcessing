import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPluginComponent } from './show-plugin.component';

describe('ShowPluginComponent', () => {
  let component: ShowPluginComponent;
  let fixture: ComponentFixture<ShowPluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
