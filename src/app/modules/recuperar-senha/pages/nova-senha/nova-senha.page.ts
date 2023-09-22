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
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.page.html',
  styleUrls: ['./nova-senha.page.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule,NgIf]
})
export class NovaSenhaComponent {
  public profileForm: FormGroup;
  public matcher:MyErrorStateMatcher = new MyErrorStateMatcher();
  public novaSenhaFormControl:any|null = null
  public repetirNovaSenhaFormControl:any|null = null
  public telefone:string|null = "(71)991****44";

  constructor(fb: FormBuilder, private util:Utils, private router: Router) { 

    this.novaSenhaFormControl =  new FormControl('',[Validators.required]);
    this.repetirNovaSenhaFormControl =  new FormControl('',[Validators.required]);

    this.profileForm = new FormGroup({
       novaSenhaFormControl: this.novaSenhaFormControl,
       repetirNovaSenhaFormControl: this.repetirNovaSenhaFormControl,
    });

   }
   

   onSubmit() {
     if (this.profileForm.valid && this.novaSenhaFormControl.value == "123") {
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
