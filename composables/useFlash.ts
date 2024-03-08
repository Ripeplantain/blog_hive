import { toast, type ToastOptions } from 'vue3-toastify';


export default function useFlash() {
    const notify = (message: string, type: string) => {
        toast(message, {
            type: type,
            autoClose: 5000,
            position: toast.POSITION.TOP_CENTER,
        } as ToastOptions)
    }

    return {
        notify
    }
}