//Overrides variables in app.json
import { ExpoConfig, ConfigContext } from '@expo/config'
import withAppAuth from './plugins/withAppAuth'
import withDebugManifest from './plugins/withDebugManifest'

export default ({ config }: ConfigContext): ExpoConfig => {
  const plugins = [
    ...(config.plugins as any[] || []),
    withDebugManifest,
    withAppAuth,
  ]

  return {
    name: config.name || 'GameTree',
    slug: config.slug || 'GameTree',
    version: config.version || '1.0.0',
    orientation: config.orientation || 'portrait',
    icon: config.icon || './assets/images/icon.png',
    ...config,
    plugins,
  } as ExpoConfig
}