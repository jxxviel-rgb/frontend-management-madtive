<template>
  <div ref="containerRef">
    <TransitionRoot :show="isModalTabsOpen" as="template">
      <Dialog
        as="div"
        class="fixed inset-0 z-10 overflow-y-auto"
        @close="$emit('close')"
      >
        <div
          class="flex items-center justify-center block min-h-screen p-0 px-4 pt-4 pb-20 text-center "
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
            <div class="relative w-full mb-5 bg-white rounded-md">
              <div
                class="p-6 px-4 pt-5 pb-4 rounded  bg-blueGray-200 sm:p-6 sm:pb-4"
              >
                <div class="grid grid-cols-3 gap-4 mb-3">
                  <div
                    class="p-2 font-semibold rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                  >
                    Detail Project
                  </div>
                  <div
                    class="p-2 font-semibold rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                  >
                    Detail Tim
                  </div>
                  <div
                    class="p-2 font-semibold rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                  >
                    Detail Client
                  </div>
                </div>
                <div v-if="project.data" class="grid grid-cols-3 gap-4">
                  <div
                    class="px-3 py-3 transition-colors duration-100 rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                  >
                    <div class="space-y-2">
                      <div class="flex justify-between">
                        <div class="">
                          <span class="font-semibold text-blueGray-800">
                            Project
                          </span>
                        </div>
                        <div>
                          <span> {{ project.data.name }} </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Mulai
                          </span>
                        </div>
                        <div>
                          <span> {{ project.data.start_project }} </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Deadline
                          </span>
                        </div>
                        <div>
                          <span> {{ project.data.deadline }} </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Estimasi
                          </span>
                        </div>
                        <div>
                          <span> {{ project.data.estimation }} </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Nilai Projek
                          </span>
                        </div>
                        <div>
                          <span>
                            {{
                              Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(project.data.project_value)
                            }}
                          </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Profit Perusahaan
                          </span>
                        </div>
                        <div>
                          <span>
                            {{
                              Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(project.data.profit_company)
                            }}
                          </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Profit Tim
                          </span>
                        </div>
                        <div>
                          <span>
                            {{
                              Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(project.data.profit_team)
                            }}
                          </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Akomodasi
                          </span>
                        </div>
                        <div>
                          <span>
                            {{
                              Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(project.data.accomodation)
                            }}
                          </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Pajak
                          </span>
                        </div>
                        <div>
                          <span>
                            {{
                              Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(project.data.tax)
                            }}
                          </span>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div v-if="project.data" class="">
                          <span class="font-semibold text-blueGray-800">
                            Status
                          </span>
                        </div>
                        <div>
                          <span>
                            {{ project.data.status }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="px-3 py-3 transition-colors duration-100 rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                  >
                    <div class="space-y-2">
                      <template v-if="team.data">
                        <template
                          v-for="(team, index) in team.data.data"
                          :key="index"
                        >
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                Tim member #{{ index + 1 }}
                              </span>
                            </div>
                            <div>
                              <span v-if="team.employee">
                                {{ team.employee.name }}
                              </span>
                            </div>
                          </div>
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                Posisi
                              </span>
                            </div>
                            <div>
                              <span>
                                {{ team.position }}
                              </span>
                            </div>
                          </div>
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                Fee
                              </span>
                            </div>
                            <div>
                              <span
                                >{{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                  }).format(team.fee)
                                }}
                              </span>
                            </div>
                          </div>
                        </template>
                      </template>
                      <template v-else> Belum ada tim </template>
                    </div>
                  </div>
                  <div
                    class="px-3 py-3 transition-colors duration-100 rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                  >
                    <div class="space-y-2">
                      <template v-if="project.data">
                        <div class="flex justify-between">
                          <div class="">
                            <span class="font-semibold text-blueGray-800">
                              Client
                            </span>
                          </div>
                          <div>
                            <span>
                              {{ project.data.client.company_name }}
                            </span>
                          </div>
                        </div>
                        <div class="flex justify-between">
                          <div class="">
                            <span class="font-semibold text-blueGray-800">
                              Email Client
                            </span>
                          </div>
                          <div>
                            <span>
                              {{ project.data.client.company_email }}
                            </span>
                          </div>
                        </div>
                        <div class="flex justify-between">
                          <div class="">
                            <span class="font-semibold text-blueGray-800">
                              No. Telp Client
                            </span>
                          </div>
                          <div>
                            <span>
                              {{ project.data.client.phone_number }}
                            </span>
                          </div>
                        </div>
                        <div class="flex justify-between">
                          <div class="">
                            <span class="font-semibold text-blueGray-800">
                              Alamat
                            </span>
                          </div>
                          <div>
                            <span>
                              {{ project.data.client.address }}
                            </span>
                          </div>
                        </div>
                      </template>
                      <template v-else> Belum ada client </template>
                      <template v-if="project.data">
                        <template v-if="project.data.pic">
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                PIC
                              </span>
                            </div>
                            <div>
                              <span>
                                {{ project.data.pic && project.data.pic.name }}
                              </span>
                            </div>
                          </div>
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                Posisi
                              </span>
                            </div>
                            <div>
                              <span>
                                {{
                                  project.data.pic && project.data.pic.position
                                }}
                              </span>
                            </div>
                          </div>
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                No. Telp
                              </span>
                            </div>
                            <div>
                              <span>
                                {{
                                  project.data.pic &&
                                  project.data.pic.phone_number
                                }}
                              </span>
                            </div>
                          </div>
                          <div class="flex justify-between">
                            <div class="">
                              <span class="font-semibold text-blueGray-800">
                                Email
                              </span>
                            </div>
                            <div>
                              <span>
                                {{ project.data.pic && project.data.pic.email }}
                              </span>
                            </div>
                          </div>
                        </template>
                        <template v-else> Belum ada pic </template>
                      </template>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-3 mt-4">
                  <div class="flex px-4 space-x-2">
                    <div
                      class="flex-none min-w-0 mb-6 -ml-4 break-words rounded shadow-lg "
                    >
                      <button
                        @click="toggleModalInsert"
                        class="flex justify-center px-4 py-2 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-400 hover:text-blueGray-800 text-blueGray-800 bg-blueGray-300 active:bg-blueGray-400"
                      >
                        <PlusCircleIcon class="flex-none w-6" />
                        <p class="flex-none">Biaya Lain</p>
                      </button>
                    </div>
                    <div
                      class="flex-none min-w-0 mb-6 -ml-4 break-words rounded  shadow-xxl"
                    >
                      <div
                        class="flex justify-center px-4 py-2 space-x-1 transition-colors duration-100 rounded-md shadow-lg  bg-blueGray-300 text-blueGray-800"
                      >
                        <CashIcon class="flex-none w-6" />
                        <p v-if="project.data" class="flex-none">
                          Sisa :
                          {{
                            Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(result)
                          }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="block w-full overflow-x-auto shadow">
                  <table
                    class="items-center w-full bg-transparent border-collapse shadow "
                  >
                    <thead class="bg-blueGray-300">
                      <tr class="shadow-lg">
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                        >
                          #
                        </th>

                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                        >
                          Kategori
                        </th>
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                        >
                          Jenis
                        </th>
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                        >
                          Biaya
                        </th>
                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                        >
                          Deskripsi
                        </th>

                        <th
                          class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                        >
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <template v-if="addlCosts.data">
                      <template v-if="addlCosts.data.length === 0">
                        <tr>
                          <td colspan="7" class="py-4 text-center">
                            Tidak ada data
                          </td>
                        </tr>
                      </template>
                      <template v-else>
                        <tbody class="bg-blueGray-200">
                          <tr
                            v-for="(cost, index) in addlCosts.data"
                            :key="index"
                          >
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ index + 1 }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0  text-blueGray-600 whitespace-nowrap"
                            >
                              {{ cost.category }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0  text-blueGray-600 whitespace-nowrap"
                            >
                              {{ cost.type }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{
                                Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                  minimumFractionDigits: 0,
                                }).format(cost.cost)
                              }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ cost.description }}
                            </td>

                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              <div class="">
                                <button
                                  @click="openModalUpdate(cost.id)"
                                  class="px-1 py-1 text-white transition-colors duration-200  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                                >
                                  <PencilIcon class="w-5"></PencilIcon>
                                </button>

                                <button
                                  @click="
                                    openModalDelete(cost.id, cost.category)
                                  "
                                  class="px-1 py-1 text-white transition-colors duration-200  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
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
              <!-- Start of form content -->
              <!-- End of form content -->
              <div
                class="px-4 py-3  bg-blueGray-200 sm:px-6 sm:flex sm:flex-row-reverse"
              >
                <button
                  type="submit"
                  class="flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-blueGray-800 hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="$emit('close')"
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
        <FormModalUpdate
          :isModalUpdateOpen="isModalUpdateOpen"
          @close="toggleModalUpdate"
        />
        <FormModalInsertAddlCost
          :isModalInsertOpen="isModalInsertOpen"
          @close="toggleModalInsert"
        >
        </FormModalInsertAddlCost>
        <ModalDelete
          :isModalDeleteOpen="isModalDeleteOpen"
          :contentModalDelete="contentModalDelete"
          :category="category"
          @close="closeModalDelete"
          @remove="remove"
        />
        <ModalAlert
          :isModalAlertOpen="isModalAlertOpen"
          :alertContent="alertContent"
          @close="closeModalAlert"
        ></ModalAlert>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { reactive, ref, computed, watchEffect } from "vue";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import {
  CashIcon,
  PlusCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import FormModalInsertAddlCost from "../addl_cost/FormModalInsertAddlCost.vue";
import FormModalUpdate from "../addl_cost/FormModalUpdate.vue";
import ModalDelete from "../addl_cost/ModalDelete.vue";
import ModalAlert from "../../components/global/ModalAlert.vue";
import moment from "moment";
export default {
  components: {
    ModalDelete,
    ModalAlert,
    FormModalUpdate,
    PencilIcon,
    TrashIcon,
    FormModalInsertAddlCost,
    CashIcon,
    PlusCircleIcon,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    XIcon,
  },
  props: {
    isModalTabsOpen: {
      type: Boolean,
      default: false,
    },
    project: {
      type: Object,
      default: {},
    },
    team: {
      type: Object,
      default: {},
    },
  },
  emits: ["close", "openFormModalInsertTeam"],
  setup(props, { emit }) {
    const store = useStore();

    let isModalTabsOpen = computed(() => {
      return props.isModalTabsOpen;
    });
    const team = computed(() => {
      return props.team;
    });
    const isModalInsertOpen = ref(false);
    const toggleModalInsert = () => {
      isModalInsertOpen.value = !isModalInsertOpen.value;
    };
    const project = computed(() => {
      return store.getters["project/getProjectShowState"];
    });

    let categories = ref(["Detail Project", "Detail Client"]);

    const content = reactive({
      title: "Tambah Tim",
    });
    const balance = ref(0);
    const feeTeam = computed(() => {
      if (team.value.data.data) {
        balance.value = 0;
        for (let i = 0; i < team.value.data.data.length; i++) {
          balance.value = balance.value + team.value.data.data[i].fee;
        }
        return parseInt(balance.value);
      }
    });
    const addlCosts = computed(() => {
      return store.getters["cost/getStateCosts"];
    });
    const costTypeSubstractions = ref(0);
    const costTypeAdditions = ref(0);
    watchEffect(() => {
      if (addlCosts.value.data) {
        costTypeSubstractions.value = 0;
        costTypeAdditions.value = 0;
        for (let i = 0; i < addlCosts.value.data.length; i++) {
          if (addlCosts.value.data[i].type === "PENGURANGAN") {
            costTypeSubstractions.value =
              costTypeSubstractions.value + addlCosts.value.data[i].cost;
          } else {
            costTypeAdditions.value =
              costTypeAdditions.value + addlCosts.value.data[i].cost;
          }
        }
      }
    });

    const result = computed(() => {
      if (project.value.data) {
        return parseInt(
          project.value.data.project_value -
            project.value.data.profit_team -
            project.value.data.profit_company -
            project.value.data.tax -
            project.value.data.accomodation -
            feeTeam.value -
            costTypeSubstractions.value +
            costTypeAdditions.value
        );
      }
    });
    const projectId = ref(null);
    watchEffect(() => {
      if (project.value.data) {
        store.dispatch("pic/getAllPicsClient", project.value.data.client_id);
        projectId.value = project.value.data.id;
      }
    });
    const pics = computed(() => {
      return store.getters["pic/getStatePicsClient"];
    });

    // !MODAL UPDATE SECTION
    const isModalUpdateOpen = ref(false);
    const toggleModalUpdate = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };
    const openModalUpdate = (id) => {
      store.dispatch("cost/show", id);
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };

    const isModalDeleteOpen = ref(false);
    const category = ref(null);
    const costId = ref(null);
    const openModalDelete = (id, name) => {
      category.value = name;
      costId.value = id;
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    const closeModalDelete = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    const contentModalDelete = reactive({
      body: "Yakin ingin menghapus",
      title: "Hapus Biaya Lain",
    });
    const isModalAlertOpen = ref(false);
    const alertContent = reactive({
      type: "",
      title: "",
      body: "",
    });
    const closeModalAlert = () => {
      isModalAlertOpen.value = !isModalAlertOpen.value;
    };
    const remove = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      store
        .dispatch("cost/deleteData", costId.value)
        .then((res) => {
          store.dispatch("cost/getAllData", projectId.value);
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
    return {
      categories,
      isModalTabsOpen,
      project,
      team,
      content,
      isModalInsertOpen,
      toggleModalInsert,
      result,
      pics,
      addlCosts,
      isModalUpdateOpen,
      toggleModalUpdate,
      openModalUpdate,
      openModalDelete,
      closeModalDelete,
      isModalDeleteOpen,
      contentModalDelete,
      category,
      costId,
      projectId,
      isModalAlertOpen,
      alertContent,
      closeModalAlert,
      remove,
      costTypeSubstractions,
      costTypeAdditions,
    };
  },
};
</script>
