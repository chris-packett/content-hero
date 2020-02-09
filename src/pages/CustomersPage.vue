<template>
    <q-page class="q-pa-lg column">
        <section class="row justify-between items-center q-mb-lg">
            <h5 class="q-my-sm text-grey-8 text-bold">Clients</h5>
            <q-btn
                color="secondary"
                label="New Client +">
            </q-btn>
        </section>

        <q-table
            :columns="columns"
            :data="data"
            row-key="name"
            flat>
            <template v-slot:body-cell-name="props">
                <q-td :props="props">
                    <span class="q-mr-xs">
                        <q-avatar
                            size="25px"
                            :color="props.row.contactName === 'Mark Lombardi' ? 'secondary' : 'accent'"
                            class="text-white">
                            {{ props.row.contactName === 'Mark Lombardi' ? 'ML' : 'MF' }}
                        </q-avatar>
                    </span>
                    <span>
                        {{ props.value }}
                    </span>
                </q-td>
            </template>
        </q-table>
    </q-page>
</template>

<script>
export default {
  name: 'CustomersPage',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Company',
          align: 'left',
          field: row => row.name,
          sortable: true
        },
        {
          name: 'contactName',
          required: true,
          label: 'Contact',
          align: 'left',
          field: row => row.contactName,
          sortable: true
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: row => row.email,
          sortable: true
        },
        {
          name: 'phoneNumber',
          required: true,
          label: 'Phone',
          align: 'left',
          field: row => row.phoneNumber,
          sortable: true
        }
      ],
      data: [
        {
          name: 'Shoot to Thrill Media',
          contactName: 'Mark Lombardi',
          email: 'mark@shoottothrillmedia.com',
          phoneNumber: '(727) 698-6363'
        },
        {
          name: 'Massey Yacht Sales',
          contactName: 'Matt Foreman',
          email: 'matt@shoottothrillmedia.com',
          phoneNumber: '(727) 326-4622'
        }
      ]
    }
  }
}
</script>
