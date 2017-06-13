import { Injectable } 	from '@angular/core'
import { JournalEntry } from '../classes/journal-entry'

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class JournalEntriesService {

	private uri: string = "https://public-api.wordpress.com/rest/v1.1/sites/en.blog.wordpress.com/posts/?number=2&pretty=true";

	constructor(private http: Http){}
	
	// getEntries(): Promise<JournalEntry[]>{
	// 	return this.http.get(this.uri)
 //               .toPromise()
 //               .then(response => response.json().posts as JournalEntry[])
 //               .catch(this.handleError);
	// }

	private handleError(error: any): Promise<any> {
	  console.error('An error occurred', error); // for demo purposes only
	  return Promise.reject(error.message || error);
	}
}