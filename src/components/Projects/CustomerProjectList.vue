<template>
    <q-card
        flat
        class="q-my-sm">
        <CustomerHeader :customer="customer" />

        <q-expansion-item
            popup
            :label="customer.name + ' Projects'"
            switch-toggle-side
        >
            <q-list separator>
                <q-item class="justify-evenly">
                    <q-item-section
                        top
                        class="col-2 content-center">
                        <q-item-label
                            header
                            class="q-px-none text-bold">
                            Project Name
                        </q-item-label>
                    </q-item-section>

                    <q-item-section
                        top
                        class="col-2 content-center">
                        <q-item-label
                            header
                            class="q-px-none text-bold">
                            Due Date
                        </q-item-label>
                    </q-item-section>

                    <q-item-section
                        top
                        class="col-2 content-center">
                        <q-item-label
                            header
                            class="q-px-none text-bold">
                            Status
                        </q-item-label>
                    </q-item-section>

                    <q-item-section
                        top
                        class="col-5 content-center">
                        <q-item-label
                            header
                            class="q-px-none text-bold">
                            Progress
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <q-item
                    v-for="project in projects"
                    :key="project.id"
                    class="q-pb-md justify-evenly">
                    <q-item-section class="col-2 text-grey-8 content-center">
                        <q-btn
                            :to="`/projects/${project.id}`"
                            class="text-weight-regular"
                            flat
                            no-caps
                            v-ripple>
                            {{ project.name }}
                        </q-btn>
                    </q-item-section>

                    <q-item-section class="col-2 text-grey-8 content-center">
                        {{ project.dueDate }}
                    </q-item-section>

                    <q-item-section class="col-2 content-center">
                        <div
                            style="width: 50%;"
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

                    <q-item-section class="col-5 content-center">
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
                                    <span>Approved</span>
                                </div>

                                <div class="col text-center text-grey-8">
                                    <span>Completed</span>
                                </div>

                                <div class="col text-center text-grey-8">
                                    <span>To Do</span>
                                </div>
                            </div>
                        </div>
                        <q-linear-progress
                            :value="project.progress.progressVal"
                            color="secondary"
                            class="q-mt-sm" />
                    </q-item-section>
                </q-item>
            </q-list>
        </q-expansion-item>
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
