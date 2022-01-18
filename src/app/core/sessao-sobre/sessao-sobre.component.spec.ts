import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessaoSobreComponent } from './sessao-sobre.component';

describe('SessaoSobreComponent', () => {
  let component: SessaoSobreComponent;
  let fixture: ComponentFixture<SessaoSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessaoSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessaoSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
