import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-order-success',
  imports: [MatIcon, RouterLink, MatButton],
  template: `
    <div class="flex justify-center items-center min-h-screen py-6">
      <div
        class="flex flex-col justify-center items-center text-center bg-white rounded-xl shadow p-8 gap-6"
      >
        <mat-icon class="text-green-500! h-14! w-14! text-[56px]!">check_circle</mat-icon>
        <h2 class="font-semibold text-green-600 text-2xl">Order Successful!</h2>
        <p class="text-base w-75">
          Thank you for purchase! Your order has been confirmed and will be shipped soon.
        </p>
        <p class="text-gray-600 w-87.5">
          You will receive an email confirmation shortly with your order details and tracking
          information.
        </p>
        <button matButton="filled" color="primary" class="w-full max-w-xs mt-2" routerLink="/">
          Continue Shopping
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class OrderSuccess {}
