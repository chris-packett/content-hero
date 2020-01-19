<template>
    <q-card
        flat
        class="q-my-sm">
        <CustomerHeader :customer="customer" />

        <q-list separator>
            <q-item>
                <q-item-section
                    top
                    class="col-3">
                    <q-item-label
                        header
                        class="q-px-none">
                        Project Name
                    </q-item-label>
                </q-item-section>

                <q-item-section
                    top
                    class="col-2 q-mr-sm">
                    <q-item-label
                        header
                        class="q-px-none">
                        Due Date
                    </q-item-label>
                </q-item-section>

                <q-item-section
                    top
                    class="col-2">
                    <q-item-label
                        header
                        class="q-px-none">
                        Status
                    </q-item-label>
                </q-item-section>

                <q-item-section
                    top
                    class="col-4">
                    <q-item-label
                        header
                        class="q-px-none">
                        Progress
                    </q-item-label>
                </q-item-section>
            </q-item>

            <q-item
                v-for="project in projects"
                :key="project.id"
                class="q-pb-md">
                <q-item-section class="col-3 text-grey-8 text-bold">
                    <q-btn
                        :to="`/projects/${project.id}`"
                        flat
                        v-ripple>
                        {{ project.name }}
                    </q-btn>
                </q-item-section>

                <q-item-section class="col-2 text-grey-8">
                    {{ project.dueDate }}
                </q-item-section>

                <q-item-section>
                    <div
                        style="width: 70%;"
                        class="column">
                        <q-chip
                            outline
                            square
                            class="justify-center"
                            :color="getStatusColor(project.status)">
                            {{ project.status }}
                        </q-chip>
                    </div>
                </q-item-section>

                <q-item-section class="col-4">
                    <div
                        clickable
                        @click.prevent>
                        <div class="row">
                            <q-btn
                                flat
                                dense
                                class="col text-center">
                                <h6 class="q-my-xs text-grey-8">{{ project.progress.approved }}</h6>
                            </q-btn>

                            <q-btn
                                flat
                                dense
                                class="col text-center">
                                <h6 class="q-my-xs text-grey-8">{{ project.progress.completed }}</h6>
                            </q-btn>

                            <q-btn
                                flat
                                dense
                                class="col text-center">
                                <h6 class="q-my-xs text-grey-8">{{ project.progress.toDo }}</h6>
                            </q-btn>
                        </div>

                        <div class="row">
                            <div class="col text-center text-grey-8">
                                <i>Approved</i>
                            </div>

                            <div class="col text-center text-grey-8">
                                <i>Completed</i>
                            </div>

                            <div class="col text-center text-grey-8">
                                <i>To Do</i>
                            </div>
                        </div>
                    </div>
                    <q-linear-progress
                        :value="project.progress.progressVal"
                        color="secondary"
                        class="q-mt-sm" />
                </q-item-section>

                <q-item-section side>
                    <div class="text-grey-8 q-gutter-xs">
                        <q-btn
                            size="12px"
                            flat
                            dense
                            round
                            icon="more_vert"
                            @click.prevent />
                    </div>

                    <q-menu
                        anchor="bottom right"
                        self="center right">
                        <q-list>
                            <q-item
                                clickable
                                dense
                                class="text-primary">
                                Edit
                            </q-item>

                            <q-separator />

                            <q-item
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
</template>

<script>
import CustomerHeader from './CustomerHeader'

export default {
  name: 'CustomerProjectList',

  props: {
    customer: Object
  },

  components: {
    CustomerHeader
  },

  data () {
    return {
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
    getStatusColor (status) {
      return status === 'Stuck'
        ? 'deep-orange-10'
        : 'secondary'
    }
  }
}
</script>
