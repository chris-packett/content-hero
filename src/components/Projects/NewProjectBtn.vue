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
                        Blank Project
                    </q-item-section>
                </q-item>

                <q-separator />

                <q-item clickable>
                    <q-item-section>
                        Project Template
                    </q-item-section>

                    <q-item-section side>
                        <q-icon name="keyboard_arrow_right" />
                    </q-item-section>

                    <q-menu
                        anchor="bottom right"
                        self="top right">
                        <q-list>
                            <q-item
                                v-for="n in 3" :key="n"
                                clickable
                                @click="openNewProjectDialog(n)"
                                dense>
                                <q-item-section>Template {{ n }}</q-item-section>
                            </q-item>

                            <q-separator />

                            <q-item
                                clickable
                                dense>
                                More Templates...
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

  methods: {
    openNewProjectDialog: function (templateId = undefined) {
      this.$emit('create-new-project', templateId)
    }
  }
}
</script>
