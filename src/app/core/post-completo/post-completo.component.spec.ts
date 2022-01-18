import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompletoComponent } from './post-completo.component';

describe('PostCompletoComponent', () => {
  let component: PostCompletoComponent;
  let fixture: ComponentFixture<PostCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
