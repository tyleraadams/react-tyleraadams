import portfolio from '../data/portfolio';
import Index from '../containers/index/index';
import slugify from '../utils/slugify';
import NotFound from '../containers/not_found/not_found';

const routes = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  ...portfolio.entries.map(function convertDataToRoute(entry) {
    return {
      path: `/${slugify(entry.hed)}`,
      component: Index,
      exact: true
    };
  }),
  {
    component: NotFound,
    exact: false
  }
];

export default routes;
