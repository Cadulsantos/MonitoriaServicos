import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogErroServicoComponent } from './log-erro-servico.component';

describe('LogErroServicoComponent', () => {
  let component: LogErroServicoComponent;
  let fixture: ComponentFixture<LogErroServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogErroServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogErroServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
