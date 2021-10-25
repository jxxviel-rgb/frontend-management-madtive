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
                <div class="items-start mb-5">
                  <!-- <span class="p-2 rounded bg-blueGray-800 text-blueGray-300">
                    Detail Tim pada Project :
                    <span class="font-semibold text-blueGray-400">{{
                      projectNameLabel
                    }}</span>
                  </span> -->
                </div>
                <div class="flex px-4 space-x-0">
                  <div
                    class="flex-none min-w-0 mb-6 -ml-4 break-words rounded shadow-lg "
                  >
                    <button
                      @click="toggleModalInsert"
                      class="flex justify-center px-4 py-2 space-x-1 transition-colors duration-100 rounded-md  hover:bg-blueGray-400 hover:text-blueGray-800 text-blueGray-800 bg-blueGray-300 active:bg-blueGray-400"
                    >
                      <PlusCircleIcon class="flex-none w-6" />
                      <p class="flex-none">PIC</p>
                    </button>
                  </div>
                </div>
                <div class="block w-full overflow-x-auto shadow">
                  <table
                    class="items-center w-full break-words bg-transparent border-collapse "
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
                          Nama
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
                    <tbody class="bg-blueGray-200">
                      <template v-if="pics.data">
                        <template v-if="pics.data.length === 0">
                          <tr>
                            <td colspan="6" class="text-center">
                              Tidak ada data
                            </td>
                          </tr>
                        </template>
                        <template v-else>
                          <tr v-for="(pic, index) in pics.data" :key="index">
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ index + 1 }}
                            </td>
                            <th
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ pic.name }}
                            </th>

                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ pic.phone_number }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              {{ pic.email }}
                            </td>
                            <td
                              class="p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                            >
                              <div class="">
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
                    </tbody>
                  </table>
                </div>
              </div>
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
              </div>
            </div>
          </TransitionChild>
        </div>
        <FormModalInsert
          :isModalInsertOpen="isModalInsertOpen"
          @close="toggleModalInsert"
        ></FormModalInsert>
        <FormModalUpdate
          :isOpen="isModalUpdateOpen"
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
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script setup>
import { computed, ref, reactive, onMounted } from "vue";
import {
  TransitionChild,
  TransitionRoot,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { PencilIcon, TrashIcon, PlusCircleIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import FormModalUpdate from "../../components/pic/FormModalUpdate.vue";
import FormModalInsert from "../../components/pic/FormModalInsert.vue";
import ModalDelete from "../../components/pic/ModalDelete.vue";
import ModalAlert from "../../components/pic/ModalAlert.vue";
const emit = defineEmits(["close"]);
const props = defineProps({
  isOpen: Boolean,
});
const containerRef = ref(null);
const store = useStore();
const isOpen = computed(() => {
  return props.isOpen;
});
const isModalInsertOpen = ref(false);
const toggleModalInsert = () => {
  isModalInsertOpen.value = !isModalInsertOpen.value;
};
const clientId = computed(() => {
  return store.getters["client/getStateClientId"];
});
const pics = computed(() => {
  return store.getters["pic/getStatePicsClient"];
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
// !END OF MODAL ALERT SECTION

// ! MODAL DELETE SECTION
const isModalDeleteOpen = ref(false);
const contentModalDelete = reactive({
  title: "Hapus PIC",
  body: "Yakin ingin menghapus PIC",
});
const paramId = ref(null);
const paramName = ref(null);
const paramClient = ref(null);
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
      store.dispatch("pic/getAllPicsClient", clientId.value);
      //* set alert message when delete is success
      isModalAlertOpen.value = true;
      alertContent.type = "success";
      alertContent.body =
        "Hapus data PIC berhasil! Jika ingin memulihkan data. Silahkan pergi ke halaman Recycle Bin untuk memulihkan data";
      alertContent.title = "Berhail Menghapus!";
    })
    .catch((err) => {
      //* set alert message when delete is failed
      isModalAlertOpen.value = true;
      alertContent.type = "failed";
      alertContent.body =
        "Hapus data PIC gagal! Silahkan cek koneksi anda dan coba lagi";
      alertContent.title = "Gagal Menghapus!";
    });
};
// ! END OF MODAL DELETE SECTION
// ! MODAL UPDATE SECTION
const isModalUpdateOpen = ref(false);
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
</script>
