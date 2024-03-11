<template>
    <div class="font-sans text-gray-900 antialiased">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-[#f8f4f3]">
            <div>
                <span>
                    <h2 class="font-bold text-3xl">Blog <span
                            class="bg-[#f84525] text-white px-2 rounded-md">Hive</span></h2>
                </span>
            </div>

            <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <form @submit.prevent="handleFormSubmit">
                    <div class="py-8">
                        <div class="text-center">
                            <span class="text-2xl font-semibold">Log In</span>
                        </div>
                    </div>

                    <div>
                        <input v-model="authFormData.email" type='email' name='email' placeholder='Email'
                            class="w-full rounded-md py-2.5 px-4 border text-sm outline-[#f84525]" />
                    </div>

                    <div class="mt-4">
                        <select v-model="authFormData.role" class="w-full rounded-md py-3 px-4 border text-sm outline-[#f84525]">
                            <option value=""disabled selected>Select Role</option>
                            <option value="admin">{{ Role.ADMIN }}</option>
                            <option value="user">{{ Role.USER }}</option>
                        </select>
                    </div>

                    <div class="flex items-center justify-end mt-4">
                        <button
                            class='ms-4 inline-flex items-center px-4 py-2 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
                            >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { validateEmail, validateRole } from '~/utils/validators';
import useFlash from '~/composables/useFlash';
import { Role } from '~/utils/enums';
import { useUserStore } from '~/stores/user';

definePageMeta({
    title: 'Login',
    description: 'Login to your account',
    layout: false
})

const authFormData = reactive({
    email: '',
    role: ''
})

const { notify } = useFlash();
const userStore = useUserStore();

const handleFormSubmit = () => {
    if (!validateEmail(authFormData.email)) {
        notify('Invalid email', 'error');
        return;
    }

    if (!validateRole(authFormData.role)) {
        notify('Invalid role', 'error');
        return;
    }

    try {
        userStore.setUser(authFormData);
        navigateTo('/posts');
    } catch (error){
        const err = error as Error
        notify('Error submitting form', 'error');
        console.error('Error submitting form: ', err.message);
    }
    notify('Form submitted', 'success');
}
</script>