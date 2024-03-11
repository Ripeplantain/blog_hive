import { defineStore } from 'pinia'
import type { IUser } from '~/interfaces/user'


export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>({
    email: '',
    role: '',
  })

  const getUser = computed(() => user.value)

  function setUser(newUser: IUser) {
    user.value = newUser
  }

  return {
    getUser,
    setUser,
  }
})
