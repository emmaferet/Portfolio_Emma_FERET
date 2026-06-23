import { Component, input } from '@angular/core';
import { User } from '@core/models/interfaces/user.interface';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-biography',
  imports: [TranslatePipe],
  templateUrl: './biography.html',
  styleUrl: './biography.scss',
})
export class Biography {
  userInfos = input.required<User | undefined>();
}
