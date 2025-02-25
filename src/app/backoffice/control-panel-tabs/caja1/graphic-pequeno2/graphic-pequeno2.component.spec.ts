import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPequeno2Component } from './graphic-pequeno2.component';

describe('GraphicPequeno2Component', () => {
  let component: GraphicPequeno2Component;
  let fixture: ComponentFixture<GraphicPequeno2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicPequeno2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPequeno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
