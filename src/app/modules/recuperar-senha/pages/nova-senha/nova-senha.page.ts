import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,FormsModule, ReactiveFormsModule,Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
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
})
export class NovaSenhaPage {

  public  profileForm: FormGroup;
  public  novaSenhaFormControl:any|null = null
  public  repetirNovaSenhaFormControl:any|null = null
  public  matcher:MyErrorStateMatcher = new MyErrorStateMatcher();
  private strongPassword:boolean = false;

  constructor(fb: FormBuilder, private util:Utils, private router: Router) { 

    this.novaSenhaFormControl =  new FormControl('',[Validators.required]);
    this.repetirNovaSenhaFormControl =  new FormControl('',[Validators.required]);

    this.profileForm = new FormGroup({
       novaSenhaFormControl: this.novaSenhaFormControl,
       repetirNovaSenhaFormControl: this.repetirNovaSenhaFormControl
    });

   }

   ngOnInit() {
    
  }

  onPasswordStrengthChanged(event: boolean) {
    this.strongPassword = event;
  }


  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

  onSubmit() {
    if (this.profileForm.valid ) {
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
