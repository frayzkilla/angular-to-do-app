import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannedComponent } from './components/planned/planned/planned.component';
import { InprogressComponent } from './components/in-progress/inprogress/inprogress.component';
import { FinishedComponent } from './components/finished/finished/finished.component';
import { TaskComponent } from './components/task/task/task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlannedComponent,
    InprogressComponent,
    FinishedComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
