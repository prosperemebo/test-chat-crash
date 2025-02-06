const { withAndroidManifest, withDangerousMod } = require('@expo/config-plugins')
const fs = require('node:fs/promises')

const withAppAuth = (config) => {
  const withManifest = withAndroidManifest(config, async (config) => {
    const mainApplication = config.modResults.manifest.application[0]

    const activities = mainApplication.activity || []
    const hasAppAuthActivity = activities.some(activity => 
      activity.$['android:name'] === 'net.openid.appauth.RedirectUriReceiverActivity',
    )

    if (!hasAppAuthActivity) {
      mainApplication.activity.push({
        $: {
          'android:name': 'net.openid.appauth.RedirectUriReceiverActivity',
          'android:exported': 'true',
        },
        'intent-filter': [
          {
            action: [{ $: { 'android:name': 'android.intent.action.VIEW' } }],
            category: [
              { $: { 'android:name': 'android.intent.category.DEFAULT' } },
              { $: { 'android:name': 'android.intent.category.BROWSABLE' } },
            ],
            data: [{ $: { 'android:scheme': '${appAuthRedirectScheme}' } }],
          },
        ],
      })
    }

    return config
  })

  return withDangerousMod(withManifest, [
    'android',
    async (config) => {
      const buildGradlePath = 'android/app/build.gradle'
      const buildGradle = await fs.readFile(buildGradlePath, 'utf8')
      
      const modifiedBuildGradle = buildGradle.replace(
        /defaultConfig {/,
        `defaultConfig {
        manifestPlaceholders = [
            appAuthRedirectScheme: "${config.android?.package || 'com.gametreeapp'}"
        ]`,
      )

      await fs.writeFile(buildGradlePath, modifiedBuildGradle)
      return config
    },
  ])
}

module.exports = withAppAuth
