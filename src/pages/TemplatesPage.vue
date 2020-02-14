<template>
    <q-page class="q-pa-lg column">
        <section class="row justify-between items-center q-mb-lg">
            <h5 class="q-my-sm text-grey-8 text-bold">Templates</h5>
            <q-btn
                color="secondary"
                label="New Template +">
            </q-btn>
        </section>
        <q-tabs
            v-model="selectedTab"
            class="text-grey-8 q-mb-lg"
            align="left"
            dense
        >
            <q-tab name="Project" label="Projects" />
            <q-tab name="Section" label="Sections" />
            <q-tab name="Question" label="Questions" />
        </q-tabs>
        <q-list separator>
            <q-item>
                <q-item-section
                    top
                    class="col-3">
                    <q-item-label
                        header
                        class="q-px-none text-bold">
                        {{ selectedTab }} Template Name
                    </q-item-label>
                </q-item-section>

                <q-item-section
                    top
                    class="col-7">
                    <q-item-label
                        header
                        class="q-px-none text-bold">
                        Description
                    </q-item-label>
                </q-item-section>
            </q-item>

            <q-item
                v-for="template in filteredTemplates"
                :key="template.id"
                class="q-pb-md">
                <q-item-section class="col-3 text-grey-8">
                    <q-btn
                        class="text-weight-regular"
                        flat
                        no-caps
                        v-ripple>
                        {{ template.name }}
                    </q-btn>
                </q-item-section>

                <q-item-section class="col-7 text-grey-8">
                    {{ template.description }}
                </q-item-section>
            </q-item>
        </q-list>
    </q-page>
</template>

<script>
export default {
  name: 'TemplatesPage',
  data () {
    return {
      selectedTab: 'Project',
      templates: [
        {
          id: 1,
          name: 'Web Development Template',
          description: 'The Web Development Template is for small shops to get work done quickly.',
          type: 'Project'
        },
        {
          id: 2,
          name: 'Social Media Template',
          description: 'The Social Media Template is for extracting the most engaging content from your clients.',
          type: 'Project'
        },
        {
          id: 3,
          name: 'SEO Template',
          description: 'A template that gives you clients digestable chunks of questions to get competitve rankings on Google.',
          type: 'Project'
        },
        {
          id: 4,
          name: 'Company Information',
          description: 'Basic information about the company as a whole.',
          type: 'Section'
        },
        {
          id: 5,
          name: 'Contact Information',
          description: 'Use this section template if you want to get contact information from your client.',
          type: 'Section'
        },
        {
          id: 6,
          name: 'Mission Statement',
          description: 'A perfectly articulated question to extract mission statements from your clients.',
          type: 'Question'
        },
        {
          id: 7,
          name: 'Logo',
          description: 'A question that makes it easy for your clients to get you their logo.',
          type: 'Question'
        }
      ]
    }
  },
  computed: {
    filteredTemplates () {
      return this.templates.filter(template => template.type === this.selectedTab)
    }
  }
}
</script>
