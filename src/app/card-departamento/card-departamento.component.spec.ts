import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepartamentoComponent } from './card-departamento.component';

describe('CardDepartamentoComponent', () => {
  let component: CardDepartamentoComponent;
  let fixture: ComponentFixture<CardDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
