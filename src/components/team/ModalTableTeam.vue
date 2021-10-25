<template>
  <div ref="containerRef">
    <TransitionRoot :show="isOpen" as="template">
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
            <div class="relative w-full mb-5 bg-white rounded">
              <div class="p-6 px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4">
                <div class="flex mb-5">
                  <span class="p-2 rounded bg-blueGray-300 text-blueGray-800">
                    Detail Tim pada Project :
                    <span class="font-semibold text-blueGray-800">{{
                      projectNameLabel
                    }}</span>
                  </span>
                </div>
                <div class="flex px-4 space-x-2">
                  <div
                    class="flex-none min-w-0 mb-6 -ml-4 break-words rounded shadow-lg "
                  >
                    <button
                      @click="toggleModalInsertTeam"
                      class="flex justify-center px-4 py-2 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-400 hover:text-blueGray-800 text-blueGray-800 bg-blueGray-300 active:bg-blueGray-400"
                    >
                      <PlusCircleIcon class="flex-none w-6" />
                      <p class="flex-none">Tim</p>
                    </button>
                  </div>
                  <div
                    class="flex-none min-w-0 mb-6 -ml-4 break-words rounded shadow-lg "
                  >
                    <div
                      class="flex justify-center px-4 py-2 space-x-1 transition-colors duration-100 rounded-md  text-blueGray-800 bg-blueGray-300"
                    >
                      <CashIcon class="flex-none w-6" />
                      <p v-if="projectDetail.data" class="flex-none">
                        Sisa Budget Tim :{{
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
                    <template v-if="teams.data">
                      <template v-if="teams.data.length === 0">
                        <tr>
                          <td colspan="7" class="py-4 text-center">
                            Tidak ada data
                          </td>
                        </tr>
                      </template>
                      <template v-else>
                        <tbody class="bg-blueGray-200">
                          <tr v-for="(team, index) in teams.data" :key="index">
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ index + 1 }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0  text-blueGray-600 whitespace-nowrap"
                            >
                              {{ team.employee.name }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ team.position }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
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
                              class="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              <span class="px-2 py-1 bg-yellow-500 shadow">
                                {{ team.payment_status }}
                              </span>
                            </td>
                            <td
                              v-else-if="team.payment_status === 'ON PROCESS'"
                              class="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              <span
                                class="px-2 py-1 font-medium shadow  text-blueGray-800 bg-sky-400"
                              >
                                {{ team.payment_status }}
                              </span>
                            </td>
                            <td
                              v-else
                              class="p-4 px-6 text-xs font-semibold text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
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
                              <div class="">
                                <button
                                  @click="openModalEdit(team.id)"
                                  class="px-1 py-1 text-white transition-colors duration-200  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
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
          :isModalUpdateOpen="isModalEditOpen"
          :team="projectTeam"
          @close="closeModalEdit"
        />
        <FormModalInsertTeam
          :isModalInsertTeamOpen="isModalInsertTeamOpen"
          @close="toggleModalInsertTeam"
        >
        </FormModalInsertTeam>
        <ModalDelete
          :isModalDeleteOpen="isModalDeleteOpen"
          :contentModalDelete="contentModalDelete"
          :projectName="projectName"
          :employeeName="employeeName"
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
<script setup>
import { computed, ref, reactive, onMounted, watchEffect } from "vue";
import {
  TransitionChild,
  TransitionRoot,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import {
  PencilIcon,
  TrashIcon,
  PlusCircleIcon,
  CashIcon,
} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import FormModalUpdate from "../../components/team/FormModalUpdate.vue";
import FormModalInsertTeam from "../../components/team/FormModalInsertTeam.vue";
import ModalDelete from "../../components/team/ModalDelete.vue";
import ModalAlert from "../../components/global/ModalAlert.vue";

const emit = defineEmits(["close"]);
const props = defineProps({
  isOpen: Boolean,
  team: Number,
  projectId: Number,
  projectNameLabel: String,
});
const containerRef = ref(null);
const store = useStore();
const isOpen = computed(() => {
  return props.isOpen;
});
const projectNameLabel = computed(() => {
  return props.projectNameLabel;
});
const projectId = computed(() => {
  return props.projectId;
});

const teams = computed(() => {
  return store.getters["team/getStateProjectTeam"];
});
const isModalEditOpen = ref(false);
const projectTeam = reactive({
  data: [],
});
const openModalEdit = (id) => {
  isModalEditOpen.value = true;
  store.dispatch("team/getSpecificTeam", id);
  projectTeam.data = computed(() => {
    return store.getters["team/getStateTeam"];
  });
};
const closeModalEdit = () => {
  isModalEditOpen.value = false;
};
const isModalDeleteOpen = ref(false);
const closeModalDelete = () => {
  isModalDeleteOpen.value = false;
};
const projectTeamId = ref(null);
const projectName = ref(null);
const employeeName = ref(null);
const openModalDelete = (id, project, employee) => {
  projectTeamId.value = id;
  projectName.value = project;
  employeeName.value = employee;
  isModalDeleteOpen.value = true;
};
const contentModalDelete = reactive({
  body: "Yakin ingin menghapus",
  title: "Hapus Member",
});
const alertContent = reactive({
  type: "",
  title: "",
  body: "",
});
const isModalAlertOpen = ref(false);
const openModalAlert = () => {
  isModalAlertOpen.value = true;
};
const closeModalAlert = () => {
  isModalAlertOpen.value = false;
};

// ! useable for emit function to delete a team member
const remove = () => {
  isModalDeleteOpen.value = false;
  store
    .dispatch("team/deleteMember", projectTeamId.value)
    .then((res) => {
      store.dispatch("team/getSpecificProjectTeam", projectId.value);
      isModalAlertOpen.value = true;
      alertContent.type = "success";
      alertContent.title = "Berhasil Mengapus!";
      alertContent.body =
        "Data berhasil dihapus! Untuk memulihkan data, Silahkan pergi ke halaman Recycle Bin.";
    })
    .catch((err) => {
      isModalAlertOpen.value = true;
      alertContent.type = "failed";
      alertContent.title = "Gagal Menghapus!";
      alertContent.body =
        "Data gagal dihapus! Harap cek koneksi anda dan coba lagi.";
    });
};
const isModalInsertTeamOpen = ref(false);
const toggleModalInsertTeam = () => {
  isModalInsertTeamOpen.value = !isModalInsertTeamOpen.value;
};
const projectDetail = computed(() => {
  return store.getters["project/getProjectState"];
});
// (teams.value);
// const profitTeam = ref(null);
const balance = ref(null);
const profitTeam = computed(() => {
  if (teams.value.data) {
    // (teams.value);
    balance.value = null;
    for (let i = 0; i < teams.value.data.length; i++) {
      // (teams.value.data[i].profit);
      balance.value = balance.value + teams.value.data[i].profit;
      balance.value;
    }
    return parseInt(balance.value);
  }
});

const result = computed(() => {
  if (projectDetail.value.data) {
    return parseInt(
      projectDetail.value.data.project_value -
        projectDetail.value.data.profit_team -
        projectDetail.value.data.profit_company -
        projectDetail.value.data.tax -
        profitTeam.value
    );
    // store.commit("project/setBalanceTeamBudget", result.value);
    // (result.value);
  }
});
</script>
