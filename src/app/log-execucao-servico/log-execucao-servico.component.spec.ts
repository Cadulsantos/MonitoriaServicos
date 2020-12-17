import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogExecucaoServicoComponent } from './log-execucao-servico.component';

describe('LogExecucaoServicoComponent', () => {
  let component: LogExecucaoServicoComponent;
  let fixture: ComponentFixture<LogExecucaoServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogExecucaoServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogExecucaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
