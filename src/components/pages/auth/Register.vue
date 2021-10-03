<template>
  <!-- <div class="min-h-screen bg-gradient-to-b from-gray-600 to-gray-500">
    <div class="flex items-center justify-center h-screen">
      <div v-show="emailVerification">Cek inbox, sat!</div>
      <button class="px-10 py-4 bg-red-700" @click="resendEmail">
        Klik sini, buat kirim ulang email verifikasi, sat!
      </button> -->
  <!-- card  -->
  <!-- <div class="flex mx-24 bg-gray-400 shadow">
        <div class="flex-1">
          <img src="/src/assets/img/loginbg.jpg" class="object-cover" alt="" />
        </div>
        <div class="flex-1 text-gray-700 font-poppins">
          <p class="flex justify-center mt-10 text-4xl font-bold">
            Sign up your account
          </p>

          <div class="container px-10 mt-5 space-y-3 flex-3">
            <form @submit.prevent="register">
              <div>
                <label for="name" class="font-bold">Name</label>
                <input
                  v-model="name"
                  name="name"
                  type="text"
                  class="block w-full pl-2 transition-shadow duration-500 rounded-none h-9 duration-400 ease ring-2 focus:outline-none focus:ring-4 focus:ring-gray-800 ring-gray-600"
                />
                <span v-if="validation.name" class="px-5 py-1 bg-red-500">
                  {{ validation.name[0] }}
                </span>
              </div>
              <div>
                <label for="email" class="font-bold">Email</label>
                <input
                  v-model="email"
                  name="email"
                  type="text"
                  class="block w-full pl-2 transition-shadow duration-500 rounded-none h-9 duration-400 ease ring-2 focus:outline-none focus:ring-4 focus:ring-gray-800 ring-gray-600"
                />

                <span v-if="validation.email" class="px-5 py-1 bg-red-500">
                  {{ validation.email[0] }}
                </span>
              </div>
              <div class="flex space-x-5">
                <div class="">
                  <label for="password" class="font-bold">Password</label>
                  <input
                    v-model="password"
                    name="password"
                    type="password"
                    class="block w-full pl-2 transition-shadow duration-500 rounded-none h-9 duration-400 ease ring-2 focus:outline-none focus:ring-4 focus:ring-gray-800 ring-gray-600"
                  />
                  <span v-if="validation.password" class="px-5 py-1 bg-red-500">
                    {{ validation.password[0] }}
                  </span>
                </div>
                <div class="mb-10">
                  <label for="password" class="font-bold"
                    >Password Confirmation</label
                  >
                  <input
                    v-model="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    class="block pl-2 transition-shadow duration-500 rounded-none h-9 duration-400 ease ring-2 focus:outline-none focus:ring-4 focus:ring-gray-800 ring-gray-600"
                  />
                  <span
                    v-if="validation.password_confirmation"
                    class="py-5 bg-red-500"
                  >
                    {{ validation.password_confirmation[0] }}
                  </span>
                </div>
              </div>
              <div class="flex justify-end space-x-2">
                <button
                  type="submit"
                  class="h-10 px-5 text-gray-800 transition duration-200 ease-linear bg-gray-400 hover:bg-gray-600 hover:text-gray-400"
                >
                  Sign up
                </button>
                <button
                  type="submit"
                  class="h-10 px-5 text-gray-400 transition duration-200 ease-linear bg-gray-800 hover:bg-gray-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> -->

  <div class="antialiased text-blueGray-700">
    <main>
      <section class="relative w-screen h-screen min-h-screen py-40">
        <div
          class="absolute top-0 w-full h-full bg-no-repeat  bg-blueGray-800 bg-full"
          style="background-image: url(/src/assets/img/register_bg_2.png)"
        ></div>
        <div class="container h-full px-4 mx-auto">
          <div class="flex items-center content-center justify-center h-full">
            <div class="w-full px-4 lg:w-6/12">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg  bg-blueGray-200"
              >
                <div class="px-6 py-6 mb-0 rounded-t">
                  <div class="mb-3 text-center">
                    <div class="mb-3 font-bold text-center text-blueGray-600">
                      <h1 class="text-xl">Daftar akun anda.</h1>
                    </div>
                  </div>

                  <hr class="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
                  <!-- Start of Form Register -->
                  <form @submit.prevent="register">
                    <div class="relative w-full mb-3">
                      <label
                        class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Nama Lengkap
                      </label>
                      <input
                        v-model="name"
                        type="text"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Jhon doe"
                      />
                      <!-- Start of validation name -->
                      <span v-if="validation.name">
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
                            {{ validation.name[0] }}
                          </div>
                        </div>
                      </span>
                      <!-- End of validation name -->
                    </div>

                    <div class="flex space-x-2">
                      <div class="relative flex-1 w-full mb-3">
                        <label
                          class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          Phone Number
                        </label>
                        <input
                          v-model="phone_number"
                          type="text"
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="+62"
                        />
                        <!-- Start of validation phone_number -->
                        <span v-if="validation.phone_number">
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
                                class="w-5 h-5 mr-1  feather feather-alert-octagon"
                              >
                                <polygon
                                  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                                ></polygon>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                              </svg>
                            </div>
                            <div
                              class="flex-initial max-w-full text-xs font-normal "
                            >
                              {{ validation.phone_number[0] }}
                            </div>
                          </div>
                        </span>
                        <!-- End of validation phone_number -->
                      </div>
                      <div class="relative flex-1 w-full mb-3">
                        <label
                          class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          v-model="email"
                          type="email"
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="meet@madtive.com"
                        />
                        <!-- Start of validation email -->
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
                                class="w-5 h-5 mr-1  feather feather-alert-octagon"
                              >
                                <polygon
                                  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                                ></polygon>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                              </svg>
                            </div>
                            <div
                              class="flex-initial max-w-full text-xs font-normal "
                            >
                              {{ validation.email[0] }}
                            </div>
                          </div>
                        </span>
                        <!-- End of validation email -->
                      </div>
                    </div>

                    <div class="flex space-x-3">
                      <div class="relative flex-1 w-full mb-3">
                        <label
                          class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          v-model="password"
                          type="password"
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="+62"
                        />
                        <!-- Start of validation password -->
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
                                class="w-5 h-5 mr-1  feather feather-alert-octagon"
                              >
                                <polygon
                                  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                                ></polygon>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                              </svg>
                            </div>
                            <div
                              class="flex-initial max-w-full text-xs font-normal "
                            >
                              {{ validation.password[0] }}
                            </div>
                          </div>
                        </span>
                        <!-- End of validation password -->
                      </div>
                      <div class="relative flex-1 w-full mb-3">
                        <label
                          class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                          htmlFor="grid-password"
                        >
                          Konfirmasi Password
                        </label>
                        <input
                          v-model="password_confirmation"
                          type="password"
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder=""
                        />
                        <!-- Start of validation password_confirmation -->
                        <span v-if="validation.password_confirmation">
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
                                class="w-5 h-5 mr-1  feather feather-alert-octagon"
                              >
                                <polygon
                                  points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"
                                ></polygon>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                              </svg>
                            </div>
                            <div
                              class="flex-initial max-w-full text-xs font-normal "
                            >
                              {{ validation.password_confirmation[0] }}
                            </div>
                          </div>
                        </span>
                        <!-- End of validation password_confirmation -->
                      </div>
                    </div>

                    <!-- <div class="relative w-full mb-3">
                      <label
                        class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Addreess
                      </label> -->
                    <!-- <input
                          type=""
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                          placeholder="+62"
                        /> -->
                    <!-- <textarea
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        name=""
                        id=""
                        cols="10"
                        rows="10"
                        placeholder="Jl. Jend Sudirman No.36, Cianjur, Jawa Barat"
                      ></textarea>
                    </div> -->

                    <div class="mt-6 text-center">
                      <button
                        :disabled="isDisabled"
                        :class="[isDisabled ? '' : 'active:bg-blueGray-600']"
                        class="flex w-full px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none  disabled:opacity-50 place-content-center bg-blueGray-800 hover:shadow-lg focus:outline-none"
                        type="submit"
                      >
                        <img
                          v-if="buttonLoading"
                          src="/src/assets/img/spinner2.svg"
                          class="w-5"
                          alt=""
                        />
                        <span class=""> SIGN UP </span>
                      </button>
                      <router-link :to="{ name: 'login' }">
                        <span
                          class="ml-2 text-sm font-semibold text-blueGray-600"
                          >Sudah punya akun? Login disini!</span
                        >
                      </router-link>
                    </div>
                  </form>
                  <!-- End of Form Register -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const name = ref("");
    const email = ref("");
    const phone_number = ref("");
    const password = ref("");
    const password_confirmation = ref("");
    const buttonLoading = ref("");
    const isDisabled = ref(false);
    const validation = reactive({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      phone_number: "",
    });

    const register = () => {
      buttonLoading.value = true;
      isDisabled.value = true;
      store
        .dispatch("auth/registering", {
          name: name.value,
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value,
          phone_number: phone_number.value,
        })
        .then((res) => {
          isDisabled.value = true;
          router.push({
            name: "login",
          });
        })
        .catch((err) => {
          isDisabled.value = false;
          buttonLoading.value = false;
          validation.name = err.response.data.name;
          validation.email = err.response.data.email;
          validation.password = err.response.data.password;
          validation.password_confirmation =
            err.response.data.password_confirmation;
          validation.phone_number = err.response.data.phone_number;
        });
    };
    return {
      name,
      password,
      password_confirmation,
      email,
      validation,
      register,
      phone_number,
      buttonLoading,
      isDisabled,
    };
  },
};
</script>
<style scoped>
button:disabled {
  cursor: not-allowed;
  pointer-events: all !important;
}
</style>