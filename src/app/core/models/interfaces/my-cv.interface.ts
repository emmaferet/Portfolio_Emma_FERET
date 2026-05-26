import { SkillTypeEnum } from '../enums/skillType.enum';
import { Projects } from './projects.interfaces';
import { User } from './user.interface';

export interface MyCv {
  id: number;
  user: User;
  experience: CvExperience[];
  formation: CvFormation[];
  skills: Skills[];
  projects: Projects[];
}
export interface CvExperience {
  id: number;
  title: string;
  company: string;
  duration: Date;
  description: string;
}
export interface CvFormation {
  id: number;
  nameForm: string;
  degree: string;
  year: Date;
  skillsForm: string;
}
export interface Skills {
  id: number;
  name: string;
  level: string;
  type: SkillTypeEnum;
}
