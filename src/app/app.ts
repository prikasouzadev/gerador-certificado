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

@Component({
  selector: 'app-root',
  imports: [Navbar, PrimaryButton, SecondaryButton, ItemCertificado, BaseUi, Certificados, CertificadosForm, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerador-certificado');
}
