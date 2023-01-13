import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingletonComponent } from './singleton/singleton.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SingletonComponent,
    FactoryMethodComponent,
    AbstractFactoryComponent,
    BuilderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
