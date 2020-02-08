<template>
    <q-card class="q-mt-lg">
        <q-list bordered separator class="rounded-borders">
            <q-item>
                <q-item-section class="col-5">
                    <q-item-label caption>Question</q-item-label>
                </q-item-section>

                <q-item-section class="col-3">
                    <q-item-label caption>Input Type</q-item-label>
                </q-item-section>

                <q-item-section class="col-2 gt-sm">
                    <q-item-label caption>Resources</q-item-label>
                </q-item-section>

                <q-item-section>
                    <q-item-label caption>Comments</q-item-label>
                </q-item-section>
            </q-item>

            <q-item v-for="(question, index) in questions" :key="question.id">
                <q-item-section
                    v-if="!question.isEditMode"
                    top
                    class="col-5">
                    <q-item-label class="q-mt-sm">{{ question.text }}</q-item-label>
                </q-item-section>

                <q-item-section
                    v-if="question.isEditMode"
                    top
                    class="col-5">
                    <q-input
                        v-model="question.text"
                        class="q-pr-xl" />
                </q-item-section>

                <q-item-section
                    v-if="!question.isEditMode"
                    class="col-3">
                    {{ question.inputType }}
                </q-item-section>

                <q-item-section
                    v-if="question.isEditMode"
                    class="col-3">
                    <q-select
                        v-model="question.inputType"
                        :options="inputTypes"
                        class="q-pr-xl">
                    </q-select>
                </q-item-section>

                <q-item-section class="col-2 gt-sm">
                    {{ question.resources }}
                </q-item-section>

                <q-item-section>
                    {{ question.comments }}
                </q-item-section>

                <q-item-section side>
                    <div class="text-grey-8 q-gutter-xs">
                        <q-btn size="12px" flat dense round icon="more_vert" @click.prevent />
                    </div>
                    <q-menu anchor="bottom right" self="top right">
                        <q-list>
                            <q-item
                                v-if="question.isEditMode"
                                @click="$emit('save-question', index)"
                                v-close-popup
                                clickable
                                dense
                                class="text-secondary">
                                Save
                            </q-item>
                            <q-separator />
                            <q-item
                                v-if="!question.isEditMode"
                                @click="$emit('edit-question', index)"
                                v-close-popup
                                clickable
                                dense
                                class="text-primary">
                                Edit
                            </q-item>
                            <q-separator />
                            <q-item
                                @click="$emit('delete-question', index)"
                                v-close-popup
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
        'Input Textfield',
        'Select Dropdown',
        'Radio',
        'Checkbox'
      ]
    }
  }
}
</script>
