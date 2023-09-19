import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder,FormsModule, ReactiveFormsModule,Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { Utils } from 'src/app/core/utils';

import { Validadores } from 'src/app/core/validadores';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.page.html',
  styleUrls: ['./esqueceu-senha.page.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule,NgIf]
})
export class EsqueceuSenhaPage {

   public profileForm: FormGroup;
   public matcher:MyErrorStateMatcher = new MyErrorStateMatcher();
   public  emailFormControl:any|null = null
   public  cpfFormControl:any|null = null

   constructor(fb: FormBuilder, private util:Utils) { 
     console.log("EsqueceuSenhaPage");
     this.profileForm = new FormGroup({
       login: new FormControl(''),
       matricula: new FormControl(''),
       cpf: new FormControl('',Validators.compose([Validators.required, Validadores.ValidaCpf])), 
       emailpessoal: new FormControl('', [Validators.required, Validators.email])
      });
      
      this.emailFormControl  = this.profileForm.get('emailpessoal');
      this.cpfFormControl  = this.profileForm.get('cpf');

    }
    

    onSubmit() {
      if (!this.emailFormControl.valid) {
        this.util.exibirErro("Insira um e-mail inválido");
      } else {
        // O controle de emailpessoal é inválido
      }
    }


}
