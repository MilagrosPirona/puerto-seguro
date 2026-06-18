<script setup>
import { ref, resolveComponent } from 'vue'
import http from '@/services/requests'
import { useRouter } from 'vue-router'

const route = useRouter()

const login = ref({
  user: '',
  pass: '',
})

function loginUser() {
  const form = new FormData()
  form.append('username', login.value.user)
  form.append('password', login.value.pass)

  http
    .login('/login', form)
    .then((response) => {
      localStorage.setItem('token', response.data.access_token)
      localStorage.setItem('user_id', response.data.user_id)
      route.push('/admin')
    })
    .catch((error) => {
      console.log(error.response.data.detail)
    })
}
</script>

<template>
  <div class="login-lamp no-scrollbar overflow-y-hidden">
    <div class="container-lamp">
      <div class="lamp-container">
        <img src="@/assets/logo2.png" alt="" class="logo-lamp" />
      </div>

      <div class="login-card" id="loginCard">
        <h2 class="text-3xl">Bienvenido!!</h2>
        <form @submit.prevent="loginUser">
          <div class="input-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" v-model="login.user" />
          </div>
          <div class="input-group">
            <label>Password</label>
            <input type="password" placeholder="•••••" v-model="login.pass" />
          </div>
          <button type="submit" class="btn-sign-in">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-lamp {
  opacity: 0;
  transform: scale(1.8) translateX(-50px);
  transition: all 0.8s ease;
  animation: fadeInRight 1s ease forwards;
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: scale(1.8) translateX(-50px);
  }
  to {
    opacity: 1;
    transform: scale(1.8) translateX(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-lamp {
  --bg-dark: #1a1a1a;
  --lamp-off: #444;
  --lamp-on: #ffffff;
  --gold-gradient: linear-gradient(to bottom, #e5cf92, #b38b35);

  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-dark);
  font-family: 'Segoe UI', sans-serif;
  transition: background 0.5s ease;
  overflow: hidden;

  background: url('@/assets/bgFaro.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* Contenedor Principal */
.container-lamp {
  display: flex;
  align-items: center;
  gap: 100px;
}

/* Lámpara */
.lamp-container {
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lamp-head {
  width: 150px;
  height: 80px;
  background: var(--lamp-off);
  border-radius: 80px 80px 0 0;
  transition: all 0.3s ease;
  z-index: 2;
}

.lamp-body {
  width: 15px;
  height: 150px;
  background: #555;
  margin: 0 auto;
}

.lamp-base {
  width: 100px;
  height: 15px;
  background: #555;
  margin: 0 auto;
  border-radius: 5px;
}

/* Cuerda */
.pull-chain {
  position: absolute;
  top: 65px;
  right: 40px;
  cursor: pointer;
  transition: transform 0.1s;
  z-index: 1;
}

.pull-chain:active {
  transform: translateY(15px);
}

.string {
  width: 2px;
  height: 85px;
  background: #666;
  margin: 0 auto;
}

.knob {
  width: 15px;
  height: 15px;
  background: #886644;
  border-radius: 50%;
}

/* Estado de Encendido */
.login-lamp.light-on {
  background-color: #2c2c2c;
}

.login-lamp.light-on .lamp-head {
  background: var(--lamp-on);
  box-shadow: 0 0 80px 20px rgba(255, 255, 255, 0.3);
}

/* Formulario */
.login-card {
  padding: 40px;
  border-radius: 30px;
  width: 300px;
  opacity: 0;
  transform: translateX(0);
  transition: all 0.8s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  color: white;
  box-sizing: content-box !important;

  background: transparent;
  backdrop-filter: blur(15px);
  border: 2px solid rgba(255, 255, 255, 0.5);
  animation: fadeInDown 1s ease forwards;
}

.login-lamp.light-on .login-card {
  opacity: 1;
  transform: translateX(0);
}

.input-group {
  margin-bottom: 20px;
}
label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
  font-size: 0.9rem;
}
input {
  width: 100%;
  padding: 12px;
  background: rgba(61, 61, 61, 0.8);
  border: 1px solid #555;
  border-radius: 12px;
  color: white;
}

.btn-sign-in {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: var(--gold-gradient);
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
}
</style>
