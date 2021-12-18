import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimImageComponent } from './slim-image.component';

describe('SlimImageComponent', () => {
  let component: SlimImageComponent;
  let fixture: ComponentFixture<SlimImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlimImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
