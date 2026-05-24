import { Emma } from './person-emma.interface';
import { Projects } from './projects.interfaces';

export interface MyCv {
  id: Emma;
  smallDescription: string;
  experience: CvExperience[];
  formation: CvFormation[];
  skills: CvSkills[];
  projects: Projects[];
}
export interface CvExperience {
  nameExp: string;
  dateExp: Date;
  skillsExp: string;
}
export interface CvFormation {
  nameForm: string;
  dateForm: Date;
  skillsForm: string;
}
export interface CvSkills {
  name: string;
  level: string;
}

