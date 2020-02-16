<template>
  <q-page class="q-pa-lg column">
      <section class="row justify-between items-center">
          <h5 class="q-my-sm text-grey-8 text-bold">
            {{ project.name }}
          </h5>

          <q-btn
            color="accent"
            label="Preview"
            icon-right="arrow_right"
            :to="`${project.id}/preview`"></q-btn>
      </section>

      <h6 class="q-ma-none text-grey text-subtitle2">
        {{ project.client }}
      </h6>

      <QuestionList
        :questions="questions"
        @save-question="saveQuestion"
        @edit-question="editQuestion"
        @delete-question="deleteQuestion" />

      <section class="row justify-start q-pl-md q-pt-md">
        <q-btn
          size="xs"
          round
          color="secondary"
          icon="add"
          @click="createNewQuestion"></q-btn>
      </section>
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
          inputType: 'Single Line Text',
          isEditMode: false
        },
        {
          id: 2,
          text: 'What is your Mission Statement?',
          inputType: 'Select',
          isEditMode: false
        }
      ],
      projects: [
        {
          id: 1,
          name: 'Massey Yacht\'s Website',
          client: 'Matt Foreman'
        },
        {
          id: 2,
          name: 'Tesla Cyber Truck Project',
          client: 'Mark Lombardi'
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
  },

  computed: {
    project () {
      const projectId = parseInt(this.$route.params.projectId)

      if (projectId) {
        return this.projects.find(project => project.id === projectId)
      }

      return this.newProject
    }
  }
}
</script>
