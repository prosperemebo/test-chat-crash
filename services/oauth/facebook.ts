import 'react-native-get-random-values'

export const signIn = async () => {
  try {
    throw new Error('This login method is not implemented!')
  } catch (error) {
    //TODO errors
    console.error(error)

    return {
      success: false,
      status: '',
      data: {
        accessToken: '',
        refreshToken: '',
      },
    }
  }
}

export const logout = () => {}
