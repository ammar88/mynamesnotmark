import { Injectable } from '@angular/core'

import * as ScrollReveal from 'scrollreveal'

@Injectable()
export class ScrollRevealService {

	private defaultSettings: {} = {
					origin: 'bottom',
					distance: '180px',
					duration: 600,
					delay: 0,
					opacity: 0,
					scale: 1,
					easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
					mobile: false,
					reset: false,
					viewFactor: 0.6
				}

	private _scrollreveal: any

	constructor (){
		this._scrollreveal = ScrollReveal(this.defaultSettings)
	}

	setupReveals() {
		this._scrollreveal.reveal('.reveal')
		this._scrollreveal.reveal('.reveal-header-image', { delay: 400, distance: '200px', viewFactor: 0.0})
		this._scrollreveal.reveal('.reveal-header-title', { delay: 400, distance: '260px', duration: 900}, 100)
		this._scrollreveal.reveal('.reveal-intro-copy', { delay: 400, distance: '200px', duration: 900})
		this._scrollreveal.reveal('.reveal-fullscreen-monitor', { distance: '200px', duration: 900, viewFactor: 0.3 })
		this._scrollreveal.reveal('.reveal-stacked-phones', { origin: 'left' }, 120)
		this._scrollreveal.reveal('.reveal-from-right', { origin: 'right' })
		this._scrollreveal.reveal('.reveal-from-left', { origin: 'left' })
		this._scrollreveal.reveal('.reveal-fullscreen-image', {distance: '200px', viewFactor: 0.3 })
		this._scrollreveal.reveal('.reveal-isometric', {distance: '200px' }, 140)
		this._scrollreveal.reveal('.reveal-credit', 70)
		this._scrollreveal.reveal('.reveal-credit.left-align', { origin: 'right', distance: '200px', viewFactor: 1.0, delay: 200})


		this._scrollreveal.reveal('.reveal-appslider-images', { origin: 'bottom', distance: '200px', viewFactor: 0.0, delay: 1000})
		this._scrollreveal.reveal('.reveal-appslider-titles', { origin: 'left', distance: '200px', viewFactor: 0.0, delay: 1000})
		this._scrollreveal.reveal('.reveal-appslider-buttons', { origin: 'right', distance: '200px', viewFactor: 0.0, delay: 1000})

	}
}