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

<div class="relative w-full h-full bg-[#0D1B2A] py-20 px-6 text-white overflow-hidden flex flex-col items-center">
  <!-- Fondo difuso y animado -->
  <div class="absolute inset-0 pointer-events-none">
    <!-- Esfera difusa 1 -->
    <div
      class="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl -top-32 -left-32
             animate-pulse"
    ></div>
    <!-- Esfera difusa 2 -->
    <div
      class="absolute w-80 h-80 bg-purple-600 rounded-full opacity-30 blur-3xl top-16 -right-20
             animate-pulse animation-delay-2000"
    ></div>
  </div>

  <!-- Contenido principal -->
  <div class="z-10 flex flex-col items-center space-y-6 max-w-xl w-full">
    
    <!-- Foto de perfil y redes -->
    <div class="relative flex flex-col items-center">
      <!-- Imagen con efecto flotante -->
      <img
        src="/img/me-one.png"
        alt="Alan Cuevas"
        class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-400 shadow-lg
               transition-transform duration-300 hover:scale-105"
      />

      <!-- Íconos sociales -->
      <div class="flex space-x-3 mt-3">
        <a href="https://github.com/AlanMelendez" target="_blank"
           class="relative group">
          <img
            src="/icons/github.png"
            alt="GitHub"
            class="w-7 h-7 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
          />
          <!-- Efecto de anillo flotante (opcional) -->
          <span
            class="absolute inset-0 rounded-full border border-transparent
                   group-hover:border-blue-400 transition-all duration-300"
          ></span>
        </a>
        <a href="mailto:alanmelendezalaan@outlook.com" target="_blank"
           class="relative group">
          <img
            src="/icons/gmail.png"
            alt="Gmail"
            class="w-7 h-7 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
          />
          <span
            class="absolute inset-0 rounded-full border border-transparent
                   group-hover:border-blue-400 transition-all duration-300"
          ></span>
        </a>
        <a href="https://www.linkedin.com/in/alan-cuevas-melendez-bb3537218/" target="_blank"
           class="relative group">
          <img
            src="/icons/linkedin.png"
            alt="LinkedIn"
            class="w-7 h-7 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110"
          />
          <span
            class="absolute inset-0 rounded-full border border-transparent
                   group-hover:border-blue-400 transition-all duration-300"
          ></span>
        </a>
      </div>
    </div>

    <!-- Nombre y rol -->
    <div class="text-center">
      <!-- Texto con efecto de tipeo (tu propiedad displayedText) -->
      <h1
        class="text-3xl md:text-4xl font-bold mb-1 text-blue-200
               drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]"
      >
        {{ displayedText }}
      </h1>
      <p class="text-gray-300 text-sm md:text-lg">
        Full Stack Developer
      </p>
    </div>

    <!-- Acerca de mí -->
    <div
      class="mt-2 max-w-md text-justify text-gray-300 text-sm md:text-base leading-relaxed mb-4"
    >
      👨‍💻 
      <strong>Ingeniero Informático</strong> con más de
      <strong>4 años de experiencia</strong> desarrollando aplicaciones
      <strong>web</strong> y <strong>móviles híbridas/nativas</strong>.
      Especializado en
      <strong>Angular, React Native, Ionic, Laravel y .NET</strong>, aplicando
      buenas prácticas como <strong>Clean Code</strong> y arquitecturas
      escalables.
    </div>

    <!-- Botón CV con efecto -->
    <div class="mt-4">
      <a
        href="https://alancuevasmelendez.com/cv/AlanCuevasMelendez.pdf"
        target="_blank"
        class="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md
               transition-all duration-300 hover:bg-blue-600 hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
               animate-bounce hover:animate-none"
      >
        Abrir CV
      </a>
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
