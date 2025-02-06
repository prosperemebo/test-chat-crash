import { action, makeObservable, observable } from 'mobx'

class ChatStore {
  isRequestRunning: boolean = false
  currentUser: any | null = null

  constructor() {
    makeObservable(this, {
      isRequestRunning: observable,
      currentUser: observable,
      setCurrentUser: action,
    })
  }

  setCurrentUser = (user: any) => {
    this.currentUser = user
  }
}

export default new ChatStore()
