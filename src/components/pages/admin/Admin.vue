<template>
  <!--  <div v-if="profil.user.employee" class="font-bold text-rose-600">
    Selamat datang
    {{ profil.user.employee.name }}
    !
  </div>
  <h2
    v-if="
      typeof profil.user.email_verified_at === 'undefined' ||
      profil.user.email_verified_at === null
    "
    class=""
  >
    <button @click="sendEmailVerification" class="px-10 py-3 bg-rose-300">
      Klik disini untuk verifikasi email.
    </button>
  </h2>
  <h2 v-if="successVerification" class="bg-red-600">
    Email sudah dikirim, cek kembali email anda.
  </h2>
  <button
    @click.prevent="logout"
    class="px-4 py-2 text-white transition-colors duration-300 bg-gray-700 hover:bg-gray-300 hover:text-gray-800"
  >
    Logout
  </button>
  <button
    @click="showModal"
    class="px-4 py-2 text-gray-800 transition-colors duration-300 bg-gray-300 hover:text-white hover:bg-gray-700"
  >
    Tambah Karyawan
  </button> -->
  <!-- ** Modal component -->
  <!-- <Modal :isVisible="isVisible" @close="closeModal"></Modal> -->
  <!-- Modal component -->
  <!--   <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Email</th>
        <th>Posisi</th>
        <th>Nomor Telp</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in results.employees.data" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          {{ item.employee.name }}
        </td>
        <td v-if="typeof item === 'undefined' || item === null">
          {{ (item.user = "") }}
        </td>
        <td v-else>{{ item.email }}</td>
        <td
          v-if="typeof item.position === 'undefined' || item.position === null"
        >
          {{ (item.position = "Belum ada posisi") }}
        </td>
        <td v-else>{{ item.position }}</td>
        <td
          v-if="
            typeof item.phone_number === 'undefined' ||
            item.phone_number === null ||
            item.phone_number === ''
          "
        >
          {{ (item.phone_number = "Belum ada nomor telepon") }}
        </td>
        <td>{{ item.phone_number }}</td>
      </tr>
    </tbody>
  </table> -->
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root">
    <!-- Sidebar -->
    <Sidebar></Sidebar>
    <!-- Sidebar -->
    <div class="relative md:ml-64 bg-blueGray-50">
      <!-- Navbar -->

      <Navbar></Navbar>
      <!-- Navbar -->
      <!-- Header -->
      <div class="relative pt-12 pb-32 bg-pink-600 md:pt-32">
        <div class="w-full px-4 mx-auto md:px-10">
          <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative flex-1 flex-grow w-full max-w-full pr-4"
                      >
                        <h5
                          class="text-xs font-bold uppercase text-blueGray-400"
                        >
                          Earnings
                        </h5>
                        <span class="text-xl font-semibold text-blueGray-700">
                          $350,897
                        </span>
                      </div>
                      <div class="relative flex-initial w-auto pl-4">
                        <div
                          class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-red-500 rounded-full shadow-lg "
                        >
                          <i class="fas fa-money-bill-wave"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative flex-1 flex-grow w-full max-w-full pr-4"
                      >
                        <h5
                          class="text-xs font-bold uppercase text-blueGray-400"
                        >
                          Total Clients
                        </h5>
                        <span class="text-xl font-semibold text-blueGray-700">
                          2,356
                        </span>
                      </div>
                      <div class="relative flex-initial w-auto pl-4">
                        <div
                          class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-orange-500 rounded-full shadow-lg "
                        >
                          <i class="fas fa-building"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative flex-1 flex-grow w-full max-w-full pr-4"
                      >
                        <h5
                          class="text-xs font-bold uppercase text-blueGray-400"
                        >
                          Total Member
                        </h5>
                        <span class="text-xl font-semibold text-blueGray-700">
                          924
                        </span>
                      </div>
                      <div class="relative flex-initial w-auto pl-4">
                        <div
                          class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white bg-pink-500 rounded-full shadow-lg "
                        >
                          <i class="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 lg:w-6/12 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg  xl:mb-0"
                >
                  <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                      <div
                        class="relative flex-1 flex-grow w-full max-w-full pr-4"
                      >
                        <h5
                          class="text-xs font-bold uppercase text-blueGray-400"
                        >
                          Member Online
                        </h5>
                        <span class="text-xl font-semibold text-blueGray-700">
                          49
                        </span>
                      </div>
                      <div class="relative flex-initial w-auto pl-4">
                        <div
                          class="inline-flex items-center justify-center w-12 h-12 p-3 text-center text-white rounded-full shadow-lg  bg-lightBlue-500"
                        >
                          <i class="fas fa-user-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full px-4 mx-auto -m-24 md:px-10">
        <div class="flex flex-wrap">
          <div class="w-full px-4 mb-12 xl:w-8/12 xl:mb-0">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded shadow-lg  bg-blueGray-700"
            >
              <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="relative flex-1 flex-grow w-full max-w-full">
                    <h6
                      class="mb-1 text-xs font-semibold uppercase  text-blueGray-100"
                    >
                      Overview
                    </h6>
                    <h2 class="text-xl font-semibold text-white">
                      Sales value
                    </h2>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-4">
                <!-- Chart -->
                <div class="relative h-350-px">
                  <canvas id="line-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 xl:w-4/12">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg "
            >
              <div class="px-4 py-3 mb-0 bg-transparent rounded-t">
                <div class="flex flex-wrap items-center">
                  <div class="relative flex-1 flex-grow w-full max-w-full">
                    <h6
                      class="mb-1 text-xs font-semibold uppercase  text-blueGray-400"
                    >
                      Performance
                    </h6>
                    <h2 class="text-xl font-semibold text-blueGray-700">
                      Total orders
                    </h2>
                  </div>
                </div>
              </div>
              <div class="flex-auto p-4">
                <!-- Chart -->
                <div class="relative h-350-px">
                  <canvas id="bar-chart"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Sidebar from "../../layout/Sidebar.vue";
import Navbar from "../../layout/Navbar.vue";
export default {
  components: { Sidebar, Navbar },
  setup() {
    const store = useStore();
    const router = useRouter();
    const isVisible = ref("");
    const successVerification = ref("");

    /* token state */
    const token = localStorage.getItem("token");
    // dispatching action getEmployees in modules employees
    /* Dispatching for retrieving user info */
    /**
     * * get all data employees from vuex
     */
    store.dispatch("user/retrieveUserInfo", token).then((res) => {});
    store.dispatch("employees/getEmployees");
    const showModal = () => {
      isVisible.value = true;
    };
    const closeModal = () => {
      isVisible.value = false;
    };

    const logout = () => {
      store.dispatch("auth/loggedOut", token).then((res) => {
        router.push({
          name: "login",
        });
      });
    };
    const sendEmailVerification = () => {
      store.dispatch("auth/sendEmailVerification").then((res) => {
        successVerification.value = true;
        isVisible.value = true;
      });
    };
    const results = computed(() => {
      return store.state.employees;
    });
    const profil = computed(() => {
      return store.state.user;
    });

    return {
      results,
      profil,
      logout,
      isVisible,
      showModal,
      closeModal,
      sendEmailVerification,
      successVerification,
    };
  },
};
</script>