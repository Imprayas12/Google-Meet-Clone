<template>
  <div class="container">
    <div v-if="!loggedIn" class="google-meet-sign-in">
      <h1>Welcome to the most used Meeting clone ever</h1>
      <button @click="router.push('/register')">Register</button>
      <button @click="router.push('/login')">Login</button>
    </div>
    <div v-else class="start-meeting-container">
    <div>
      <div v-if="!connectionEstablished && !callInProgress">
        <div class="header">
          <h1 style="color: #fff;">Start a new meeting</h1>
        </div>
        <div class="content">
          <div class="input-group">
            <input id="meetingLink" type="text" v-model="meetingLink" placeholder="Enter the shared ID" />
          </div>
          <div class="button-group">
            <button v-if="!videoCall" @click="meeting">Start Chat</button>
            <button v-else @click="startVideoChat">Start Meeting</button>
            <button @click="videoCall = !videoCall">{{ meetingMode }}</button>
          </div>
        </div>
        <div class="id">
          <span>Send this ID to your friend: {{ meetingId }} </span>
          <button @click="copyToClipboard">{{ copyText }}</button>
        </div>
      </div>
      <div v-if="messages.length || callInProgress" class="actions" style="text-align: center;color: #fff;">
        <h3 v-if="!callInProgress">Chat In Progress</h3>
        <h3 v-else>Call In Progress</h3>
      </div>
      <div v-if="messages.length && !callInProgress" class="chat-container" id="chatContainer">
        <div v-for="message in messages" class="message-container">
          <div :class="{ 'message-sent': message.type === 'SENT', 'message-received': message.type === 'RECEIVED' }">
            <span style="padding: 10px;">{{ message.message }}</span>
            <span style="font-size: smaller; color:grey; padding:10px;">{{ formatTimestamp(message.time) }}</span>
          </div>
        </div>
      </div>
      <div>
        <form v-if="messages.length" @submit.prevent="sendMessage" style="display:flex; align-items:center;">
          <input style="width:80%; padding:20px; border-radius: 20px;" type="text" v-model="messageText"
            placeholder="Message...">
          <button style="border-radius: 50%; padding: 20px; margin-left:10%;"><i class="fa-solid fa-paper-plane"
              style="font-size: large;"></i></button>
        </form>
      </div>
      <div v-if="callInProgress" class="remoteVideo">
        <div class="ownVideo"></div>
        <button @click="endCall" class="end-call-button">End Call</button>
      </div>


    </div>
    <div v-if="loggedIn" style="display:flex; justify-content:center; padding: 4%;">
      <button @click="userStore.signOutUser">Logout</button>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';
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
const chatContainer = ref()

const meetingLink = ref<string>('');
const videoCall = ref(false);
const meetingMode = computed(() => {
  return videoCall.value ? 'Switch to Chat' : 'Switch to Video Call';
})

defineExpose({ chatContainer });

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
}

const startVideoChat = async () => {
  if (!peer.value) await setupPeerConnection();
  if (!peer.value) return;
  const meetingId = meetingLink.value;
  peer.value.connect(meetingId);
  mediaStream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  const localVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
  const call = peer.value?.call(meetingId, mediaStream.value as MediaStream);
  call?.on('stream', (stream) => {
    const video = document.createElement('video');
    callInProgress.value = true;
    document.querySelector('.remoteVideo')?.appendChild(video);
    video.srcObject = stream;
    video.play();
    let ownVideo = document.querySelector('.ownVideo');
    if (!ownVideo?.querySelector('video')) {
      const video = document.createElement('video');
      ownVideo?.appendChild(video);
      video.srcObject = localVideo;
      video.play();
    }
  });
}

const setupPeerConnection = async () => {
  const peerId: string = await userStore.getPeerId();
  if (peerId) peer.value = new Peer(peerId);
  if (!peer.value) peer.value = new Peer({ config: turnConfig });
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
    const localVideo = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    call.answer(mediaStream.value);
    console.log('Call received');
    callInProgress.value = true;
    call.on('stream', (stream) => {
      callInProgress.value = true;
      let remoteVideo = document.querySelector('.remoteVideo');
      if (!remoteVideo?.querySelector('video')) {
        const video = document.createElement('video');
        remoteVideo?.appendChild(video);
        video.srcObject = stream;
        video.play();
      }
      let ownVideo = document.querySelector('.ownVideo');
      if (!ownVideo?.querySelector('video')) {
        const video = document.createElement('video');
        ownVideo?.appendChild(video);
        video.srcObject = localVideo;
        video.play();
      }
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

const endCall = () => {
  location.reload();
};

onMounted(async () => {
  if (auth.currentUser) await setupPeerConnection();
})

watch(auth, async () => {
  if (auth.currentUser) await setupPeerConnection();
}, { deep: true, immediate: true });


watch(messages.value, () => {
  const container = document.getElementById('chatContainer');
  if (!container) return;
  container.scrollTop = container.scrollHeight + 10;
}, { deep: true })

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
}

.google-meet-sign-in h1 {
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Noto Sans' !important;
}

.google-meet-sign-in button {
  padding: 20px 30px;
  margin: 0 10px;
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

.start-meeting-container {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 76, 121, 1) 23%, rgba(0, 212, 255, 1) 100%);
  padding: 40px;
  border-radius: 20px;
  margin-top: 50px;
  box-shadow: 0px 0px 10px white;
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

.button-group {
  display: flex;
  justify-content: space-around;
}

.start-meeting-container .button-group button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ced4da;
  color: #000;
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
  background-color: #ced4da;
  color: #000;
  transition: 0.7s;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.remoteVideo {
  height: 500px;
  background-color: #000;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
}

.ownVideo {
  height: 20vh;
  width: 15vh;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 5px;
  border-radius: 10px;
}

.remoteVideo video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  color: #000;
  border: none;
  transition: 0.7s;
  cursor: pointer;
}

button:hover {
  background: rgb(2, 0, 36);
  background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(11, 123, 126, 1) 45%, rgba(0, 212, 255, 1) 82%);
  color: white !important;
  font-family: "Noto Sans", sans-serif;
  box-shadow: 0px 0px 10px white;
}

form input[type="text"] {
  padding: 8px;
  width: 10%;
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
  overflow-y: scroll;
  max-height: 55vh;
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

.end-call-button {
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 600;
  padding: 15px 25px;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 20px;
}

.end-call-button:hover {
  background-color: #ff1a1a;
  transform: scale(1.05);
}

@media screen and (max-width: 600px) {
  .container {
    padding: 10px;
  }

  .google-meet-sign-in button,
  .start-meeting-container .button-group button,
  .id button,
  .actions button form input[type="text"],
  form button {
    padding: 8px 16px;
    font-size: 14px;
    margin: 2px;
  }

  .start-meeting-container input[type="text"] {
    width: 100%;
  }

  .start-meeting-container .button-group {
    flex-direction: column;
  }

  .id {
    flex-direction: column;
    align-items: center;
  }

  .id button {
    margin-top: 10px;
  }

  .chat-container {
    max-height: 50vh;
  }

  .message-sent,
  .message-received {
    max-width: 100%;
    word-wrap: break-word;
  }
}
</style>
