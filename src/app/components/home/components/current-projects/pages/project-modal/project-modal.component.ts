import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent { }
