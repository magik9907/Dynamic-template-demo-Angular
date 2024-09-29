import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractTemplateComponent } from './abstract-template.component';

describe('AbstractTemplateComponent', () => {
  let component: AbstractTemplateComponent;
  let fixture: ComponentFixture<AbstractTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbstractTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
