<template>
  <TransitionRoot as="template" :show="isOpen">
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
                  <PencilAltIcon
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
                    Edit Biaya Project
                  </DialogTitle>
                </div>
              </div>
            </div>
            <!-- Start of form content -->
            <div class="w-full px-5 bg-blueGray-200">
              <form @submit.prevent="update" v-if="projectCost.data">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Pajak
                  </label>
                  <div class="flex">
                    <input
                      v-model="projectCost.data.tax"
                      type="text"
                      class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tl rounded-bl shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Backend Developer"
                    />
                    <span
                      class="px-4 py-2 text-sm whitespace-no-wrap border rounded-tr rounded-br  text-blueGray-700 bg-blueGray-300"
                      >%</span
                    >
                  </div>
                  <!-- Start of validation employee tax -->
                  <span v-if="validation.tax">
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
                        {{ validation.tax[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee tax -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Profit Perusahaan
                  </label>
                  <div class="flex">
                    <input
                      v-model="projectCost.data.profit_company"
                      type="text"
                      class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tl rounded-bl shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Backend Developer"
                    />
                    <span
                      class="px-4 py-2 text-sm whitespace-no-wrap border rounded-tr rounded-br  text-blueGray-700 bg-blueGray-300"
                      >%</span
                    >
                  </div>
                  <!-- Start of validation employee profit_company -->
                  <span v-if="validation.profit_company">
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
                        {{ validation.profit_company[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee profit_company -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Profit Tim
                  </label>
                  <div class="flex">
                    <input
                      v-model="projectCost.data.profit_team"
                      type="text"
                      class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tl rounded-bl shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Backend Developer"
                    />
                    <span
                      class="px-4 py-2 text-sm whitespace-no-wrap border rounded-tr rounded-br  text-blueGray-700 bg-blueGray-300"
                      >%</span
                    >
                  </div>
                  <!-- Start of validation employee profit_team -->
                  <span v-if="validation.profit_team">
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
                        {{ validation.profit_team[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee profit_team -->
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
import { computed, reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { PencilAltIcon } from "@heroicons/vue/outline";
import { watchEffect } from "@vue/runtime-core";
const store = useStore();
const props = defineProps({
  isModalUpdateOpen: Boolean,
});
const emit = defineEmits(["close"]);
const isOpen = computed(() => {
  return props.isModalUpdateOpen;
});
const closeAndClearValidation = () => {
  validation.tax = "";
  validation.profit_team = "";
  validation.profit_company = "";
  emit("close");
};
const validation = reactive({
  tax: "",
  profit_team: "",
  profit_company: "",
});
const projectCost = computed(() => {
  return store.getters["projectCost/getStateCost"];
});
const isDisabled = ref(false);
const isLoading = ref(false);
function onlyNumber() {
  if (projectCost.value.data) {
    projectCost.value.data.tax = projectCost.value.data.tax
      .toString()
      .replace(/[^0-9]/g, "");
    projectCost.value.data.profit_team = projectCost.value.data.profit_team
      .toString()
      .replace(/[^0-9]/g, "");
    projectCost.value.data.profit_company =
      projectCost.value.data.profit_company.toString().replace(/[^0-9]/g, "");
  }
}

watchEffect(() => {
  onlyNumber();
});
const update = () => {
  isLoading.value = true;
  isDisabled.value = true;
  store
    .dispatch("projectCost/updateData", {
      id: projectCost.value.data.id,
      tax: projectCost.value.data.tax,
      profit_team: projectCost.value.data.profit_team,
      profit_company: projectCost.value.data.profit_company,
    })
    .then((res) => {
      store.dispatch("projectCost/getDataProjectCost");
      isLoading.value = false;
      isDisabled.value = false;
      // * close modal after insert
      emit("close");
    })
    .catch((err) => {
      isLoading.value = false;
      isDisabled.value = false;
      validation.tax = err.response.data.tax;
      validation.profit_team = err.response.data.profit_team;
      validation.profit_company = err.response.data.profit_company;
    });
};

console.log(projectCost.value);
</script>