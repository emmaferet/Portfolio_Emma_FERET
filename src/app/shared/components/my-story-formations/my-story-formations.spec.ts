import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoryFormations } from './my-story-formations';

describe('MyStoryFormations', () => {
  let component: MyStoryFormations;
  let fixture: ComponentFixture<MyStoryFormations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStoryFormations],
    }).compileComponents();

    fixture = TestBed.createComponent(MyStoryFormations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
