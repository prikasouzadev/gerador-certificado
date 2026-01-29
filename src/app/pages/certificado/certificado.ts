import { Component } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado {

}
