import { Component, input, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-back-button',
  imports: [MatButton, RouterLink, MatIcon],
  template: `
    <div class="mx-auto max-w-300 py-6 px-4">
      <button
        matButton="text"
        [routerLink]="navigateTo() ?? null"
        class="-ms-2 flex items-center gap-1"
      >
        <mat-icon>arrow_back</mat-icon>
        <ng-content />
      </button>
    </div>
  `,
  styles: ``,
})
export class BackButton {
  navigateTo = input<string>();
}
