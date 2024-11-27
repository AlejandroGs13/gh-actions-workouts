import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, NavBarComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Github Actions Workouts';
}
