import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElixirsComponent } from './elixirs/elixirs.component';
import { ElixirDetailComponent } from './elixir-detail/elixir-detail.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

export const routes: Routes = [
  {path: 'home', title: 'Home', component: HomeComponent},
  {path: 'elixirs', title: 'Elixirs', component: ElixirsComponent},
  {path: 'elixir-detail/:id', title: 'Elixir', component: ElixirDetailComponent},
  {path: 'spells', title: 'Spells', component: SpellsComponent},
  {path: 'spell-detail/:id', title: 'Spell', component: SpellDetailComponent},
  {path: 'feedback-form', title: 'Send your feedback', component: FeedbackFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**',   title: '404 - Not found', component: HomeComponent},
];
