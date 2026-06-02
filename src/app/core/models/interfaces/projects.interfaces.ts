import { SidePhotoArticleEnum } from '../enums/side-photo-article.enum';

export interface Projects {
  id: number;
  name: string;
  year: string;
  description: string;
  image: string;
  display: SidePhotoArticleEnum;
}
