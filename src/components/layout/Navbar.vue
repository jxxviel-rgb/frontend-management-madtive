<template>
  <nav
    v-if="user"
    class="absolute top-0 left-0 z-10 flex items-center w-full p-4 bg-transparent  md:flex-row md:flex-nowrap md:justify-start"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-4  mx-autp md:flex-nowrap md:px-10"
    >
      <router-link
        class="hidden text-sm font-semibold text-white uppercase  lg:inline-block"
        :to="{ name: 'admin' }"
        >Dashboard</router-link
      >

      <ul class="flex-col items-center hidden list-none md:flex-row md:flex">
        <div>
          <Menu as="div" class="relative inline-block text-left">
            <div v-if="user.employee">
              <MenuButton
                class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md  bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Halo, {{ firstName[0] }}!
                <ChevronDownIcon
                  class="w-5 h-5 ml-2 -mr-1  text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>
            <div v-else class="animate-pulse">
              <MenuButton
                class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white rounded-md  w-36 bg-blueGray-300 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <ChevronDownIcon
                  class="w-5 h-5 ml-2 -mr-1  text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="logout"
                      :class="[
                        active
                          ? 'bg-blueGray-500 text-white'
                          : 'text-blueGray-900',
                        'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                      ]"
                    >
                      <LogoutIcon
                        :active="active"
                        class="w-5 h-5 mr-2 text-blueGray"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { LogoutIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
// import ArchiveIcon from "./archive-icon.vue";
// import DuplicateIcon from "./duplicate-icon.vue";
// import MoveIcon from "./move-icon.vue";
// import EditIcon from "./edit-icon.vue";
// import DeleteIcon from "./delete-icon.vue";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    LogoutIcon,
    // ArchiveIcon,
    // DuplicateIcon,
    // MoveIcon,
    // EditIcon,
    // DeleteIcon,
  },
  setup() {
    const store = useStore();
    const token = localStorage.getItem("token");
    store.dispatch("user/retrieveUserInfo", token);
    const user = computed(() => {
      return store.state.user.user;
    });
    const logout = () => {
      store.dispatch("auth/loggedOut", token).then((res) => {
        router.push({
          name: "login",
        });
      });
    };
    const firstName = computed(() => {
      return store.state.user.firstName;
    });

    console.log(firstName);
    return { user, logout, firstName };
  },
};
</script>

<style>
</style>