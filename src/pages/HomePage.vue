<template>
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
  </div>
  <div class="remoteVideo">

  </div>
  <button @click="userStore.signOutUser">logout</button>
  <!-- <chatbox /> -->

</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { onBeforeMount, onMounted, ref, watch } from 'vue';
import { Peer } from 'peerjs';
import { useUserStore } from '../stores/user';

const router = useRouter();
const auth = getAuth();
const loggedIn = ref(false);
const userStore = useUserStore();
const peer = ref<Peer>();
const mediaStream = ref();


const meetingName = ref<string>('');
const meetingLink = ref<string>('');



const meeting = async () => {
  if (!peer.value) {
    await setupPeerConnection();
  }
  if(!peer.value) return;
  const meetingId = meetingLink.value;
  const conn = peer.value.connect(meetingId);
  console.log(conn);
  
  conn.on('open', () => {
    console.log('Connection Established')
    conn.send('Hi!')
  })
  mediaStream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  const call = peer.value?.call(meetingId, mediaStream.value as MediaStream);
  call?.on('stream', (stream) => {
    const video = document.createElement('video');
    document.querySelector('.remoteVideo')?.appendChild(video);
    video.srcObject = stream;
    video.play();
  });
}

const setupPeerConnection = async () => {
  const peerId: string = await userStore.getPeerId();
  if(peerId) peer.value = new Peer(peerId);
  if(!peer.value) peer.value = new Peer();
  peer.value.on('open', (id) => {
    console.log('My Peer Id is: ' + id);
  })
  peer.value.on('connection', (conn) => {
    conn.on('data', (data) => {
      console.log('Received', data);
    });
  })
  peer.value.on('call', async (call) => {
    mediaStream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    call.answer(mediaStream.value);
    console.log('Call received');
    call.on('stream', (stream) => {
      const video = document.createElement('video');
      document.querySelector('.remoteVideo')?.appendChild(video);
      video.srcObject = stream;
      video.play();
    });
  })
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

onMounted(async() => {
  if(auth.currentUser) await setupPeerConnection();
})

watch(auth , async () => {
  if(auth.currentUser) await setupPeerConnection();
}, {deep: true, immediate: true});


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

.start-meeting-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 10px;
}

.input-group label {
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.button-group {
  text-align: center;
}
</style>./chatbox.vue