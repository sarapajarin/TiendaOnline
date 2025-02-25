import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPequeno1Component } from './graphic-pequeno1.component';

describe('GraphicPequeno1Component', () => {
  let component: GraphicPequeno1Component;
  let fixture: ComponentFixture<GraphicPequeno1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicPequeno1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPequeno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
