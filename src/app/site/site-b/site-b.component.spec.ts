import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBComponent } from './site-b.component';

describe('SiteBComponent', () => {
  let component: SiteBComponent;
  let fixture: ComponentFixture<SiteBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
