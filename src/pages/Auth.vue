<template>
    <div class="registration-form">
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
</template>
  
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';


const email = ref('');
const password = ref('');
const router = useRouter();

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
    console.log(email.value, password.value);
    // try {
    //     const userCredential = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    //     console.log('User registered successfully:', userCredential.user);
    //     // Redirect to login page or any other page after registration
    //     router.push('/login');
    // } catch (error) {
    //     console.error('Error registering user:', error.message);
    //     // Handle error (e.g., show error message to user)
    // }
};
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
  