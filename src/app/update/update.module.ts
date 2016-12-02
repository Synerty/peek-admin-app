import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update.component';
import { UpdatePlatformComponent } from './update-platform/update-platform.component';
import { UpdatePappComponent } from './update-papp/update-papp.component';
import { UpdateLicenseComponent } from './update-license/update-license.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UpdateComponent, UpdatePlatformComponent, UpdatePappComponent, UpdateLicenseComponent]
})
export class UpdateModule { }
