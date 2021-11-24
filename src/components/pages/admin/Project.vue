<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal calls section -->
    <FormModalInsert
      :isOpen="isOpen"
      :content="content"
      @close="toggleModalInsert"
    ></FormModalInsert>
    <ModalTableTeam
      :isOpen="isModalTableOpen"
      @close="closeModalTable"
      :team="team"
      :projectId="projectId"
      :projectNameLabel="projectNameLabel"
    />
    <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      :contentModalUpdate="contentModalUpdate"
      @close="toggleModalUpdate"
    />
    <ModalTabs
      :isModalTabsOpen="isModalTabsOpen"
      :project="project"
      :team="team"
      @close="toggleModalTabs"
      @openFormModalInsertTeam="openFormModalInsertTeam"
    ></ModalTabs>
    <FormModalInsertTeam
      :isModalInsertTeamOpen="isModalInsertTeamOpen"
      @close="closeModalInsertTeam"
    />

    <ModalDelete
      :projectName="projectName"
      :isModalDeleteOpen="isModalDeleteOpen"
      :contentModalDelete="contentModalDelete"
      @close="toggleModalDelete"
      @remove-employee="remove"
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
              <div class="flex px-4 space-x-1">
                <div
                  class="flex-none min-w-0 mb-6 ml-0 break-words rounded shadow-lg  lg:-ml-6 md:-ml-6"
                >
                  <button
                    @click="toggleModalInsert"
                    class="flex justify-center px-4 py-2 -mt-5 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusCircleIcon class="flex-none w-6"></PlusCircleIcon>
                    <p class="flex-none">Project</p>
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
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Client
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Mulai Projek
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Deadline
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Estimasi
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Status
                      </th>

                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Tim
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <template v-if="projects.data">
                    <template v-if="projects.data.data.length === 0">
                      <tr>
                        <td colspan="8" class="text-center">Tidak ada data</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tbody class="bg-blueGray-200">
                        <tr
                          v-for="(project, index) in projects.data.data"
                          :key="index"
                        >
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <th
                            class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap text-blueGray-600"
                          >
                            {{ project.name }}
                          </th>
                          <td
                            v-if="project.client === null"
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            Belum ada client
                          </td>
                          <td
                            v-else
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ project.client.company_name }}
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ project.start_project }}
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ project.deadline }}
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ project.estimation }}
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <span
                              class="px-2 py-1 text-xs font-semibold  text-blueGray-700 whitespace-nowrap"
                              :class="[
                                project.status === 'On Progres'
                                  ? 'bg-yellow-500 shadow'
                                  : '',
                                project.status === 'Finish'
                                  ? 'bg-emerald-300'
                                  : '',
                                project.status === 'Penawaran'
                                  ? 'bg-blue-300'
                                  : '',
                              ]"
                            >
                              {{ project.status }}
                            </span>
                          </td>
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <button
                              @click="openModalTable(project.id, project.name)"
                              class="flex px-1 py-1 text-white transition-colors duration-200 rounded-full  bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-800"
                            >
                              <EyeIcon class="w-6" />
                            </button>
                          </td>

                          <td
                            class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <div class="">
                              <button
                                @click="sendIdAndOpenModalTabs(project.id)"
                                class="px-1 py-1 text-white transition-colors duration-200  bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-800"
                              >
                                <InformationCircleIcon
                                  class="w-5"
                                ></InformationCircleIcon>
                              </button>
                              <button
                                :disabled="project.status === 'Finish'"
                                @click="sendIdAndOpenModalUpdate(project.id)"
                                class="px-1 py-1 text-white transition-colors duration-200  bg-sky-500"
                                :class="[
                                  project.status === 'Finish'
                                    ? ' bg-opacity-30 cursor-not-allowed'
                                    : 'active:bg-sky-800 hover:bg-sky-600',
                                ]"
                              >
                                <PencilIcon class="w-5"></PencilIcon>
                              </button>

                              <button
                                @click="
                                  sendIdForDelete(project.id, project.name)
                                "
                                class="px-1 py-1 text-white transition-colors duration-200  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
                              >
                                <TrashIcon class="w-5"></TrashIcon>
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr v-if="projects === null">
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
            <template v-if="projects.data">
              <div
                class="flex justify-center"
                :class="[projects.data.data.length > 1 ? '-mt-2' : 'mt-10']"
              >
                <template v-if="projects.data.total > 5">
                  <template
                    v-for="(link, index) in projects.data.links.slice(1, -1)"
                    :key="index"
                  >
                    <button @click="gotoPage(link.url)">
                      <span
                        class="w-8 p-3 mr-2 rounded-sm shadow-md  text-blueGray-800 bg-blueGray-300 hover:bg-blueGray-400"
                        :class="[link.active ? 'bg-blueGray-400' : '']"
                      >
                        {{ link.label }}
                      </span>
                    </button>
                  </template>
                </template>
              </div>
            </template>
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
import ModalTabs from "../../project/ModalTabs.vue";
import FormModalInsert from "../../project/FormModalInsert.vue";
import FormModalInsertTeam from "../../team/FormModalInsertTeam.vue";
import FormModalUpdate from "../../project/FormModalUpdate.vue";
import ModalDelete from "../../project/ModalDelete.vue";
import ModalAlert from "../../global/ModalAlert.vue";
import FormModalSkeleton from "../../global/FormModalSkeleton.vue";
import ModalTableTeam from "../../team/ModalTableTeam.vue";
import {
  TrashIcon,
  PencilIcon,
  PlusCircleIcon,
  InformationCircleIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed, ref, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    FormModalSkeleton,
    Sidebar,
    Navbar,
    TrashIcon,
    FormModalInsert,
    FormModalInsertTeam,
    PlusCircleIcon,
    PencilIcon,
    InformationCircleIcon,
    EyeIcon,
    FormModalUpdate,
    ModalDelete,
    ModalAlert,
    ModalTabs,
    ModalTableTeam,
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  setup() {
    // title
    document.title = "Madtive Management | Project";
    const store = useStore();
    const router = useRouter();
    // ! get all data projects
    store.dispatch("project/getAllProjects");
    const projects = computed(() => {
      return store.getters["project/getProjectsState"];
    });

    // ! MODAL INSERT(toggle, local state, etc)
    const isOpen = ref("");
    const toggleModalInsert = () => {
      store.dispatch("projectCost/getDataProjectCost");
      isOpen.value = !isOpen.value;
    };
    const content = reactive({
      title: "Tambah Project",
    });
    // ! MODAL UPDATE(toggle, local state, etc)
    const isModalUpdateOpen = ref("");
    const toggleModalUpdate = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };
    const contentModalUpdate = reactive({
      title: "Edit Project",
    });

    const sendIdAndOpenModalUpdate = (paramId) => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
      store.dispatch("project/showForUpdate", paramId);
    };
    // !MODAL ALERT
    const isModalAlertOpen = ref(false);
    const toggleModalAlert = () => {
      isModalAlertOpen.value = !isModalAlertOpen.value;
    };
    // ! MODAL DELETE
    const isModalDeleteOpen = ref(false);
    const toggleModalDelete = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    const alertContent = reactive({
      title: "",
      body: "",
      type: "",
    });
    const contentModalDelete = reactive({
      title: "Hapus Data",
      body: "Yakin ingin menghapus data project",
    });
    const projectName = ref(null);
    const projectId = ref(null);
    const sendIdForDelete = (id, name) => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      projectId.value = id;
      projectName.value = name;
    };
    const remove = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      store
        .dispatch("project/delete", projectId.value)
        .then((res) => {
          store.dispatch("project/getAllProjects");
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
    // ! MODAL TABS
    const isModalTabsOpen = ref(false);
    const toggleModalTabs = () => {
      isModalTabsOpen.value = false;
    };
    const team = reactive({
      data: [],
    });
    const project = reactive({
      data: [],
    });
    const sendIdAndOpenModalTabs = (id) => {
      projectId.value = id;
      store.dispatch("project/show", projectId.value);
      store.dispatch("team/getSpecificProjectTeam", projectId.value);
      store.dispatch("cost/getAllData", projectId.value);
      // store.dispatch("pic/getAllPicsClient", projectId.value);
      team.data = computed(() => {
        return store.getters["team/getStateProjectTeam"];
      });
      isModalTabsOpen.value = true;
    };
    // ! MODAL INSERT TEAM SECTION
    const isModalInsertTeamOpen = ref(false);
    const closeModalInsertTeam = () => {
      isModalInsertTeamOpen.value = false;
    };
    const openFormModalInsertTeam = () => {
      isModalInsertTeamOpen.value = true;
    };
    const projectNameLabel = ref(null);
    const isModalTableOpen = ref(false);
    const openModalTable = (id, name) => {
      projectId.value = id;
      projectNameLabel.value = name;
      store.dispatch("team/getSpecificProjectTeam", projectId.value);
      store.dispatch("project/show", id);
      isModalTableOpen.value = true;
    };
    const closeModalTable = () => {
      isModalTableOpen.value = false;
    };
    const gotoPage = (url) => {
      store.dispatch("project/paginate", url);
    };
    return {
      projects,
      isOpen,
      toggleModalInsert,
      content,
      isModalUpdateOpen,
      toggleModalUpdate,
      contentModalUpdate,
      sendIdAndOpenModalUpdate,
      isModalDeleteOpen,
      toggleModalDelete,
      remove,
      contentModalDelete,
      sendIdForDelete,
      isModalAlertOpen,
      projectName,
      alertContent,
      toggleModalAlert,
      isModalTabsOpen,
      toggleModalTabs,
      sendIdAndOpenModalTabs,
      team,
      isModalInsertTeamOpen,
      closeModalInsertTeam,
      openFormModalInsertTeam,
      isModalTableOpen,
      closeModalTable,
      openModalTable,
      projectId,
      projectNameLabel,
      project,
      gotoPage,
      // openFormModalInsertTeam,
    };
  },
};
</script>

<style>

</style>