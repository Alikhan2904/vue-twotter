<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ state.user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="state.user.isAdmin">
        Admin
      </div>
      <div class="user-profile__admin-badge" v-else>
        User
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ state.followers }}
      </div>
      <create-twoot-panel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <twoot-item
        v-for="twoot in state.user.twoots"
        :key="twoot.id"
        :username="state.user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import { users } from '../assets/users'
import CreateTwootPanel from '../components/CreateTwootPanel.vue'
import TwootItem from '../components/TwootItem.vue'

export default {
  name: 'UserProfile',
  components: {
    TwootItem,
    CreateTwootPanel
  },

  setup() {
    const route = useRoute()

    const userId = computed(() => route.params.userId)

    const state = reactive({
      followers: 0,
      // get dynamic user by id from the imported file
      user: users[userId.value - 1] || users[0]
    })

    function followUser() {
      state.followers++
    }

    function addTwoot(twoot) {
      state.user.twoots.unshift({
        id: state.user.twoots.length + 1,
        content: twoot
      })
    }

    return {
      state,
      followUser,
      addTwoot
    }
  },
  mounted() {
    this.followUser()
  }
}
</script>

<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }

    .user-profile__create-twoot {
      padding-top: 20px;
      display: flex;
      flex-direction: column;

      &.--exceeded {
        color: red;
        border-color: red;
        button {
          background-color: red;
          border: none;
          color: white;
        }
      }
    }
  }
  .user-profile__twoots-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>
