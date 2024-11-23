import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Renderer2 } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-images-slider',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ],
  templateUrl: './images-slider.component.html',
  styleUrl: './images-slider.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesSliderComponent {
  elements = [
    {
      title: 'Mobile Version',
      iconsrc: '/icons/phone.png',
      modulename: 'phone',
      folderPictures: '/assets/MODULO_MESEROS_BDKREST',
      numberPictures: 13,
      pictures: this.createArrayFromNumber(13),
    },
    {
      title: 'Tablet Version',
      iconsrc: '/icons/tableta.png',
      folderPictures: '/assets/MODULO_MESEROS_BDKREST',
      numberPictures: 11,
      modulename: 'tableta',
      pictures: this.createArrayFromNumber(11),
    },
    {
      title: 'Desktop Version',
      iconsrc: '/icons/tableta.png',
      folderPictures: '/assets/MODULO_MESEROS_BDKREST',
      numberPictures: 11,
      modulename: 'desktop',
      pictures: this.createArrayFromNumber(0),
    },
  ];

  ngOnInit(): void {
    // Inicializa el contenido del primer tab (Mobile Version)
    setTimeout(() => {
      this.onTabChange({ index: 0, tab: null } );
    }, 100); // Espera un breve momento para que el DOM esté listo
  }
  
  
  constructor(private renderer: Renderer2,private cdr: ChangeDetectorRef) {}

  createArrayFromNumber(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
  }

  onTabChange(event: any): void {
    console.log('onTabChange', event);
    const tabIndex = event.index;
    const element = this.elements[tabIndex];
  
    if (element && element.numberPictures > 0) {
      const divPub = document.getElementById(`div_pub-${tabIndex}`);
      const divIndicadores = document.getElementById(`div_indicadores-${tabIndex}`);
  
      if (!divPub || !divIndicadores) return;
  
      // Limpia el contenido actual
      divPub.innerHTML = '';
      divIndicadores.innerHTML = '';
  
      // Genera slides dinámicos
      element.pictures.forEach((pictureIndex) => {
        const div = this.renderer.createElement('div');
        this.renderer.addClass(div, 'carousel-item');
        if (pictureIndex === 1) {
          this.renderer.addClass(div, 'active');
        }
  
        const img = this.renderer.createElement('img');
        this.renderer.setAttribute(
          img,
          'src',
          `${element.folderPictures}/${element.modulename}/${pictureIndex}.PNG`
        );
        this.renderer.setAttribute(img, 'alt', `${element.title} ${pictureIndex}`);
        this.renderer.addClass(img, 'd-block');
        this.renderer.setStyle(img, 'width', '100%');
  
        this.renderer.appendChild(div, img);
        this.renderer.appendChild(divPub, div);
      });
  
      // Genera indicadores
      element.pictures.forEach((_, index) => {
        const indicador = this.renderer.createElement('button');
        this.renderer.setAttribute(indicador, 'type', 'button');
        this.renderer.setAttribute(
          indicador,
          'data-bs-target',
          `#carouselExampleControls-${tabIndex}`
        );
        this.renderer.setAttribute(indicador, 'data-bs-slide-to', index.toString());
        if (index === 0) {
          this.renderer.addClass(indicador, 'active');
          this.renderer.setAttribute(indicador, 'aria-current', 'true');
        }
        this.renderer.appendChild(divIndicadores, indicador);
      });
  
      // Inicializa el carrusel
      setTimeout(() => {
        const carouselElement = document.querySelector(`#carouselExampleControls-${tabIndex}`);
        if (carouselElement && (window as any).bootstrap) {
          new (window as any).bootstrap.Carousel(carouselElement);
        }
      }, 100);
    }
  }
  
}
