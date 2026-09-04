import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercicios04 } from './exercicios04';

describe('Exercicios04', () => {
  let component: Exercicios04;
  let fixture: ComponentFixture<Exercicios04>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercicios04],
    }).compileComponents();

    fixture = TestBed.createComponent(Exercicios04);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
