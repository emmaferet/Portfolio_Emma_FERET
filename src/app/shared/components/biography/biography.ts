import { Component, input } from '@angular/core';
import { User } from '@core/models/interfaces/user.interface';

@Component({
  selector: 'app-biography',
  imports: [],
  templateUrl: './biography.html',
  styleUrl: './biography.scss',
})
export class Biography {
  userInfos = input.required<User | undefined>();
}
