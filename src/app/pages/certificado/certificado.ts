import { Component, ElementRef, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../service/certificado.service';
import { ICertificado } from '../../interface/ICertificado';
import html2canvas from 'html2canvas';




@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink ],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css',
})
export class Certificado{
  id: string | null = null;
  certificado: ICertificado | undefined;

  @ViewChild('certificadoContainer') certificadoElement!: ElementRef;

  constructor(
    private CertificadoService: CertificadoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.CertificadoService.certificados.find(
        (item) => item.id == this.id
      );
    });
  }

   downloadCertificado() {
    if (this.certificado == undefined) {
      return;
    }
    html2canvas(this.certificadoElement.nativeElement, { scale: 2 }).then(
      (canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download =
          'certificado_' + this.certificado?.nome.replaceAll(' ', '_') + '.png';
        link.click();
      }
    );
  }
}
