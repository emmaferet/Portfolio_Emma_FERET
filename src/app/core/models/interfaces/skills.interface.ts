import { SkillTypeEnum } from '@enums/skillType.enum';

export interface Skills {
  id: number;
  name: string;
  level: string;
  type: SkillTypeEnum;
}
