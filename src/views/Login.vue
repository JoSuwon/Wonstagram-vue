<template>
  <v-app class="app">
    <v-main class="main">
      <v-container fluid class="container">
        <Snowf
          :amount="50"
          :size="10"
          :speed="1.5"
          :wind="0"
          :opacity="0.8"
          :swing="1"
          :image="null"
          :zIndex="null"
          :resize="true"
          color="#fff"
        />
        <div class="login">
          <div class="login-box">
            <h1>Wonstagram</h1>
            <v-col cols="12" class="pa-2">
              <v-text-field
                v-model="id"
                label="아이디"
                outlined
                hide-details="auto"
                color="grey darken-2"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-text-field
                v-model="password"
                label="비밀번호"
                outlined
                hide-details="auto"
                color="grey darken-2"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pa-2">
              <v-btn block large color="light-blue lighten-3" dark> 로그인 </v-btn>
            </v-col>
            <v-col cols="12" class="pa-2 join"> 계정이 없으신가요? <span>가입하기</span> </v-col>
          </div>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Snowf from 'vue-snowf';

export default {
  name: 'Login',
  components: {
    Snowf,
  },
  data() {
    return {
      showPassword: false,
      id: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.app {
  height: 100vh;
  .main {
    height: 100%;
    .container {
      height: 100%;
      background: #b3e5fc;
      .login {
        font-family: 'Wemakeprice-Bold';
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        .login-box {
          padding: 10px 15px;
          background: white;
          border-radius: 25px;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
          h1 {
            text-align: center;
            color: #212121;
            // color: #01579B;
          }
          .join {
            text-align: center;
            font-size: 14px;
            color: #212121;
            span {
              font-size: 15px;
              color: #757575;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>