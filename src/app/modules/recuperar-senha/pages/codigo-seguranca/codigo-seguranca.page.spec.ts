import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoSegurancaPage } from './codigo-seguranca.page';

describe('CodigoSegurancaPage', () => {
  let component: CodigoSegurancaPage;
  let fixture: ComponentFixture<CodigoSegurancaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodigoSegurancaPage]
    });
    fixture = TestBed.createComponent(CodigoSegurancaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
