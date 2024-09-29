import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDComponent } from './text-d.component';

describe('TextDComponent', () => {
  let component: TextDComponent;
  let fixture: ComponentFixture<TextDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
