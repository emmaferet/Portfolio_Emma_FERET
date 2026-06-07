import { CvExperience } from './cvExperience.interface';
import { Formations } from './cvFormation.interface';
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
