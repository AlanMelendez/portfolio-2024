import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- <div class="portfolio-container">
      <img src="/img/me-one.png" alt="Tu imagen" class="profile-image" />
      <h1 class="portfolio-title">Ing. Alan Cuevas Melendez</h1>
      <p class="portfolio-description">
      Hola, soy Alan. 👋 Es de un placer tenerte por aqui, cuento con más de tres años de experiencia en el desarrollo de soluciones tecnológicas de alto impacto. Actualmente trabajo como desarrollador, especializándome en la creación de aplicaciones frontend, backend y móviles híbridas. Mi enfoque se centra en diseñar e implementar sistemas que cumplan con los más altos estándares de rendimiento y escalabilidad, aplicando siempre las mejores prácticas para optimizar la experiencia del usuario y garantizar la eficiencia en cada proyecto.

</div> -->

    <div class="container-total">
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
              <a
                href="https://www.linkedin.com/in/alan-cuevas-melendez-bb3537218/"
                target="_blank"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  class="img-social"
                />
              </a>
            </div>
          </div>
          <div class="container-name mt-3 mb-2">
            <!-- Nombre y Cargo -->
            <h1
              class="text-4xl md:text-5xl font-bold mb-2 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-white pr-4 text-white"
            >
              ¡Hola! Soy Alan Cuevas Melendez
            </h1>
            <p class="text-lg md:text-xl text-gray-300">Full Stack Developer</p>
          </div>
        </div>

        <!-- Contenedor Derecho -->
        <div class="right-container flex flex-col justify-center text-justify">
          <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            👨‍💻 <b>Ingeniero Informático</b> con más de
            <b>3 años de experiencia</b> desarrollando aplicaciones <b>web</b> y
            <b>móviles híbridas</b>. Especializado en tecnologías como
            <b>Angular, Ionic, Laravel y .NET</b>, implemento buenas prácticas
            como <b>Clean Code</b> y arquitecturas escalables.
          </p>
          <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
            🚀 Apasionado por crear soluciones tecnológicas innovadoras que
            optimicen procesos y generen impacto positivo.
          </p>
          <div class="flex justify-center">
            <a
              href="/cv.pdf"
              download
              class="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
            >
              Descargar CV
            </a>
          </div>
          <!-- <button class="portfolio-button">dot</button> -->
        </div>
      </div>
    </div>
  `,
  styleUrl: './about-me.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AboutMeComponent {
  titleText: string = 'Ing. Alan Cuevas Melendez';
  displayedText: string = ''; // Texto que se irá mostrando progresivamente
  index: number = 0;
  typingSpeed: number = 150; // Velocidad de tipeo en milisegundos

  ngOnInit(): void {
    this.startTypingEffect();
  }

  startTypingEffect(): void {
    if (this.index < this.titleText.length) {
      this.displayedText += this.titleText.charAt(this.index);
      this.index++;
      setTimeout(() => this.startTypingEffect(), this.typingSpeed);
    }
  }
}
