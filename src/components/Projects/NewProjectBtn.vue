<template>
    <q-btn
        color="secondary"
        label="New Project +">
        <q-menu
            transition-show="jump-down"
            transition-hide="jump-up">
            <q-list style="min-width: 100px">
                <q-item
                    clickable
                    @click="openNewProjectDialog()">
                    <q-item-section>
                        <b class="text-grey-8">Blank Project</b>
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable>
                    <q-item-section>
                        <b class="text-grey-8">Templates</b>
                    </q-item-section>

                    <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                    </q-item-section>

                    <q-menu
                        anchor="bottom right"
                        self="top right">
                        <q-list>
                            <q-item
                                v-for="template in templates"
                                :key="template.id"
                                clickable
                                @click="openNewProjectDialog(template.id)"
                                dense>
                                <q-item-section><b class="text-grey-8">{{ template.name }}</b></q-item-section>
                            </q-item>

                            <q-separator />

                            <q-item
                                clickable
                                dense>
                                <b class="text-grey-8">More Templates...</b>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-item>
            </q-list>
        </q-menu>
    </q-btn>
</template>

<script>
export default {
  name: 'NewProjectBtn',

  data () {
    return {
      templates: [
        { id: 1, name: 'Web Development' },
        { id: 2, name: 'Social Media' },
        { id: 3, name: 'SEO' }
      ]
    }
  },

  methods: {
    openNewProjectDialog: function (templateId = undefined) {
      this.$emit('create-new-project', templateId)
    }
  }
}
</script>
