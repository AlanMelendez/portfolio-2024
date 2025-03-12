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

<div class="flex h-full flex-col items-center w-full px-10 py-20 bg-[#0D1B2A] text-white">
      <!-- Profile Image and Social Icons -->
      <div class="relative flex flex-col items-center">
        <img src="/img/me-one.png" alt="Alan Cuevas" class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 shadow-lg" />

        <!-- Social Icons -->
        <div class="flex space-x-3 mt-3">
          <a href="https://github.com/AlanMelendez" target="_blank">
            <img src="/icons/github.png" alt="GitHub" class="w-7 h-7 md:w-9 md:h-9 transition-transform hover:scale-110" />
          </a>
          <a href="mailto:alanmelendezalaan@outlook.com" target="_blank">
            <img src="/icons/gmail.png" alt="Gmail" class="w-7 h-7 md:w-9 md:h-9 transition-transform hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/alan-cuevas-melendez-bb3537218/" target="_blank">
            <img src="/icons/linkedin.png" alt="LinkedIn" class="w-7 h-7 md:w-9 md:h-9 transition-transform hover:scale-110" />
          </a>
        </div>
      </div>

      <!-- Name and Role -->
      <div class="mt-4 text-center">
        <h1 class="text-md mb-0">
           <strong class=" text-[30px] md:!text-md font-bold lg:!text-2xl text-end">Alan Cuevas Melendez</strong>
        </h1>
        <p class="text-gray-300 text-sm md:text-lg">Full Stack Developer</p>
      </div>

      <!-- About Me -->
      <div class="mt-6 max-w-md text-justify text-gray-300 text-sm md:text-base leading-relaxed mb-4">
        👨‍💻 <strong>Ingeniero Informático</strong> con más de <strong>4 años de experiencia</strong> desarrollando aplicaciones 
        <strong>web</strong> y <strong>móviles híbridas/nativas</strong>. Especializado en <strong>Angular, React Native, Ionic, Laravel y .NET</strong>, aplicando buenas prácticas 
        como <strong>Clean Code</strong> y arquitecturas escalables.
      </div>

      <!-- CV Button -->
      <div class="mt-6">
        <a
          href="https://alancuevasmelendez.com/cv/AlanCuevasMelendez.pdf"
          target="_blank"
          class="px-5 py-2.5 md:px-6 md:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300
                 hover:bg-blue-600 hover:scale-105 animate-bounce hover:animate-none"
        >
          Abrir CV
        </a>
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
