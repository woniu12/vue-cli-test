<template>
  <div class="login">
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  name: 'login',
  data () {
    return {
    }
  },
  computed: {
    loginStatus () {
      return this.$store.state.login.loginStatus
    }
  },
  methods: {
    login () {
      console.log(this.loginStatus)
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
