import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPostComponent } from './mini-post.component';

describe('MiniPostComponent', () => {
  let component: MiniPostComponent;
  let fixture: ComponentFixture<MiniPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
