import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappButtonComponent { 
  phoneNumber: string = '5218713884942'; // Replace with your WhatsApp number (include country code)
  defaultMessage: string = '¡Hola Alan! Me gustaría obtener más información sobre tu trabajo.';



  generateWhatsAppLink(): string {
    return `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.defaultMessage)}`;
  }
  
}
