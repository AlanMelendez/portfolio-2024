import { Component, ChangeDetectionStrategy, inject, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { ImagesSliderComponent } from "../../../../shared/images-slider/images-slider/images-slider.component";
import { ProjectModalComponent } from './pages/project-modal/project-modal.component'; // si existe
import { Project, ProjectCategory } from '../../../../interface/project.interface';
import { PROJECTS_DATA } from '../../../../data/projects.data';

@Component({
  selector: 'app-current-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    ImagesSliderComponent
  ],
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CurrentProjectsComponent { 
  @Input() navbarColor: string = 'navbar-blue';

  // Inyecta o define tus dependencias
  readonly dialog = inject(MatDialog);
  sanitizer = inject(DomSanitizer);

  // Tipamos las propiedades
  elements: ProjectCategory[] = PROJECTS_DATA;
  selectedProject?: Project;  // O "any" si no quieres estricto
  trustedUrl!: SafeResourceUrl;

  // Para el efecto de tipeo
  titleText: string = 'Proyectos Realizados'; 
  displayedText: string = '';
  index: number = 0;
  typingSpeed: number = 150;

  @ViewChild('scrollCardContainer') scrollCardContainer!: ElementRef;
  private scrollInterval: any;

  ngOnInit(): void {
    this.startTypingEffect();
    this.updateTrustedUrl();
  }

  updateTrustedUrl(): void {
    if (this.selectedProject?.website) {
      this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.selectedProject.website
      );
    }
  }

  startTypingEffect(): void {
    if (this.index < this.titleText.length) {
      this.displayedText += this.titleText.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTypingEffect(), this.typingSpeed);
    }
  }

  // Métodos para abrir y cerrar el modal
  openModal(project: Project): void {
    this.selectedProject = project;
    this.updateTrustedUrl();
    this.dialog.open(this.projectModal, {
      width: '80%',
      data: { project },
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  // Para scrollear horizontalmente
  startScrolling(direction: 'left' | 'right'): void {
    const element = this.scrollCardContainer.nativeElement;
    const scrollAmount = 120;
    this.stopScrolling();

    this.scrollInterval = setInterval(() => {
      if (direction === 'left') {
        element.scrollLeft -= scrollAmount;
      } else {
        element.scrollLeft += scrollAmount;
      }
    }, 1);
  }

  stopScrolling(): void {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.scrollInterval = null;
    }
  }

  // Necesitas este ViewChild para el matDialog
  @ViewChild('projectModal') projectModal: any;
}
