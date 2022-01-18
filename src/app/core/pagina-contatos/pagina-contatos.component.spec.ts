import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaContatosComponent } from './pagina-contatos.component';

describe('PaginaContatosComponent', () => {
  let component: PaginaContatosComponent;
  let fixture: ComponentFixture<PaginaContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
