<template >
  <div class="antialiased text-blueGray-700">
    <main>
      <section class="relative w-screen h-screen min-h-screen py-40">
        <!-- start of background -->
        <div
          class="absolute top-0 bottom-0 w-screen h-screen bg-no-repeat bg-blueGray-800 bg-full"
          style="background-image: url(src/assets/img/register_bg_2.png)"
        >
          <!-- end of background -->

          <!-- start of validation message -->
          <div
            v-if="isVisibleAlert"
            class="flex items-center content-center justify-center text-center h-1/6"
          >
            <ModalAlert
              :contentAlert="contentAlert"
              :isModalAlertOpen="isVisibleAlert"
              @close-alert="closeModalAlert"
            ></ModalAlert>
          </div>
        </div>
        <!-- end of validation message -->

        <!-- start of card -->
        <div class="flex flex-col justify-center h-full max-h-screen px-4 mt-2">
          <div class="flex items-center content-center justify-center h-full">
            <div class="w-full px-4 lg:w-4/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
              >
                <div class="px-6 py-6 mb-0 rounded-t">
                  <div class="mb-3 text-center">
                    <h6 class="text-sm font-bold text-blueGray-500">
                      Sign in your account
                    </h6>
                  </div>
                  <!-- <div class="text-center btn-wrapper">
                    <button
                      @click="showModal"
                      class="inline-flex items-center px-4 py-2 mb-1 mr-2 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md"
                      type="button"
                    >
                      <img
                        alt="..."
                        class="w-5 mr-1"
                        src="/src/assets/img/github.svg"
                      />Github</button
                    ><button
                      @click="showModal"
                      class="inline-flex items-center px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none active:bg-blueGray-50 text-blueGray-700 focus:outline-none hover:shadow-md"
                      type="button"
                    >
                      <img
                        alt="..."
                        class="w-5 mr-1"
                        src="/src/assets/img/google.svg"
                      />Google
                    </button>
            
                  </div> -->
                  <hr class="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
                  <form @submit.prevent="login" @keyup.enter="login">
                    <div class="relative w-full mb-3">
                      <label
                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        for="grid-password"
                        >Email</label
                      >

                      <input
                        type="text"
                        v-model="email"
                        class="
                          w-full
                          px-3
                          py-3
                          text-sm
                          transition-all
                          duration-150
                          ease-linear
                          bg-white
                          border-0
                          rounded
                          shadow
                          ${blueGray}
                          text-blueGray-600
                          focus:outline-none focus:ring
                        "
                        :class="{
                          [`ring-1 ring-red-500 ${
                            validation.email
                              ? 'placeholder-red-500'
                              : 'placeholder-blueGray-300'
                          }`]: validation.email,
                        }"
                        placeholder="Email"
                      />
                      <!-- Start Alert email validation -->
                      <span v-if="validation.email">
                        <div
                          class="flex items-center justify-start py-2 font-medium text-red-600 "
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="w-5 h-5 mr-1 feather feather-alert-octagon"
                            >
                              <polygon
                                points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                              ></polygon>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </div>
                          <div
                            class="flex-initial max-w-full text-xs font-normal"
                          >
                            {{ validation.email[0] }}
                          </div>
                        </div>
                      </span>
                      <!-- End of validation -->
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        v-model="password"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow text-blueGray-600 focus:outline-none focus:ring"
                        :class="{
                          [`ring-1 ring-red-500 ${
                            validation.password
                              ? 'placeholder-red-500'
                              : 'placeholder-blueGray-300'
                          }`]: validation.password,
                        }"
                        placeholder="Password"
                      />
                      <!-- Alert password validation -->
                      <span v-if="validation.password">
                        <div
                          class="flex items-center justify-start py-2 font-medium text-red-600 "
                        >
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="w-5 h-5 mr-1 feather feather-alert-octagon"
                            >
                              <polygon
                                points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                              ></polygon>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                          </div>
                          <div
                            class="flex-initial max-w-full text-xs font-normal"
                          >
                            {{ validation.password[0] }}
                          </div>
                        </div>
                      </span>
                      <!-- End of Alert password validation -->
                    </div>
                    <div></div>
                    <div class="mt-6 text-center">
                      <button
                        :disabled="isDisabled"
                        :class="[isDisabled ? '' : 'active:bg-blueGray-600']"
                        class="flex justify-center w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-800 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="submit"
                      >
                        <img
                          v-if="isLoading"
                          src="/src/assets/img/spinner2.svg"
                          class="items-center w-5"
                          alt=""
                        />
                        <span v-if="isLoading" class=""> Signing... </span>
                        <span v-else>Sign In</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="flex flex-wrap mt-6">
                <div class="w-1/2">
                  <a href="#pablo" class="text-blueGray-200"
                    ><small>Forgot password?</small></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end of card -->
      </section>
    </main>
  </div>
</template>



<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import Modal from "../../Modal.vue";
import ModalAlert from "../../ModalAlert.vue";
export default {
  components: { Modal, ModalAlert },
  setup() {
    document.title = "Login | Management Madtive Studio";
    const store = useStore();
    const route = useRouter();
    const isDisabled = ref(false);
    const isLoading = ref(false);
      // if (store.state.auth.token) {
      //   route.push({
      //     name: "admin",
      //   });
      // }

    const email = ref("");
    const password = ref("");
    const validation = reactive({
      email: "",
      password: "",
    });
    const isVisible = ref(false);
    const isVisibleAlert = ref(false);
    const loginFailed = ref("");
    const blueGray = ref("placeholder-blueGray-300");
    const contentAlert = reactive({
      title: "Warning",
      body: "Login gagal! Email atau password salah!",
    });

    const login = () => {
      isLoading.value = true;
      isDisabled.value = true;
      store.dispatch("employees/getEmployees");
      store
        .dispatch("auth/retrieveToken", {
          email: email.value,
          password: password.value,
        })
        .then((response) => {
          if (response.data.success) {
            route.push({
              name: "admin",
            });
          } else {
            isLoading.value = false;
            isDisabled.value = false;
            loginFailed.value = true;
            isVisibleAlert.value = true;
            validation.email = "";
            validation.password = "";
          }
        })
        .catch((error) => {
          isLoading.value = false;
          isDisabled.value = false;
          loginFailed.value = "";
          console.log(error.responnse.data);
          validation.email = error.response.data.email;
          validation.password = error.response.data.password;
        });
    };

    const showModal = () => {
      isVisible.value = true;
    };
    const showModalAlert = () => {
      isVisibleAlert.value = true;
    };

    const closeModal = () => {
      isVisible.value = false;
    };
    const closeModalAlert = () => {
      isVisibleAlert.value = false;
    };

    return {
      login,
      validation,
      email,
      password,
      loginFailed,
      blueGray,
      isVisible,
      isVisibleAlert,
      showModal,
      showModalAlert,
      closeModal,
      closeModalAlert,
      contentAlert,
      isLoading,
      isDisabled,
    };
  },
};
</script>