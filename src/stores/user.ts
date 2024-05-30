import { ref, computed } from 'vue'
import { defineStore } from './index'
interface Perfile {}
interface Role {}
interface UserInfo {
  access_token: string
  perfile: Perfile
  role: Role
}
export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref<UserInfo>({
      access_token: '',
      perfile: {},
      role: {}
    })
    const user_token = computed(() => userInfo.value.access_token)
    const user_perfile = computed(() => userInfo.value.perfile || {})
    const user_role = computed(() => userInfo.value.role)

    const setUserInfo = (user: UserInfo) => {
      userInfo.value = user
    }
    const removeUserInfo = () => {
      userInfo.value = {
        access_token: '',
        perfile: {},
        role: {}
      }
    }
    return { userInfo, user_token, user_perfile, user_role, setUserInfo, removeUserInfo }
  },
  { persist: true }
)
