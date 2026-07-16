import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-loader-data',
  imports: [TranslatePipe],
  templateUrl: './loader-data.html',
  styleUrl: './loader-data.scss',
})
export class LoaderData {}
