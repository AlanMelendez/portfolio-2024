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
          image: 'https://www.bdksistemas.com.mx/build/img/BDKREST/LOGO_BCO.avif',
          title: 'Concentrador Web BDKREST',
          description:
            'El CW permite monitorear en tiempo real las transacciones diarias de restaurantes, incluyendo ventas, inventarios y asistencia, accesible desde cualquier dispositivo.',
          details: `Este concentrador ofrece una visión integral de las operaciones en restaurantes, permitiendo a los gerentes revisar ventas, cortes de caja, y existencias desde cualquier ubicación. Con soporte para múltiples sucursales, se puede filtrar información por localización, y los datos se gestionan en una base de datos propia alojada en el servidor VPS con sistema operativo Linux.`,
          website: 'https://cw.bdkrest.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKGYM/LOGO_BCO.avif',
          title: 'Concentrador Web BDKGYM',
          description:
            'El CW permite a los administradores de gimnasios monitorear membresías, asistencias, y ventas en tiempo real desde cualquier dispositivo.',
          details: `Este concentrador optimiza la administración de gimnasios al permitir monitoreo de múltiples sucursales con filtros por localización. Los datos se gestionan en una base de datos propia ubicada en VPS de Linux, asegurando autonomía y control total sobre la información desde cualquier dispositivo.`,
          website: 'https://cw.bdkgym.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKSPA/LOGO_BCO.avif',
          title: 'Concentrador Web BDKSPA',
          description:
            'El CW permite a los spas gestionar citas, ventas de servicios, y control de inventario en tiempo real, accesible desde cualquier dispositivo.',
          details: `Especializado para spas, este concentrador permite administración remota de citas, ventas y control de inventario, con la opción de filtrar por sucursal en negocios con múltiples locaciones. Los datos se gestionan en una base de datos propia en VPS de Linux, ofreciendo independencia y acceso en tiempo real desde cualquier dispositivo.`,
          website: 'https://cw.bdkspa.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKTINT/LOGO_BCO.avif',
          title: 'Concentrador Web BDKTINT',
          description:
            'El CW permite monitorear la operación en tintorerías, desde la recepción y entrega de prendas hasta el control de ventas y reportes.',
          details: `Diseñado para el sector de tintorerías, este concentrador permite una administración remota completa, con capacidad para filtrar por sucursal en negocios con múltiples ubicaciones. La base de datos se gestiona en un VPS propio con Linux, proporcionando un control autónomo y acceso seguro a la información desde cualquier dispositivo.`,
          website: 'https://cw.bdktint.com/login',
          imgbg: 'black',
        },
        
        
        
        
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Monitor Cabildo - MUNICIPIO DE CD. LERDO',
          description:
            'El Monitor del Cabildo es impulsado por el Ayuntamiento de Lerdo con la finalidad de conocer las actividades y el desempeño de la máxima autoridad del municipio: el Cabildo.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://lerdocabildotransparente.mx/cabildo/inicio',
          imgbg: 'white',
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
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Vialidad - MUNICIPIO DE CD. LERDO',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de multas para los agentes de Tránsito y Vialidad.',
          details: `Este sistema permite a los agentes gestionar multas en tiempo real, capturar evidencias fotográficas y generar tickets impresos mediante conexión con impresoras Zebra. Utiliza SQLite para almacenamiento local de datos, los cuales se sincronizan con servidores en Azure, asegurando actualización en la plataforma de pagos virtual. Desarrollado en Ionic Angular, con una API en C# y conectividad robusta, proporciona una experiencia integral y confiable.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Parquímetros - MUNICIPIO DE CD. LERDO',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de multas de parquímetros en la ciudad de Lerdo.',
          details: `Con esta app, los oficiales pueden gestionar multas de parquímetros, capturar evidencias y emitir tickets impresos en el lugar mediante impresoras Zebra conectadas. Utiliza SQLite para almacenamiento local y sincroniza datos en tiempo real con Azure para reflejar los cobros en la plataforma de pagos virtual. Desarrollada en Ionic Angular y respaldada por una API en C#, optimiza el flujo de trabajo de los oficiales en campo.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Plazas y Mercados - MUNICIPIO DE CD. LERDO',
          description:
            'Aplicación móvil para Android enfocada en la captura de datos, gestión de cortes de caja y reportes de ventas en las plazas y mercados de la ciudad de Lerdo.',
          details: `Esta plataforma permite la captura de datos de ventas, gestión de cortes de caja y emisión de tickets impresos en el sitio a través de impresoras Zebra, con soporte para evidencias fotográficas de las transacciones. Con SQLite para almacenamiento local y sincronización en la nube mediante Azure, facilita la administración de plazas y mercados, reflejando las transacciones en la plataforma de pagos. Desarrollado en Ionic Angular y con una API en C#, es una herramienta robusta para la gestión comercial.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        
        
        {
          image: 'https://web.grupoapd.mx/logo.35207d01f78757a7.png',
          title: 'OCR CNOP - APD',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de credenciales, con integración de API de IA Butler para la extracción de datos y sincronización en SQL Azure.',
          details: `Esta aplicación permite la digitalización de credenciales mediante el uso de inteligencia artificial, extrayendo datos con la API de IA Butler y sincronizándolos en SQL Azure. Desarrollada originalmente con Express y renovada a NestJS para mayor escalabilidad, está diseñada para manejar más de 300 usuarios y sincronizar información con más de cuatro servidores locales y foráneos. Azure garantiza una entrega rápida y almacenamiento seguro, optimizando la gestión de datos para una experiencia de usuario fluida y confiable.`,
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
