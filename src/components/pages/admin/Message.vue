<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal calls section -->
    <FormModalInsert
      :isModalInsertOpen="isModalInsertOpen"
      @close="toggleModalInsert"
    ></FormModalInsert>
    <!-- <ModalTableTeam
      :isOpen="isModalTableOpen"
      @close="closeModalTable"
      :team="team"
      :projectId="projectId"
      :projectNameLabel="projectNameLabel"
    /> -->
    <!-- <ModalTabs
      :isModalTabsOpen="isModalTabsOpen"
      :project="project"
      :team="team"
      @close="toggleModalTabs"
      @openFormModalInsertTeam="openFormModalInsertTeam"
    ></ModalTabs> -->
    <!-- <FormModalInsertTeam
      :isModalInsertTeamOpen="isModalInsertTeamOpen"
      @close="closeModalInsertTeam"
    /> -->
    <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      @close="closeModalUpdate"
    />

    <ModalDelete
      :isModalDeleteOpen="isModalDeleteOpen"
      :contentModalDelete="contentModalDelete"
      :code="codeName"
      @close="closeModalDelete"
      @remove="remove"
    ></ModalDelete>
    <ModalAlert
      :isModalAlertOpen="isModalAlertOpen"
      :alertContent="alertContent"
      @close="toggleModalAlert"
    ></ModalAlert>

    <!-- End of Modal call -->
    <!-- Sidebar -->
    <Sidebar></Sidebar>
    <!-- End of sidebar -->
    <div class="relative md:ml-64">
      <!-- Navbar -->
      <Navbar></Navbar>
      <!-- end of navbar -->
      <!-- Header -->
      <div class="relative pt-12 pb-32 bg-blueGray-800 md:pt-32">
        <div class="w-full px-4 mx-auto md:px-10">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-lg "
                ></div>
              </div>
              <div class="w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg "
                ></div>
              </div>
              <div class="w-full px-4">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg "
                ></div>
              </div>
              <div class="flex items-center px-4">
                <div
                  class="min-w-0 ml-0 mr-8 rounded shadow-lg lg:-ml-6 md:-ml-6"
                >
                  <button
                    @click="toggleModalInsert"
                    class="flex justify-center px-4 py-2 -mt-5 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusCircleIcon class="flex-none w-6"></PlusCircleIcon>
                    <p class="">Template Pesan</p>
                  </button>
                </div>

                <div
                  class="min-w-0 mb-6 ml-0 mr-6 break-words rounded shadow-lg  lg:-ml-6 md:-ml-6"
                  :class="[usedMessage.data ? '' : 'mt-5']"
                >
                  <Listbox v-model="messageInput">
                    <div class="relative mt-1">
                      <ListboxButton
                        class="relative block max-w-lg py-3 pl-3 pr-10 text-left rounded-md shadow cursor-default  w-80 focus:truncate bg-blueGray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                      >
                        <template v-if="usedMessage.data">
                          <span
                            v-if="usedMessage.data === null"
                            class="block text-sm truncate text-blueGray-600"
                          >
                            Set template pesan disini
                          </span>
                          <span
                            v-else
                            class="block text-sm truncate text-blueGray-600"
                          >
                            {{ messageInput }}
                          </span>
                        </template>
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
                          class="absolute z-50 w-full py-1 mt-1 overflow-auto text-base truncate bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                        >
                          <ListboxOption
                            v-slot="{ active, selected }"
                            v-for="message in messages.data"
                            :key="message.id"
                            :value="message.message"
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
                                @click="getIdMessage(message.id)"
                                :class="[
                                  selected ? 'font-medium' : 'font-normal',
                                  'block truncate',
                                ]"
                                >{{ message.message }}</span
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
                <!-- Position table -->
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead class="bg-blueGray-300">
                    <tr class="shadow-lg">
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        #
                      </th>

                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Kode
                      </th>
                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Pesan
                      </th>
                      <th
                        class="py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <template v-if="messages.data">
                    <template v-if="messages.data.length === 0">
                      <tr>
                        <td colspan="6" class="text-center">Tidak ada data</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tbody class="bg-blueGray-200">
                        <tr
                          v-for="(message, index) in messages.data"
                          :key="index"
                        >
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{ index + 1 }}
                          </td>
                          <th
                            class="px-2 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  text-blueGray-600"
                          >
                            {{ message.code }}
                          </th>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{ message.message }}
                          </td>

                          <td
                            class="py-4 text-xs align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            <div class="">
                              <button
                                @click="openModalUpdate(message.id)"
                                class="px-1 py-1 text-white transition-colors duration-200  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                              >
                                <PencilIcon class="w-5"></PencilIcon>
                              </button>

                              <button
                                @click="
                                  openModalDelete(message.id, message.code)
                                "
                                class="px-1 py-1 text-white transition-colors duration-200  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
                              >
                                <TrashIcon class="w-5"></TrashIcon>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr v-if="messages === null">
                          <td
                            colspan="7"
                            class="py-3 leading-6 text-center font-semi"
                          >
                            Data tidak tersedia
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </template>
                  <template v-else>
                    <tr>
                      <td colspan="8" class="text-center">
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

