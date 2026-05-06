import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header class="relative z-10" />
    <div class="min-h-[calc(100%-64px)] overflow-auto px-4 pt-6">
      <router-outlet />
    </div>
  `,
  styles: [],
})
export class App {}
