<template>
  <q-page class="q-pa-lg flex column hero-grey">
    <q-btn color="secondary" label="New Project +" rounded class="self-end">
      <q-menu transition-show="jump-down" transition-hide="jump-up">
        <q-list style="min-width: 100px">
          <q-item clickable @click="openNewProjectDialog()">
            <q-item-section>
              Blank Project
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Project Template</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>
            <q-menu anchor="bottom right" self="top right">
              <q-list>
                <q-item v-for="n in 3" :key="n" dense clickable @click="openNewProjectDialog(n)">
                  <q-item-section>Template {{ n }}</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable dense>More Templates...</q-item>
              </q-list>
            </q-menu>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <div class="q-py-lg">
      <q-card>
        <q-list bordered separator class="rounded-borders">
          <q-item>
            <q-item-section top class="col-10">
              <q-item-label header>Projects ({{ totalProjects }})</q-item-label>
            </q-item-section>

            <q-item-section class="gt-sm">
              <q-item-label caption>Status</q-item-label>
            </q-item-section>
          </q-item>

          <q-item v-for="project in projects" :key="project.id" clickable :to="`/projects/${project.id}`">
            <q-item-section top class="col-10">
              <q-item-label class="q-mt-sm">{{ project.name }}</q-item-label>
            </q-item-section>

            <q-item-section class="gt-sm">
              {{ project.status }}
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
    <NewProjectDialog v-model="modal" :templateId="templateIdSelected" />
  </q-page>
</template>

<script>
import NewProjectDialog from '../components/NewProjectDialog'

export default {
  name: 'PageIndex',
  components: {
    NewProjectDialog
  },
  data () {
    return {
      modal: false,
      templateIdSelected: undefined,
      projects: [
        {
          id: 1,
          name: 'Massey Yacht\'s Website',
          status: 'Draft'
        },
        {
          id: 2,
          name: 'Tesla Cyber Truck Project',
          status: 'Stuck'
        }
      ]
    }
  },
  methods: {
    openNewProjectDialog (template = undefined) {
      this.modal = true

      this.templateIdSelected = template
    }
  },
  computed: {
    totalProjects: function () {
      return this.projects.length
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-grey {
  background-color: #F7F9FB;
}
</style>
