<template>
  <div class="user-profile">
    <div class="user-profile__user-panel">
      <h1 class="user-profile__username">@{{ user.username }}</h1>
      <div class="user-profile__admin-badge" v-if="user.isAdmin">
        Admin
      </div>
      <div class="user-profile__admin-badge" v-else>
        User
      </div>
      <div class="user-profile__follower-count">
        <strong>Followers: </strong> {{ followers }}
      </div>
      <create-twoot-panel @add-twoot="addTwoot" />
    </div>
    <div class="user-profile__twoots-wrapper">
      <twoot-item
        v-for="twoot in user.twoots"
        :key="twoot.id"
        :username="user.username"
        :twoot="twoot"
      />
    </div>
  </div>
</template>

<script>
import CreateTwootPanel from './CreateTwootPanel.vue'
import TwootItem from './TwootItem.vue'
export default {
  name: 'App',
  components: {
    TwootItem,
    CreateTwootPanel
  },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_alikhan',
        firstName: 'Ali khan',
        lastName: 'Mehboob',
        email: 'alikhan@gmail.com',
        isAdmin: true,
        twoots: [
          { id: 1, content: 'Twotter is amazing!' },
          { id: 2, content: 'This is a Vue Twotter Twoot!' }
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} has gained a follower!`)
      }
    }
  },
  methods: {
    followUser() {
      this.followers++
    },
    addTwoot(twoot) {
      this.user.twoots.unshift({
        id: this.user.twoots.length + 1,
        content: twoot
      })
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
