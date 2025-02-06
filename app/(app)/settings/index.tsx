import { Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { SettingsProps } from '../types';

//TODO proper User
const Settings = (props: SettingsProps) => {
  const { logout } = props;

  const router = useRouter();

  const handleReset = () => {
    logout();
  };

  const goBack = () => {
    if (router.canGoBack()) router.back();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
