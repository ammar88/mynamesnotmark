import { Injectable } from '@angular/core'
import { Subject }    from 'rxjs/Subject'

@Injectable()
export class BackgroundColorService {

	// Observable string sources
	private backgroundColorSource = new Subject<string>()

	// Observable string streams
	backgroundColor$ = this.backgroundColorSource.asObservable()

	// Service message commands
	sendBackgroundColorChange(newBgColorClass: string) {
		this.backgroundColorSource.next(newBgColorClass)
	}
}