import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicPequeno3Component } from './graphic-pequeno3.component';

describe('GraphicPequeno3Component', () => {
  let component: GraphicPequeno3Component;
  let fixture: ComponentFixture<GraphicPequeno3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicPequeno3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicPequeno3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
