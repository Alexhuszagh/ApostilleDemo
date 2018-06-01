import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyBNlqSip5ZNaxcGZyS6mwaBzg_9O_bra0Q',
    authDomain: 'nem-apostille-social.firebaseapp.com',
    databaseURL: 'https://nem-apostille-social.firebaseio.com',
    projectId: 'nem-apostille-social',
    storageBucket: 'nem-apostille-social.appspot.com',
    messagingSenderId: '301846640669'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Apostille Demo',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
