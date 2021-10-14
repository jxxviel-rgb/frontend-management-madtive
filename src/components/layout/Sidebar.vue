<template>
  <nav
    class="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl  md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-0 mx-auto  md:flex-col md:items-stretch md:min-h-full md:flex-nowrap"
    >
      <button
        class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer  md:hidden"
        type="button"
        @click="toggleNavbar('example-collapse-sidebar')"
      >
        <MenuIcon class="w-6"></MenuIcon>
      </button>
      <a
        class="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase  md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
        href="/admin/dashboard"
      >
        Madtive Studio
      </a>
      <ul class="flex flex-wrap items-center list-none md:hidden">
        <li class="relative inline-block">
          <a
            class="block px-3 py-1 text-blueGray-500"
            href="#pablo"
            @click="openDropdown($event, 'notification-dropdown')"
            ><i class="fas fa-bell"></i
          ></a>
        </li>
        <li class="relative inline-block">
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
          <div
            class="z-50 hidden float-left py-2 text-base text-left list-none bg-white rounded shadow-lg  min-w-48"
            id="user-responsive-dropdown"
          >
            <a
              href="#pablo"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent  whitespace-nowrap text-blueGray-700"
              >Action</a
            ><a
              href="#pablo"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent  whitespace-nowrap text-blueGray-700"
              >Another action</a
            ><a
              href="#pablo"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent  whitespace-nowrap text-blueGray-700"
              >Something else here</a
            >
            <div class="h-0 my-2 border border-solid border-blueGray-100"></div>
            <a
              href="#pablo"
              class="block w-full px-4 py-2 text-sm font-normal bg-transparent  whitespace-nowrap text-blueGray-700"
              >Seprated link</a
            >
          </div>
        </li>
      </ul>
      <div
        class="absolute top-0 left-0 right-0 z-40 items-center flex-1 hidden h-auto overflow-x-hidden overflow-y-auto rounded shadow  md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none"
        id="example-collapse-sidebar"
      >
        <div
          class="block pb-4 mb-4 border-b border-solid  md:min-w-full md:hidden border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <a
                class="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase  md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                href="/admin/dashboard"
              >
                Madtive Studio
              </a>
            </div>
            <div class="flex justify-end w-6/12">
              <button
                type="button"
                class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer  md:hidden"
                @click="toggleNavbar('example-collapse-sidebar')"
              >
                <XIcon class="w-6"></XIcon>
              </button>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <!-- Heading -->
        <!-- <h6
              class="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-blueGray-500"
            >
              Admin Layout Pages
            </h6> -->
        <!-- Navigation -->

        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li class="items-center">
            <router-link
              :to="{ name: 'admin' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <HomeIcon class="w-5"></HomeIcon>
              <span class="mt-1 ml-1">Dashboard</span>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              :to="{ name: 'clients' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <UsersIcon class="w-5"></UsersIcon>
              <span class="mt-1 ml-1">Client</span>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              :to="{ name: 'employees' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <UserGroupIcon class="w-5"></UserGroupIcon>
              <span class="mt-1 ml-1">Pegawai</span>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              :to="{ name: 'position' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <FolderIcon class="w-5"></FolderIcon>
              <span class="mt-1 ml-1">Posisi</span>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              :to="{ name: 'project' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <CodeIcon class="w-5"></CodeIcon>
              <span class="mt-1 ml-1">Projek</span>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              :to="{ name: 'team' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <UserGroupIcon class="w-5"></UserGroupIcon>
              <span class="mt-1 ml-1">Tim</span>
            </router-link>
          </li>
          <li class="items-center">
            <router-link
              :to="{ name: 'pic' }"
              class="flex py-3 text-xs font-bold uppercase  text-blueGray-600 hover:text-blueGray-500"
            >
              <UsersIcon class="w-5"></UsersIcon>
              <span class="mt-1 ml-1">PIC</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script>
import { computed } from "vue";
import Popper from "popper.js";
import {
  MenuIcon,
  XIcon,
  UserGroupIcon,
  CodeIcon,
  UsersIcon,
  FolderIcon,
  HomeIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
export default {
  components: {
    HomeIcon,
    FolderIcon,
    UsersIcon,
    MenuIcon,
    XIcon,
    UserGroupIcon,
    CodeIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    ChevronDownIcon,
    LogoutIcon,
  },
  name: "Sidebar",
  setup() {
    const toggleNavbar = (collapseId) => {
      document.getElementById(collapseId).classList.toggle("hidden");
      document.getElementById(collapseId).classList.toggle("bg-white");
      document.getElementById(collapseId).classList.toggle("m-2");
      document.getElementById(collapseId).classList.toggle("py-3");
      document.getElementById(collapseId).classList.toggle("px-6");
    };

    const openDropdown = (event, dropdownId) => {
      let element = event.target;
      while (element.nodeName !== "A") {
        element = element.parentNode;
      }
      new Popper(element, document.getElementById(dropdownId), {
        placement: "bottom-start",
      });
      document.getElementById(dropdownId).classList.toggle("hidden");
      document.getElementById(dropdownId).classList.toggle("block");
    };
    const store = useStore();
    const token = localStorage.getItem("token");
    const router = useRouter();
    store.dispatch("user/retrieveUserInfo", token);
    const user = computed(() => {
      return store.state.user.user;
    });
    const logout = () => {
      store.dispatch("auth/loggedOut", token).then((res) => {
        if (res) {
          router.push({
            name: "login",
          });
        }
      });
    };
    const firstName = computed(() => {
      return store.state.user.firstName;
    });
    return {
      toggleNavbar,
      openDropdown,
      user,
      logout,
      firstName,
    };
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #1e293b;
  background-color: #cbd5e1;
  padding: 5px 5px;
  border-radius: 5px;
}
</style>