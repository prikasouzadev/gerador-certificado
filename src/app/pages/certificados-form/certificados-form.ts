import { Component } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { PrimaryButton } from "../../components/primary-button/primary-button";

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButton, PrimaryButton],
  templateUrl: './certificados-form.html',
  styleUrl: './certificados-form.css',
})
export class CertificadosForm {

}
