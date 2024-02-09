import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldLibComponent } from './hello-world-lib.component';

describe('HelloWorldLibComponent', () => {
  let component: HelloWorldLibComponent;
  let fixture: ComponentFixture<HelloWorldLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldLibComponent]
    });
    fixture = TestBed.createComponent(HelloWorldLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
