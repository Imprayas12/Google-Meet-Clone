<template>
  <div class="chatbox">
    <div v-for="message in messages" :key="message.id" class="message" :class="{ 'sent': message.sender === 'User 1', 'received': message.sender === 'User 2' }">
      <span>{{ message.sender }}:</span>
      <p>{{ message.text }}</p>
    </div>
  </div>
  <form class="form" @submit.prevent="send">
    <label for="message-input">Message: </label>
    <input type="text" v-model="message">
    <button type="submit">Send</button>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  user1Messages: {
    type: Array,
    required: true,
  },
  user2Messages: {
    type: Array,
    required: true,
  },
});
const messages = ref([]);
const message = ref('')

const addMessage = (sender, text) => {
  messages.value.push({ sender, text, timestamp: Date.now() });
};

addMessage('User 1', 'Hello!');
addMessage('User 2', 'Hi there!');

const sortedMessages = computed(() => {
  const allMessages = [...user1Messages.value, ...user2Messages.value];
  return allMessages.sort((a, b) => a.timestamp - b.timestamp);
});

</script>

<style>
.chatbox {
  height: 300px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
}

.message span {
  font-weight: bold;
  margin-right: 5px;
}

.sent {
  text-align: right;
  background-color: #e0f7fa;
}

.received {
  text-align: left;
  background-color: #f5f5f5;
}

.form {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.form > input {
  width: 70%;
  border-radius: 30px;
  padding: 8px;
  padding-left: 14px;
}

.form > label {
  background: black;
  color: white;
  padding: 12px;
  border-radius: 30px;
}
</style>
