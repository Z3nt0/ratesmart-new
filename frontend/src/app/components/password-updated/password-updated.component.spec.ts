import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUpdatedComponent } from './password-updated.component';

describe('PasswordUpdatedComponent', () => {
  let component: PasswordUpdatedComponent;
  let fixture: ComponentFixture<PasswordUpdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordUpdatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
