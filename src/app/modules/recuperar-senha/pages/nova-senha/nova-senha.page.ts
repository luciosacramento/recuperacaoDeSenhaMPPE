import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,FormsModule, ReactiveFormsModule,Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
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

  public showDetails: boolean | undefined;
  
  constructor(protected util:Utils,private router: Router) { }

  ngOnInit() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }



  onSubmit() {
    /*if (this.profileForm.valid && this.smsFormControl.value == "123") {
      this.util.exibirSucesso("Código válido.");
    } else {
      this.util.exibirErro("Código inválido.");
    }*/
  }

  reenviarCodigo() {
    this.util.exibirSucesso("Código reenviado.");
  }

  cancelar() {
    this.router.navigate(['/recuperarsenha']);
  } 
}
