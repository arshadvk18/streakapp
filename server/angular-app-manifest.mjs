
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://arshadvk18.github.io/streakapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/streakapp"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 754, hash: '9b9283bfde4ceb29337cf9dc91e16c728461252d0cc631fc4f7f55d20d2b4a46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1156, hash: '5726732dea9b7a029148516d860c5687df792557ed4efc36d740b598f0993869', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 2458, hash: '1811adb53c644e1090b6589ee87146b46eb09fc3fe2c57f37c89634bbfee9c99', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M6CKNAHS.css': {size: 80, hash: 'fZbL/D+CPhM', text: () => import('./assets-chunks/styles-M6CKNAHS_css.mjs').then(m => m.default)}
  },
};
