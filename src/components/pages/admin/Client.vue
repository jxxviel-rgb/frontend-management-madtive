<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Start of alert info -->
    <alert-info
      :isOpen="isAlertInfoOpen"
      :alertContent="alertInfoContent"
      @close="toggleAlertInfo"
    ></alert-info>
    <!-- End of alert info -->
    <!-- start of modal alert  -->
    <action-modal-alert
      :contentAlert="modalContent"
      :isAlertOpen="isAlertOpen"
      @close="alertToggle"
      @delete-button="remove"
    ></action-modal-alert>
    <!-- end of modal alert -->
    <Sidebar></Sidebar>
    <div class="relative md:ml-64">
      <Navbar></Navbar>
      <!-- Header -->
      <div class="relative pt-12 pb-32 bg-blueGray-800 md:pt-32">
        <div class="w-full px-4 mx-auto md:px-10">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg "
                ></div>
              </div>
              <div class="w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  lg:-ml-6 md:-ml-6"
                ></div>
              </div>
              <div class="w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg "
                ></div>
              </div>
              <div class="flex px-4 space-x-0">
                <div
                  class="flex-none min-w-0 mb-6 ml-0 break-words rounded shadow-lg  lg:-ml-6 md:-ml-6"
                >
                  <button
                    @click="modalToggle"
                    class="flex justify-center px-4 py-2 -mt-5 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusCircleIcon class="flex-none w-6"></PlusCircleIcon>
                    <p class="flex-none">Client</p>
                  </button>
                  <form-modal-client
                    :isOpen="isOpen"
                    @close="modalToggle"
                  ></form-modal-client>
                  <form-modal-update-client
                    :isModalUpdateOpen="isModalUpdateOpen"
                    :specificClient="specificClient"
                    @close="modalUpdateToggle"
                  ></form-modal-update-client>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 mx-auto -mt-40">
        <div class="flex flex-wrap mt-4">
          <div class="w-full px-4 mb-12">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg "
            >
              <div class="block w-full overflow-x-auto">
                <!-- Projects table -->
                <table class="items-center w-full break-all rounded-full">
                  <thead class="bg-blueGray-300">
                    <tr>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        #
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Nama Perusahaan
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Email
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  bg-blueGray-300 text-blueGray-500"
                      >
                        No. Telp
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  bg-blueGray-300 text-blueGray-500"
                      >
                        Alamat
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  bg-blueGray-300 text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <template v-if="clients.data">
                    <template v-if="clients.data.length === 0">
                      <tr>
                        <td colspan="6" class="text-center">Tidak ada data</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tbody class="bg-blueGray-200">
                        <tr v-for="(items, index) in clients.data" :key="index">
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <th
                            class="p-4 px-6 text-xs font-bold text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap text-blueGray-600"
                          >
                            {{ items.company_name }}
                          </th>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ items.company_email }}
                          </td>
                          <td
                            class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ items.phone_number }}
                          </td>
                          <td
                            class="p-2 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ items.address }}
                          </td>
                          <td
                            class="p-2 px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <div class="">
                              <button
                                @click="sendIdAndOpenEditModal(items.id)"
                                class="px-1 py-1 text-white transition-colors duration-200 rounded-tl-sm rounded-bl-sm  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                              >
                                <PencilIcon class="w-5"></PencilIcon>
                              </button>

                              <button
                                class="px-1 py-1 text-white transition-colors duration-200 rounded-tr-sm rounded-br-sm  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
                                @click="sendId(items.id)"
                              >
                                <TrashIcon class="w-5"></TrashIcon>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </template>
                  <template v-else>
                    <tr>
                      <td colspan="6" class="text-center">
                        <div class="flex justify-center">
                          <img
                            class="w-6 my-2"
                            src="/src/assets/img/spinner2.svg"
                            alt=""
                          />
                          <span class="my-2"> Loading data</span>
                        </div>
                      </td>
                    </tr>
                  </template>
                </table>
              </div>
            </div>
          </div>
          <div class="w-full px-4 mb-12">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 text-white break-words bg-pink-900 rounded shadow-lg "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../layout/Sidebar.vue";
import Navbar from "../../layout/Navbar.vue";
import FormModalClient from "../../client/FormModalClient.vue";
import FormModalUpdateClient from "../../client/FormModalUpdateClient.vue";
import ActionModalAlert from "../../client/ActionModalAlert.vue";
import AlertInfo from "../../client/AlertInfo.vue";
import { PlusCircleIcon, TrashIcon, PencilIcon } from "@heroicons/vue/solid";
import { ref, computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Navbar,
    Sidebar,
    TrashIcon,
    PencilIcon,
    FormModalClient,
    FormModalUpdateClient,
    PlusCircleIcon,
    ActionModalAlert,
    AlertInfo,
  },
  setup() {
    // * using store from vuex
    const store = useStore();
    //* get all data client1
    store.dispatch("client/getAllData");
    const clients = computed(() => {
      return store.getters["client/getClientState"];
    });

    // * toggle form modal insert
    const isOpen = ref("");
    const modalToggle = () => {
      isOpen.value = !isOpen.value;
    };
    // * toggle form modal update
    const isModalUpdateOpen = ref("");
    const modalUpdateToggle = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };
    // * state for content in modal
    const modalContent = reactive({
      title: "Hapus Client",
      body: "Yakin ingin menghapus data ini?",
      type: "",
    });
    // * initial state for modal alert
    const isAlertOpen = ref("");
    // * toggle modal alert
    const alertToggle = () => {
      isAlertOpen.value = !isAlertOpen.value;
    };

    // * click button to sendId and save it to state selectedId
    const selectedId = ref("");
    const sendId = (id) => {
      isAlertOpen.value = !isAlertOpen.value;
      selectedId.value = id;
    };
    const specificClient = reactive({
      data: [],
    });
    const sendIdAndOpenEditModal = (id) => {
      store.dispatch("client/getSpecificClient", id);
      specificClient.data = computed(() => {
        return store.getters["client/getSpecificClientState"];
      });
      setTimeout(() => {
        isModalUpdateOpen.value = !isModalUpdateOpen.value;
      }, 300);
    };

    const alertInfoContent = reactive({
      title: "Berhasil",
      message: "Data berhasil dihapus!",
    });
    const isAlertInfoOpen = ref("");
    const toggleAlertInfo = () => {
      isAlertInfoOpen.value = !isAlertInfoOpen.value;
    };

    const remove = () => {
      isAlertOpen.value = !isAlertOpen.value;
      store
        .dispatch("client/deleting", selectedId.value)
        .then((res) => {
          store.dispatch("client/getAllData");
          isAlertInfoOpen.value = !isAlertInfoOpen.value;
        })
        .catch((err) => {});
    };

    return {
      modalToggle,
      modalUpdateToggle,
      isOpen,
      alertToggle,
      isAlertOpen,
      clients,
      isModalUpdateOpen,
      modalContent,
      sendId,
      selectedId,
      toggleAlertInfo,
      remove,
      isAlertInfoOpen,
      alertInfoContent,
      sendIdAndOpenEditModal,
      specificClient,
    };
  },
};
</script>

