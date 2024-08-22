<script>
export default {
  data() {
    return {
      userMessage: '',
      response: '',
    };
  },
  methods: {
    // using fetch method
    async sendMessage() {
      try {
        const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ input: this.userMessage }),
        });

        const data = await response.json();
        this.response = data.message.content

      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>

<template>
  <main>
    <h1>Welcome to the mainFrame. How can I help you today?</h1>

    <div v-if="response">
      <p>{{ response }}</p>
    </div>

    <div>
      <span>C:\Users\You></span>
      <input type="text" v-model="userMessage" @keyup.enter="sendMessage" placeholder="Type your message here" />
    </div>

    <div class="triangle blink_me"></div>
  </main>
</template>
  
<style scoped>
h1 {
  font-size: 1em;
}

input {
  background-color: black;
  border: none;
  color: #39FF14;
  ;
}

button {
  padding: 8px;
}

.triangle {
  width: 10em;
  height: 10em;
  background-color: red;
}

.blink_me {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>
  