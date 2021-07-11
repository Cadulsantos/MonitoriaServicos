import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoServicoComponent } from './configuracao-servico.component';

describe('ConfiguracaoServicoComponent', () => {
  let component: ConfiguracaoServicoComponent;
  let fixture: ComponentFixture<ConfiguracaoServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
