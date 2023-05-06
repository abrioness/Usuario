import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatoUsuarioPage } from './dato-usuario.page';

describe('DatoUsuarioPage', () => {
  let component: DatoUsuarioPage;
  let fixture: ComponentFixture<DatoUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatoUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
