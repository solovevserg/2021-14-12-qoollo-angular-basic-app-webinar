import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersSearchParamsComponent } from './components/users-search-params/users-search-params.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CoreModule } from '../core/core.module';
import { MaterialProxyModule } from '../material-proxy/material-proxy.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserCardComponent,
    UsersSearchParamsComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    MaterialProxyModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
