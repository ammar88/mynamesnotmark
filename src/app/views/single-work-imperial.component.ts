import { Component, Input, OnInit, OnDestroy, AfterViewInit, HostBinding } from '@angular/core'
import { BackgroundColorService } from '../services/background-color.service'
import { ScrollRevealService }	  from '../services/scrollreveal.service'

import { fadeInOutAnimation } from '../animations'

@Component({
  	selector: 'app-single-work',
  	templateUrl: 'single-work-imperial.component.html',
  	animations: [ fadeInOutAnimation ]
})
export class SingleWorkImperialComponent implements OnInit, OnDestroy, AfterViewInit {

	@HostBinding('@routeAnimation') routeAnimation = true;
	@HostBinding('class') addClasses = "absolute-m w-100 h-100-m t-0 b-0 z-1";
	
	// Component Properties
	private _bgColorClass: string
	private _caseStudyTitle: string

	constructor(
		private backgroundColorService: BackgroundColorService,
		private scrollRevealService: ScrollRevealService
		) {
		this._bgColorClass = 'bg-color-imperial-blue'
	}

	ngOnInit() {
		this.backgroundColorService.sendBackgroundColorChange(this._bgColorClass)
	}

	ngAfterViewInit() {
		this.scrollRevealService.setupReveals()
	}

	ngOnDestroy() {
		this.backgroundColorService.sendBackgroundColorChange('bg-color-off-black')
	}

	/**
	 * Set the background color of this case study
	 * @param {string} v [New background color class]
	 */
	public set bgColorClass(v: string){
		this._bgColorClass = 'bg-color-bha-blue'
	}
	/**
	 * Get the background color of this case study
	 * @return {string} [Background color class]
	 */
	public get bgColorClass(): string{
		return this._bgColorClass
	}

}
