<template>
    <div v-if="!signInForm" class="registration-form">
        <form @submit.prevent="register">
            <label for="email">Email </label>
            <input v-model="email" name="email" placeholder="Enter your email" type="email" required>
            <span v-if="!isEmailValid" class="error">Please enter a valid email address.</span>
            <label for="password">Password </label>
            <input v-model="password" name="password" type="password" placeholder="Enter your password" required>
            <span v-if="!isPasswordStrong" class="error">Password must be at least 8 characters long and contain at
                least
                one number, one uppercase letter, and one lowercase letter.</span>
            <button type="submit" :disabled="!isEmailValid || !isPasswordStrong">Register</button>
        </form>
    </div>
    <div v-else class="registration-form">
        <form @submit.prevent="login">
            <label for="email">Email </label>
            <input v-model="email" name="email" placeholder="Enter your email" type="email" required>
            <span v-if="!isEmailValid" class="error">Please enter a valid email address.</span>
            <label for="password">Password </label>
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
    if (res) router.push('/');
}

</script>

<style scoped>
.registration-form {
    text-align: center;
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 76, 121, 1) 23%, rgba(0, 212, 255, 1) 100%);
    height: 400px;
    color: whitesmoke;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 100px;
    box-shadow: 0px 0px 10px white;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    min-width: 350px;
}

form {
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: center;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    text-align: start;
}

input {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 20px 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
    font-size: 16px;
    background-color: #ced4da;
    color: #fff;
    border: none;
    cursor: pointer;
    width: 60%;
    color: black;
    border-radius: 10px;
    font-weight: 600;
    transition: 0.7s;
}

button:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(11, 123, 126, 1) 45%, rgba(0, 212, 255, 1) 82%);
    color: white;
    font-family: "Noto Sans", sans-serif;
    box-shadow: 0px 0px 10px white;
}

.error {
    color: #ced4da;
    font-size: 14px;
    margin-top: 5px;
}
</style>