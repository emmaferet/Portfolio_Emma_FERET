export interface CV {
  experience: CvExperience;
  formation: CvFormation;
}
export interface CvExperience {
  nameExp: string;
  dateExp: any;
  skillsExp: string;
}
export interface CvFormation {
  nameForm: string;
  dateForm: any;
  skillsForm: string;
}
