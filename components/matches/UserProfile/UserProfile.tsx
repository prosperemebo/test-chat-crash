import React from 'react'
import { Dimensions, FlatList, TouchableWithoutFeedback } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'
import CountryFlag from 'react-native-country-flag'
import {
  GameCard,
  GameImage,
  GameTitle,
  Container,
  ScrollContainer,
  Header,
  Content,
  Avatar,
  Location,
  UserInfo,
  Username,
  UserDetails,
  DetailItem,
  FlagContainer,
  DetailText,
  IconContainer,
  Description,
  ButtonsContainer,
  ButtonText,
  Button,
  GamingSection,
  SectionTitle,
  GamesRow,
  PlatformsContainer,
  PlatformIcon,
} from './styles'
import { UserProfileProps } from './types'
import { platformIcons } from './constants'
import i18n from '@/localization/i18n'
import { CommonGame } from '@/types'
import { getImageSource } from '@/utils/gameImage'

const { width } = Dimensions.get('window')
export const defaultBanner = require('@/assets/images/games/game_banner_placeholder.png')

const renderGameItem = ({ item }: { item: CommonGame }) => (
  <TouchableWithoutFeedback>
    <GameCard>
      <GameImage source={item.imageUrl ? { uri: getImageSource(item.imageUrl) } : defaultBanner} resizeMode="cover" />
      <GameTitle numberOfLines={2}>{item.title}</GameTitle>
    </GameCard>
  </TouchableWithoutFeedback>
)

const UserProfile: React.FC<UserProfileProps> = ({
  userId,
  username,
  age,
  location,
  aboutMe,
  avatar,
  coverImg,
  languages,
  gender,
  currentTime,
  commonGames,
  favoriteGames,
  commonPlatforms,
  onSkip,
  onConnect,
}) => (
  <Container>
    <ScrollContainer>
      <Header
        source={{ uri: coverImg }}
        resizeMode="cover"
      />
      <Content style={{ pointerEvents: 'box-none' }}>
        <Avatar source={{ uri: avatar }} />
        <UserInfo>
          <Username>{`${username}, ${age}`}</Username>
          {location ? <Location>{location.country}, {location.city}</Location> : null}
          <UserDetails>
            {languages?.length ? (
              <DetailItem>
                {location && location.code ? (
                  <FlagContainer>
                    <CountryFlag isoCode={location.code} size={24} />
                  </FlagContainer>
                ) : null}
                <DetailText>{languages[0]}</DetailText>
              </DetailItem>
            ) : null}
            <DetailItem>
              <IconContainer>
                <Icon
                  name={gender === 'Female' ? 'female' : gender === 'Male' ? 'male' : 'male-female'}
                  size={16}
                  color="#fff"
                />
              </IconContainer>
              <DetailText>{gender}</DetailText>
            </DetailItem>
            <DetailItem>
              <IconContainer>
                <Icon
                  name="time-outline"
                  size={16}
                  color="#fff"
                />
              </IconContainer>
              <DetailText>{currentTime}</DetailText>
            </DetailItem>
          </UserDetails>
          <Description>{aboutMe}</Description>
        </UserInfo>

        <ButtonsContainer>
          <Button isSkip onPress={() => onSkip(userId)}>
            <ButtonText>{i18n.t('matches:skip')}</ButtonText>
          </Button>
          <Button onPress={onConnect.bind(null, userId)}>
            <ButtonText>{i18n.t('matches:connect')}</ButtonText>
          </Button>
        </ButtonsContainer>

        {commonGames && commonGames.length ? (
          <GamingSection>
            <SectionTitle>{i18n.t('profile:gamesInCommonV2', { count: commonGames.length })}</SectionTitle>
            <GamesRow>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={((width * 0.7) + 16)}
                snapToAlignment="center"
                contentContainerStyle={{
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
                data={commonGames}
                renderItem={renderGameItem}
                keyExtractor={item => `common-game-${item.id}`}
              />
            </GamesRow>
          </GamingSection>
        ) : null}

        {favoriteGames && favoriteGames.length ? (
          <GamingSection>
            <SectionTitle>{i18n.t('profile:favouriteGames', { count: favoriteGames.length })}</SectionTitle>
            <GamesRow>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate="fast"
                snapToInterval={((width * 0.7) + 16)}
                snapToAlignment="center"
                contentContainerStyle={{
                  paddingLeft: 16,
                  paddingRight: 16,
                }}
                data={favoriteGames}
                renderItem={renderGameItem}
                keyExtractor={item => `favorite-game-${item.id}`}
              />
            </GamesRow>
          </GamingSection>
        ) : null}

        {commonPlatforms && commonPlatforms.length ? (
          <GamingSection>
            <SectionTitle>{i18n.t('profile:platformsInCommonV2', { count: commonPlatforms.length })}</SectionTitle>
            <PlatformsContainer>
              {commonPlatforms.map((platform, index) => (
                <PlatformIcon
                  key={index}
                  source={platformIcons[platform as keyof typeof platformIcons]}
                  resizeMode="contain"
                />
              ))}
            </PlatformsContainer>
          </GamingSection>
        ) : null}
      </Content>
    </ScrollContainer>
  </Container>
)

export default UserProfile 