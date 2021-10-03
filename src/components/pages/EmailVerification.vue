<template>
  <div class="antialiased text-blueGray-700">
    <main>
      <section class="relative w-screen h-screen min-h-screen py-40">
        <!-- start of background -->
        <div
          class="
            absolute
            top-0
            bottom-0
            w-screen
            h-screen
            bg-no-repeat bg-blueGray-800 bg-full
          "
          style="background-image: url(/../src/assets/img/register_bg_2.png)"
        ></div>
        <!-- end of background -->

        <!-- start of card -->
        <div class="flex flex-col justify-center h-full max-h-screen px-4 mt-2">
          <div class="flex items-center content-center justify-center h-full">
            <div class="w-full px-4 lg:w-3/4">
              <div
                class="
                  relative
                  flex flex-col
                  w-full
                  min-w-0
                  mb-6
                  break-words
                  border-0
                  rounded-lg
                  shadow-lg
                  bg-blueGray-200
                "
              >
                <div class="px-6 py-6 mb-0 rounded-t">
                  <div class="mb-3 text-center">
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        py-2
                        font-medium
                        text-blueGray-600
                      "
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
                        class="
                          flex-initial
                          max-w-full
                          text-lg
                          font-bold
                          text-blueGray-600
                        "
                      >
                        Daftar akun berhasil dan Email verifikasi sudah kami
                        kirim ke email anda.
                      </div>
                    </div>
                  </div>

                  <hr class="mt-3 border-b-1 border-blueGray-400" />
                </div>
                <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
                  <div class="mb-3 font-normal text-center text-blueGray-600">
                    <h4>
                      Sekarang anda sudah bisa login,
                      <router-link :to="{ name: 'login' }">
                        <span class="text-indigo-500 underline">
                          Klik disini untuk login</span
                        ></router-link
                      >. <br />
                      Note : Jika email verifikasi tidak terkirim/kadaluarsa.
                      Silahkan kirim ulang, dengan login dan masuk ke laman
                      profil anda dan klik kirim ulang email verifikasi. <br />
                    </h4>

                    <h4 class="text-yellow-600">
                      Peringatan : Jika anda belum verifikasi email, maka anda
                      tidak bisa melihat konten dalam web kami. Harap verifikasi
                      terlebih dahulu. Terima kasih.
                    </h4>
                  </div>
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