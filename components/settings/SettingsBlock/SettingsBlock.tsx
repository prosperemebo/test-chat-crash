import { useRouter, Href } from 'expo-router'
import AlertService from '@/services/Alert'
import { SettingsItemButton, SettingsItemSwitch } from '@/components/settings'
import { SettingsBlockContainer, Divider } from './styles'
import i18n from '@/localization/i18n'
import analytics from '@/services/analytics'
import { SettingsBlockProps } from './types'

const languageIcon = require('@/assets/images/settings/language.png')
const noLocationIcon = require('@/assets/images/settings/nolocation.png')
const inviseIcon = require('@/assets/images/settings/invise.png')
const rateGamesIcon = require('@/assets/images/settings/rate.png')
const uwuDatingIcon = require('@/assets/images/settings/uwuDating.png')

//TODO USER TYPE
const SettingsBlock = ({ user, userHasMembership }: SettingsBlockProps) => {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSetMatchesEnabled = (makeMeInvisible: boolean) => {
    //TODO requests
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleHideLocationEnabled = (hideLocation: boolean) => {
    //TODO requests
  }

  const goToLanguages = () => {
    router.push('/(app)/settings/languages' as Href)
  }

  const goToRateGames = () => {
    router.push('/(app)/games/rated' as Href)
  }

  const goToNotificationSettings = () => {
    router.push('/(app)/settings/notifications' as Href)
  }

  const goToUwUSettings = () => {
    analytics.dating.settingsDatingPressed()
    router.push('/(app)/settings/UwU' as Href)
  }

  const goToRemovedConnections = () => {
    router.push('/(app)/settings/removedConnections' as Href)
  }

  const triggerSetMatchesPopUp = (makeMeInvisible: boolean) => {
    if (!makeMeInvisible) return handleSetMatchesEnabled(makeMeInvisible)

    AlertService.showInfoWithCustomButtons(
      i18n.t('settings:makeMeInvisible'),
      i18n.t('settings:makeMeInvisibleConfirm'),
      [
        { text: i18n.t('common:cancel'), onPress: () => false, style: 'cancel' },
        {
          text: i18n.t('common:yes'),
          onPress: () => handleSetMatchesEnabled(makeMeInvisible),
        },
      ],
      { cancelable: true },
    )
  }

  const renderOptionalUwUSetting = () => {
    const isOver17 = user.profile.age > 17

    if (!isOver17) return null

    return <>
      <SettingsItemButton
        title={i18n.t('settings:settingsUwu')}
        onPress={goToUwUSettings}
        icon={uwuDatingIcon}
      />
      <Divider />
    </>
  }

  const renderOptionalRemovedConnectionsSetting = () => {
    const hasRemovedConnections = user.removedIds.length

    if (!hasRemovedConnections) return null

    return <>
      <SettingsItemButton
        title={i18n.t('settings:removedConnections')}
        onPress={goToRemovedConnections}
        icon={inviseIcon}
      />
      <Divider />
    </>
  }

  const isMatchesEnabled = user.settings.matchesEnabled
  const isHideLocationEnabled = user.settings.hideLocation

  return <SettingsBlockContainer>
    <SettingsItemButton
      value={i18n.t(`languages:${user.settings.language}`)}
      title={i18n.t('common:language')}
      onPress={goToLanguages}
      icon={languageIcon}
    />
    <Divider />
    <SettingsItemSwitch
      value={isMatchesEnabled}
      title={i18n.t('settings:makeMeInvisible')}
      onChange={triggerSetMatchesPopUp}
      icon={inviseIcon}
      canChange={userHasMembership}
    />
    <Divider />
    <SettingsItemSwitch
      value={isHideLocationEnabled}
      title={i18n.t('settings:dontShowLocation')}
      onChange={handleHideLocationEnabled}
      icon={noLocationIcon}
      canChange={true}
    />
    <Divider />
    <SettingsItemButton
      title={i18n.t('games:ratedGames')}
      onPress={goToRateGames}
      icon={rateGamesIcon}
    />
    <Divider />
    <SettingsItemButton
      title={i18n.t('settings:notifPreferences')}
      onPress={goToNotificationSettings}
    />
    <Divider />
    {renderOptionalUwUSetting()}
    {renderOptionalRemovedConnectionsSetting()}
  </SettingsBlockContainer>
}

export default SettingsBlock