import { Injectable } from '@angular/core'
import { Slide } from '../classes/slide'

const SLIDES: Slide[] = [
  { alias: 'bha', imageURL: '/assets/images/horsegif/1-optim.gif', title: 'BHA', date: new Date('2014'), position: 'center', shouldTransition: false },
  { alias: 'dong', imageURL: '/assets/images/energy/3-optim.gif', title: 'Dong Energy', date: new Date('2014'), position: 'bottom', shouldTransition: false },
  { alias: 'imperial', imageURL: '/assets/images/edu/3-optim.gif', title: 'Imperial College Business School', date: new Date('2013'), position: 'bottom', shouldTransition: false },
  { alias: 'inition', imageURL: '/assets/images/3d/4-optim.gif', title: 'Inition', date: new Date('2013'), position: 'bottom', shouldTransition: false },
  { alias: 'aquaterra', imageURL: '/assets/images/fit/4-optim.gif', title: 'Aquaterra', date: new Date('2013'), position: 'bottom', shouldTransition: false },
  { alias: 'edge', imageURL: '/assets/images/pr/3-optim.gif', title: 'Edge Publicity', date: new Date('2013'), position: 'bottom', shouldTransition: false }
]

@Injectable()
export class SliderImagesService {
	getSlides(): Promise<Slide[]>{
		return Promise.resolve(SLIDES)
	}
}