import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  experiences = [
    {
      position: "Full Stack Developer",
      company: "BDK Sistemas",
      period: "April 2024 - Present",
      description: "Desarrollo de aplicaciones móviles con React Native, integración de OAuth 2.0 con microservicios, despliegue en Docker y gestión de sistemas en servidores Linux.",
      skills: ["Angular", "React Native", "Laravel", ".NET", "Docker", "OAuth 2.0", "Microservicios", "SignalR", "SQL Server", "Tailwind CSS"]
    },
    {
      position: "Full Stack Developer",
      company: "Municipio de Lerdo - Grupo APD",
      period: "Oct 2022 - April 2024",
      description: "Desarrollo de aplicaciones híbridas para la gestión de infracciones de tránsito, migración de tecnologías Visual Basic 6 a .NET 8 y despliegues en Azure.",
      skills: ["Angular", "Ionic", "Laravel", "C# .NET 8", "Azure", "Microservicios", "SQL Server", "Docker"]
    },
    {
      position: "Freelance Full Stack Developer",
      company: "FACSA (Facultad de Ciencias de la Salud)",
      period: "2019 - 2024",
      description: "Liderazgo en el desarrollo de sistemas universitarios con seguridad en Linux, backend en Laravel y mejoras en rendimiento de MySQL.",
      skills: ["Angular", "Laravel", "Ionic", "PostgreSQL", "Linux Servers", "SSL", "Security"]
    }
  ];
 }
