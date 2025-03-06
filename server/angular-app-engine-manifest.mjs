
export default {
  basePath: 'https://arshadvk18.github.io/streakapp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
