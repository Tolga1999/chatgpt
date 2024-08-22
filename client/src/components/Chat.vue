<template>
  <main>
    <h1>Chat with Davinci-002</h1>
    <div>
      <input type="text" v-model="userMessage" placeholder="Type your message here" />
      <button @click="sendMessage">Send</button>
    </div>

    <div v-if="response">
      <h2>Response:</h2>
      <p>{{ response }}</p>
    </div>
  </main>
</template>
  
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
        this.response = data.message
        
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>
  
<style scoped>
input {
  width: 300px;
  padding: 8px;
  margin-right: 10px;
}

button {
  padding: 8px;
}

h2 {
  margin-top: 20px;
}
</style>
  