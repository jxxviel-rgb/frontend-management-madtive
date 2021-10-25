<template>
  <TransitionRoot as="template" :show="showing">
    <Dialog
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto"
      @close="closeAndClearValidation"
    >
      <div
        class="flex items-end justify-center block min-h-screen p-0 px-4 pt-4 pb-20 text-center "
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
          class="hidden inline-block h-screen align-middle"
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
            class="inline-block w-full max-w-xl overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl  sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"
          >
            <div class="p-6 px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full  bg-blueGray-400 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <UserAddIcon
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
                    <!-- {{ modalContent.title }} -->
                    Edit Tim
                  </DialogTitle>
                </div>
              </div>
            </div>
            <!-- Start of form content -->
            <div class="w-full px-5 bg-blueGray-200">
              <form @submit.prevent="update" v-if="team.data.data">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Project
                  </label>
                  <Listbox v-model="team.data.data.project">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                      >
                        <span
                          v-if="team.data.data.project === null"
                          class="block text-sm truncate text-blueGray-600"
                        >
                          Pilih Project
                        </span>

                        <span
                          v-else
                          class="block text-sm truncate text-blueGray-600"
                        >
                          {{ team.data.data.project.name }}
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
                            v-for="project in projects.data"
                            :key="project.id"
                            :value="project"
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
                              >
                                {{ project.name }}
                              </span>
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
                  <!-- Start of validation project -->
                  <span v-if="validation.project">
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
                        {{ validation.project[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation project -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Pegawai
                  </label>
                  <Listbox v-model="team.data.data.employee">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                      >
                        <span
                          v-if="team.data.data.employee === ''"
                          class="block text-sm truncate text-blueGray-600"
                        >
                          Pilih Pegawai
                        </span>

                        <!-- v-else -->
                        <span class="block text-sm truncate text-blueGray-600">
                          {{ team.data.data.employee.name }}
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
                            v-for="employee in employees.data"
                            :key="employee.id"
                            :value="employee.employee"
                            v-slot="{ active, selected }"
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
                              >
                                {{ employee.employee.name }}
                              </span>
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
                  <!-- Start of validation employee -->
                  <span v-if="validation.employee">
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
                        {{ validation.employee[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Posisi
                  </label>
                  <Listbox v-model="team.data.data.position">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                      >
                        <span
                          v-if="team.data.data.position === ''"
                          class="block text-sm truncate text-blueGray-600"
                        >
                          Pilih Posisi dalam Tim
                        </span>

                        <span
                          v-else
                          class="block text-sm truncate text-blueGray-600"
                        >
                          {{ team.data.data.position }}
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
                            v-for="position in positions.data"
                            :key="position.id"
                            :value="position.position_name"
                            v-slot="{ active, selected }"
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
                              >
                                {{ position.position_name }}
                              </span>
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
                  <!-- Start of validation client -->
                  <span v-if="validation.position">
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
                        {{ validation.position[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation client -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Status Pembayaran
                  </label>
                  <Listbox v-model="team.data.data.payment_status">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                      >
                        <span
                          v-if="team.data.data.payment_status === ''"
                          class="block text-sm truncate text-blueGray-600"
                        >
                          Pilih status pembayaran
                        </span>

                        <span
                          v-else
                          class="block text-sm truncate text-blueGray-600"
                        >
                          {{ team.data.data.payment_status }}
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
                            v-for="(payment, index) in payments"
                            :key="index"
                            :value="payment"
                            v-slot="{ active, selected }"
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
                              >
                                {{ payment }}
                              </span>
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
                  <!-- Start of validation client -->
                  <span v-if="validation.position">
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
                        {{ validation.position[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation client -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Profit
                  </label>
                  <div class="flex">
                    <span
                      class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                      >Rp.</span
                    >
                    <Money3Component
                      v-model="team.data.data.profit"
                      v-bind="config"
                      class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tr rounded-br shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    ></Money3Component>
                  </div>
                  <!-- Start of validation profit -->
                  <span v-if="validation.profit">
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
                        {{ validation.profit[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation profit -->
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
 <script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { UserAddIcon } from "@heroicons/vue/outline";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
import { Money3Component } from "v-money3";
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    UserAddIcon,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
    Money3Component,
  },
  emits: ["close"],
  props: {
    isModalUpdateOpen: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Object,
      default: {},
    },
    team: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const payments = ["PENDING", "PAID", "ON PROCESS"];

    const showing = computed(() => {
      return props.isModalUpdateOpen;
    });
    const modalContent = props.content;
    const team = props.team;
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
    const closeAndClearValidation = () => {
      /*
       * close modal and set validation value to null or empty string
       */
      validation.project = "";
      validation.employee = "";
      validation.position = "";
      validation.profit = "";
      validation.payment_status = "";
      emit("close");
    };
    /*
     * disabled button and show loading in button
     */
    const isDisabled = ref(false);
    const isLoading = ref(false);
    const validation = reactive({
      project: "",
      employee: "",
      position: "",
      profit: "",
      payment_status: "",
    });

    const update = () => {
      isLoading.value = true;
      isDisabled.value = true;
      store
        .dispatch("team/updateData", {
          id: team.data.data.id,
          project_id: team.data.data.project.id,
          employee_id: team.data.data.employee.id,
          position: team.data.data.position,
          profit: team.data.data.profit,
          payment_status: team.data.data.payment_status,
        })
        .then((res) => {
          store.dispatch(
            "team/getSpecificProjectTeam",
            team.data.data.project.id
          );
          isLoading.value = false;
          isDisabled.value = false;

          // * close modal after insert
          emit("close");
        })
        .catch((err) => {
          isLoading.value = false;
          isDisabled.value = false;
          validation.project = err.response.data.project_id;
          validation.employee = err.response.data.employee_id;
          validation.position = err.response.data.position;
          validation.profit = err.response.data.profit;
          validation.payment_status = err.response.data.payment_status;
        });
    };
    store.dispatch("employees/getEmployees");
    const employees = computed(() => {
      return store.getters["employees/getEmployees"];
    });
    store.dispatch("position/getAllPositions");
    const positions = computed(() => {
      return store.getters["position/getPositionsState"];
    });
    store.dispatch("project/getAllProjects");
    const projects = computed(() => {
      return store.getters["project/getProjectsState"];
    });
    return {
      update,
      isDisabled,
      isLoading,
      showing,
      modalContent,
      validation,
      closeAndClearValidation,
      employees,
      positions,
      projects,
      team,
      config,
      payments,
    };
  },
};
</script>