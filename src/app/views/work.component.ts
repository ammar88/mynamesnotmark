import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';

import { fadeInOutAnimation } from '../animations'

@Component({
  	// moduleId: module.id,
  	selector: 'app-work',
  	templateUrl: 'work.component.html',
    animations: [ fadeInOutAnimation ]
})
export class WorkComponent implements OnInit, OnDestroy {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class') addClasses = "absolute-m w-100 h-100-m t-0 b-0 z-1";
  
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
  // @HostBinding('style.width')  width = '100%';
  // @HostBinding('style.height')  height = '100%';
  // @HostBinding('style.top')  top = '0';
  // @HostBinding('style.zIndex')  zIndex = '-1';

	constructor() { }

	ngOnInit() {
	}

  ngOnDestroy() {

  }
}