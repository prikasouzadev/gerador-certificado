import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from "./components/primary-button/primary-button";
import { SecondaryButton } from "./components/secondary-button/secondary-button";
import { ItemCertificado } from "./components/item-certificado/item-certificado";
import { BaseUi } from "./components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { CertificadosForm } from "./pages/certificados-form/certificados-form";
import { Certificado } from "./pages/certificado/certificado";
import { CertificadoService } from './service/certificado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Navbar, CommonModule, BaseUi, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados');
    this.certificadoService.certificados = certificados
      ? JSON.parse(certificados)
      : [];
  }
}
