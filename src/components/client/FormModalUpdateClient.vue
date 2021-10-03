<template>
  <TransitionRoot as="template" :show="(showing = !showing)">
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
                    <!-- {{ modalContent.title }} -->
                    Update data client.
                  </DialogTitle>
                </div>
              </div>
            </div>
            <!-- Start of form content -->
            <div class="w-full px-5 bg-blueGray-200">
              <form @submit.prevent="update" v-if="specificClient.data.data">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Company Name
                  </label>
                  <input
                    v-model="specificClient.data.data.company_name"
                    type="text"
                    class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="PT. Madtive Studio Indonesia"
                    ref="companyNameFocus"
                  />
                  <!-- Start of validation company_name -->
                  <span v-if="validation.company_name">
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
                        {{ validation.company_name[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation company_name -->
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    v-model="specificClient.data.data.company_email"
                    type="email"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="meet@madtive.com"
                  />
                  <!-- Start of validation company_email -->
                  <span v-if="validation.company_email">
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
                        {{ validation.company_email[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation company_email -->
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Phone Number
                  </label>
                  <input
                    v-model="specificClient.data.data.phone_number"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="+62"
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
                    Addreess
                  </label>
                  <!-- <input
                          type=""
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="+62"
                        /> -->
                  <textarea
                    v-model="specificClient.data.data.address"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    name=""
                    id=""
                    cols="2"
                    rows="2"
                    placeholder="Jl. Jend Sudirman No.36, Cianjur, Jawa Barat"
                  ></textarea>
                  <!-- Start of validation address -->
                  <span v-if="validation.address">
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
                        {{ validation.address[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation address -->
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
                    <span v-if="isLoading" class=""> Mengubah... </span>
                    <span v-else class=""> Ubah </span>
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
import { reactive, ref, computed, watchEffect } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { UserAddIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    UserAddIcon,
  },
  emits: ["close"],
  props: {
    isOpen: {
      type: Boolean,
      default: "",
    },
    content: {
      type: Object,
      default: {},
    },
    specificClient: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const showing = props.isOpen;
    const specificClient = props.specificClient;
    const closeButtonRef = ref(null);
    const modalContent = props.content;
    const isDisabled = ref(false);
    const isLoading = ref(false);
    const store = useStore();

    const validation = reactive({
      company_name: null,
      company_email: null,
      phone_number: null,
      address: null,
    });
    const closeAndClearValidation = () => {
      validation.company_email = "";
      validation.phone_number = "";
      validation.company_name = "";
      validation.address = "";
      emit("close");
    };
    const update = () => {
      isLoading.value = true;
      isDisabled.value = true;
      store.dispatch("client/getSpecificClient", specificClient.data.data.id);
      store
        .dispatch("client/updatingClient", {
          id: specificClient.data.data.id,
          company_name: specificClient.data.data.company_name,
          email: specificClient.data.data.company_email,
          phone_number: specificClient.data.data.phone_number,
          address: specificClient.data.data.address,
        })
        .then((res) => {
          store.dispatch("client/getAllData");
          isLoading.value = false;
          isDisabled.value = false;

          // * close modal after update
          emit("close");
        })
        .catch((err) => {
          store.dispatch("client/getAllData");
          store.dispatch(
            "client/getSpecificClient",
            specificClient.data.data.id
          );
          isLoading.value = false;
          isDisabled.value = false;
          validation.company_email = "";
          validation.phone_number = "";
          validation.company_name = "";
          validation.address = "";
          if (err) {
            validation.company_name = err.response.data.company_name;
            validation.company_email = err.response.data.company_email;
            validation.phone_number = err.response.data.phone_number;
            validation.address = err.response.data.address;
          }
        });
    };

    return {
      update,
      isDisabled,
      isLoading,
      showing,
      modalContent,
      validation,
      closeButtonRef,
      specificClient,
      closeAndClearValidation,
    };
  },
};
</script>