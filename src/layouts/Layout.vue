<template>
  <q-layout view="lHh Lpr lFf">
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="100">
      <q-list class="q-pt-md">
        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :class="{ 'bg-grey-3': nav.to === $route.path, 'absolute-bottom q-mb-md': nav.to === '/settings' }"
          exact
          clickable>
          <q-item-section avatar class="items-center q-pr-none">
            <q-icon :name="nav.icon" class="q-mb-sm" color="grey-8" />
            <q-item-label caption>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :label="nav.label"
          :icon="nav.icon"
          :to="nav.to" />
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Layout',

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Projects',
          icon: 'dashboard',
          to: '/'
        },
        {
          label: 'Templates',
          icon: 'folder',
          to: '/templates'
        },
        {
          label: 'Clients',
          icon: 'mood',
          to: '/clients'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
