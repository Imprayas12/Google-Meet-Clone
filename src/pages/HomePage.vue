<template>
    <div class="google-meet-sign-in">
      <h1>Welcome to the most used Meeting clone ever</h1>
      <button @click="router.push('/register')">Register</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  </script>
  
  <style>
  .google-meet-sign-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
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
  </style>
  