<script setup>
import Sidebar from "../../layout/Sidebar.vue";
import Navbar from "../../layout/Navbar.vue";
import { useStore } from "vuex";
import { computed, ref, reactive, watch, watchEffect } from "vue";
import {
  PencilIcon,
  TrashIcon,
  PlusCircleIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/vue/solid";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import FormModalInsert from "../../../components/message/FormModalInsert.vue";
import FormModalUpdate from "../../../components/message/FormModalUpdate.vue";
import ModalDelete from "../../../components/message/ModalDelete.vue";
import ModalAlert from "../../../components/global/ModalAlert.vue";
document.title = "Madtive Management | Message";

const store = useStore();
store.dispatch("message/getAllMessages");
const messages = computed(() => {
  return store.getters["message/getStateMessages"];
});

const isModalInsertOpen = ref(false);
const toggleModalInsert = () => {
  isModalInsertOpen.value = !isModalInsertOpen.value;
};
const isModalUpdateOpen = ref(false);
const openModalUpdate = (id) => {
  store.dispatch("message/show", id);
  isModalUpdateOpen.value = !isModalUpdateOpen.value;
};
const closeModalUpdate = () => {
  isModalUpdateOpen.value = !isModalUpdateOpen.value;
};
const isModalDeleteOpen = ref(false);
const closeModalDelete = () => {
  isModalDeleteOpen.value = !isModalDeleteOpen.value;
};
const messageId = ref(null);
const codeName = ref(null);
const openModalDelete = (id, code) => {
  messageId.value = id;
  codeName.value = code;
  isModalDeleteOpen.value = !isModalDeleteOpen.value;
};
const contentModalDelete = reactive({
  title: "Hapus Template Pesan",
  body: "Yakin ingin menghapus template pesan",
});
const isModalAlertOpen = ref(false);
const alertContent = reactive({
  type: "",
  body: "",
  title: "",
});
const toggleModalAlert = () => {
  isModalAlertOpen.value = !isModalAlertOpen.value;
};
const remove = () => {
  isModalDeleteOpen.value = !isModalDeleteOpen.value;
  store
    .dispatch("message/delete", messageId.value)
    .then((res) => {
      store.dispatch("message/getAllMessages");
      isModalAlertOpen.value = true;
      alertContent.type = "success";
      alertContent.title = "Berhasil menghapus!";
      alertContent.body =
        "Data berhasil dihapus! Untuk memulihkan data, pergi ke halaman Recycle Bin.";
    })
    .catch((err) => {
      isModalAlertOpen.value = true;
      alertContent.type = "failed";
      alertContent.title = "Gagal menghapus!";
      alertContent.body =
        "Data gagal dihapus! Silahkan coba lagi dan cek koneksi anda.";
    });
};
store.dispatch("message/getMessageIsUsed");
const usedMessage = computed(() => {
  return store.getters["message/getStateMessageIsUsed"];
});
const messageInput = ref(null);
// watchEffect(() => {
//   messageInput.value = usedMessage.value;
// });
function onChange(event) {
  console.log(event.target.value);
}
const getIdMessage = (id) => {
  store
    .dispatch("message/updateMessageIsUsed", {
      isUsedOnly: true,
      id: id,
    })
    .then((res) => {
      store.dispatch("message/getMessageIsUsed");
    });
};
</script>