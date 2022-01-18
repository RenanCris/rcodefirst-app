import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoIntroComponent } from './sessao-intro.component';

describe('SessaoIntroComponent', () => {
  let component: SessaoIntroComponent;
  let fixture: ComponentFixture<SessaoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
