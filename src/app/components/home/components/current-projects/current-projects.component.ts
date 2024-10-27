import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectModalComponent } from './pages/project-modal/project-modal.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-current-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './current-projects.component.html',
  styleUrl: './current-projects.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CurrentProjectsComponent {
  readonly dialog = inject(MatDialog);
  sanitizer = inject(DomSanitizer);
  trustedUrl!: SafeResourceUrl;

  titleText: string = 'Proyectos Actuales';
  displayedText: string = ''; // Texto que se irá mostrando progresivamente
  index: number = 0;
  typingSpeed: number = 150; // Velocidad de tipeo en milisegundos

  ngOnInit(): void {
    this.startTypingEffect();
    this.updateTrustedUrl();

  }
  updateTrustedUrl(): void {
    // Asegúrate de que la URL esté disponible antes de convertirla
    if (this.selectedProject?.website) {
      this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedProject.website);
    }
  }


  startTypingEffect(): void {
    if (this.index < this.titleText.length) {
      this.displayedText += this.titleText.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTypingEffect(), this.typingSpeed);
    }
  }

  elements = [
    {
      title: 'Angular',
      iconsrc: '/icons/angular.png',
      projects: [
        
        {
          image: 'https://www.ujed.mx/img/header/logo-ujed.2.png',
          title: 'Registro Aspirantes - UJED',
          description:
            'Sistema para la gestión de solicitudes de aspirantes universitarios dentro de la facultad  incluyendo las carreras (Medicina, Psicologia, Nutricion).',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://citas.facsa.ujed.mx/auth/login',
          imgbg: 'red',
        },
      
        {
          image:
            'https://www.bdksistemas.com.mx/build/img/BDKREST/LOGO_BCO.avif',
          title: 'Concentrador Web BDKREST',
          description:
            'El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.',
          details: `El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.`,
          descrption: '',
          website: 'https://cw.bdkrest.com/login',
          imgbg: 'black',
        },
        {
          image:
            'https://www.bdksistemas.com.mx/build/img/BDKGYM/LOGO_BCO.avif',
          title: 'Concentrador Web BDKGYM',
          description:
            'El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.',
          details: `El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.`,
          descrption: '',
          website: 'https://cw.bdkgym.com/login',
          imgbg: 'black',
        },
        
        {
          image: 'https://www.lerdo.tecnm.mx/templates/tec19/images/logo_itsl.png',
          title: 'SILAB - TECNM Campus Lerdo',
          description:
            'Sistema escolar interno para el control de prestamos en laboratorios dentro de la institucion. Dentro de este sistema se pueden ver, crear y liberar adeudos para distintos tramites dentro de la institucion.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://www.lerdo.tecnm.mx/',
          imgbg: 'white',
        },
        
        {
          image: 'https://centrotrilingue.edu.mx/wp-content/uploads/2024/07/Logo-leon-400x400-1.png',
          title: 'Plataforma Virtual - CUT',
          description:
            'Plataforma integral para la gestión escolar que optimiza los procesos académicos y administrativos, permitiendo la administración de pagos, mensualidades, registros',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://centrotrilingue.edu.mx/',
          imgbg: 'white',
        },

        {
          image:
            'https://www.bdksistemas.com.mx/build/img/BDKSPA/LOGO_BCO.avif',
          title: 'Concentrador Web BDKSPA',
          description:
            'El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.',
          details: `El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.`,
          descrption: '',
          website: 'https://cw.bdkspa.com/login',
          imgbg: 'black',
        },
        {
          image:
            'https://www.bdksistemas.com.mx/build/img/BDKTINT/LOGO_BCO.avif',
          title: 'Concentrador Web BDKTINT',
          description:
            'El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.',
          details: `El CW te sirve para monitorear los diferentes tipos de movimientos que se generan día a día en tu negocio y puedes monitorearlo desde tu computadora personal, laptop, tablet o celular.`,
          descrption: '',
          website: 'https://cw.bdktint.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://web.grupoapd.mx/logo.35207d01f78757a7.png',
          title: ' GRUPO APD',
          description:
            'Pagina con contenido estatico y animado para mostrar los servicios que el cliente ofrece en su pagina, esta pagina tiene como proposito mostrar un panorama del giro de la empresa.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://web.grupoapd.mx/',
          imgbg: 'white',
        },
      ],
    },
    {
      'title': 'Ionic',
      'iconsrc': '/icons/ionic.png',
      'projects': [
        {
          image: 'https://web.grupoapd.mx/logo.35207d01f78757a7.png',
          title: 'OCR Credenciales - APD',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de credenciales, con integración de API de IA Butler para la extracción de datos y sincronización en SQL Azure. ',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://web.grupoapd.mx/',
          imgbg: 'white',
        },
      ]
    },
    // {
    //   'title': 'ASP.NET',
    //   'iconsrc': '/icons/dotnet.png',
    //   'projects': [
    //     { image: '/icons/github.png', title: 'Proyecto ASP.NET 1', description: 'Descripción breve del proyecto 1 en ASP.NET.' },
    //     { image: '/icons/github.png', title: 'Proyecto ASP.NET 2', description: 'Descripción breve del proyecto 2 en ASP.NET.' },
    //     { image: '/icons/github.png', title: 'Proyecto ASP.NET 3', description: 'Descripción breve del proyecto 3 en ASP.NET.' },
    //     { image: '/icons/github.png', title: 'Proyecto ASP.NET 4', description: 'Descripción breve del proyecto 4 en ASP.NET.' },
    //     { image: '/icons/github.png', title: 'Proyecto ASP.NET 5', description: 'Descripción breve del proyecto 5 en ASP.NET.' },
    //     { image: '/icons/github.png', title: 'Proyecto ASP.NET 6', description: 'Descripción breve del proyecto 6 en ASP.NET.' }
    //   ]
    // },
    // {
    //   'title': 'Laravel',
    //   'iconsrc': '/icons/laravel.png',
    //   'projects': [
    //     { image: '/icons/github.png', title: 'Proyecto Laravel 1', description: 'Descripción breve del proyecto 1 en Laravel.' },
    //     { image: '/icons/github.png', title: 'Proyecto Laravel 2', description: 'Descripción breve del proyecto 2 en Laravel.' },
    //     { image: '/icons/github.png', title: 'Proyecto Laravel 3', description: 'Descripción breve del proyecto 3 en Laravel.' },
    //     { image: '/icons/github.png', title: 'Proyecto Laravel 4', description: 'Descripción breve del proyecto 4 en Laravel.' },
    //     { image: '/icons/github.png', title: 'Proyecto Laravel 5', description: 'Descripción breve del proyecto 5 en Laravel.' },
    //     { image: '/icons/github.png', title: 'Proyecto Laravel 6', description: 'Descripción breve del proyecto 6 en Laravel.' }
    //   ],

    // },
    // {
    //   'title': 'NestJS',
    //   'iconsrc': '/icons/nest.png',
    //   'projects': [
    //     { image: '/icons/github.png', title: 'Proyecto NestJS 1', description: 'Descripción breve del proyecto 1 en NestJS.' },
    //     { image: '/icons/github.png', title: 'Proyecto NestJS 2', description: 'Descripción breve del proyecto 2 en NestJS.' },
    //     { image: '/icons/github.png', title: 'Proyecto NestJS 3', description: 'Descripción breve del proyecto 3 en NestJS.' },
    //     { image: '/icons/github.png', title: 'Proyecto NestJS 4', description: 'Descripción breve del proyecto 4 en NestJS.' },
    //     { image: '/icons/github.png', title: 'Proyecto NestJS 5', description: 'Descripción breve del proyecto 5 en NestJS.' },
    //     { image: '/icons/github.png', title: 'Proyecto NestJS 6', description: 'Descripción breve del proyecto 6 en NestJS.' }
    //   ]
    // }
  ];

  selectedProject: any;
  @ViewChild('projectModal') projectModal: any;

  openModal(project: any): void {
    this.selectedProject = project;
    this.updateTrustedUrl(); // Esto convierte la URL a una fuente segura antes de abrir el modal

    this.dialog.open(this.projectModal, {
      width: '80%',
      data: { project },
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  @ViewChild('scrollCardContainer') scrollCardContainer!: ElementRef;
  private scrollInterval: any;

  // Inicia el desplazamiento continuo
  startScrolling(direction: 'left' | 'right'): void {
    const element = this.scrollCardContainer.nativeElement;
    const scrollAmount = 20; // Ajusta la cantidad de desplazamiento según sea necesario
    this.stopScrolling(); // Asegura que no haya intervalos previos activos

    this.scrollInterval = setInterval(() => {
      if (direction === 'left') {
        element.scrollLeft -= scrollAmount;
      } else {
        element.scrollLeft += scrollAmount;
      }
    }, 5); // Controla la velocidad de desplazamiento ajustando el intervalo en milisegundos
  }

  // Detiene el desplazamiento continuo
  stopScrolling(): void {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }
}
