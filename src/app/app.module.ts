//
import { NgModule }             from '@angular/core'
import { BrowserModule, Title } from '@angular/platform-browser'
import { HttpModule }           from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

// Routing
import { routing, appRoutingProviders } from './app.routing'

// Services
import { BackgroundCoverService } from './services/background-covers.service'
import { BackgroundColorService } from './services/background-color.service'
import { SliderImagesService }    from './services/slider-images.service'
import { JournalEntriesService }  from './services/journal-entries.service'
import { ScrollRevealService }	  from './services/scrollreveal.service'


// App Component
import { AppComponent } from './app.component'

// Shared Components
import { HeaderComponent } from './shared/header.component'
import { FooterComponent } from './shared/footer.component'

// Page View Components
import { HomeComponent }       from './views/home.component'
import { WorkComponent }       from './views/work.component'
import { JournalComponent }    from './views/journal.component'
import { SingleWorkBHAComponent } from './views/single-work-bha.component'
import { SingleWorkDongComponent } from './views/single-work-dong.component'
import { SingleWorkImperialComponent } from './views/single-work-imperial.component'
import { SingleWorkInitionComponent } from './views/single-work-inition.component'
import { SingleWorkAquaterraComponent } from './views/single-work-aquaterra.component'
import { SingleWorkEdgeComponent } from './views/single-work-edge.component'

// Other Components
import { BackgroundCoverComponent }  from './components/background-cover.component'
import { SliderComponent }           from './components/slider.component'
import { JournalEntriesComponent }   from './components/journal-entries.component'

@NgModule({
  	imports: [
		BrowserModule,
		HttpModule,
		routing,
		BrowserAnimationsModule,
		Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
    ],
  	declarations: [
	  	AppComponent,
	  	HeaderComponent,
	  	FooterComponent,
	  	HomeComponent,
		WorkComponent,
		JournalComponent,
		SingleWorkBHAComponent,
		SingleWorkDongComponent,
		SingleWorkImperialComponent,
		SingleWorkInitionComponent,
		SingleWorkAquaterraComponent,
		SingleWorkEdgeComponent,
		BackgroundCoverComponent,
		SliderComponent,
		JournalEntriesComponent
    ],
  	providers: [
		appRoutingProviders,
		Title,
		BackgroundCoverService,
		BackgroundColorService,
		SliderImagesService,
		JournalEntriesService,
		ScrollRevealService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
