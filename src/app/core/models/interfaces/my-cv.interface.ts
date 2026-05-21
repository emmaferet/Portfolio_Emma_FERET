import { Skills } from './projects.interfaces';

export interface MyCv {

  experience: CvExperience[];
  formation: CvFormation[];
  languages: CvLanguages[];
  skills: Skills[];
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
export interface CvLanguages {
  name: string;
  level: string;
}
