import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  styleUrls: ['./password-strength.component.scss'],
  templateUrl: './password-strength.component.html',
})
export class PasswordStrengthComponent implements OnChanges {
  public bar0: string | null = null;
  bar1: string | null = null;
  bar2: string | null = null;
  bar3: string | null = null;
  public rules:string | null = null;

  @Input() public passwordToCheck: string | null = null;

  @Output() passwordStrength = new EventEmitter<boolean>();

  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];

  message: string | null = null;
  messageColor: string | null = null;

  checkStrength(password: string) {
    // 1
    let force = 0;

    // 2
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
    const lowerLetters = /[a-z]+/.test(password);
    const upperLetters = /[A-Z]+/.test(password);
    const numbers = /[0-9]+/.test(password);
    const symbols = regex.test(password);

    // 3
    const flags = [lowerLetters, upperLetters, numbers, symbols];
    console.log(flags);

    // 4
    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    // 5
    force += 2 * password.length + (password.length >= 10 ? 1 : 0);
    force += passedMatches * 10;

    // 6
    force = password.length <= 6 ? Math.min(force, 10) : force;

    // 7
    force = passedMatches === 1 ? Math.min(force, 10) : force;
    force = passedMatches === 2 ? Math.min(force, 20) : force;
    force = passedMatches === 3 ? Math.min(force, 30) : force;
    force = passedMatches === 4 ? Math.min(force, 40) : force;

    return force;
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {

    if(changes['passwordToCheck']){

      const password = changes['passwordToCheck'].currentValue;
  
      this.setBarColors(4, '#DDD');
  
      if (password) {
        const color = this.getColor(this.checkStrength(password));
        this.setBarColors(color.index, color.color);
  
        const pwdStrength = this.checkStrength(password);
        pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);
  
        switch (pwdStrength) {
          case 10:
            this.message = 'Pobre';
            break;
          case 20:
            this.message = 'Pouco bom';
            break;
          case 30:
            this.message = 'Bom';
            break;
          case 40:
            this.message = 'Excelente';
            break;
        }
      } else {
        this.message = '';
      }
    }
  }

  private getColor(strength: number) {
    let index = 0;

    if (strength === 10) {
      index = 0;
    } else if (strength === 20) {
      index = 1;
    } else if (strength === 30) {
      index = 2;
    } else if (strength === 40) {
      index = 3;
    } else {
      index = 4;
    }

    this.messageColor = this.colors[index];

    return {
      index: index + 1,
      color: this.colors[index],
    };
  }

  private setBarColors(count: number, color: string) {
    for (let i = 0; i < count; i++) {
      (this as any)['bar' + i] = color;
    }
  }
}