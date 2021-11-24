<template>
  <TransitionRoot as="template" :show="showing">
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
            class="inline-block w-full overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl  sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"
          >
            <div class="px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4">
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
                    class="mt-2 text-lg font-medium leading-6 text-blueGray-700"
                  >
                    Tambah PIC.
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
                    Name
                  </label>
                  <input
                    v-model="pic.name"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                  <!-- Start of validation name -->
                  <span v-if="validation.name">
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
                        {{ validation.name[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation name -->
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    v-model="pic.phone_number"
                    @keypress="formatedNumber()"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Contoh: 081234567890"
                  />
                  <!-- Start of validation phone_number -->
                  <span v-if="validation.phone_number">
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
                        {{ validation.phone_number[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation phone_number -->
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Posisi
                  </label>
                  <input
                    v-model="pic.position"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="Contoh: Manager, HRD, Supervisor"
                  />
                  <!-- Start of validation position -->
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
                  <!-- End of validation position -->
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <!-- <input
                          type=""
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="+62"
                        /> -->
                  <input
                    v-model="pic.email"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                  <!-- Start of validation email -->
                  <span v-if="validation.email">
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
                        {{ validation.email[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation email -->
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
                      src="../../assets/img/spinner2.svg"
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


<script>
import {
  reactive,
  ref,
  computed,
  onMounted,
  onBeforeMount,
  watchEffect,
} from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
  ListboxButton,
} from "@headlessui/vue";
import { UserAddIcon } from "@heroicons/vue/outline";
import { SelectorIcon, CheckIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    UserAddIcon,
    Listbox,
    ListboxOptions,
    ListboxOption,
    ListboxLabel,
    ListboxButton,
    SelectorIcon,
    CheckIcon,
  },
  emits: ["close"],
  props: {
    isModalInsertOpen: {
      type: Boolean,
      default: false,
    },
    content: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const showing = computed(() => {
      return props.isModalInsertOpen;
    });
    const phoneNumber = ref(null);
    const modalContent = props.content;
    const isDisabled = ref(false);
    const isLoading = ref(false);
    const store = useStore();
    const pic = reactive({
      client: "",
      name: "",
      phone_number: "",
      email: "",
      position: "",
    });
    function formating() {
      pic.phone_number = pic.phone_number.replace(/[^0-9 | +]/g, "");
    }
    watchEffect(() => {
      formating();
    });
    const formatedNumber = computed(() => {
      return pic.phone_number.replace(/^0/g, "+62");
    });
    const config = computed(() => {
      return {
        masked: false,
        decimal: "",
        thousands: "",
        prefix: "",
        suffix: "",
        max: null,
        min: null,
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
      validation.name = "";
      validation.email = "";
      validation.client = "";
      validation.phone_number = "";
      validation.position = "";
      emit("close");
    };
    const validation = reactive({
      client: "",
      name: "",
      phone_number: "",
      email: "",
      position: "",
    });
    const clientId = computed(() => {
      return store.getters["client/getStateClientId"];
    });
    const insert = computed(() => {
      isLoading.value = true;
      isDisabled.value = true;

      store
        .dispatch("pic/storeData", {
          client_id: clientId.value,
          name: pic.name,
          phone_number: formatedNumber.value,
          email: pic.email,
          position: pic.position,
        })
        .then((res) => {
          store.dispatch("pic/getAllPicsClient", clientId.value);
          isLoading.value = false;
          isDisabled.value = false;
          /*
           *reset input form
           */
          pic.name = "";
          pic.email = "";
          pic.phone_number = "";
          pic.client = "";
          pic.position = "";
          // * close modal after insert

          emit("close");
        })
        .catch((err) => {
          isLoading.value = false;
          isDisabled.value = false;
          validation.name = "";
          validation.email = "";
          validation.phone_number = "";
          validation.email = "";
          validation.name = err.response.data.name;
          validation.client = err.response.data.client_id;
          validation.phone_number = err.response.data.phone_number;
          validation.email = err.response.data.email;
          validation.position = err.response.data.position;
        });
    });
    // ! get data client for select component
    store.dispatch("client/getAllData");
    const clients = computed(() => {
      return store.getters["client/getClientState"];
    });
    return {
      insert,
      isDisabled,
      isLoading,
      pic,
      showing,
      modalContent,
      validation,
      clients,
      closeAndClearValidation,
      phoneNumber,
      config,
      formatedNumber,
      // formatedPhoneNumber,
    };
  },
};
</script>