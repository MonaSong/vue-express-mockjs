<template>
    <div class="home">
        <v-head myMessage="head"></v-head>
        <v-sidebar myMessage="sidebar"></v-sidebar>
        <div class="content">
            <transition name="slide-fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import vHead from './Head.vue'
import vSidebar from './Sidebar.vue'
export default {
  components: {
    vHead, vSidebar
  }
}
</script>
