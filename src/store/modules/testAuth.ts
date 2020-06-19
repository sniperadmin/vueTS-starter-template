import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { User } from '@/models/user'

@Module({
  name: 'testAuth',
  namespaced: true,
})

export default class TestAuth extends VuexModule {
  public token: string = ''
  public refreshToken: string = ''
  public userFullName: string = ''
  public loginProvider: string = ''
  public currentUserProfile!: User

  // getters
  get passedAuth(): boolean {
    return !!this.token
  }

  @Mutation
  /**
   * setToken
   */
  public setToken(tokenPayload: string) {
    this.token = tokenPayload
  }

  @Mutation
  /**
   * setUserFullName
   */
  public setUserFullName(usernamePayload: string) {
    this.userFullName = usernamePayload
  }

  /**
   * Actions down here!
   */
}
