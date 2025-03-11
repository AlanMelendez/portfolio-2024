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
export class MeAbilitiesComponent { 
  abilities = [
    {
      title: "Programming Languages",
      image: "/assets/programacion.png",
      skills: [
        { name: "C#", icon: "/assets/icons/csharp.png" },
        { name: "JavaScript", icon: "/assets/icons/javascript.png" },
        { name: "PHP", icon: "/assets/icons/php.png" }
      ]
    },
    {
      title: "Front-end",
      image: "/assets/ux.png",
      skills: [
        { name: "HTML5", icon: "/assets/icons/html5.png" },
        { name: "CSS3", icon: "/assets/icons/css3.png" },
        { name: "Bootstrap", icon: "/assets/icons/bootstrap.png" },
        { name: "Angular Material", icon: "/assets/icons/angular.png" },
        { name: "Tailwind", icon: "/assets/icons/tailwind.png" }
      ]
    },
    {
      title: "Frameworks",
      image: "/assets/framework.png",
      skills: [
        { name: "Angular", icon: "/assets/icons/angular.png" },
        { name: "Ionic", icon: "/assets/icons/ionic.png" },
        { name: ".Net", icon: "/assets/icons/dotnet.png" },
        { name: "Laravel", icon: "/assets/icons/laravel.png" },
        { name: "NestJS", icon: "/assets/icons/nestjs.png" },
        { name: "TypeScript", icon: "/assets/icons/typescript.png" }
      ]
    },
    {
      title: "Databases",
      image: "/assets/db.png",
      skills: [
        { name: "MySQL", icon: "/assets/icons/mysql.png" },
        { name: "SQL Server", icon: "/assets/icons/sqlserver.png" }
      ]
    },
    {
      title: "Development Tools",
      image: "/assets/sistema-operativo.png",
      skills: [
        { name: "Git", icon: "/assets/icons/git.png" },
        { name: "Postman", icon: "/assets/icons/postman.png" },
        { name: "Docker", icon: "/assets/icons/docker.png" },
        { name: "GNU/Linux", icon: "/assets/icons/linux.png" }
      ]
    },
    {
      title: "Electronic",
      image: "/assets/cpu.png",
      skills: [
        { name: "Arduino", icon: "/assets/icons/arduino.png" },
        { name: "STM-32", icon: "/assets/icons/stm32.png" },
        { name: "Raspberry Pi", icon: "/assets/icons/raspberrypi.png" }
      ]
    }
  ];
}
