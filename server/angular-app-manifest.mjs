
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/streakapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/streakapp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 726, hash: '0d659a933d152dc3d17250bfd49636005a0ee02192804eec6a20d817245a41f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1128, hash: '1893a3ee50f4c1720fc676f0e1d1988fb1d815d70f21e558c356ff63309a8c6c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2430, hash: '40e49ef951fcb139b060a06a1940e6777349b094849d188d41208129e70dccc9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M6CKNAHS.css': {size: 80, hash: 'fZbL/D+CPhM', text: () => import('./assets-chunks/styles-M6CKNAHS_css.mjs').then(m => m.default)}
  },
};
