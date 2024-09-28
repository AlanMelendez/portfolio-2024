import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatNavList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatExpansionPanel } from '@angular/material/expansion';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatFormFieldModule, MatSidenavModule,
    MatListModule, MatButtonModule, MatNavList, MatListItem, MatExpansionPanel, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  titleIcon:string=`<AlanMelendez/>`;

  constructor() { }

  fields = [
    { icon: 'home', textMX:'Acerca de mi' , textUS: 'Home', path: '/home' },
    { icon: 'info',textMX:'Experiencia' , textUS: 'About me', path: '/about' },
    { icon: 'list',textMX:'Proyectos' , textUS: 'Projects', path: '/projects' },
    { icon: 'add', textMX:'Cursos' , textUS: 'Course', path: '/crourse' },
  ];

}
