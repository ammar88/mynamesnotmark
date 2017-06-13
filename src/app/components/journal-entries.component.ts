import { Component, OnInit } from '@angular/core'
import { JournalEntry } from '../classes/journal-entry'
import { JournalEntriesService } from '../services/journal-entries.service'

import * as _ from 'lodash'

@Component({
  selector: 'journal-entries',
  templateUrl: 'journal-entries.component.html',
})
export class JournalEntriesComponent implements OnInit {

	private entries: JournalEntry[]

	constructor( private jornalEntriesService: JournalEntriesService ) {}

	ngOnInit() {
		this.getEntries()
	}

	getEntries(){
		// this.jornalEntriesService.getEntries().then( entries => this.entries = entries )
	}

}