<template>
  <div class="login">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  name: 'login',
  methods: {
    login () {
      this.$http.post('http://api.school.cc/login', {
        username: '',
        password: ''
      }).then(res => {
        if (res.data.status_code === 200) {
          let data = res.data
          window.sessionStorage.setItem('token', data.data.token)
          Cookie.set('loginStatus', true)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
