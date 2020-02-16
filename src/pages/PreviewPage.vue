<template>
  <q-page class="q-pa-lg column">
    <section class="row justify-between items-center q-my-sm">
      <q-btn
        outline
        color="grey-8"
        label="Builder"
        icon="arrow_left"
        :to="`/projects/${previewProject.id}`"></q-btn>

      <q-btn
        color="accent"
        label="Publish"
        icon-right="arrow_right"
        :to="`/projects/${previewProject.id}/publish`"></q-btn>
    </section>

    <q-scroll-area ref="scrollArea" class="fill-window">
      <section
        v-for="question in previewProject.questions"
        :key="question.id"
        class="column justify-center fill-window">
        <section class="row justify-center items-center">
          <b class="text-grey-8 col-6 text-h5 text-bold">
            {{ question.text }}
          </b>
        </section>

        <section class="row justify-center">
          <q-input
            v-if="question.inputType === 'Single Line Text'"
            v-model="question.answer"
            class="col-6" />

          <q-select
            v-if="question.inputType === 'Select'"
            v-model="question.answer"
            :options="question.selectOptions"
            class="col-6" />
        </section>

        <section class="row justify-center q-mt-xl q-pt-md">
          <section class="col-6">
            <q-btn color="secondary" label="Next" style="width: 20%;" @click="animateScroll" />
          </section>
        </section>
      </section>
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: 'PreviewPage',
  data () {
    return {
      projects: [
        {
          id: 1,
          name: 'Massey Yacht\'s Website',
          client: 'Matt Foreman',
          questions: [
            {
              id: 1,
              text: 'What is your Company\'s Name?',
              inputType: 'Single Line Text',
              isEditMode: false,
              answer: ''
            },
            {
              id: 2,
              text: 'What is your Mission Statement?',
              inputType: 'Select',
              isEditMode: false,
              answer: '',
              selectOptions: [
                'Mission Statement A',
                'Mission Statement B',
                'Mission Statement C'
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'Tesla Cyber Truck Project',
          client: 'Mark Lombardi',
          questions: [
            {
              id: 1,
              text: 'What is your Company\'s Name?',
              inputType: 'Single Line Text',
              isEditMode: false,
              answer: ''
            },
            {
              id: 2,
              text: 'What is your Mission Statement?',
              inputType: 'Select',
              isEditMode: false,
              answer: '',
              selectOptions: [
                'Mission Statement A',
                'Mission Statement B',
                'Mission Statement C'
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    previewProject () {
      const previewProjectId = parseInt(this.$route.params.projectId)

      return this.projects.find(project => project.id === previewProjectId)
    }
  },
  methods: {
    animateScroll () {
      this.$refs.scrollArea.setScrollPosition(this.$refs.scrollArea.containerHeight, 250)
    }
  }
}
</script>

<style scoped lang="scss">
.fill-window {
    height: calc(100vh - 100px)
}
</style>
