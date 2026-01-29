import { Component, ViewChild } from '@angular/core';
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interface/certificado';
import { Router, RouterLink } from '@angular/router';
import { CertificadoService } from '../../service/certificado.service';

@Component({
  selector: 'app-certificados-form',
  imports: [SecondaryButton, PrimaryButton, FormsModule, CommonModule, RouterLink],
  templateUrl: './certificados-form.html',
  styleUrl: './certificados-form.css',
})
export class CertificadosForm {
  constructor(
    private certificadoService: CertificadoService,
    private route: Router
  ) {}
  @ViewChild('form') form!: NgForm;

  
  certificado: Certificado = {
    id: '',
    atividades: [],
    nome: '',
    dataEmissao: '',
  };

  atividade: string = '';

  campoInvalido(control: NgModel){
    return control.invalid || control.touched;
  }

  formValido() {
    return (
      this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
    );
  }

 adicionarAtividade() {
    if (this.atividade.length == 0) {
      return;
    }
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    // this.certificado.id = uuidv4();
    this.certificadoService.adicionarCertificado(this.certificado);

    this.route.navigate(['certificados', this.certificado.id]);

    // this.certificado = this.estadoInicialCertificado();
    // this.form.resetForm();
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado(): Certificado {
    return {
      id: '',
      atividades: [],
      nome: '',
      dataEmissao: '',
    };
  }


}
