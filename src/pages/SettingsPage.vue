<template>
    <q-page class="q-pa-lg column">
        <h5 class="q-my-sm text-grey-8 text-bold q-mb-lg">Settings</h5>
        <q-tabs
          v-model="selectedTab"
          class="text-grey-8 q-mb-lg"
          align="left"
          dense
        >
          <q-tab name="Personal" label="Personal" />
          <q-tab name="Company" label="Company" />
          <q-tab name="Billing" label="Billing" />
        </q-tabs>
        <q-item style="width: 75%;">
          <q-item-section class="col-2">
            <b class="text-grey-8">Profile Picture</b>
          </q-item-section>

          <q-item-section class="col-4">
            <q-avatar
              size="60px"
              color="secondary"
              class="text-white">
              {{ user.initials }}
            </q-avatar>
          </q-item-section>
      </q-item>
      <q-item style="width: 75%;">
        <q-item-section class="col-2">
          <b class="text-grey-8">Full Name</b>
        </q-item-section>

        <q-item-section class="col-4">
          <q-input v-model="user.name" />
        </q-item-section>
      </q-item>

      <q-item style="width: 75%;">
        <q-item-section class="col-2">
          <b class="text-grey-8">Email Address</b>
        </q-item-section>

        <q-item-section class="col-4">
          <q-input v-model="user.email" />
        </q-item-section>
      </q-item>

      <q-item style="width: 75%;">
        <q-item-section class="col-2">
          <b class="text-grey-8">Phone Number</b>
        </q-item-section>

        <q-item-section class="col-4">
          <q-input v-model="user.phoneNumber" />
        </q-item-section>
      </q-item>
    </q-page>
</template>

<script>
export default {
  name: 'SettingsPage',
  data () {
    return {
      selectedTab: 'Personal',
      user: {
        id: 1,
        name: 'Mark Lombardi',
        initials: 'ML',
        email: 'mark@shoottothrillmedia.com',
        phoneNumber: '(727) 642-8961'
      }
    }
  }
}
</script>
