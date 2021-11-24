<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal calls section -->
    <!-- <FormModalInsert
      :isOpen="isOpen"
      :content="content"
      @close="toggleModalInsert"
    ></FormModalInsert> -->
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
    <!-- <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      :contentModalUpdate="contentModalUpdate"
      @close="toggleModalUpdate"
    /> -->

    <!-- <ModalDelete
      :projectName="projectName"
      :isModalDeleteOpen="isModalDeleteOpen"
      :contentModalDelete="contentModalDelete"
      @close="toggleModalDelete"
      @remove-employee="remove"
    ></ModalDelete> -->
    <!-- <ModalAlert
      :isModalAlertOpen="isModalAlertOpen"
      :alertContent="alertContent"
      @close="toggleModalAlert"
    ></ModalAlert> -->

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
              <div class="flex px-4 space-x-1">
                <div
                  class="flex-none min-w-0 mb-6 ml-0 break-words rounded shadow-lg  lg:-ml-6 md:-ml-6"
                >
                  <!-- <button
                    @click="toggleModalInsert"
                    class="flex justify-center px-4 py-2 -mt-5 space-x-1 transition-colors duration-100 rounded-md hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusCircleIcon class="flex-none w-6"></PlusCircleIcon>
                    <p class="flex-none">Project</p>
                  </button> -->
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
              class="relative flex flex-col w-full min-w-0 mb-6 bg-white rounded shadow-lg "
            >
              <div class="block w-full">
                <!-- Position table -->
                <div
                  v-if="isLoading"
                  class="fixed top-0 left-0 z-50 block w-full h-full bg-white opacity-75 "
                >
                  <span
                    class="relative block w-0 h-0 mx-auto my-0 opacity-75  text-blueGray-500 top-1/2"
                    style="top: 50%"
                  >
                    <FontAwesomeIcon
                      class="flex-1 mt-12"
                      :icon="['fas', 'circle-notch']"
                      size="4x"
                      spin
                    />
                  </span>
                </div>

                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead class="bg-blueGray-300">
                    <tr class="shadow-lg">
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Nama PIC
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Client
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Pesan
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Tanggal dikirim
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Dikirim dari
                      </th>

                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Status
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>

                  <template v-if="logs.data">
                    <template v-if="logs.data.length === 0">
                      <tr>
                        <td colspan="6" class="text-center">Tidak ada data</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tbody class="bg-blueGray-200">
                        <tr v-for="(log, index) in logs.data" :key="index">
                          <th
                            v-if="log.pics"
                            class="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  text-blueGray-600"
                          >
                            {{ log.pics.name }}
                          </th>
                          <th
                            v-else
                            class="p-4 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  text-blueGray-600"
                          >
                            Tidak ada pic
                          </th>

                          <td
                            v-if="log.pics"
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{ log.pics.client.company_name }}
                          </td>
                          <td
                            v-else
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            Tidak ada client
                          </td>
                          <td
                            class="px-4 py-1 text-xs break-all align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{ log.body }}
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ moment(log.date_sent.date).format("lll") }}
                          </td>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ log.from }}
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <div
                              class="flex p-1 text-center rounded-sm shadow  bg-emerald-100"
                            >
                              <CheckIcon
                                class="w-5"
                                :class="[
                                  log.status === 'read'
                                    ? 'text-emerald-400'
                                    : '',
                                  log.status === 'failed'
                                    ? 'text-rose-400'
                                    : '',
                                  log.status === 'delivered'
                                    ? 'text-blueGray-400'
                                    : '',
                                  log.status === 'received'
                                    ? 'text-blueGray-700'
                                    : '',
                                ]"
                              />
                              <span class="mt-1"> {{ log.status }}</span>
                            </div>
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <button
                              v-if="log.status === 'failed'"
                              class="flex px-1 py-1 text-white transition-colors duration-200 rounded-sm  bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-800"
                            >
                              <div class="flex">
                                <RefreshIcon class="w-5" />
                                <span class="mt-1"> Kirim Ulang</span>
                              </div>
                            </button>
                          </td>

                          <!-- <td
                            class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                          >
                            <div class="">
                              <button
                                class="px-1 py-1 text-white transition-colors duration-200 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-800"
                              >
                                <InformationCircleIcon
                                  class="w-5"
                                ></InformationCircleIcon>
                              </button>
                              <button
                                class="px-1 py-1 text-white transition-colors duration-200 bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                              >
                                <PencilIcon class="w-5"></PencilIcon>
                              </button>
                              <button
                                class="px-1 py-1 text-white transition-colors duration-200 bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
                              >
                                <TrashIcon class="w-5"></TrashIcon>
                              </button>
                            </div>
                          </td> -->
                        </tr>
                        <tr v-if="logs === null">
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
            <div class="flex justify-center -mt-2">
              <button
                v-if="logs.previous_page"
                @click="previousPage(logs.previous_page)"
              >
                <ChevronLeftIcon
                  class="w-8 mr-2 rounded-sm shadow-lg  text-blueGray-800 bg-blueGray-300"
                />
              </button>
              <!-- <span class="mr-2">Selanjutnya</span>
              <span>Sebelumnya</span> -->
              <button @click="nextPage(logs.next_page)">
                <ChevronRightIcon
                  class="w-8 rounded-sm shadow-lg  text-blueGray-800 bg-blueGray-300"
                />
              </button>
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
import Sidebar from "../../../components/layout/Sidebar.vue";
import Navbar from "../../../components/layout/Navbar.vue";
import { useStore } from "vuex";
import { computed, ref } from "@vue/reactivity";
import { watch, watchEffect } from "@vue/runtime-core";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  CheckIcon,
  RefreshIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/solid";
import FormModalInsertVue from "../../position/FormModalInsert.vue";
document.title = "Madtive Management | Log Message";

const store = useStore();
store.dispatch("message/getAllData");
const logs = computed(() => {
  return store.getters["message/getStateMessageHistories"];
});
const isLoading = ref(false);
const previousPage = (previousPageUri) => {
  isLoading.value = true;
  store.dispatch("message/previousPage", previousPageUri).then((res) => {
    isLoading.value = false;
  });
};

const nextPage = (nextPageUri) => {
  isLoading.value = true;
  store.dispatch("message/nextPage", nextPageUri).then((res) => {
    isLoading.value = false;
  });
};
</script>