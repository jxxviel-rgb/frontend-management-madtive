<template>
  <TransitionRoot as="template" :show="show">
    <Dialog
      :initialFocus="cancelButtonRef"
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto"
      @close="$emit('close')"
    >
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center  sm:block sm:p-0"
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="inline-block w-full overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"
          >
            <div class="px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-200 rounded-full  sm:mx-0 sm:h-10 sm:w-10"
                >
                  <ExclamationIcon
                    class="w-6 h-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div
                  class="flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                >
                  <DialogTitle
                    as="h3"
                    class="mt-2 text-lg font-medium leading-6 text-red-700"
                  >
                    {{ modalContent.title }}
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-blueGray-500">
                      {{ modalContent.body }}
                      <span class="font-semibold text-blueGray-800">
                        {{ employeeName }}
                      </span>
                      dari project
                      <span class="font-semibold text-blueGray-800">
                        {{ projectName }}?
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Start of form content -->
            <div class="w-full px-5 bg-blueGray-200"></div>
            <!-- End of form content -->
            <div
              class="px-4 py-3  bg-blueGray-200 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white transition-colors duration-100 bg-red-600 border border-red-300 rounded-md shadow-sm  hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="$emit('remove')"
              >
                Hapus
              </button>
              <button
                type="button"
                class="flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-blueGray-800 hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="$emit('close')"
                ref="cancelButtonRef"
              >
                Batalkan
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, onMounted, nextTick, computed } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  emits: ["close", "remove"],
  props: {
    isModalDeleteOpen: {
      type: Boolean,
      default: false,
    },
    contentModalDelete: {
      type: Object,
      default: {},
    },
    projectName: {
      type: String,
      default: "",
    },
    employeeName: {
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const show = computed(() => {
      return props.isModalDeleteOpen;
    });
    const modalContent = props.contentModalDelete;
    const projectName = computed(() => {
      return props.projectName;
    });
    const employeeName = computed(() => {
      return props.employeeName;
    });
    const cancelButtonRef = ref(null);
    return {
      show,
      modalContent,
      cancelButtonRef,
      projectName,
      employeeName,
    };
  },
};
</script>