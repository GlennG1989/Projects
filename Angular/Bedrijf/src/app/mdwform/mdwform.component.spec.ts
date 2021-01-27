import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdwformComponent } from './mdwform.component';

describe('MdwformComponent', () => {
  let component: MdwformComponent;
  let fixture: ComponentFixture<MdwformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdwformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdwformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
