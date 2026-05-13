import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { HeaderActions } from '../header-actions/header-actions';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatToolbar, HeaderActions, RouterLink],
  template: `
    <mat-toolbar class="w-full elevated py-2">
      <div class="max-w-300 mx-auto w-full flex items-center justify-between">
        <span class="hover:cursor-pointer" routerLink="/">Modern Store</span>
        <app-header-actions />
      </div>
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {}
