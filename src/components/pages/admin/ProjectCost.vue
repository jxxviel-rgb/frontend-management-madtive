<template>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Modal call section -->
    <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      @close="closeModalUpdate"
    />
    <!-- <FormModalUpdate
      :isModalUpdateOpen="isModalUpdateOpen"
      :contentModalUpdate="contentModalUpdate"
      :position="positionProps"
      @close="toggleModalUpdate"
    ></FormModalUpdate> -->
    <!-- <ModalDelete
      :positionName="positionName"
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
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg "
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
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Pajak
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Profit Perusahaan
                      </th>
                      <th
                        class="px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Profit Team
                      </th>
                      <th
                        class="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid  whitespace-nowrap text-blueGray-500"
                      >
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <template v-if="projectCost.data">
                    <template v-if="projectCost.data.length === 0">
                      <tr>
                        <td colspan="6" class="text-center">Tidak ada data</td>
                      </tr>
                    </template>
                    <template v-else>
                      <tbody class="bg-blueGray-200">
                        <tr
                          v-for="(projectCost, index) in projectCost.data"
                          :key="index"
                        >
                          <td
                            class="px-4 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ index + 1 }}
                          </td>
                          <td
                            class="p-2 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ projectCost.tax }}%
                          </td>
                          <td
                            class="p-2 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ projectCost.profit_team }}%
                          </td>
                          <td
                            class="p-2 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            {{ projectCost.profit_company }}%
                          </td>

                          <td
                            class="p-2 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0  whitespace-nowrap"
                          >
                            <button
                              @click="toggleModalUpdate(projectCost.id)"
                              class="px-1 py-1 text-white transition-colors duration-200 rounded  bg-sky-500 hover:bg-sky-600 active:bg-sky-800"
                            >
                              <PencilIcon class="w-5"></PencilIcon>
                            </button>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { PencilIcon } from "@heroicons/vue/solid";
import FormModalUpdate from "../../../components/projectCost/FormModalUpdate.vue";
const store = useStore();
store.dispatch("projectCost/getDataProjectCost");
const projectCost = computed(() => {
  return store.getters["projectCost/getStateProjectCost"];
});
const isModalUpdateOpen = ref(false);
const toggleModalUpdate = (id) => {
  isModalUpdateOpen.value = !isModalUpdateOpen.value;
  store.dispatch("projectCost/showData", id);
};
const closeModalUpdate = () => {
  isModalUpdateOpen.value = !isModalUpdateOpen.value;
};
</script>