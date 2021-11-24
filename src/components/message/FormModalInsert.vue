<template>
  <TransitionRoot as="template" :show="isModalInsertOpen">
    <Dialog
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto"
      @close="closeAndClearValidation"
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
            class="inline-block w-full max-w-xl overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"
          >
            <div class="px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full  bg-blueGray-400 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <PlusSmIcon
                    class="w-6 h-6 text-blueGray-800"
                    aria-hidden="true"
                  />
                </div>
                <div
                  class="flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                >
                  <DialogTitle
                    as="h3"
                    class="mt-2 text-lg leading-6 font-semi text-blueGray-700"
                  >
                    Tambah Template Pesan
                  </DialogTitle>
                </div>
              </div>
            </div>
            <!-- Start of form content -->
            <div class="w-full px-5 bg-blueGray-200">
              <form @submit.prevent="insert">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Kode
                  </label>
                  <input
                    v-model="code"
                    type="text"
                    class="w-full text-sm transition-all duration-150 ease-linear border-0 rounded shadow cursor-not-allowed  bg-blueGray-200 placeholder-blueGray-300 text-blueGray-800"
                    readonly
                  />
                  <!-- Start of validation employee code -->
                  <span v-if="validation.code">
                    <div
                      class="flex items-center justify-start pt-2 font-medium text-red-600 "
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-5 h-5 mr-1 feather feather-alert-octagon"
                        >
                          <polygon
                            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                          ></polygon>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <div class="flex-initial max-w-full text-xs font-normal">
                        {{ validation.code[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee code -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Pesan
                  </label>
                  <textarea
                    v-model="message"
                    class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    ref="messageInputRef"
                    rows="7"
                  />
                  <div class="space-x-2">
                    <button
                      type="button"
                      @click="insertSomething('{_pic_}')"
                      class="px-3 py-1 font-semibold text-white rounded  bg-blueGray-800"
                    >
                      PIC
                    </button>
                    <button
                      type="button"
                      @click="insertSomething('{_tanggalmulai_}')"
                      class="px-3 py-1 font-semibold text-white rounded  bg-blueGray-800"
                    >
                      Tanggal Mulai
                    </button>
                    <button
                      type="button"
                      @click="insertSomething('{_projek_}')"
                      class="px-3 py-1 font-semibold text-white rounded  bg-blueGray-800"
                    >
                      Projek
                    </button>
                    <button
                      type="button"
                      @click="insertSomething('{_nominal_}')"
                      class="px-3 py-1 font-semibold text-white rounded  bg-blueGray-800"
                    >
                      Nominal
                    </button>
                  </div>
                  <!-- Start of validation employee message -->
                  <span v-if="validation.message">
                    <div
                      class="flex items-center justify-start pt-2 font-medium text-red-600 "
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="w-5 h-5 mr-1 feather feather-alert-octagon"
                        >
                          <polygon
                            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                          ></polygon>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      </div>
                      <div class="flex-initial max-w-full text-xs font-normal">
                        {{ validation.message[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee message -->
                </div>
                <div class="mt-6 text-center">
                  <button
                    :disabled="isDisabled"
                    :class="[isDisabled ? '' : 'active:bg-blueGray-600']"
                    class="flex w-full px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none  disabled:opacity-50 place-content-center bg-blueGray-800 hover:shadow-lg focus:outline-none"
                    type="submit"
                  >
                    <img
                      v-if="isLoading"
                      src="/src/assets/img/spinner2.svg"
                      class="w-5"
                      alt=""
                    />
                    <span v-if="isLoading" class=""> Menyimpan... </span>
                    <span v-else class=""> Simpan </span>
                  </button>
                </div>
              </form>
            </div>
            <!-- End of form content -->
            <div
              class="px-4 py-3  bg-blueGray-200 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-blueGray-800 hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="closeAndClearValidation"
              >
                Close
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script setup>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { PlusSmIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { computed, ref, reactive, watch, watchEffect, nextTick } from "vue";
const props = defineProps({
  isModalInsertOpen: Boolean,
});
const emit = defineEmits(["close"]);
const isModalInsertOpen = computed(() => {
  return props.isModalInsertOpen;
});
const modalContent = computed(() => {
  return props.content;
});
const messageInputRef = ref(null);
const closeAndClearValidation = () => {
  /*
   * close modal and set validation value to null or empty string
   */
  validation.code = "";
  validation.message = "";
  emit("close");
};
/*
 * disabled button and show loading in button
 */
const isDisabled = ref(false);
const isLoading = ref(false);
const store = useStore();
const validation = reactive({
  code: "",
  message: "",
});
const message = ref(null);
const code = computed(() => {
  if (isModalInsertOpen.value) {
    return "MSG" + Math.floor(Math.random() * 10000) + 1;
  }
});
function insertSomething(insert) {
  if (!insert.length === null) return;
  let sentence = messageInputRef.value.value;

  let len = sentence.length;
  let pos = messageInputRef.value.selectionStart;
  if (pos === undefined) {
    pos = 0;
  }

  const before = sentence.substr(0, pos);
  const after = sentence.substr(pos, len);
  message.value = before + insert + after;

  nextTick().then(() => {
    messageInputRef.value.selectionStart = pos + insert.length;
  });
}
const insert = () => {
  isLoading.value = true;
  isDisabled.value = true;
  store
    .dispatch("message/storeData", {
      code: code.value,
      message: message.value,
    })
    .then((res) => {
      store.dispatch("message/getAllMessages");
      isLoading.value = false;
      isDisabled.value = false;
      // * close modal after insert
      code.value = "";
      message.value = "";
      validation.code = "";
      validation.message = "";
      emit("close");
    })
    .catch((err) => {
      isLoading.value = false;
      isDisabled.value = false;
      validation.code = err.response.data.code;
      validation.message = err.response.data.message;
    });
};
</script>