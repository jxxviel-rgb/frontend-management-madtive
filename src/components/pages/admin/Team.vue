<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal calls section -->
    <!-- <FormModalInsert
      :isOpen="isOpen"
      :content="content"
      @close="toggleModalInsert"
    ></FormModalInsert> -->
    <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      :content="modalUpdateContent"
      :team="team"
      @close="toggleModalUpdate"
    ></FormModalUpdate>
    <ModalDelete
      :isModalDeleteOpen="isModalDeleteOpen"
      :contentModalDelete="contentModalDelete"
      :projectName="projectName"
      :employeeName="employeeName"
      @close="toggleModalDelete"
      @remove="remove"
    ></ModalDelete>
    <ModalAlert
      :isModalAlertOpen="isModalAlertOpen"
      :alertContent="alertContent"
      @close="toggleModalAlert"
    ></ModalAlert>
    <!-- <modal-tabs
      :isModalTabsOpen="isModalTabsOpen"
      :project="project"
      @close="toggleModalTabs"
    ></modal-tabs> -->

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
              <div class="flex px-4 space-x-0">
                <div
                  class="flex-none min-w-0 mb-6 ml-0 break-words rounded shadow-lg  lg:-ml-6 md:-ml-6"
                >
                  <button
                    class="flex justify-center px-4 py-1 -mt-5 space-x-1 transition-colors duration-100  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusSmIcon class="flex-none w-6"></PlusSmIcon>
                    <p class="flex-none">Tim</p>
                  </button>
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
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        #
                      </th>

                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Project
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Nama Member
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Posisi
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Profit
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Status Pembayaran
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    v-if="teams.data === undefined || teams.data.length === 0"
                    class="bg-blueGray-200"
                  >
                    <tr>
                      <td colspan="7" class="py-2 text-center bg-blueGray-200">
                        Data tidak tersedia
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else class="bg-blueGray-200">
                    <tr v-for="(team, index) in teams.data" :key="index">
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>

                      <th
                        v-if="team.project === null"
                        class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        Belum ada project
                      </th>
                      <th
                        v-else
                        class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ team.project.name }}
                      </th>
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ team.employee.name }}
                      </td>
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ team.position }}
                      </td>
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{
                          Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(team.profit)
                        }}
                      </td>
                      <td
                        v-if="team.payment_status === 'PENDING'"
                        class="px-4 text-xs font-medium text-center align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        <span class="px-2 py-1 bg-yellow-500 shadow">
                          {{ team.payment_status }}
                        </span>
                      </td>
                      <td
                        v-else-if="team.payment_status === 'ON PROCESS'"
                        class="px-4 text-xs text-center align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        <span
                          class="px-2 py-1 font-medium shadow  text-blueGray-800 bg-sky-400"
                        >
                          {{ team.payment_status }}
                        </span>
                      </td>
                      <td
                        v-else
                        class="px-4 text-xs text-center align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        <span
                          class="px-2 py-1 font-medium shadow  text-blueGray-800 bg-emerald-400"
                        >
                          {{ team.payment_status }}
                        </span>
                      </td>
                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        <div class="space-x-1">
                          <button
                            @click="sendIdAndOpenModalUpdate(team.id)"
                            class="px-2 py-2 text-white transition-colors duration-200  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                          >
                            <PencilIcon class="w-5"></PencilIcon>
                          </button>

                          <button
                            @click="
                              openModalDelete(
                                team.id,
                                team.project.name,
                                team.employee.name
                              )
                            "
                            class="px-2 py-2 text-white transition-colors duration-200  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
                          >
                            <TrashIcon class="w-5"></TrashIcon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
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
import ModalDelete from "../../team/ModalDelete.vue";
import ModalAlert from "../../global/ModalAlert.vue";
import FormModalUpdate from "../../team/FormModalUpdate.vue";
import { computed, ref, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import {
  TrashIcon,
  InformationCircleIcon,
  PencilIcon,
} from "@heroicons/vue/outline";
export default {
  components: {
    ModalAlert,
    ModalDelete,
    Sidebar,
    Navbar,
    TrashIcon,
    PencilIcon,
    InformationCircleIcon,
    FormModalUpdate,
  },
  setup() {
    const store = useStore();
    store.dispatch("team/getAllTeams");
    const teams = computed(() => {
      return store.getters["team/getStateTeams"];
    });
    // !MODAL DELETE
    const isModalDeleteOpen = ref("");
    const toggleModalDelete = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    const contentModalDelete = reactive({
      body: "Yakin ingin menghapus",
      title: "Hapus Team",
    });
    const paramId = ref(null);
    const projectName = ref(null);
    const employeeName = ref(null);
    const openModalDelete = (id, project, employee) => {
      isModalDeleteOpen.value = !isModalDeleteOpen;
      paramId.value = id;
      projectName.value = project;
      employeeName.value = employee;
    };
    const alertContent = reactive({
      type: "",
      title: "",
      body: "",
    });
    const isModalAlertOpen = ref("");
    const toggleModalAlert = () => {
      isModalAlertOpen.value = !isModalAlertOpen.value;
    };
    const remove = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      store
        .dispatch("team/deleteMember", paramId.value)
        .then((res) => {
          store.dispatch("team/getAllTeams");
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "success";
          alertContent.title = "Berhasil Mengapus!";
          alertContent.body =
            "Data berhasil dihapus! Untuk memulihkan data, Silahkan pergi ke halaman Recycle Bin.";
        })
        .catch((err) => {
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "failed";
          alertContent.title = "Gagal Menghapus!";
          alertContent.body =
            "Data gagal dihapus! Harap cek koneksi anda dan coba lagi.";
        });
    };
    // !MODAL UPDATE
    const isModalUpdateOpen = ref("");
    const toggleModalUpdate = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };
    const modalUpdateContent = reactive({
      title: "Edit data tim",
      body: "",
    });
    const team = reactive({
      data: [],
    });
    const sendIdAndOpenModalUpdate = (id) => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
      store.dispatch("team/getSpecificTeam", id);
      team.data = computed(() => {
        return store.getters["team/getStateTeam"];
      });
    };
    return {
      teams,
      isModalDeleteOpen,
      toggleModalDelete,
      openModalDelete,
      remove,
      contentModalDelete,
      employeeName,
      projectName,
      isModalAlertOpen,
      alertContent,
      toggleModalAlert,
      paramId,
      // !MODAL UPDATE SECTION
      isModalUpdateOpen,
      toggleModalUpdate,
      modalUpdateContent,
      sendIdAndOpenModalUpdate,
      team,
    };
  },
};
</script>