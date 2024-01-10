import ArchiveView from '../views/ArchiveView.vue';
import BookmarkView from '../views/BookmarkView.vue';
import DashboardView from '../views/DashboardView.vue';
import DownloadView from '../views/DownloadView.vue';
import PrintView from '../views/PrintView.vue';
import SettingsView from '../views/SettingsView.vue';
import ShareView from '../views/ShareView.vue';

export const routeNames = {
  dashboard: 'dashboard',
  archive: 'archive',
  bookmark: 'bookmark',
  share: 'share',
  download: 'download',
  print: 'print',
  settings: 'settings',
};

export const routes = [
  {
    path: `/${routeNames.dashboard}`,
    alias: '/',
    name: routeNames.dashboard,
    component: DashboardView,
  },
  {
    path: `/${routeNames.archive}`,
    name: routeNames.archive,
    component: ArchiveView,
  },
  {
    path: `/${routeNames.bookmark}`,
    name: routeNames.bookmark,
    component: BookmarkView,
  },
  {
    path: `/${routeNames.share}`,
    name: routeNames.share,
    component: ShareView,
  },
  {
    path: `/${routeNames.download}`,
    name: routeNames.download,
    component: DownloadView,
  },
  {
    path: `/${routeNames.print}`,
    name: routeNames.print,
    component: PrintView,
  },
  {
    path: `/${routeNames.settings}`,
    name: routeNames.settings,
    component: SettingsView,
  },
];
