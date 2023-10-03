import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormGroup, FormControl, FormBuilder,FormsModule, ReactiveFormsModule,Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { Utils } from 'src/app/core/utils';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

import { Validadores } from 'src/app/core/validadores';
import { Router } from '@angular/router';

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
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule,MatButtonModule,NgIf, NgxMaskDirective, NgxMaskPipe],
  providers: [
    provideNgxMask(),
  ],
})
export class EsqueceuSenhaPage {

   public profileForm: FormGroup;
   public matcher:MyErrorStateMatcher = new MyErrorStateMatcher();
   public  emailFormControl:any|null = null
   public  cpfFormControl:any|null = null
   public  loginFormControl:any|null = null
   public  matriculaFormControl:any|null = null

   constructor(fb: FormBuilder, private util:Utils, private router: Router) { 

     this.emailFormControl  = new FormControl('', [Validators.required, Validators.email])
     this.cpfFormControl    = new FormControl('',Validators.compose([Validators.required, Validadores.ValidaCpf]));
     this.loginFormControl =  new FormControl('',[Validators.required]);
     this.matriculaFormControl =  new FormControl('',[Validators.required]);

     this.profileForm = new FormGroup({
        emailFormControl: this.emailFormControl,
        cpfFormControl: this.cpfFormControl,
        loginFormControl: this.loginFormControl,
        matriculaFormControl: this.matriculaFormControl
     });

    }
    

    onSubmit() {
      if (this.profileForm.valid) {
        this.router.navigate(['/codigo-seguranca']);
      } else {
        this.util.exibirErro("Preencha o(s) campo(s) obrigatório(s)");
      }
    }


}
