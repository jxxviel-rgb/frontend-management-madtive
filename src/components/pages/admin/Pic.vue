<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal calls section -->
    <FormModalInsert
      :isOpen="isModalInsertOpen"
      :content="contentModalInsert"
      @close="toggleModalInsert"
    ></FormModalInsert>
    <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      :contentModalUpdate="contentModalUpdate"
      :pic="pic"
      @close="toggleModalUpdate"
    />
    <ModalDelete
      :isModalDeleteOpen="isModalDeleteOpen"
      :contentModalDelete="contentModalDelete"
      :pic="paramName"
      :client="paramClient"
      @close="toggleModalDelete"
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
    <div class="relative md:ml-64 bg-blueGray-50">
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
                    @click="toggleModalInsert"
                    class="flex justify-center px-4 py-1 -mt-5 transition-colors duration-100 rounded  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusCircleIcon class="flex-none w-6 mr-1"></PlusCircleIcon>
                    <p class="flex-none">PIC</p>
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
                        PIC
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Client
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        No. Telp
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Email
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <!-- <pre> {{ pics }} </pre> -->

                  <tbody
                    v-if="pics.data === undefined || pics.data.length === 0"
                    class="bg-blueGray-200"
                  >
                    <tr>
                      <td colspan="6" class="py-2 text-center bg-blueGray-200">
                        Data tidak tersedia
                      </td>
                    </tr>
                  </tbody>
                  <tbody v-else>
                    <tr v-for="(pic, index) in pics.data" :key="index">
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>
                      <th
                        class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ pic.name }}
                      </th>
                      <td
                        v-if="pic.client"
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ pic.client.company_name }}
                      </td>
                      <td
                        v-else
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        Belum ada client
                      </td>
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ pic.phone_number }}
                      </td>
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ pic.email }}
                      </td>
                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        <div class="space-x-1">
                          <button
                            @click="sendIdForUpdate(pic.id)"
                            class="px-1 py-1 text-white transition-colors duration-200  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                          >
                            <PencilIcon class="w-5"></PencilIcon>
                          </button>
                          <button
                            @click="
                              sendIdForDelete(
                                pic.id,
                                pic.name,
                                pic.client.company_name
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
import FormModalInsert from "../../../components/pic/FormModalInsert.vue";
import FormModalUpdate from "../../../components/pic/FormModalUpdate.vue";
import ModalDelete from "../../../components/pic/ModalDelete.vue";
import ModalAlert from "../../../components/global/ModalAlert.vue";
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";
import {
  InformationCircleIcon,
  TrashIcon,
  PencilIcon,
  PlusCircleIcon,
} from "@heroicons/vue/solid";
export default {
  components: {
    FormModalInsert,
    FormModalUpdate,
    Sidebar,
    Navbar,
    InformationCircleIcon,
    TrashIcon,
    PencilIcon,
    PlusCircleIcon,
    ModalDelete,
    ModalAlert,
  },
  setup() {
    // * define vuex
    const store = useStore();
    // ! retrieve all data pics
    store.dispatch("pic/getAllData");
    const pics = computed(() => {
      return store.getters["pic/getStatePics"];
    });
    // ! MODAL INSERT SECTION
    // * toggle
    const isModalInsertOpen = ref("");
    const toggleModalInsert = () => {
      isModalInsertOpen.value = !isModalInsertOpen.value;
    };
    const contentModalInsert = reactive({
      title: "",
      body: "",
    });
    // ! END OF MODAL INSERT
    // * a local state contain id for delete and update
    const paramId = ref(null);
    const paramName = ref(null);
    const paramClient = ref(null);
    // ! MODAL ALERT SECTION
    const isModalAlertOpen = ref("");
    const alertContent = reactive({
      type: "",
      body: "",
      title: "",
    });
    const toggleModalAlert = () => {
      isModalAlertOpen.value = !isModalAlertOpen.value;
    };
    // !END OF MODAL ALERT SECTION

    // ! MODAL DELETE SECTION
    const isModalDeleteOpen = ref("");
    const contentModalDelete = reactive({
      title: "Hapus PIC",
      body: "Yakin ingin menghapus PIC",
    });
    // * when its clicked, id and name assign to paramName and paramId
    const sendIdForDelete = (id, name, client) => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      paramId.value = id;
      paramName.value = name;
      paramClient.value = client;
    };
    const toggleModalDelete = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    // * func for delete data pic
    const remove = () => {
      // *call modal
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      // *dispatch delete action vuex
      store
        .dispatch("pic/deleteData", paramId.value)
        .then((res) => {
          // *dispatch get data after delete success
          store.dispatch("pic/getAllData");
          //* set alert message when delete is success
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "success";
          alertContent.body =
            "Hapus data PIC berhasil! Jika ingin memulihkan data. Silahkan pergi ke halaman Recycle Bin untuk memulihkan data";
          alertContent.title = "Berhail Menghapus!";
        })
        .catch((err) => {
          //* set alert message when delete is failed
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "failed";
          alertContent.body =
            "Hapus data PIC gagal! Silahkan cek koneksi anda dan coba lagi";
          alertContent.title = "Gagal Menghapus!";
        });
    };
    // ! END OF MODAL DELETE SECTION
    // ! MODAL UPDATE SECTION
    const isModalUpdateOpen = ref("");
    const toggleModalUpdate = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
    };
    const pic = reactive({
      data: [],
    });
    const sendIdForUpdate = (id) => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
      store.dispatch("pic/specificPic", id);
      pic.data = computed(() => {
        return store.getters["pic/getStatePic"];
      });
    };
    // ! END OF MODAL UPDATE SECTION
    return {
      pics,
      isModalInsertOpen,
      isModalDeleteOpen,
      toggleModalInsert,
      contentModalInsert,
      isModalAlertOpen,
      sendIdForDelete,
      remove,
      toggleModalDelete,
      paramName,
      paramId,
      paramClient,
      contentModalDelete,
      toggleModalAlert,
      alertContent,
      isModalUpdateOpen,
      toggleModalUpdate,
      sendIdForUpdate,
      pic,
    };
  },
};
</script>
