import { Component, OnInit, Input } from '@angular/core'

import * as _ from 'lodash'

@Component({
  selector: 'background-cover',
  templateUrl: 'background-cover.component.html'
})
export class BackgroundCoverComponent implements OnInit {

	@Input()
	backgroundCovers: Object
	backgroundCoversAsArray: Array<Object>

	constructor() { }

	ngOnInit() {
		this.backgroundCoversAsArray = _.values(this.backgroundCovers)
	}

	isHidden(alias: string) {
		if(this.backgroundCovers[alias].isHidden) {
			return true
		}else{
			return false
		}
	}

}