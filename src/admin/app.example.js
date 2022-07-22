import AndromedaLogo from '../extensions/andromeda.png'
import AndromedaFavicon from '../extensions/andromedafavicon.png'

export default {
  config: {
    auth: {
      logo: AndromedaLogo
    },
    menu: {
      logo: AndromedaLogo
    },
    head: {
      favicon: AndromedaFavicon
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
