import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <!-- <div class="portfolio-container">
      <img src="/img/me-one.png" alt="Tu imagen" class="profile-image" />
      <h1 class="portfolio-title">Ing. Alan Cuevas Melendez</h1>
      <p class="portfolio-description">
      Hola, soy Alan. 👋 Es de un placer tenerte por aqui, cuento con más de tres años de experiencia en el desarrollo de soluciones tecnológicas de alto impacto. Actualmente trabajo como desarrollador, especializándome en la creación de aplicaciones frontend, backend y móviles híbridas. Mi enfoque se centra en diseñar e implementar sistemas que cumplan con los más altos estándares de rendimiento y escalabilidad, aplicando siempre las mejores prácticas para optimizar la experiencia del usuario y garantizar la eficiencia en cada proyecto.

</div> -->

<div class="portfolio-container">
  <!-- Contenedor Izquierdo -->
  <div class="left-container">
    <div class="container-img">
      <img src="/img/me-one.png" alt="Tu imagen" class="profile-image" />
      <div class="social-icons">
        <a href="https://github.com/AlanMelendez" target="_blank">
          <img src="/icons/github.png" alt="GitHub" class="img-social" />
        </a>
        <a href="mailto:alanmelendezalaan@outlook.com" target="_blank">
          <img src="/icons/gmail.png" alt="Gmail" class="img-social" />
        </a>
        <a href="https://linkedin.com/in/alan-melendez-bb3537218" target="_blank">
          <img src="/icons/linkedin.png" alt="LinkedIn" class="img-social" />
        </a>
      </div>
    </div>
    <div class="container-name">
      <h1 class="portfolio-title">Ing. Alan Cuevas Melendez</h1>
    </div>
  </div>

  <!-- Contenedor Derecho -->
  <div class="right-container">
    <p class="portfolio-description">
      Hola, soy Alan. Soy Ingeniero en Informática con más de tres años de experiencia como Desarrollador Full Stack, especializado en aplicaciones web y móviles híbridas. Me enfoco en diseñar soluciones de alto rendimiento aplicando buenas prácticas, como Clean Code y arquitecturas escalables, para proyectos que integran tecnologías como Angular, Ionic, Laravel y .NET.
    </p>
    <button class="portfolio-button">Ir a Proyectos</button>
  </div>
</div>




  `,
  styleUrl: './about-me.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent { }
