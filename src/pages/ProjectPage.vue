<template>
  <q-page class="q-pa-lg column">
      <section class="row justify-between items-center">
          <h5 class="q-my-sm text-grey-8 text-bold">{{ newProject.name }}</h5>
          <q-btn
              color="secondary"
              label="New Question +"
              @click="createNewQuestion"></q-btn>
      </section>
      <h6 class="q-ma-none text-grey text-subtitle2">{{ newProject.client }}</h6>
      <QuestionList
        :questions="questions"
        @save-question="saveQuestion"
        @edit-question="editQuestion"
        @delete-question="deleteQuestion" />
  </q-page>
</template>

<script>
import QuestionList from '../components/Questions/QuestionList'

export default {
  name: 'ProjectPage',

  components: {
    QuestionList
  },

  props: {
    newProject: {
      type: Object,
      default: () => ({ name: 'New Project', client: 'No Client Yet' })
    }
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
