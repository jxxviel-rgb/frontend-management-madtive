<template>
  <TransitionRoot :show="(isModalTabsOpen = !isModalTabsOpen)" as="template">
    <Dialog
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto"
      @close="$emit('close')"
    >
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-opacity-50 bg-blueGray-500"
            />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md px-2 overflow-hidden text-left align-middle transition-all transform shadow-xl  bg-blueGray-200 rounded-2xl"
            >
              <button
                @click="$emit('close')"
                class="z-50 my-1 -mx-1 rounded-full  bg-blueGray-800 text-blueGray-200"
              >
                <XIcon class="w-5"></XIcon>
              </button>
              <!-- <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-emerald-200 sm:mx-0 sm:h-10 sm:w-10"
                >
                </div>
                <div
                  class="flex-none mt-3 text-center sm:mt-0 sm:ml-2 sm:text-left"
                >
                </div>
              </div> -->
              <div class="w-full max-w-md px-0 py-2">
                <TabGroup>
                  <TabList class="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                    <Tab
                      v-for="category in categories"
                      as="template"
                      :key="category"
                      v-slot="{ selected }"
                    >
                      <button
                        :class="[
                          'w-full py-2.5 text-sm leading-5 font-medium text-blueGray-700 rounded-lg',
                          'focus:outline-none ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          selected
                            ? 'bg-white shadow'
                            : 'text-blueGray-800 hover:bg-white/[0.12] hover:text-blueGray-900',
                        ]"
                      >
                        {{ category }}
                      </button>
                    </Tab>
                  </TabList>

                  <TabPanels class="mt-2">
                    <TabPanel
                      :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      ]"
                    >
                      <ul v-if="project.data.data">
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Project
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>{{ project.data.data.name }}</li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Deadline
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>{{ project.data.data.deadline }}</li>
                            </ul>
                          </li>
                        </div>
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Estimasi
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>{{ project.data.data.estimation }}</li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Nilai Project
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                  }).format(project.data.data.project_value)
                                }}
                              </li>
                            </ul>
                          </li>
                        </div>
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Akomodasi
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                  }).format(project.data.data.accomodation)
                                }}
                              </li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Profit Team
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                  }).format(project.data.data.profit_team)
                                }}
                              </li>
                            </ul>
                          </li>
                        </div>
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Profit Perusahaan
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                  }).format(project.data.data.profit_company)
                                }}
                              </li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">Pajak</h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{
                                  Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                  }).format(project.data.data.tax)
                                }}
                              </li>
                            </ul>
                          </li>
                        </div>
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Progres
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>{{ project.data.data.progres }}</li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Status
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>{{ project.data.data.status }}</li>
                            </ul>
                          </li>
                        </div>
                      </ul>
                      <ul v-else>
                        <tabs-project-skeleton />
                      </ul>
                    </TabPanel>

                    <!-- <TabsProjectSkeleton /> -->
                    <TabPanel
                      v-if="project.data.data"
                      :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      ]"
                    >
                      <ul>
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Client
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{ project.data.data.client.company_name }}
                              </li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">Email</h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{ project.data.data.client.company_email }}
                              </li>
                            </ul>
                          </li>
                        </div>
                        <div class="flex">
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              No. Telp
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>
                                {{ project.data.data.client.phone_number }}
                              </li>
                            </ul>
                          </li>
                          <li
                            class="relative flex-1 p-3 rounded-md  bg-coolGray-100"
                          >
                            <h3 class="text-sm font-medium leading-5">
                              Alamat
                            </h3>

                            <ul
                              class="flex mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                            >
                              <li>{{ project.data.data.client.address }}</li>
                            </ul>
                          </li>
                        </div>
                      </ul>
                    </TabPanel>
                    <TabPanel
                      v-if="team.data.data"
                      :class="[
                        'bg-white rounded-xl p-3',
                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      ]"
                    >
                      <ul>
                        <!-- <div class="flex"> -->
                        <li
                          v-for="(team, index) in team.data.data"
                          :key="index"
                          class="relative flex-1 p-3 rounded-md bg-coolGray-100"
                        >
                          {{ team.position }}
                          <h3 class="text-sm font-medium leading-5"></h3>

                          <ul
                            class="mt-1 space-x-1 text-xs font-normal leading-4  text-coolGray-500"
                          >
                            <li>{{ team.employee.name }}</li>
                          </ul>
                        </li>
                        <!-- </div> -->
                      </ul>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";
import { XIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import TabsProjectSkeleton from "../../components/global/TabsProjectSkeleton.vue";

export default {
  components: {
    TabsProjectSkeleton,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    XIcon,
  },
  props: {
    isModalTabsOpen: {
      type: Boolean,
      default: "",
    },
    project: {
      type: Object,
      default: {},
    },
    team: {
      type: Object,
      default: {},
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    // const store = useStore();

    const isModalTabsOpen = props.isModalTabsOpen;
    const team = props.team;
    const project = props.project;
    let categories = ref(["Detail Project", "Detail Client", "Detail Tim"]);

    return { categories, isModalTabsOpen, project, team };
  },
};
</script>
