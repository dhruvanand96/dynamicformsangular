import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponentComponent } from '../create-user-component/create-user-component.component';


@NgModule({
  declarations: [CreateUserComponentComponent ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatTableModule
  ]
})
export class UserModuleModule { }
