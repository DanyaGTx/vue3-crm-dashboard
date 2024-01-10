import { ISideBarLink } from './interfaces.ts';

import {
  archiveImage,
  bookmarkImage,
  downloadImage,
  editImage,
  printerIcon,
  settingsIcon,
  shareImage,
} from './icons.ts';

export const sideBarLinks: ISideBarLink[] = [
  { id: 0, title: 'New Job', icon: editImage, redirectName: 'dashboard' },
  { id: 1, title: 'Archive', icon: archiveImage, redirectName: 'archive' },
  { id: 2, title: 'Bookmark', icon: bookmarkImage, redirectName: 'bookmark' },
  { id: 3, title: 'Share', icon: shareImage, redirectName: 'share' },
  { id: 4, title: 'Download', icon: downloadImage, redirectName: 'download' },
  { id: 5, title: 'Print', icon: printerIcon, redirectName: 'print' },
  { id: 6, title: 'Settings', icon: settingsIcon, redirectName: 'settings' },
];
