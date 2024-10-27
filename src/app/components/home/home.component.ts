import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { CurrentProjectsComponent } from "./components/current-projects/current-projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatFormFieldModule, MatSidenavModule,
    MatListModule, MatButtonModule, MatNavList, MatListItem, MatExpansionPanel, FooterComponent, AboutMeComponent, CurrentProjectsComponent],  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  titleIcon:string=`<AlanMelendez/>`;

  constructor() { }

  fields = [
    { icon: 'home', textMX:'Acerca de mi' , textUS: 'Home', path: '/home' },
    { icon: 'info',textMX:'Experiencia' , textUS: 'About me', path: '/about' },
    { icon: 'list',textMX:'Proyectos' , textUS: 'Projects', path: '/projects' },
    { icon: 'add', textMX:'Cursos' , textUS: 'Course', path: '/crourse' },
  ];
}
