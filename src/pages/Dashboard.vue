<template>
  <q-page class="q-pa-lg column">
    <section class="row justify-between items-center q-mb-lg">
      <h5 class="q-my-sm text-grey-8 text-bold">Projects</h5>
      <NewProjectBtn
        @create-new-project="openNewProjectDialog" />
    </section>

    <NewProjectDialog
      v-model="modal"
      :templateId="templateIdSelected" />

    <CustomerProjectList
      v-for="customer in customers"
      :key="customer.id"
      :customer="customer" />
  </q-page>
</template>

<script>
import NewProjectBtn from '../components/Projects/NewProjectBtn'
import NewProjectDialog from '../components/Projects/NewProjectDialog'
import CustomerProjectList from '../components/Projects/CustomerProjectList'

export default {
  name: 'Dashboard',

  components: {
    NewProjectBtn,
    NewProjectDialog,
    CustomerProjectList
  },

  data () {
    return {
      modal: false,
      templateIdSelected: undefined,
      customers: [
        {
          id: 1,
          name: 'Mark Lombardi',
          email: 'mark@shoottothrillmedia.com'
        },
        {
          id: 2,
          name: 'Matt Foreman',
          email: 'matt@shoottothrillmedia.com'
        }
      ]
    }
  },

  methods: {
    openNewProjectDialog (templateId) {
      this.templateIdSelected = templateId

      this.modal = true
    }
  }
}
</script>
