import { CvExperience } from './cv-experience.interface';
import { Formations } from './cv-formation.interface';
import { Projects } from './projects.interfaces';
import { Skills } from './skills.interface';
import { User } from './user.interface';

export interface MyCv {
  id: number;
  user: User;
  experience: CvExperience[];
  formation: Formations[];
  skills: Skills[];
  projects: Projects[];
}
