import { Component, input, OnInit } from '@angular/core';
import { ListNavigation } from '@core/models/interfaces/listNavigation.interface';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  headerNavigation = input.required<ListNavigation[]>();
  ngOnInit(): void {}
}
