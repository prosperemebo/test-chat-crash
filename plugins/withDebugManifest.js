const { withAndroidManifest, withDangerousMod, withInfoPlist } = require('@expo/config-plugins')
const fs = require('node:fs/promises')
const path = require('path')

const withDebugManifest = (config) => {
  let withMainManifest = withAndroidManifest(config, async (config) => {
    const mainApplication = config.modResults.manifest.application[0]

    if (!mainApplication.$) {
      mainApplication.$ = {}
    }

    mainApplication.$ = {
      ...mainApplication.$,
      'xmlns:tools': 'http://schemas.android.com/tools',
      'tools:replace': 'android:fullBackupContent',
      'android:fullBackupContent': '@xml/secure_store_backup_rules',
    }

    return config
  })

  withMainManifest = withInfoPlist(withMainManifest, (config) => {
    config.modResults.NSCameraUsageDescription =
      'Allow $(PRODUCT_NAME) to access your camera'
    config.modResults.NSMicrophoneUsageDescription =
      'Allow $(PRODUCT_NAME) to access your microphone'
      
    return config
  })

  return withDangerousMod(withMainManifest, [
    'android',
    async (config) => {
      const debugManifestPath = path.join(config.modRequest.platformProjectRoot, 'app/src/debug/AndroidManifest.xml')

      const manifestContent = `<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.INTERNET" />

    <application 
        android:usesCleartextTraffic="true" 
        tools:targetApi="28" 
        tools:ignore="GoogleAppIndexingWarning"
        tools:replace="android:usesCleartextTraffic,android:fullBackupContent"
        android:fullBackupContent="@xml/secure_store_backup_rules" />
</manifest>`

      await fs.writeFile(debugManifestPath, manifestContent)

      return config
    },
  ])
}

module.exports = withDebugManifest
