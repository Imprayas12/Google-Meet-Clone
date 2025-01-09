<template>
  <div class="auth-container">
    <div class="form-container">
      <h2>{{ signInForm ? 'Sign In' : 'Register' }}</h2>
      <form @submit.prevent="signInForm ? login() : register()">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
          <span v-if="!isEmailValid" class="error">Invalid email address</span>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
          <span v-if="!isPasswordStrong" class="error">Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number</span>
        </div>
        <button type="submit">{{ signInForm ? 'Sign In' : 'Register' }}</button>
      </form>
    </div>
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
body {
  background-color: #121212;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  background: #1e1e1e;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

h2 {
  margin-bottom: 20px;
  color: #ffffff;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
}

button {
  padding: 15px 25px;
  font-size: 16px;
  background-color: #444;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.3s;
}

button:hover {
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgb(33, 33, 34) 45%, rgb(67, 72, 73) 82%);
  color: white;
}
xs
.error {
  color: #ff6b6b;
  font-size: 14px;
}
</style>