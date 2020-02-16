<template>
    <q-card flat class="q-mt-lg">
        <q-list separator>
            <q-item>
                <q-item-section class="col-7">
                    <q-item-label header class="q-px-none text-bold">Question</q-item-label>
                </q-item-section>

                <q-item-section class="col-3">
                    <q-item-label header class="q-px-none text-bold">Input Type</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-for="(question, index) in questions" :key="question.id">
                <q-item-section class="col-7">
                    <q-item-label v-if="!question.isEditMode">
                        {{ question.text }}
                    </q-item-label>
                    <q-input
                        clearable
                        clear-icon="close"
                        v-if="question.isEditMode"
                        v-model="question.text"
                        class="q-pr-xl" />
                </q-item-section>

                <q-item-section class="col-3">
                    <q-item-label v-if="!question.isEditMode">
                        {{ question.inputType }}
                    </q-item-label>
                    <q-select
                        v-if="question.isEditMode"
                        v-model="question.inputType"
                        :options="inputTypes">
                    </q-select>
                </q-item-section>

                <q-space />

                <q-btn
                    flat
                    round
                    color="grey-8"
                    icon="save"
                    v-if="question.isEditMode"
                    @click="$emit('save-question', index)" />

                <q-btn
                    flat
                    round
                    color="grey-8"
                    icon="edit"
                    v-if="!question.isEditMode"
                    @click="$emit('edit-question', index)" />

                <q-btn
                    flat
                    round
                    color="grey-8"
                    icon="delete"
                    @click="$emit('delete-question', index)" />
            </q-item>
        </q-list>
    </q-card>
</template>

<script>
export default {
  name: 'QuestionList',

  props: {
    questions: {
      type: Array
    }
  },

  data () {
    return {
      inputTypes: [
        'Single Line Text',
        'Multi Line Text',
        'Select',
        'Radio Button',
        'Checkbox'
      ]
    }
  }
}
</script>
