import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzeComponent } from './esperienze.component';

describe('EsperienzeComponent', () => {
  let component: EsperienzeComponent;
  let fixture: ComponentFixture<EsperienzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsperienzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsperienzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
