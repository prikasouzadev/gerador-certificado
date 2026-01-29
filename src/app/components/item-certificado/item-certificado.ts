import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css',
})
export class ItemCertificado {
  id: string = '1'

  constructor(
    private router: Router
  ) { }

  redirecionarCertificado () {

    this.router.navigate(['/certificados/2']); 
  }
}   