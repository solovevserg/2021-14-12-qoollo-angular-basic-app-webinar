import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchParamsComponent } from './users-search-params.component';

describe('UsersSearchParamsComponent', () => {
  let component: UsersSearchParamsComponent;
  let fixture: ComponentFixture<UsersSearchParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSearchParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
