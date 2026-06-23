import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStoryPage } from './my-story-page';

describe('MyStoryPage', () => {
  let component: MyStoryPage;
  let fixture: ComponentFixture<MyStoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStoryPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MyStoryPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
