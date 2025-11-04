import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

import { App } from './app';
import {HeaderComponent} from './header/header';
import {User} from './user/user';


@NgModule({
  declarations: [App, HeaderComponent, User],
  bootstrap: [App],
  imports: [BrowserModule, SharedModule, TasksModule]
})
export class AppModule {}
