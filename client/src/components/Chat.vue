<template>
    <div>
      <h2>Chat with GPT</h2>
      <input
        type="text"
        v-model="userMessage"
        @keyup.enter="sendMessage"
        placeholder="Type your message here"
      />
      <button @click="sendMessage">Send</button>
  
      <div v-if="response">
        <h3>Response:</h3>
        <p>{{ response }}</p>
      </div>
    </div>
  </template>
  
  <script>
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
  
  h3 {
    margin-top: 20px;
  }
  </style>
  