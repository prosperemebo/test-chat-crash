import { adapty, AdaptyPaywall, AdaptyPaywallProduct } from 'react-native-adapty'

type Params =  { [key: string]: any; }

export class AdaptyService {
  static init = async () => {

  }

  static initializeUser = async (customerId: string) => {
   
  }

  static updateUserData = async (params: Params) => {
   
  }

  static logShowPaywall = async (paywall: AdaptyPaywall) => {
    
  }

  static getPaywall = async (PLACEMENT: string, locale: string) => {
   
  }

  static getPaywallProducts = async (paywall: AdaptyPaywall) => {
    
  }

  static makePurchase = async (product: AdaptyPaywallProduct) => {
    
  }

  static logOnboarding = async (step: number) => {
   
  }
}


const getOnboardingLogConfig = (step: number) => {

}