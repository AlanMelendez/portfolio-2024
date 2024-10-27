import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectModalComponent } from './pages/project-modal/project-modal.component';

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
    MatDialogModule
  ],
  templateUrl: './current-projects.component.html',
  styleUrl: './current-projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CurrentProjectsComponent {
  readonly dialog = inject(MatDialog);

  elements = [
    {
      'title': 'Angular',
      'iconsrc': '/icons/angular.png',
      'projects': [
        {
          image: '/icons/github.png',
          title: 'Gestor de Solicitudes Universitarias',
          description: 'Sistema para la gestión de solicitudes de aspirantes universitarios.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://example.com' // URL del proyecto

        }, { image: '/icons/github.png', title: 'Proyecto Angular 2', description: 'Descripción breve del proyecto 2 en Angular.' },
        { image: '/icons/github.png', title: 'Proyecto Angular 3', description: 'Descripción breve del proyecto 3 en Angular.' },
        { image: '/icons/github.png', title: 'Proyecto Angular 4', description: 'Descripción breve del proyecto 4 en Angular.' },
        { image: '/icons/github.png', title: 'Proyecto Angular 5', description: 'Descripción breve del proyecto 5 en Angular.' },
        { image: '/icons/github.png', title: 'Proyecto Angular 6', description: 'Descripción breve del proyecto 6 en Angular.' }
      ]
    },
    {
      'title': 'ASP.NET',
      'iconsrc': '/icons/dotnet.png',
      'projects': [
        { image: '/icons/github.png', title: 'Proyecto ASP.NET 1', description: 'Descripción breve del proyecto 1 en ASP.NET.' },
        { image: '/icons/github.png', title: 'Proyecto ASP.NET 2', description: 'Descripción breve del proyecto 2 en ASP.NET.' },
        { image: '/icons/github.png', title: 'Proyecto ASP.NET 3', description: 'Descripción breve del proyecto 3 en ASP.NET.' },
        { image: '/icons/github.png', title: 'Proyecto ASP.NET 4', description: 'Descripción breve del proyecto 4 en ASP.NET.' },
        { image: '/icons/github.png', title: 'Proyecto ASP.NET 5', description: 'Descripción breve del proyecto 5 en ASP.NET.' },
        { image: '/icons/github.png', title: 'Proyecto ASP.NET 6', description: 'Descripción breve del proyecto 6 en ASP.NET.' }
      ]
    }
  ]


  selectedProject: any;
  @ViewChild('projectModal') projectModal: any;

  openModal(project: any): void {
    this.selectedProject = project;
    this.dialog.open(this.projectModal, {
      width: '400px',
      data: { project }
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  @ViewChild('scrollCardContainer') scrollCardContainer!:ElementRef;
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