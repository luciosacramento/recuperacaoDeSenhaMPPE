import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuSenhaPage } from './esqueceu-senha.page';

describe('EsqueceuSenhaComponent', () => {
  let component: EsqueceuSenhaPage;
  let fixture: ComponentFixture<EsqueceuSenhaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsqueceuSenhaPage]
    });
    fixture = TestBed.createComponent(EsqueceuSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
