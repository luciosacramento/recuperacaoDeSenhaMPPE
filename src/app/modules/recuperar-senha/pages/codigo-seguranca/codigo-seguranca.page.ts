import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder,FormsModule, ReactiveFormsModule,Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { Utils } from 'src/app/core/utils';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-codigo-seguranca',
  templateUrl: './codigo-seguranca.page.html',
  styleUrls: ['./codigo-seguranca.page.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule,NgIf]

  })
  export class CodigoSegurancaPage {

   public profileForm: FormGroup;
   public matcher:MyErrorStateMatcher = new MyErrorStateMatcher();
   public  smsFormControl:any|null = null
   public telefone:string|null = "(71)991****44";

   constructor(fb: FormBuilder, private util:Utils, private router: Router) { 

     this.smsFormControl =  new FormControl('',[Validators.required]);

     this.profileForm = new FormGroup({
        smsFormControl: this.smsFormControl,
     });

    }
    

    onSubmit() {
      if (this.profileForm.valid && this.smsFormControl.value == "123") {
        this.util.exibirSucesso("Código válido.");
      } else {
        this.util.exibirErro("Código inválido.");
      }
    }

    reenviarCodigo() {
      this.util.exibirSucesso("Código reenviado.");
    }

    cancelar() {
      this.router.navigate(['/recuperarsenha']);
    } 


}
