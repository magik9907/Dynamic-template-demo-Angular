import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeViewComponent } from './generative-view.component';

describe('GenerativeViewComponent', () => {
  let component: GenerativeViewComponent;
  let fixture: ComponentFixture<GenerativeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerativeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerativeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
