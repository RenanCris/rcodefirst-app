import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAutorComponent } from './pagina-autor.component';

describe('PaginaAutorComponent', () => {
  let component: PaginaAutorComponent;
  let fixture: ComponentFixture<PaginaAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
