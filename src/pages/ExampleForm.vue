<template>
  <q-page class="flex column items-center justify-evenly q-px-xl">
    <h5 class="q-mt-sm q-mb-sm">
      Welcome, {{ clientName }}!
    </h5>
    <h6 class="q-mt-sm q-mb-sm">
      How long would you like to work on this task?
    </h6>
    <q-btn-toggle
      v-model="allottedTaskTime"
      toggle-color="primary"
      :options="[
        { label: '15 min', value: 15 },
        { label: '30 min', value: 30 },
        { label: '1 hour', value: 60 },
        { label: 'Finish Now', value: undefined }
      ]"
    />
    <q-btn
      class="q-mt-sm"
      color="primary"
      label="Next"
      :to="{ name: 'PageTwo', params: { allottedTaskTime: allottedTaskTime } }"
    />
  </q-page>
</template>

<script>
export default {
  name: 'ExampleForm',
  data () {
    return {
      clientName: 'Mark Lombardi',
      allottedTaskTime: 15
    }
  }
}
</script>
