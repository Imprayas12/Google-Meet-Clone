<template>
  <div class="container">
    <div v-if="!loggedIn" class="google-meet-sign-in">
      <h1>Welcome to the most used Meeting clone ever</h1>
      <button @click="router.push('/register')">Register</button>
      <button @click="router.push('/login')">Login</button>
    </div>

    <div v-else class="start-meeting-container">
      <div class="header">
        <h1>Start a new meeting</h1>
      </div>
      <div class="content">
        <div class="input-group">
          <label for="meetingName">Meeting name:</label>
          <input id="meetingName" type="text" v-model="meetingName" placeholder="Enter meeting name" />
        </div>
        <div class="input-group">
          <label for="meetingLink">Meeting ID:</label>
          <input id="meetingLink" type="text" v-model="meetingLink" placeholder="Enter meeting link" />
        </div>
        <div class="button-group">
          <button @click="meeting">Start meeting</button>
        </div>
      </div>
      <div class="id">
        <span>Send this ID to your friend: {{ meetingId }} </span>
        <button @click="copyToClipboard">{{ copyText }}</button>
      </div>
      <div v-if="messages.length" class="chat-container">
        <div v-for="message in messages" class="message-container">
          <div :class="{ 'message-sent': message.type === 'SENT', 'message-received': message.type === 'RECEIVED' }">
            <span style="padding: 10px;">{{ message.message }}</span>
            <span style="font-size: smaller; color:grey; padding:10px;">{{ formatTimestamp(message.time) }}</span>
          </div>
        </div>
      </div>
      <div v-if="connectionEstablished">
        <form @submit.prevent="sendMessage">
          <input type="text" v-model="messageText">
          <button>Send Message</button>
        </form>
      </div>
      <div v-if="callInProgress" class="remoteVideo"></div>
      <button @click="userStore.signOutUser">Logout</button>
    </div>

    <!-- <chatbox /> -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { Peer } from 'peerjs';
import { useUserStore } from '../stores/user';
import { Message, MessageType } from '../shared/Model/Message.model';
import { Timestamp } from 'firebase/firestore';
import turnConfig from '../shared/constants/turnConfig'



const router = useRouter();
const auth = getAuth();
const loggedIn = ref(false);
const userStore = useUserStore();
const peer = ref<Peer>();
const mediaStream = ref();
const meetingId = ref('');
const copyText = ref('Copy To Clipboard');
const messages = ref<Message[]>([]);
const connectionEstablished = ref(false);
const messageText = ref('');
const connVal = ref();
const callInProgress = ref(false);

const meetingName = ref<string>('');
const meetingLink = ref<string>('');



const meeting = async () => {
  if (!peer.value) {
    await setupPeerConnection();
  }
  if (!peer.value) return;
  const meetingId = meetingLink.value;
  const conn = peer.value.connect(meetingId);
  connVal.value = conn;

  conn.on('open', () => {
    connectionEstablished.value = true;
    conn.send('Hi!')
    messages.value.push({
      message: 'Hi!',
      time: Timestamp.now(),
      type: MessageType.SENT
    })
  })
  conn.on('data', (data) => {
    messages.value.push({
      message: data as string,
      type: MessageType.RECIEVED,
      time: Timestamp.now()
    });
  });
  // mediaStream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  // const call = peer.value?.call(meetingId, mediaStream.value as MediaStream);
  // call?.on('stream', (stream) => {
  //   const video = document.createElement('video');
   //   callInProgress.value = true;
  //   document.querySelector('.remoteVideo')?.appendChild(video);
  //   video.srcObject = stream;
  //   video.play();
  // });
}

const setupPeerConnection = async () => {
  const peerId: string = await userStore.getPeerId();
  if (peerId) peer.value = new Peer(peerId);
  if (!peer.value) peer.value = new Peer({config: turnConfig});
  peer.value.on('open', (id) => {
    meetingId.value = id;
  });
  peer.value.on('connection', (conn) => {
    connectionEstablished.value = true;
    connVal.value = conn;
    conn.on('data', (data) => {
      messages.value.push({
        message: data as string,
        type: MessageType.RECIEVED,
        time: Timestamp.now()
      });
    });
  });
  peer.value.on('call', async (call) => {
    mediaStream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    call.answer(mediaStream.value);
    console.log('Call received');
    call.on('stream', (stream) => {
      callInProgress.value = true;
      const video = document.createElement('video');
      document.querySelector('.remoteVideo')?.appendChild(video);
      video.srcObject = stream;
      video.play();
    });
  });
};



const sendMessage = async () => {
  if (!messageText.value) return;
  connVal.value.send(messageText.value);
  messages.value.push({
    message: messageText.value,
    type: MessageType.SENT,
    time: Timestamp.now()
  })
  messageText.value = '';
}

onBeforeMount(() => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      loggedIn.value = true;
      await setupPeerConnection();
    } else {
      loggedIn.value = false;
    }
  })
})

const formatTimestamp = (timestamp: any): string => {
  const date = timestamp.toDate();
  // const day = date.getDate().toString().padStart(2, '0');
  // const month = (date.getMonth() + 1).toString().padStart(2, '0');
  // const year = date.getFullYear().toString().slice(2);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};


const copyToClipboard = () => {
  if (!meetingId.value) return;
  navigator.clipboard.writeText(meetingId.value)
    .then(() => {
      copyText.value = 'Copied!';
    })
    .catch((error) => {
      console.error('Failed to copy text:', error);
    });
}

onMounted(async () => {
  if (auth.currentUser) await setupPeerConnection();
})

watch(auth, async () => {
  if (auth.currentUser) await setupPeerConnection();
}, { deep: true, immediate: true });


</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.google-meet-sign-in {
  text-align: center;
}

.google-meet-sign-in h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.google-meet-sign-in button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.start-meeting-container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
}

.start-meeting-container .header {
  text-align: center;
  margin-bottom: 20px;
}

.start-meeting-container .header h1 {
  font-size: 24px;
}

.start-meeting-container .content {
  margin-bottom: 20px;
}

.start-meeting-container .input-group {
  margin-bottom: 10px;
}

.start-meeting-container label {
  font-weight: bold;
}

.start-meeting-container input[type="text"] {
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ced4da;
}

.start-meeting-container .button-group button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: #fff;
  border: none;
  cursor: pointer;
}

.id {
  text-align: center;
  margin-bottom: 20px;
}

.id span {
  font-size: 16px;
}

.id button {
  padding: 5px 10px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.remoteVideo {
  height: 200px;
  background-color: #000;
  margin-bottom: 20px;
}

.remoteVideo video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #c82333;
}

form input[type="text"] {
  padding: 8px;
  width: calc(100% - 80px);
  border-radius: 5px;
  border: 1px solid #ced4da;
}

form button {
  padding: 5px 10px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

.chat-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 100%;
  overflow-x: hidden;
}

.message-container {
  margin-bottom: 10px;
}

.message-sent {
  background-color: #DCF8C6;
  color: #333;
  align-self: flex-end;
  border-radius: 10px;
  padding: 5px 10px;
  float: right;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.message-received {
  background-color: #E8E8E8;
  color: #333;
  align-self: flex-start;
  border-radius: 10px;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media screen and (max-width: 600px) {
  .chat-container {
    padding: 5px;
  }

  .message-sent, .message-received {
    max-width: 70%;
    word-wrap: break-word;
  }
}
</style>
