import { Component, Input } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { ItemCertificado } from "../../components/item-certificado/item-certificado";
import { CertificadoService } from '../../service/certificado.service';
import { ICertificado } from '../../interface/ICertificado';

@Component({
  selector: 'app-certificados',
  imports: [SecondaryButton, ItemCertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css',
})
export class Certificados {

 certificados: ICertificado[] = [];

  constructor(private CertificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.CertificadoService.certificados;
  }


}
