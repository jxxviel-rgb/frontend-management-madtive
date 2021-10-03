<template>
  <TransitionRoot appear :show="(isOpen = !isOpen)" as="template">
    <Dialog as="div" @close="$emit('close')">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl  bg-blueGray-200 rounded-2xl"
            >
              <div class="sm:flex sm:items-start">
                <div
                  v-if="alertContent.type === 'success'"
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full  bg-emerald-200 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <BadgeCheckIcon
                    class="w-6 h-6 text-emerald-800"
                    aria-hidden="true"
                  />
                </div>
                <div
                  v-else
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-200 rounded-full  sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationCircleIcon
                    class="w-6 h-6 text-red-800"
                    aria-hidden="true"
                  />
                </div>

                <div
                  class="flex-none mt-3 text-center  sm:mt-0 sm:ml-2 sm:text-left"
                >
                  <DialogTitle
                    as="h3"
                    class="mt-2 text-lg font-medium leading-6 text-blueGray-900"
                  >
                    {{ alertContent.title }}
                  </DialogTitle>
                </div>
              </div>
              <div class="mt-2">
                <p class="text-sm text-blueGray-600">
                  {{ alertContent.body }}
                </p>
              </div>

              <div class="mt-4">
                <button
                  v-if="alertContent.type === 'success'"
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md  text-emerald-800 bg-emerald-200 hover:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="$emit('close')"
                >
                  Baik, Terima kasih!
                </button>

                <button
                  v-else
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md  text-rose-800 bg-rose-200 hover:bg-rose-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="$emit('close')"
                >
                  Baik, Terima kasih!
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { toRefs } from "@vue/reactivity";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { BadgeCheckIcon, ExclamationCircleIcon } from "@heroicons/vue/outline";
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    BadgeCheckIcon,
    ExclamationCircleIcon,
  },
  props: {
    isModalAlertOpen: {
      type: Boolean,
      default: "",
    },
    alertContent: {
      type: Object,
      default: {},
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const isOpen = props.isModalAlertOpen;
    const alertContent = props.alertContent;
    return {
      alertContent,
      isOpen,
    };
  },
};
</script>

<style>
</style>