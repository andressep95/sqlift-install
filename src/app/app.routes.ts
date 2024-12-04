import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CommandsComponent } from './components/commands/commands.component';
import { ExampleComponent } from './components/example/example.component';
import { GuidesComponent } from './components/guides/guides.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'commands', component: CommandsComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'guides', component: GuidesComponent },
  { path: '**', redirectTo: '' }
];