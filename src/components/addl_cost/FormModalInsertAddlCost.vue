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
                    Tambah Biaya Lain
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
                    Kategori
                  </label>
                  <input
                    v-model="addl_cost.category"
                    type="text"
                    class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                  <!-- Start of validation employee name -->
                  <span v-if="validation.category">
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
                        {{ validation.category[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee name -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Jenis
                  </label>
                  <Listbox v-model="addl_cost.type">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                      >
                        <span
                          v-if="addl_cost.type === ''"
                          class="block text-sm truncate text-blueGray-600"
                        >
                          Pilih Jenis
                        </span>
                        <span
                          v-else
                          class="block text-sm truncate text-blueGray-600"
                        >
                          {{ addl_cost.type }}
                        </span>
                        <span
                          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
                        >
                          <SelectorIcon
                            class="w-5 h-5 text-blueGray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </ListboxButton>

                      <transition
                        leave-active-class="transition duration-100 ease-in"
                        leave-from-class="opacity-100"
                        leave-to-class="opacity-0"
                      >
                        <ListboxOptions
                          class="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="type in types"
                            :key="type"
                            :value="type"
                            as="template"
                          >
                            <li
                              :class="[
                                active
                                  ? 'text-blueGray-800 bg-blueGray-200'
                                  : 'text-blueGray-800',
                                'cursor-default select-none relative py-2 pl-10 pr-4',
                              ]"
                            >
                              <span
                                :class="[
                                  selected ? 'font-medium' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ type }}</span
                              >
                              <span
                                v-if="selected"
                                class="absolute inset-y-0 left-0 flex items-center pl-3  text-blueGray-600"
                              >
                                <CheckIcon class="w-5 h-5" aria-hidden="true" />
                              </span>
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                  <!-- Start of validation type -->
                  <span v-if="validation.type">
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
                        {{ validation.type[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation type -->
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Biaya
                  </label>
                  <div class="flex">
                    <span
                      class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                      >Rp.</span
                    >
                    <Money3Component
                      v-model="addl_cost.cost"
                      v-bind="config"
                      class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tr rounded-br shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                  </div>

                  <!-- Start of validation employee cost -->
                  <span v-if="validation.cost">
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
                        {{ validation.cost[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee cost -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Deskripsi
                  </label>
                  <input
                    v-model="addl_cost.description"
                    type="text"
                    class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Contoh : Jalan-jalan"
                  />
                  <!-- Start of validation employee description -->
                  <span v-if="validation.description">
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
                        {{ validation.description[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee description -->
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
              <!--  <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="$emit('close')"
                ref="cancelButtonRef"
              >
                Cancel
              </button> -->
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { Money3Component } from "v-money3";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
const props = defineProps({
  isModalInsertOpen: Boolean,
});
const emits = defineEmits(["close"]);
const store = useStore();
const config = computed(() => {
  return {
    masked: false,
    decimal: ",",
    thousands: ".",
    prefix: "",
    suffix: "",
    max: null,
    min: 0,
    minimumNumberOfCharacters: 0,
    precision: 0,
    allowBlank: true,
    disable: false,
    disableNegative: true,
    modelModifiers: {
      number: false,
    },
  };
});
const isModalInsertOpen = computed(() => {
  return props.isModalInsertOpen;
});
const closeAndClearValidation = () => {
  validation.category = "";
  validation.project = "";
  validation.cost = "";
  validation.description = "";
  validation.type = "";

  emits("close");
};
const validation = reactive({
  category: "",
  project: "",
  cost: "",
  description: "",
  type: "",
});
const addl_cost = reactive({
  category: "",
  project: "",
  cost: "",
  description: "",
  type: "",
});
const project = computed(() => {
  return store.getters["project/getProjectShowState"];
});
const isLoading = ref(false);
const isDisabled = ref(false);
const insert = () => {
  isLoading.value = true;
  isDisabled.value = true;
  store
    .dispatch("cost/storeData", {
      project_id: project.value.data.id,
      category: addl_cost.category,
      cost: addl_cost.cost,
      description: addl_cost.description,
      type: addl_cost.type,
    })
    .then((res) => {
      store.dispatch("cost/getAllData", project.value.data.id);
      isLoading.value = false;
      isDisabled.value = false;

      validation.category = "";
      validation.cost = "";
      validation.description = "";
      validation.project = "";
      validation.type = "";

      addl_cost.category = "";
      addl_cost.project = "";
      addl_cost.cost = "";
      addl_cost.description = "";
      addl_cost.type = "";
      emits("close");
    })
    .catch((err) => {
      isLoading.value = false;
      isDisabled.value = false;
      validation.category = err.response.data.category;
      validation.cost = err.response.data.cost;
      validation.description = err.response.data.description;
      validation.project = err.response.data.project_id;
      validation.type = err.response.data.type;
    });
};
const types = ref(["PENGURANGAN", "PENAMBAHAN"]);
</script>