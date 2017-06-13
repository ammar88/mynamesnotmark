import { Injectable } from '@angular/core'

const BACKGROUNDCOVERS: Object = {
	'Hip Hop': { alias: 'hiphop', isHidden: true, url: '/assets/images/bg_hiphop3-optim.gif' },
	'Writer': { alias: 'writer', isHidden: true, url: '/assets/images/bg_writer-optim.gif' },
	'Web Dev': { alias: 'webdev', isHidden: true, url: '/assets/images/bg_webdev4-optim.gif' },
	'Chef': { alias: 'chef', isHidden: true, url: '/assets/images/bg_chef-optim.gif' }
};

@Injectable()
export class BackgroundCoverService {
  getBackgroundCovers(): Promise<Object> {
    return Promise.resolve(BACKGROUNDCOVERS)
  }
}