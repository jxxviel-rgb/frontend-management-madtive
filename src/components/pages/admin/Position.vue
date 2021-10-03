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
      :contentModalUpdate="contentModalUpdate"
      :position="positionProps"
      @close="toggleModalUpdate"
    ></FormModalUpdate>
    <ModalDelete
      :positionName="positionName"
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
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                ></div>
              </div>
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                ></div>
              </div>
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                ></div>
              </div>
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words rounded shadow-lg  xl:mb-0"
                >
                  <button
                    @click="toggleModalInsert"
                    class="flex justify-center px-4 py-1 -mt-5 space-x-1 transition-colors duration-100  hover:bg-blueGray-300 text-blueGray-800 bg-blueGray-200 active:bg-blueGray-400"
                  >
                    <PlusSmIcon class="flex-none w-6"></PlusSmIcon>
                    <p class="flex-none">Add Employee</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 mx-auto -m-24 md:px-10">
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
                        Posisi
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-blueGray-200">
                    <tr
                      v-for="(position, index) in positions.data"
                      :key="index"
                    >
                      <td
                        class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ index + 1 }}
                      </td>
                      <th
                        class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        {{ position.position_name }}
                      </th>

                      <td
                        class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                      >
                        <div class="space-x-1">
                          <button
                            @click="sendIdAndOpenModalUpdate(position.id)"
                            class="px-3 py-2 text-white transition-colors duration-200 rounded-md  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                          >
                            <PencilIcon class="w-5"></PencilIcon>
                          </button>

                          <button
                            @click="
                              sendIdForDelete(
                                position.id,
                                position.position_name
                              )
                            "
                            class="px-3 py-2 text-white transition-colors duration-200 rounded-md  bg-rose-500 hover:bg-rose-600 active:bg-rose-800"
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
import { PencilIcon, TrashIcon, PlusSmIcon } from "@heroicons/vue/outline";
import Sidebar from "../../layout/Sidebar.vue";
import Navbar from "../../layout/Navbar.vue";
import FormModalInsert from "../../position/FormModalInsert.vue";
import FormModalUpdate from "../../position/FormModalUpdate.vue";
import ModalDelete from "../../position/ModalDelete.vue";
import ModalAlert from "../../position/ModalAlert.vue";
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    PencilIcon,
    TrashIcon,
    PlusSmIcon,
    Sidebar,
    Navbar,
    FormModalInsert,
    FormModalUpdate,
    ModalDelete,
    ModalAlert,
  },
  setup() {
    const store = useStore();
    // * MODAL INSERT
    const isOpen = ref("");
    const content = reactive({
      title: "Tambah posisi",
      body: "",
    });
    const toggleModalInsert = () => {
      isOpen.value = !isOpen.value;
    };
    // * MODAL DELETE
    const isModalDeleteOpen = ref("");
    const toggleModalDelete = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    const contentModalDelete = reactive({
      title: "Hapus",
      body: "Yakin ingin menghapus data posisi",
    });
    const positionId = ref(null);
    const positionName = ref(null);
    const sendIdForDelete = (id, name) => {
      positionName.value = name;
      positionId.value = id;
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
    };
    // * SHOW MODAL INFO AFTER DELETE
    const isModalAlertOpen = ref("");
    const alertContent = reactive({
      type: "",
      title: "",
      body: "",
    });
    const toggleModalAlert = () => {
      isModalAlertOpen.value = !isModalAlertOpen.value;
    };
    const remove = () => {
      isModalDeleteOpen.value = !isModalDeleteOpen.value;
      store
        .dispatch("position/deletePosition", positionId.value)
        .then((res) => {
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "success";
          alertContent.title = "Hapus Berhasil!";
          alertContent.body =
            "Hapus posisi telah berhasil. Jika ingin memulihkan data, pergi ke halaman Recycle Bin.";
          store.dispatch("position/getAllPositions");
        })
        .catch((err) => {
          isModalAlertOpen.value = !isModalAlertOpen.value;
          alertContent.type = "failed";
          alertContent.title = "Hapus Gagal!";
          alertContent.body =
            "Hapus data posisi gagal. Silahkan coba lagi dan cek koneksi anda.";
        });
    };
    // * DISPATCH ALL POSITIONS
    store.dispatch("position/getAllPositions");
    // * STATE FOR SHOWING POSITIONS DATA
    const positions = computed(() => {
      return store.getters["position/getPositionsState"];
    });
    // * MODAL UPDATE
    const isModalUpdateOpen = ref("");
    const toggleModalUpdate = () => {
      isModalUpdateOpen.value = !isModalUpdateOpen;
    };
    const contentModalUpdate = reactive({
      title: "Edit Posisi",
      body: "",
    });
    const positionProps = reactive({
      data: [],
    });
    const sendIdAndOpenModalUpdate = (id) => {
      isModalUpdateOpen.value = !isModalUpdateOpen.value;
      store.dispatch("position/show", id);
      positionProps.data = computed(() => {
        return store.state.position.position;
      });
    };

    return {
      // *MODAL UPDATE
      isModalUpdateOpen,
      contentModalUpdate,
      toggleModalUpdate,
      sendIdAndOpenModalUpdate,
      positionProps,
      // * MODAL INSERT
      isOpen,
      content,
      toggleModalInsert,
      //   * SHOWING ALL DATA POSITIONS
      positions,
      //   *MODAL DELETE
      isModalDeleteOpen,
      contentModalDelete,
      toggleModalDelete,
      //   *MODAL INFO
      isModalAlertOpen,
      alertContent,
      sendIdForDelete,
      positionName,
      toggleModalAlert,
      // * remove existing position data
      remove,
    };
  },
};
</script>