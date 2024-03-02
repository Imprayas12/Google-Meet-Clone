<template>
    <div v-if="!signInForm" class="registration-form">
        <form @submit.prevent="register">
            <label for="email">Email: </label>
            <input v-model="email" name="email" placeholder="Enter your email" type="email" required>
            <span v-if="!isEmailValid" class="error">Please enter a valid email address.</span>
            <label for="password">Password: </label>
            <input v-model="password" name="password" type="password" placeholder="Enter your password" required>
            <span v-if="!isPasswordStrong" class="error">Password must be at least 8 characters long and contain at least
                one number, one uppercase letter, and one lowercase letter.</span>
            <button type="submit" :disabled="!isEmailValid || !isPasswordStrong">Register</button>
        </form>
    </div>
    <div v-else class="registration-form">
        <form @submit.prevent="login">
            <label for="email">Email: </label>
            <input v-model="email" name="email" placeholder="Enter your email" type="email" required>
            <span v-if="!isEmailValid" class="error">Please enter a valid email address.</span>
            <label for="password">Password: </label>
            <input v-model="password" name="password" type="password" placeholder="Enter your password" required>
            <button type="submit" :disabled="!isEmailValid">Login</button>
        </form>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter, useRoute } from 'vue-router';

const email = ref('');
const password = ref('');
const userStore = useUserStore();
const router = useRouter();
const route = useRoute();

const signInForm = computed(() => {
    return !(route.path == '/register')
})

const isEmailValid = computed(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.value);
});

const isPasswordStrong = computed(() => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password.value);
});

const register = async () => {
    if (!isEmailValid.value || !isPasswordStrong.value) {
        return;
    }
    await userStore.registerUser(email.value, password.value);
    router.push('/');
};

const login = async () => {
    const res = await userStore.signIn(email.value, password.value);
    if(res) router.push('/');
}

</script>
  
<style>
.registration-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 10px 20px;
    background-color: #1a73e8;
    color: #ffffff;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0d47a1;
}

.error {
    color: red;
    font-size: 14px;
    margin-top: 5px;
}
</style>
  