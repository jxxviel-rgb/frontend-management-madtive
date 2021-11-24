<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal call section -->
    <FormModalInsert
      :isOpen="isOpen"
      :content="content"
      @close="toggleModalInsert"
    ></FormModalInsert>
    <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      :modalUpdateContent="modalUpdateContent"
      :specificEmployee="specificEmployee"
      @close="toggleModalUpdate"
    ></FormModalUpdate>
    <ModalDelete
      :employeeName="employeeName"
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
                    @click="toggleModalInsert"
                    class="flex justify-center px-4 py-2 -mt-5 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusCircleIcon class="flex-none w-6"></PlusCircleIcon>
                    <p class="flex-none">Pegawai</p>
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
                <!-- Projects table -->
                <table
                  class="items-center w-full break-all bg-transparent border-collapse table-auto "
                >
                  <thead class="bg-blueGray-300">
                    <tr>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        #
                      </th>

                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase break-normal align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Nama
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase break-normal align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        NIK
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase break-normal align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Jenis Kelamin
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase break-normal align-middle border border-l-0 border-r-0 border-solid  text-blueGray-500"
                      >
                        Email
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        No. Telp
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Posisi
                      </th>
                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Gaji
                      </th>
                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Tanggal Bergabung
                      </th>
                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Pendidikan Terakhir
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Alamat
                      </th>
                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Role
                      </th>
                      <th
                        class="px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <template v-if="employees.data">
                    <template v-if="employees.data.length === 0">
                      <tr>
                        <td colspan="9" class="text-center">Tidak ada data</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tbody class="bg-blueGray-200">
                        <tr
                          v-for="(item, index) in employees.data"
                          :key="index"
                        >
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <th
                            class="px-6 py-4 text-xs text-left break-normal align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{
                              item.employee.name === null ||
                              item.employee === null
                                ? "Belum ada nama"
                                : item.employee.name
                            }}
                          </th>
                          <td
                            class="px-6 py-4 text-xs text-left break-normal align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{
                              item.employee.nik === null ||
                              item.employee === null
                                ? "Belum ada nik"
                                : item.employee.nik
                            }}
                          </td>
                          <td
                            class="px-6 py-4 text-xs text-left break-normal align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{
                              item.employee.gender === null ||
                              item.employee === null
                                ? "Belum ada jenis kelamin"
                                : item.employee.gender
                            }}
                          </td>
                          <td
                            class="px-6 py-4 text-xs text-left break-normal align-middle border-t-0 border-l-0 border-r-0 "
                          >
                            {{ item.email ?? "Belum ada email" }}
                          </td>
                          <td
                            class="px-6 py-4 text-xs break-normal align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{
                              item.employee.phone_number === null ||
                              item.employee === null
                                ? "Belum ada nomor telepon"
                                : item.employee.phone_number
                            }}
                          </td>

                          <td
                            v-if="
                              item.employee.position === null ||
                              item.employee === null
                            "
                            class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            Belum ada posisi
                          </td>
                          <td
                            v-else
                            class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ item.employee.position.position_name }}
                          </td>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            Rp.
                            {{
                              new Intl.NumberFormat().format(
                                item.employee.salary === null ||
                                  item.employee === null
                                  ? "0"
                                  : item.employee.salary
                              )
                            }}
                          </td>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{
                              item.employee.join_date === null ||
                              item.employee === null
                                ? "Belum ada tanggal bergabung"
                                : item.employee.join_date
                            }}
                          </td>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{
                              item.employee.last_education === null ||
                              item.employee === null
                                ? "Belum ada pendidikan terakhir"
                                : item.employee.last_education
                            }}
                          </td>
                          <td
                            class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{
                              item.employee.address === null ||
                              item.employee === null
                                ? "Belum ada alamat"
                                : item.employee.address
                            }}
                          </td>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ item.role ?? "Tidak ada role" }}
                          </td>
                          <td
                            class="px-2 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <div class="">
                              <button
                                @click="sendIdAndOpenModalUpdate(item.id)"
                                class="px-1 py-1 text-white transition-colors duration-200 rounded-tl-sm rounded-bl-sm  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                              >
                                <PencilIcon class="w-5"></PencilIcon>
                              </button>

                              <button
                                @click="
                                  sendIdToLocalState(
                                    item.id,
                                    item.employee.name
                                  )
                                "
                                class="px-1 py-1 text-white transition-colors duration-200 rounded-tr-sm rounded-br-sm  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
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
                      <td colspan="12" class="text-center">
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
import FormModalInsert from "../../employee/FormModalInsert.vue";
import FormModalUpdate from "../../employee/FormModalUpdate.vue";
import ModalDelete from "../../employee/ModalDelete.vue";
import ModalAlert from "../../employee/ModalAlert.vue";
import { TrashIcon, PencilIcon, PlusCircleIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed, ref, reactive, watchEffect } from "vue";
import moment from "moment";
export default {
  components: {
    ModalAlert,
    ModalDelete,
    Sidebar,
    Navbar,
    TrashIcon,
    PencilIcon,
    PlusCircleIcon,
    FormModalInsert,
    FormModalUpdate,
  },
  setup() {
    const store = useStore();
    store.dispatch("employees/getEmployees");
    const employees = computed(() => {
      return store.getters["employees/getEmployees"];
    });
    /*
     *toggle for modal insert
     * default value for isOpen is false
     * passing isOpen and content to modal
     */
    const isOpen = ref("");
    const toggleModalInsert = () => {
      isOpen.value = !isOpen.value;
    };
    const content = reactive({
      title: "Tambahkan data karyawan",
    });

    /*
     * toggle for modal update
     */
    const isModalUpdateOpen = ref("");
    const toggleModalUpdate = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };
    const modalUpdateContent = reactive({
      title: "Edit data pegawai",
    });

    const specificEmployee = reactive({
      data: [],
    });
    if (employees.value.data)
      for (let i = 0; i < employees.value.data; i++) {
        employees.value.data[i].employee.join_date = moment(
          employees.value.data[i].employee.join_date
        ).format("ll");
      }
    // * trigger  get specific data when its clicked
    const sendIdAndOpenModalUpdate = (id) => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
      store.dispatch("employees/getSpecificEmployee", id);
      specificEmployee.data = computed(() => {
        return store.getters["employees/getEmployeeState"];
      });
    };
    // * toggle modal delete
    const isModalDeleteOpen = ref("");
    const toggleModalDelete = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    const contentModalDelete = reactive({
      title: "Hapus Data",
      body: "Yakin ingin hapus data",
    });
    const paramId = ref(null);
    const employeeName = ref(null);
    const sendIdToLocalState = (id, name) => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      paramId.value = id;
      employeeName.value = name;
    };
    const isModalAlertOpen = ref("");
    const toggleModalAlert = () => {
      isModalAlertOpen.value = !isModalAlertOpen.value;
    };
    const alertContent = reactive({
      type: "",
      title: "",
      body: "",
    });
    const remove = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      store
        .dispatch("employees/deleteEmployee", paramId.value)
        .then((res) => {
          store.dispatch("employees/getEmployees");
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "success";
          alertContent.title = "Berhasil menghapus!";
          alertContent.body =
            "Data berhasil dihapus! Untuk memulihkan data, pergi ke halaman Recycle Bin.";
        })
        .catch((err) => {
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "failed";
          alertContent.title = "Gagal menghapus!";
          alertContent.body =
            "Data gagal dihapus! Silahkan coba lagi dan cek koneksi anda.";
        });
    };

    return {
      // * state to store employee data
      employees,
      modalUpdateContent,
      // * MODAL INSERT
      isOpen,
      toggleModalInsert,
      content,
      //  * MODAL UPDATE
      toggleModalUpdate,
      sendIdAndOpenModalUpdate,
      isModalUpdateOpen,
      // * MODAL DELETE
      isModalDeleteOpen,
      toggleModalDelete,
      contentModalDelete,
      sendIdToLocalState,
      remove,
      employeeName,
      // * MODAL ALERT
      alertContent,
      isModalAlertOpen,
      toggleModalAlert,
      // * local state to store a specific employee
      specificEmployee,
    };
  },
};
</script>
