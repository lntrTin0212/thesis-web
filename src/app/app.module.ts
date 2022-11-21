import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button";
import { MatToolbarModule} from "@angular/material/toolbar"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component'
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './sidebar/sidebar.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatGridListModule} from '@angular/material/grid-list'
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table'  
import {MatExpansionModule} from '@angular/material/expansion';


import {MatPaginatorModule} from '@angular/material/paginator'
import { ContentComponent } from './content/content.component';
import { UserComponent } from './content/user/user.component';
import { UserDetailComponent } from './content/user/user-detail/user-detail.component';
import { UserListComponent } from './content/user/user-list/user-list.component';
import { TopicComponent } from './content/topic/topic.component';
import { TopicListComponent } from './content/topic/topic-list/topic-list.component';
import { TopicDetailComponent } from './content/topic/topic-detail/topic-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MeComponent } from './content/user/me/me.component';
import { PasswordComponent } from './dialog/password/password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TopicInfoComponent } from './content/topic/topic-detail/topic-info/topic-info.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CreateNewComponent } from './form/create-new/create-new.component';
import { MatSelectModule } from '@angular/material/select';
import { GameComponent } from './content/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    UserComponent,
    UserDetailComponent,
    UserListComponent,
    TopicComponent,
    TopicListComponent,
    TopicDetailComponent,
    SignInComponent,
    SignUpComponent,
    NotFoundComponent,
    MeComponent,
    PasswordComponent,
    TopicInfoComponent,
    CreateNewComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatProgressBarModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
