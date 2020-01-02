<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Content Hero
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Content Hero</q-item-label>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/templates">
          <q-item-section avatar>
            <q-icon name="folder" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Templates</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/clients">
          <q-item-section avatar>
            <q-icon name="mood" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Clients</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
