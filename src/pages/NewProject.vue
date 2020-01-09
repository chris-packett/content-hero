<template>
    <q-page class="q-pa-lg flex column hero-grey">
        <div class="row justify-between">
            <h5 class="q-ma-none text-dark text-weight-medium">{{ newProject.name }}</h5>
            <q-btn
                color="secondary"
                label="New Question +"
                rounded class="gt-sm"
                @click="createNewQuestion"></q-btn>
            <q-btn
                color="secondary"
                label="+"
                rounded
                class="lt-sm"
                @click="createNewQuestion"></q-btn>
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

                    <q-item v-for="(question, index) in questions" :key="question.id">
                        <q-item-section
                            v-if="!question.isEditMode"
                            top
                            class="col-5">
                            <q-item-label class="q-mt-sm">{{ question.text }}</q-item-label>
                        </q-item-section>

                        <q-item-section
                            v-if="question.isEditMode"
                            top
                            class="col-5">
                            <q-input
                                v-model="question.text"
                                class="q-pr-xl" />
                        </q-item-section>

                        <q-item-section
                            v-if="!question.isEditMode"
                            class="col-3">
                            {{ question.inputType }}
                        </q-item-section>

                        <q-item-section
                            v-if="question.isEditMode"
                            class="col-3">
                            <q-select
                                v-model="question.inputType"
                                :options="inputTypes"
                                class="q-pr-xl">
                            </q-select>
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
                                    <q-item
                                        v-if="question.isEditMode"
                                        @click="saveQuestion(index)"
                                        v-close-popup
                                        clickable
                                        dense
                                        class="text-secondary">
                                        Save
                                    </q-item>
                                    <q-separator />
                                    <q-item
                                        v-if="!question.isEditMode"
                                        @click="editQuestion(index)"
                                        v-close-popup
                                        clickable
                                        dense
                                        class="text-primary">
                                        Edit
                                    </q-item>
                                    <q-separator />
                                    <q-item
                                        @click="deleteQuestion(index)"
                                        v-close-popup
                                        clickable
                                        dense
                                        class="text-negative">
                                        Delete
                                    </q-item>
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
          inputType: 'Input Textfield',
          resources: 'Video',
          comments: 'Bubble',
          isEditMode: false
        },
        {
          id: 2,
          text: 'What is your Mission Statement?',
          inputType: 'Select Dropdown',
          resources: 'Video',
          comments: 'Bubble',
          isEditMode: false
        }
      ],
      inputTypes: [
        'Input Textfield',
        'Select Dropdown',
        'Radio',
        'Checkbox'
      ]
    }
  },
  methods: {
    createNewQuestion () {
      const nextId = this.questions.length !== 0
        ? Math.max(...this.questions.map(q => q.id)) + 1
        : 1

      const newQuestion = {
        id: nextId,
        text: '',
        inputType: '',
        resources: 'Video',
        comments: 'Bubble',
        isEditMode: true
      }

      this.questions.push(newQuestion)
    },
    saveQuestion (index) {
      this.questions = this.questions.map((q, i) => {
        if (i === index) {
          q.isEditMode = false
        }

        return q
      })
    },
    editQuestion (index) {
      this.questions = this.questions.map((q, i) => {
        if (i === index) {
          q.isEditMode = true
        }

        return q
      })
    },
    deleteQuestion (index) {
      this.questions = this.questions.filter((q, i) => i !== index)
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-grey {
  background-color: #F7F9FB;
}
</style>
