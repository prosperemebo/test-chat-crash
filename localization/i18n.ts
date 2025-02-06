import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-chained-backend'
import AsyncStorageBackend from 'i18next-async-storage-backend2'
import HttpApi from 'i18next-http-backend'
import config from '@/config'
import { locales } from '@/constants/locales'

let errorCounter = 0

export const init = () => {
  i18n
    .use(initReactI18next)
    .use(Backend)
    .init(
      {
        fallbackLng: 'en',
        supportedLngs: locales,
        ns: ['login', 'errors', 'dashboard'],
        defaultNS: 'common',
        compatibilityJSON: 'v3',

        interpolation: {
          escapeValue: false, // not needed for react as it does escape per default to prevent xss!
        },
        backend: {
          backends: [
            AsyncStorageBackend, // primary
            HttpApi, // fallback
          ],
          backendOptions: [
            {
              // prefix for stored languages
              prefix: 'i18next_',

              // expiration
              expirationTime: 7 * 24 * 60 * 60 * 1000,
              // language versions
              versions: {
                de: 'v.1.58',
                en: 'v.1.58',
                es: 'v.1.58',
                fr: 'v.1.58',
                nl: 'v.1.58',
                pt: 'v.1.58',
                ru: 'v.1.58',
                uk: 'v.1.58',
                it: 'v.1.58',
              },
            },
            {
              loadPath: `${config.STATIC_HOST}/locales/{{lng}}/{{ns}}.json?time=${new Date().getTime()}`,
            },
          ],
        },
      },
      (err) => {
        if (err) {
          errorCounter++
          //try to init not more than 10 times
          if (errorCounter < 10) {
            init()
          } else {
            //then continue trying every 3 sec
            // eslint-disable-next-line no-undef
            setTimeout(() => init(), 3000)
          }
        }
      },
    )


  i18n.loadNamespaces(
    // load additional namespaces after initialization
    [
      'achievements',
      'chat',
      'common',
      'connections',
      'improve',
      'events',
      'feed',
      'gamerdna',
      'games',
      'genres',
      'languages',
      'levels',
      'localNotif',
      'matches',
      'months',
      'networks',
      'notif',
      'navigationTabs',
      'onb',
      'platforms',
      'profile',
      'reviews',
      'search',
      'settings',
      'sharing',
      'skills',
      'tests',
      'tutorials',
      'types',
      'gamethemes',
      'dating',
      'help',
      'subscription',
    ],
    () => {},
  )
}

export default i18n
