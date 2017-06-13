import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { BackgroundCover } from '../classes/background-cover'
import { BackgroundCoverService } from '../services/background-covers.service'

import { fadeInOutAnimation } from '../animations'

@Component({
  	selector: 'app-home',
  	templateUrl: 'home.component.html',
  	animations: [ fadeInOutAnimation ]
  	// host:     {'[class.someClass]':'someField'}
})
export class HomeComponent implements OnInit {

	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('class') addClasses = "absolute-m w-100 h-100-m t-0 b-0 z-1";

	backgroundCovers: any;
	selectedBackgroundCover: BackgroundCover;

	constructor(private backgroundCoverService: BackgroundCoverService) { }

	ngOnInit() {
		this.getBackgroundCovers()
	}

	getBackgroundCovers() {
		this.backgroundCoverService.getBackgroundCovers().then(
			backgroundCovers => this.backgroundCovers = backgroundCovers
		)
	}

	onHoverHighlight(alias: string) {
		this.selectedBackgroundCover = this.backgroundCovers[alias]
		this.selectedBackgroundCover.isHidden = false
	}

	offHoverHighlight(alias: string){
		this.selectedBackgroundCover.isHidden = true
	}

}