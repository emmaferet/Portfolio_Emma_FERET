export interface User {
  name: string;
  surname: string;
  age: string;
  phone: string;
  mail: string;
  location: string;
  school: string;
  rythm: string;
  links: Links[];
}

export interface Links {
  id: number;
  label: string;
  url: string;
}
