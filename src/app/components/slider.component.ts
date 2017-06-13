import { Component, OnInit } from '@angular/core'
import { Slide } from '../classes/slide'
import { SliderImagesService } from '../services/slider-images.service'

import * as _ from 'lodash'

@Component({
  	selector: 'app-slider',
  	templateUrl: 'slider.component.html'
})
export class SliderComponent implements OnInit {

	// Component Properties
	private slides: Slide[]
	private _currentSlideIndex: number
	private _previousSlideIndex: number

	// Constructor
	constructor(
		private sliderImageService: SliderImagesService,
	) {
		if (!this.previousSlideIndex) {
			this.currentSlideIndex = 0
		}
	}

	ngOnInit() {
		this.getSlides()
	}

	/**
	 * Get Slides - Service Call
	 */
	private getSlides(): void {
		this.sliderImageService.getSlides().then( slides => {
			this.slides = slides
			this.currentSlideIndex = slides.findIndex( slide => slide.position == 'center' )
			})
	}


	private onSelect(slide: Slide): void {
	//On selecting an entry from the slider navigation controls...
		
		// Update current State of slider
		this.updateSliderState(slide)

		// For each slide in the 'slides' array...
		_.forEach(this.slides, (slide: Slide, key: number) => {

			// reset shouldTransiton state on all slides
			slide.shouldTransition = false

			// Update position of each slide
			this.updateSlidePostion(slide, key)

		})

		// Set the shouldTransition state on appropriate slides
		this.setShouldTransitionState(slide)		

	}

	/**
	 * @param {number} v [The previous slide index]
	 */
	set previousSlideIndex(v: number){
		this._previousSlideIndex = v
	}
	/**
	 * @return {number} _previousSlideIndex [The previously active slide index]
	 */
	get previousSlideIndex(): number{
		return this._previousSlideIndex
	}
	/**
	 * @param {number} v [New slide index value]
	 */
	set currentSlideIndex(v: number){
		this._currentSlideIndex = v
	}
	/**
	 * @return {number} _currentSlideIndex [The currently active slide index]
	 */
	get currentSlideIndex(): number{
		return this._currentSlideIndex
	}

	/**
	 * @param {Slide} newlySelectedSlide [The slide which will now be considered as 'current/center']
	 */
	private updateSliderState(newlySelectedSlide: Slide): void {
		// Set previous slide index.
		this.previousSlideIndex = this.currentSlideIndex
		// Get newly selected slide index by matching aliases.
		// set new slide index as current.
		this.currentSlideIndex = this.slides.findIndex( slide => slide.alias == newlySelectedSlide.alias )
	}

	/**
	 * @param {Slide} slide [A single slide]
	 */
	private setShouldTransitionState(slide: Slide): void{
		// The newly selected slide should transition...
		slide.shouldTransition = true
		// ... and so should the slide currently leaving (previously selected slide)
		this.slides[this.previousSlideIndex].shouldTransition = true
	}

	/**
	 * @param {Slide} slide [A single slide]
	 * @param {number} loopIndex [Array index]
	 */
	private updateSlidePostion(slide: Slide, loopIndex: number): void{
		// Given this 'slide'...
		switch(true) {
			// ... if its 'before' the new slide
			case (loopIndex < this.currentSlideIndex):
				// ... move it above the frame/view.
				slide.position = "top"
				break
			// ... if it is after the new slide
			case (loopIndex > this.currentSlideIndex):
				// ... move it below the frame/view.
				slide.position = "bottom"
				break
			// if it is the new slide...
			case (this.currentSlideIndex == loopIndex):
				// ... move it to the center of the frame/view.
				slide.position = "center"
				break
			default:		
		}
	}
}
