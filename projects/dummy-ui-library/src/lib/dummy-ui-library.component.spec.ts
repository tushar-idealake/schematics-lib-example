import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyUiLibraryComponent } from './dummy-ui-library.component';

describe('DummyUiLibraryComponent', () => {
  let component: DummyUiLibraryComponent;
  let fixture: ComponentFixture<DummyUiLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DummyUiLibraryComponent]
    });
    fixture = TestBed.createComponent(DummyUiLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
