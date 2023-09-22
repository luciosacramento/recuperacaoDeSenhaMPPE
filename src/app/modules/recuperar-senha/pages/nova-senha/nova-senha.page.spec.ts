import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSenhaPage } from './nova-senha.page';

describe('NovaSenhaComponent', () => {
  let component: NovaSenhaPage;
  let fixture: ComponentFixture<NovaSenhaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaSenhaPage]
    });
    fixture = TestBed.createComponent(NovaSenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
