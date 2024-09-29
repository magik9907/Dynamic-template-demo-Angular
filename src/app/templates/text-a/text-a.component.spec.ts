import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAComponent } from './text-a.component';

describe('TextAComponent', () => {
  let component: TextAComponent;
  let fixture: ComponentFixture<TextAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
