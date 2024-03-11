import useFlash from "~/composables/useFlash"
import { useUserStore } from "~/stores/user"



export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    const { notify } = useFlash()

    if (userStore.getUser.role !== "admin") {
        notify("You are not authorized to access this page", "error")
        return false
    }
})
