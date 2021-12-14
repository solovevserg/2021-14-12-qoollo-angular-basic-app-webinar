import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card';

const exports = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: exports,
  exports,
})
export class MaterialProxyModule { }
