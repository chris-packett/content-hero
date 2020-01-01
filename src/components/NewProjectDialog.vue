<template>
  <q-dialog
    v-model="$attrs.value"
    v-bind="$attrs"
    v-on="$listeners"
    ref="npDialog"
    @hide="isShowing = false"
    persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <q-input
          v-model="newProject.name"
          label="Project Name"
          autofocus
          @keyup.enter="prompt = false"
        />
      </q-card-section>

      <q-card-section>
        <q-select
          v-model="newProject.client"
          :options="heroClients"
          label="Client"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
          @filter="filterFn">
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">No results</q-item-section>
            </q-item>
          </template>
        </q-select>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Create Project" @click="trigger" />
      </q-card-actions>
    </q-card>
    <q-ajax-bar
      ref="bar"
      position="top"
      color="secondary"
      size="10px"
      skip-hijack
    />
  </q-dialog>
</template>

<script>
const clientOptions = ['Client 1', 'Client 2', 'Client 3']

export default {
  name: 'NewProjectDialog',
  props: {
    templateId: Number
  },
  data () {
    return {
      newProject: {},
      heroClients: clientOptions
    }
  },
  methods: {
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLowerCase()

        this.heroClients = clientOptions.filter(
          f => f.toLowerCase().indexOf(needle) > -1
        )
      })
    },
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }

        this.$refs.npDialog.hide()
      }, Math.random() * 3000 + 1000)
    }
  }
}
</script>
