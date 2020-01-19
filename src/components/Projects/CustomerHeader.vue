<template>
    <q-item>
        <q-item-section avatar>
            <q-avatar
                size="75px"
                :color="customer.name === 'Mark Lombardi' ? 'secondary' : 'accent'"
                class="text-white">
                {{ customer.name === 'Mark Lombardi' ? 'ML' : 'MF' }}
            </q-avatar>
        </q-item-section>

        <q-item-section>
            <h5 class="q-my-sm text-grey-8">{{ customer.name }}</h5>
            <q-item-label caption>{{ customer.email }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script>
export default {
  name: 'CustomerHeader',

  props: {
    customer: Object
  }
}
</script>
