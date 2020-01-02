<template>
    <q-page class="q-pa-lg flex column hero-grey">
        <div class="row justify-between">
            <h5 class="q-ma-none text-dark text-weight-medium">{{ newProject.name }}</h5>
            <q-btn color="secondary" label="New Question +" rounded class="gt-sm"></q-btn>
            <q-btn color="secondary" label="+" rounded class="lt-sm"></q-btn>
        </div>
        <div class="row">
            <h6 class="q-ma-none text-grey text-subtitle2">{{ newProject.client }}</h6>
        </div>
        <div class="q-py-lg">
            <q-card>
                <q-list bordered separator class="rounded-borders">
                    <q-item>
                        <q-item-section class="col-5">
                            <q-item-label caption>Question</q-item-label>
                        </q-item-section>

                        <q-item-section class="col-3">
                            <q-item-label caption>Input Type</q-item-label>
                        </q-item-section>

                        <q-item-section class="col-2 gt-sm">
                            <q-item-label caption>Resources</q-item-label>
                        </q-item-section>

                        <q-item-section>
                            <q-item-label caption>Comments</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item v-for="question in questions" :key="question.id">
                        <q-item-section top class="col-5">
                            <q-item-label class="q-mt-sm">{{ question.text }}</q-item-label>
                        </q-item-section>

                        <q-item-section class="col-3">
                            {{ question.inputType }}
                        </q-item-section>

                        <q-item-section class="col-2 gt-sm">
                            {{ question.resources }}
                        </q-item-section>

                        <q-item-section>
                            {{ question.comments }}
                        </q-item-section>

                        <q-item-section side>
                            <div class="text-grey-8 q-gutter-xs">
                                <q-btn size="12px" flat dense round icon="more_vert" @click.prevent />
                            </div>
                            <q-menu anchor="bottom right" self="top right">
                                <q-list>
                                <q-item clickable dense class="text-primary">Edit</q-item>
                                <q-separator />
                                <q-item clickable dense class="text-negative">Delete</q-item>
                                </q-list>
                            </q-menu>
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'NewProject',
  props: {
    newProject: Object
  },
  data () {
    return {
      questions: [
        {
          id: 1,
          text: 'What is your Company\'s Name?',
          inputType: 'Input',
          resources: 'Video',
          comments: 'Bubble'
        },
        {
          id: 2,
          text: 'What is your Mission Statement?',
          inputType: 'Dropdown',
          resources: 'Video',
          comments: 'Bubble'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-grey {
  background-color: #F7F9FB;
}
</style>
