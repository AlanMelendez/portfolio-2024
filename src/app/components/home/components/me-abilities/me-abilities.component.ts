import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-me-abilities',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './me-abilities.component.html',
  styleUrl: './me-abilities.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeAbilitiesComponent { }
