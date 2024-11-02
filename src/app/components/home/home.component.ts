import { ChangeDetectionStrategy, Component, HostListener, ViewChild } from '@angular/core';
import { FooterComponent } from "../../shared/footer/footer.component";
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList, MatListItem } from '@angular/material/list';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { CurrentProjectsComponent } from "./components/current-projects/current-projects.component";
import { MeAbilitiesComponent } from "./components/me-abilities/me-abilities.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatToolbarModule, MatIconModule, MatFormFieldModule, MatSidenavModule,
    MatListModule, MatButtonModule, MatNavList, MatListItem, MatExpansionPanel, FooterComponent, AboutMeComponent, CurrentProjectsComponent, MeAbilitiesComponent],  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    HostListener: 'window:scroll'
  }
})
export class HomeComponent {
  titleIcon:string=`<AlanMelendez/>`;
  navbarColor: string = 'bg-blue-black'; // Color inicial del navbar

  constructor() { }
  @ViewChild(MatSidenavContent) sidenavContent!: MatSidenavContent;
  ngAfterViewInit() {
    // Escuchar el evento scroll en el sidenavContent
    this.sidenavContent.getElementRef().nativeElement.onscroll = () => this.checkSection();
  }

  checkSection() {
    console.log('checkSection');
    const section0 = document.getElementById('section0');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    
    const section0Position = section0?.getBoundingClientRect();
    const section1Position = section1?.getBoundingClientRect();
    const section2Position = section2?.getBoundingClientRect();
    const section3Position = section3?.getBoundingClientRect();



    //Evaluamos cuando llegue nuevamente al inicio  
    if(section0Position && section0Position.top <= window.innerHeight && section0Position.bottom <= 0) {
      this.navbarColor = 'bg-blue-black'; // Color para la se
    }
    //Evaluamos cuando llega el final el scroll 
    if (section1Position && section1Position.top <= window.innerHeight && section1Position.bottom >= 0) {
      this.navbarColor = 'bg-blue-black'; // Color para la primera sección
    }
    //Evaluamos cuando llega el final el scroll 
    if (section2Position && section2Position.top <= window.innerHeight && section2Position.bottom >= 0) {
      this.navbarColor = 'navbar-white'; // Color para la primera sección
    }

    //eVALUAMOS EL SECTION 1

    if ((section3Position && section3Position.top <= window.innerHeight && section3Position.bottom >= 0) && (section2Position && section2Position.top <= window.innerHeight && section2Position.bottom >= 0)) {
      this.navbarColor = 'bg-blue-black'; // Color para la primera sección
    }
    
    
  }

  fields = [
    { icon: 'home', textMX:'Acerca de mi' , textUS: 'Home', path: '/home' },
    { icon: 'info',textMX:'Experiencia' , textUS: 'About me', path: '/about' },
    { icon: 'list',textMX:'Proyectos' , textUS: 'Projects', path: '/projects' },
    { icon: 'add', textMX:'Cursos' , textUS: 'Course', path: '/crourse' },
  ];
}
