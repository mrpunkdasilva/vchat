<template>
  <div v-if="state.username === '' || state.username === null" class="view login">
    <!-- diciona o evento de submit e desativa a ação padrão de atualizar -->
    <form class="login-form" @submit.prevent="Login">
      <div class="form-inner">
        <div class="login-welcome">
          <img alt="Vue logo" src="./assets/icon.png"/>
          <h1 class="heading-1">Login to VChat</h1>
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <input
              type="text"
              placeholder="Preencha seu nome de usuário..."
              v-model="inputUsername"
          />
          <input type="submit" value="Login">
        </div>
      </div>
    </form>
  </div>

  <div v-else class="view chat">
    <header>
      <div class="user-bar">
        <button class="logout" @click="Logout">Logout</button>
        <h1>Welcome, {{ state.username }}</h1>
      </div>

      <div>
        <img alt="Vue logo" src="./assets/icon.png"/>
        <h1 class="heading-1">VChat</h1>
      </div>
    </header>

    <section class="chat-box">
      <div
          v-for="message in state.messages"
          :key="message.key"
          :class="(message.username === state.username?  'message current-user' : 'message')"
      >
        <div class="message-inner">
          <div class="username">
            {{ message.username }}
          </div>
          <div class="content">
            <p>
              {{ message.content }}
            </p>
            <span>
              {{ message.time }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <form @submit.prevent="SendMessage">
        <input
            type="text"
            v-model="inputMessage"
            placeholder="Escreva sua vdrop 💊"
        />
        <button type="submit">
          <img alt="Icone de enviar" src="./assets/sendIcon.svg"/>
        </button>
      </form>
    </footer>
  </div>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import db from "./services/db";

export default {
  setup() {
    const inputUsername = ref( "" );
    const inputMessage = ref( "" );

    const state = reactive( {
      username : "",
      messages : []
    } );

    const Logout = () => {
      state.username = "";
    }

    const Login = () => {
      if ( inputUsername.value !== "" || inputUsername.value !== null ) {
        state.username = inputUsername.value;
        inputUsername.value = "";
      }
    }

    const SendMessage = () => {
      const messagesRef = db.ref( "messages" );

      if ( inputMessage.value === "" || inputMessage.value === null ) {
        return;
      }

      const date = new Date();
      const message = {
        username : state.username,
        content : inputMessage.value,
        time : `${ date.getHours() }:${ date.getMinutes() }h (UTC3)`,
      }

      messagesRef.push( message )
          .then( () => console.log( "foi" ) )
          .catch( err => console.log( err ) );
      inputMessage.value = "";
    }

    onMounted( () => {
          const messageRef = db.ref( "messages" );

          messageRef.on( "value", ( snapshot ) => {
            const data = snapshot.val();
            let messages = [];

            Object.keys( data ).forEach( key => {
              messages.push( {
                id : key,
                username : data[ key ].username,
                content : data[ key ].content,
                time : data[ key ].time,
              } );
            } )

            state.messages = messages;
          } );
        }
    );

    return {
      inputUsername,
      inputMessage,
      Login,
      SendMessage,
      Logout,
      state,
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: "Jersey 10", system-ui;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 1.5pt;
}

button,
input,
a {
  cursor: pointer;
}

.heading-1,
.heading-2,
.heading-3 {
  font-family: "Jaini", system-ui;
  font-weight: 400;
  font-style: normal;
  color: #2EFF54;
}

/*=================*/

.view {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #010101;

  &.login {
    align-items: center;

    .login-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;

      min-width: 70%;
      width: 90%;
      padding: 15px;

      .form-inner {
        display: block;
        background-color: rgb(129 117 117 / 15%);
        padding: 3rem 2rem;
        border-radius: 16px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
        border: 2px solid #2EFF54;

        .login-welcome {
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }

        h1 {
          color: #2EFF54;
          font-size: 28px;
          margin-bottom: 30px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #2EFF54;
          font-size: 1.6rem;
          transition: 0.4s;
        }

        input[type="text"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 300px;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 15px;

          color: #333;
          font-size: 18px;

          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #F3F3F3;

          transition: 0.4s;

          &::placeholder {
            color: rgb(49, 33, 33);
            transition: 0.4s;
            font-weight: 300;
          }
        }

        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          background-color: #000;
          border: 3px solid #2EFF54;
          border-radius: 8px;

          color: #2EFF54;
          letter-spacing: 3pt;
          font-size: 1.5rem;
          font-weight: 500;
        }

        &:focus-within {
          label {
            color: #2eff54bf;
          }

          input[type="text"] {
            background-color: #FFF;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

            &::placeholder {
              color: #666;
            }
          }
        }
      }
    }
  }

  &.chat {
    flex-direction: column;

    header {
      position: relative;
      display: block;
      width: 100%;
      padding: 50px 30px 10px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      align-content: center;
      flex-direction: column-reverse;

      .logout {
        position: absolute;
        top: 15px;
        right: 15px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: none;
        outline: none;
        background: rgb(255 0 0 / 88%);
        color: #FFF;
        font-size: 25px;
        margin-bottom: 10px;
        text-align: right;
        padding: 0.5rem;
        border-radius: 9px;
        text-align: center;
      }

      h1 {
        color: #2EFF54;
      }
    }

    .chat-box {
      border-radius: 24px 24px 0px 0px;
      background-color: #20202000;
      /* box-shadow: 0px 0px 12px rgb(255 255 255); */
      flex: 1 1 100%;
      padding: 30px;
      display: flex;
      gap: 1.5rem;
      border: 2px solid #2eff54;
      flex-direction: column;

      .message {
        display: flex;
        margin-bottom: 15px;

        .message-inner {
          .username {
            color: #fff;
            font-size: 1.6rem;
            margin-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
            font-weight: 400;
          }

          .content {
            display: inline-block;
            border: 2px solid #fff;
            padding: 10px 20px;
            color: #fff;
            background: #061809;
            font-size: 18px;
            max-width: 300px;
            word-break: break-all;

            line-height: 1.2em;
            text-align: left;
            border-radius: 7px;
            transform: skew(-19deg, 11deg) translate(4px, 6px) rotate(-16deg);
          }
        }

        &.current-user {
          margin-top: 30px;
          justify-content: flex-end;
          text-align: right;

          .message-inner {
            max-width: 75%;

            .content {
              color: #FFF;
              font-weight: 600;
              transform: skew(-5deg, 5deg) translate(4px, 6px) rotate(-1deg);
            }
          }
        }
      }
    }

    footer {
      position: sticky;
      bottom: 0px;
      background-color: #010101;
      padding: 30px;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);

      form {
        display: flex;
        gap: 0.6rem;

        input[type="text"] {
          flex: 1 1 100%;

          appearance: none;
          border: none;
          outline: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 17px;
          border: 4px solid rgba(46, 255, 84, 0.67);

          color: #fff;
          font-size: 24px;

          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: transparent;

          transition: 0.4s;

          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }

        input[type="submit"],
        button[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background-color: transparent;

          display: block;
          padding: 10px 15px;
          border: 4px solid rgba(46, 255, 84, 0.67);
          border-radius: 17px;


          color: #FFF;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}

</style>
