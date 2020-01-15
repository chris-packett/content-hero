<template>
  <q-page class="q-pa-xl column">
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
    <div class="q-py-xl">
      <q-card flat v-for="customer in customers" :key="customer.id">
        <q-item>
          <q-item-section avatar>
            <q-avatar size="75px">
              <img :src="customer.avatarUrl">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <h5 class="q-mt-sm q-mb-xs">{{ customer.name }}</h5>
            <q-item-label caption>{{ customer.email }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-list separator>
          <q-item>
            <q-item-section top class="col-5">
              <q-item-label header class="q-px-none">Project Name</q-item-label>
            </q-item-section>

            <q-item-section top class="col-1 q-mr-sm">
              <q-item-label header class="q-px-none">Due Date</q-item-label>
            </q-item-section>

            <q-item-section top class="col-1">
              <q-item-label header class="q-px-none">Status</q-item-label>
            </q-item-section>

            <q-item-section top class="col-4">
              <q-item-label header class="q-px-none">Progress</q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-for="project in projects"
            :key="project.id"
            clickable
            :to="`/projects/${project.id}`"
            class="q-pb-md">
            <q-item-section class="col-5">
              {{ project.name }}
            </q-item-section>

            <q-item-section class="col-1">
              {{ project.dueDate }}
            </q-item-section>

            <q-item-section class="col-1 q-mr-sm">
              <q-chip :color="getStatusColor(project.status)" text-color="white">
                {{ project.status }}
              </q-chip>
            </q-item-section>

            <q-item-section class="col-4">
              <div clickable @click.prevent>
                <div class="row">
                  <q-btn flat dense class="col text-center"><h6 class="q-my-sm">{{ project.progress.approved }}</h6></q-btn>
                  <q-btn flat dense class="col text-center"><h6 class="q-my-sm">{{ project.progress.completed }}</h6></q-btn>
                  <q-btn flat dense class="col text-center"><h6 class="q-my-sm">{{ project.progress.toDo }}</h6></q-btn>
                </div>
                <div class="row">
                  <div class="col text-center"><i>Approved</i></div>
                  <div class="col text-center"><i>Completed</i></div>
                  <div class="col text-center"><i>To Do</i></div>
                </div>
              </div>
              <q-linear-progress :value="project.progress.progressVal" color="secondary" class="q-mt-sm" />
            </q-item-section>

            <q-item-section side>
              <div class="text-grey-8 q-gutter-xs">
                <q-btn size="12px" flat dense round icon="more_vert" @click.prevent />
              </div>
              <q-menu anchor="bottom right" self="center right">
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
      customers: [
        {
          id: 1,
          name: 'Mark Lombardi',
          email: 'mark@shoottothrillmedia.com',
          avatarUrl: 'https://cdn.quasar.dev/img/avatar.png'
        },
        {
          id: 2,
          name: 'Matt Foreman',
          email: 'matt@shoottothrillmedia.com',
          avatarUrl: 'https://cdn.quasar.dev/img/boy-avatar.png'
        }
      ],
      projects: [
        {
          id: 1,
          name: 'Massey Yacht\'s Website',
          dueDate: '02/19/2020',
          status: 'Completed',
          progress: {
            approved: 0,
            completed: 10,
            toDo: 10,
            progressVal: 0
          }
        },
        {
          id: 2,
          name: 'Tesla Cyber Truck Project',
          dueDate: '03/01/2020',
          status: 'Stuck',
          progress: {
            approved: 4,
            completed: 16,
            toDo: 4,
            progressVal: 0.20
          }
        }
      ]
    }
  },
  methods: {
    openNewProjectDialog (template = undefined) {
      this.modal = true

      this.templateIdSelected = template
    },
    getStatusColor (status) {
      return status === 'Stuck'
        ? 'negative'
        : 'positive'
    }
  },
  computed: {
    totalProjects: function () {
      return this.projects.length
    }
  }
}
</script>
