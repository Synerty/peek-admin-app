import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SettingListComponent } from './setting-list/setting-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SettingComponent, SettingListComponent]
})
export class SettingModule { }
