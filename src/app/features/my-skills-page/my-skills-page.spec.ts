import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsPage } from './my-skills-page';

describe('MySkillsPage', () => {
  let component: MySkillsPage;
  let fixture: ComponentFixture<MySkillsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MySkillsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
