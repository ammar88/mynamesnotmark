import { Component, OnInit, HostBinding } from '@angular/core'
import { Title }     from '@angular/platform-browser'
import { Router, RoutesRecognized } from '@angular/router';

import 'rxjs/add/operator/switchMap';


import { BackgroundColorService } from './services/background-color.service'

@Component({
  selector: 'body',
  templateUrl: 'app.component.html',
  host: { "[class]":"'color-off-white trsn-bc overflow-x-hidden ' + backgroundColorClass " }
})
export class AppComponent implements OnInit{

	private backgroundColorClass: string
	private pageTitle: string

	constructor (
		private router: Router,
		private backgroundColorService: BackgroundColorService,
		private titleService: Title
	){
		this.backgroundColorClass = 'bg-color-off-black'
	}

	ngOnInit() {

		this.getBackgroundColor()
		this.router.events.subscribe(event => {

            if (event instanceof RoutesRecognized) {

            	let pageTitle = event.state.root.firstChild.data['title']
            	this.setTitle(pageTitle)

            }
        });
	}

	getBackgroundColor(){
		this.backgroundColorService.backgroundColor$
			.subscribe( newBgColorClass => this.backgroundColorClass = newBgColorClass )
	}

	setTitle( newTitle: string ) {
		this.titleService.setTitle( newTitle );
	}
}