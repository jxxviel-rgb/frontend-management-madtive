<template>
  <TransitionRoot as="template" :show="(showing = !showing)">
    <Dialog
      as="div"
      class="fixed inset-0 z-10 overflow-y-auto"
      @close="closeAndClearValidation"
    >
      <div
        class="flex items-end justify-center block min-h-screen p-0 px-4 pt-4 pb-20 text-center "
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
          <div
            class="inline-block w-full max-w-xl overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl  sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"
          >
            <div class="p-6 px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full  bg-blueGray-400 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <UserAddIcon
                    class="w-6 h-6 text-blueGray-800"
                    aria-hidden="true"
                  />
                </div>
                <div
                  class="flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"
                >
                  <DialogTitle
                    as="h3"
                    class="mt-2 text-lg leading-6 font-semi text-blueGray-700"
                  >
                    Edit Project
                  </DialogTitle>
                </div>
              </div>
            </div>
            <!-- Start of form content -->
            <div class="w-full px-5 bg-blueGray-200">
              <form @submit.prevent="update" v-if="Project.data">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nama Project
                  </label>
                  <input
                    v-model="Project.data.name"
                    type="text"
                    class="w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="PT. Madtive Studio Indonesia"
                  />
                  <!-- Start of validation employee name -->
                  <span v-if="validation.name">
                    <div
                      class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                      <div class="flex-initial max-w-full text-xs font-normal">
                        {{ validation.name[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation employee name -->
                </div>
                <div class="flex space-x-2">
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Client
                    </label>
                    <Listbox v-model="Project.data.client">
                      <div class="relative mt-1">
                        <ListboxButton
                          class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        >
                          <span
                            v-if="Project.data.client === null"
                            class="block text-sm truncate text-blueGray-600"
                          >
                            Pilih Client
                          </span>

                          <span
                            v-else
                            class="block text-sm truncate text-blueGray-600"
                          >
                            {{ Project.data.client.company_name }}
                          </span>
                          <span
                            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
                          >
                            <SelectorIcon
                              class="w-5 h-5 text-blueGray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>

                        <transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions
                            class="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              v-slot="{ active, selected }"
                              v-for="client in clients.data"
                              :key="client.id"
                              :value="client"
                              as="template"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'text-blueGray-800 bg-blueGray-200'
                                    : 'text-blueGray-800',
                                  'cursor-default select-none relative py-2 pl-10 pr-4',
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                  ]"
                                >
                                  {{ client.company_name }}
                                </span>
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3  text-blueGray-600"
                                >
                                  <CheckIcon
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                    <!-- Start of validation client -->
                    <span v-if="validation.client">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.client[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation client -->
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Jenis
                    </label>
                    <Listbox v-model="Project.data.type">
                      <div class="relative mt-1">
                        <ListboxButton
                          class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        >
                          <span
                            v-if="Project.data.type === null"
                            class="block text-sm truncate text-blueGray-600"
                          >
                            Pilih Jenis
                          </span>

                          <span
                            v-else
                            class="block text-sm truncate text-blueGray-600"
                          >
                            {{ Project.data.type }}
                          </span>
                          <span
                            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
                          >
                            <SelectorIcon
                              class="w-5 h-5 text-blueGray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>

                        <transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions
                            class="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              v-slot="{ active, selected }"
                              v-for="type in types"
                              :key="type"
                              :value="type"
                              as="template"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'text-blueGray-800 bg-blueGray-200'
                                    : 'text-blueGray-800',
                                  'cursor-default select-none relative py-2 pl-10 pr-4',
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                  ]"
                                >
                                  {{ type }}
                                </span>
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3  text-blueGray-600"
                                >
                                  <CheckIcon
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                    <!-- Start of validation client -->
                    <span v-if="validation.client">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.client[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation client -->
                  </div>
                </div>
                <transition name="slide-fade">
                  <template v-if="Project.data.type === 'MONTHLY'">
                    <div class="relative w-full mb-3">
                      <label
                        class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Biaya Bulanan
                      </label>
                      <div class="flex">
                        <span
                          class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                          >Rp.</span
                        >
                        <Money3Component
                          v-model="Project.data.monthly_fee"
                          v-bind="config"
                          min="0"
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tr rounded-br shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        ></Money3Component>
                      </div>
                      <!-- Start of validation monthly_fee -->
                      <span v-if="validation.monthly_fee">
                        <div
                          class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                            {{ validation.monthly_fee[0] }}
                          </div>
                        </div>
                      </span>
                      <!-- End of validation monthly_fee -->
                    </div>
                  </template>
                </transition>
                <div class="flex space-x-2">
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Mulai Projek
                    </label>
                    <DatePicker
                      v-model="Project.data.start_project"
                      type="date"
                      :lower-limit="currentDate"
                      :inputFormat="format"
                      class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                    <!-- Start of validation start_project -->
                    <span v-if="validation.start_project">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.start_project[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation start_project -->
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Deadline
                    </label>
                    <DatePicker
                      v-model="Project.data.deadline"
                      type="date"
                      :lower-limit="Project.data.start_project"
                      :inputFormat="format"
                      class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    />
                    <!-- Start of validation deadline -->
                    <span v-if="validation.deadline">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.deadline[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation deadline -->
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Estimasi
                    </label>
                    <input
                      v-model="Project.data.estimation"
                      type="text"
                      class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      readonly
                    />
                    <!-- Start of validation estimation -->
                    <span v-if="validation.estimation">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.estimation[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation estimation -->
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      PIC
                    </label>
                    <Listbox v-model="Project.data.pic">
                      <div class="relative mt-1">
                        <ListboxButton
                          class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        >
                          <span
                            v-if="
                              Project.data.pic === '' ||
                              Project.data.pic === null
                            "
                            class="block text-sm truncate text-blueGray-600"
                          >
                            Pilih PIC
                          </span>
                          <span
                            v-else
                            class="block text-sm truncate text-blueGray-600"
                          >
                            {{ Project.data.pic && Project.data.pic.name }}
                          </span>
                          <span
                            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
                          >
                            <SelectorIcon
                              class="w-5 h-5 text-blueGray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>
                        <transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions
                            class="absolute z-50 w-full py-1 mt-1 text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              v-slot="{ active, selected }"
                              v-for="pic in pics.data"
                              :key="pic"
                              :value="pic"
                              as="template"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'text-blueGray-800 bg-blueGray-200'
                                    : 'text-blueGray-800',
                                  'cursor-default select-none relative py-2 pl-10 pr-4',
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                  ]"
                                >
                                  {{ pic.name }} - {{ pic.position }}
                                </span>
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3  text-blueGray-600"
                                >
                                  <CheckIcon
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                    <!-- Start of validation type -->
                    <span v-if="validation.type">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.type[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation type -->
                  </div>
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nilai Project
                  </label>
                  <div class="flex">
                    <span
                      class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                      >Rp.</span
                    >
                    <Money3Component
                      :disabled="Project.data.status === 'Finish'"
                      v-model="Project.data.project_value"
                      v-bind="config"
                      type="number"
                      min="0"
                      class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="+62"
                    />
                  </div>
                  <!-- Start of validation project_value -->
                  <span v-if="validation.project_value">
                    <div
                      class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                      <div class="flex-initial max-w-full text-xs font-normal">
                        {{ validation.project_value[0] }}
                      </div>
                    </div>
                  </span>
                  <!-- End of validation project_value -->
                </div>
                <div class="flex space-x-2">
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Profit Team
                      <sup
                        @click="doubleClick"
                        class="mt-3 text-xs"
                        v-if="projectCost.data"
                      >
                        <span v-show="isSupShow">
                          {{ percentage.profit_team }}%
                        </span>
                        <input
                          v-show="isSupInputShow"
                          @blur="hideInput"
                          class="w-6 bg-blueGray-200"
                          v-model="percentage.profit_team"
                          ref="profitTeamRef"
                        />
                      </sup>
                    </label>
                    <div class="flex">
                      <span
                        class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                        >Rp.</span
                      >
                      <Money3Component
                        readonly
                        v-model="input.profit_team"
                        v-bind="config"
                        type="number"
                        min="0"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear border-0 rounded shadow  bg-blueGray-100 placeholder-blueGray-300 text-blueGray-600"
                      />
                    </div>
                    <!-- Start of validation profit_team -->
                    <span v-if="validation.profit_team">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.profit_team[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation profit_team -->
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Profit Perusahaan
                      <sup
                        @click="doubleClick"
                        class="mt-3 text-xs"
                        v-if="projectCost.data"
                      >
                        <span v-show="isSupShow">
                          {{ percentage.profit_company }}%
                        </span>
                        <input
                          v-show="isSupInputShow"
                          @blur="hideInput"
                          class="w-6 bg-blueGray-200"
                          v-model="percentage.profit_company"
                          ref="profitTeamRef"
                        />
                      </sup>
                    </label>
                    <div class="flex">
                      <span
                        class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                        >Rp.</span
                      >
                      <Money3Component
                        readonly
                        v-model="input.profit_company"
                        v-bind="config"
                        type="number"
                        min="0"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear border-0 rounded shadow  bg-blueGray-100 placeholder-blueGray-300 text-blueGray-600"
                      />
                    </div>
                    <!-- Start of validation profit_company -->
                    <span v-if="validation.profit_company">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.profit_company[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation profit_company -->
                  </div>
                </div>
                <div class="flex space-x-2">
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Akomodasi
                    </label>
                    <div class="flex">
                      <span
                        class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                        >Rp.</span
                      >
                      <Money3Component
                        v-model="Project.data.accomodation"
                        v-bind="config"
                        type="number"
                        min="0"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow  placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      />
                    </div>
                    <!-- Start of validation accomodation -->
                    <span v-if="validation.accomodation">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.accomodation[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation accomodation -->
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Status
                    </label>
                    <Listbox v-model="Project.data.status">
                      <div class="relative mt-1">
                        <ListboxButton
                          class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        >
                          <span
                            v-if="Project.data.status === ''"
                            class="block text-sm truncate text-blueGray-600"
                          >
                            Pilih Status Project
                          </span>
                          <span
                            v-else
                            class="block text-sm truncate text-blueGray-600"
                          >
                            {{ Project.data.status }}
                          </span>
                          <span
                            class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none "
                          >
                            <SelectorIcon
                              class="w-5 h-5 text-blueGray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </ListboxButton>

                        <transition
                          leave-active-class="transition duration-100 ease-in"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <ListboxOptions
                            class="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg  max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                          >
                            <ListboxOption
                              v-slot="{ active, selected }"
                              v-for="status in statuses"
                              :key="status.value"
                              :value="status.value"
                              as="template"
                            >
                              <li
                                :class="[
                                  active
                                    ? 'text-blueGray-800 bg-blueGray-200'
                                    : 'text-blueGray-800',
                                  'cursor-default select-none relative py-2 pl-10 pr-4',
                                ]"
                              >
                                <span
                                  :class="[
                                    selected ? 'font-medium' : 'font-normal',
                                    'block truncate',
                                  ]"
                                  >{{ status.value }}</span
                                >
                                <span
                                  v-if="selected"
                                  class="absolute inset-y-0 left-0 flex items-center pl-3  text-blueGray-600"
                                >
                                  <CheckIcon
                                    class="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              </li>
                            </ListboxOption>
                          </ListboxOptions>
                        </transition>
                      </div>
                    </Listbox>
                    <!-- Start of validation status -->
                    <span v-if="validation.status">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.status[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation status -->
                  </div>
                </div>
                <input
                  type="checkbox"
                  v-model="addTax"
                  name=""
                  id="checkbox"
                  class="mr-1 rounded-sm"
                />
                <label for="checkbox" class="font-semibold text-blueGray-600"
                  >Tambahkan pajak?</label
                >
                <transition name="slide-fade">
                  <div v-if="addTax" class="relative w-full mt-2 mb-3">
                    <label
                      class="block mb-2 text-xs font-semibold uppercase  text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Pajak
                    </label>
                    <div class="flex">
                      <span
                        class="px-4 py-2 text-sm whitespace-no-wrap border rounded-l  text-blueGray-700 bg-blueGray-300"
                        >Rp.</span
                      >
                      <Money3Component
                        readonly
                        v-model="input.tax"
                        v-bind="config"
                        type="text"
                        class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear border-0 rounded shadow  bg-blueGray-100 placeholder-blueGray-300 text-blueGray-600"
                      />
                    </div>

                    <!-- Start of validation tax -->
                    <span v-if="validation.tax">
                      <div
                        class="flex items-center justify-start pt-2 font-medium text-red-600 "
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
                          {{ validation.tax[0] }}
                        </div>
                      </div>
                    </span>
                    <!-- End of validation tax -->
                  </div>
                </transition>
                <div class="mt-6 text-center">
                  <button
                    :disabled="isDisabled"
                    :class="[isDisabled ? '' : 'active:bg-blueGray-600']"
                    class="flex w-full px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none  disabled:opacity-50 place-content-center bg-blueGray-800 hover:shadow-lg focus:outline-none"
                    type="submit"
                  >
                    <img
                      v-if="isLoading"
                      src="/src/assets/img/spinner2.svg"
                      class="w-5"
                      alt=""
                    />
                    <span v-if="isLoading" class=""> Menyimpan... </span>
                    <span v-else class=""> Simpan </span>
                  </button>
                </div>
              </form>
              <!-- Skeleton loading -->
              <!-- <form v-else class="animate-pulse">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Nama Project
                  </label>
                  <input
                    class="w-full text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                    htmlFor="grid-password"
                  >
                    Client
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Deadline
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Estimasi
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Nilai Project
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Akomodasi
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Profit Team
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Profit Perusahaan
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Progres
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Pajak
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-semibold uppercase text-blueGray-600"
                  >
                    Status
                  </label>
                  <input
                    class="w-full px-3 py-3 text-sm border-0 rounded shadow bg-blueGray-300 placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  />
                </div>

                <div class="mt-6 text-center">
                  <button
                    class="flex w-full px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white uppercase shadow outline-none roublueGray-300 disabled:opacity-50 place-content-center bg-blueGray-800 hover:shadow-lg focus:outline-none"
                    type="submit"
                  >
                    <span class=""> Simpan </span>
                  </button>
                </div>
              </form> -->
              <!-- End of Skeleton loading -->
            </div>
            <!-- End of form content -->
            <div
              class="px-4 py-3  bg-blueGray-200 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="submit"
                class="flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm  bg-blueGray-800 hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500 sm:ml-3 sm:w-auto sm:text-sm"
                @click="closeAndClearValidation"
              >
                Close
              </button>
              <!--  <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="$emit('close')"
                ref="cancelButtonRef"
              >
                Cancel
              </button> -->
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
 <script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { UserAddIcon } from "@heroicons/vue/outline";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { ref, reactive, computed, watchEffect, onMounted } from "vue";
import { useStore } from "vuex";
import { Money3Component } from "v-money3";
import DatePicker from "vue3-datepicker";
import moment from "moment";
export default {
  components: {
    DatePicker,
    Money3Component,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    UserAddIcon,
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
    CheckIcon,
    SelectorIcon,
  },
  emits: ["close"],
  props: {
    isModalUpdateOpen: {
      type: Boolean,
      default: "",
    },
    contentModalUpdate: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const showing = props.isModalUpdateOpen;
    const modalContent = props.contentModalUpdate;

    const config = computed(() => {
      return {
        masked: false,
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "",
        max: null,
        min: 0,
        minimumNumberOfCharacters: 0,
        precision: 0,
        allowBlank: false,
        disable: false,
        disableNegative: true,
        modelModifiers: {
          number: false,
        },
      };
    });
    const currentDate = ref(new Date());
    const statuses = [
      {
        value: "Penawaran",
      },
      {
        value: "On Progres",
      },
      {
        value: "Finish",
      },
    ];
    const closeAndClearValidation = () => {
      /*
       * close modal and set validation value to null or empty string
       */
      validation.name = "";
      validation.client = "";
      validation.deadline = "";
      validation.estimation = "";
      validation.project_value = "";
      validation.accomodation = "";
      validation.profit_team = "";
      validation.profit_company = "";
      validation.tax = "";
      validation.start_project = "";
      validation.status = "";
      emit("close");
    };
    /*data
     * disabled button and show loading in button
     */
    const format = "yyyy-MM-dd";
    const isDisabled = ref(false);
    const isLoading = ref(false);
    const store = useStore();
    const validation = reactive({
      client: "",
      pic: "",
      name: "",
      deadline: "",
      estimation: "",
      project_value: "",
      accomodation: "",
      profit_team: "",
      profit_company: "",
      tax: 0,
      start_project: "",
      status: "",
      type: "",
      monthly_fee: "",
    });
    const input = reactive({
      profit_team: "",
      profit_company: "",
      tax: "",
    });
    const percentage = reactive({
      profit_team: "",
      profit_company: "",
    });
    const addTax = ref(false);
    const Project = computed(() => {
      return store.getters["project/getProjectState"];
    });
    function diffProjectStart() {
      if (Project.value.data) {
        let deadline = moment(Project.value.data.deadline);
        let start_project = moment(Project.value.data.start_project);
        let years = deadline.diff(start_project, "years");
        start_project.add(years, "years");
        let months = deadline.diff(start_project, "months");
        start_project.add(months, "months");
        let days = deadline.diff(start_project, "days");

        if (years === 0 && months === 0) {
          Project.value.data.estimation = days + " Hari";
        } else if (days === 0 && months === 0) {
          Project.value.data.estimation = years + " Tahun ";
        } else if (years === 0 && days === 0) {
          Project.value.data.estimation = months + " Bulan ";
        } else if (days > 0 && months > 0 && years === 0) {
          Project.value.data.estimation = months + " Bulan " + days + " Hari ";
        } else if (years > 0 && days > 0 && months === 0) {
          Project.value.data.estimation = years + " Tahun " + days + " Hari";
        } else {
          Project.value.data.estimation =
            years + " Tahun " + months + " Bulan " + days + " Hari";
        }
      }
    }
    store.dispatch("projectCost/getDataProjectCost");
    const projectCost = computed(() => {
      return store.getters["projectCost/getStateProjectCost"];
    });
    function onlyNumber() {
      if (projectCost.value.data) {
        projectCost.value.data[0].profit_team =
          projectCost.value.data[0].profit_team
            .toString()
            .replace(/[^0-9]/g, "");
        projectCost.value.data[0].profit_company =
          projectCost.value.data[0].profit_company
            .toString()
            .replace(/[^0-9]/g, "");
      }
    }
    function maxNumber() {
      if (projectCost.value.data) {
        if (projectCost.value.data[0].profit_team > 100) {
          projectCost.value.data[0].profit_team = 100;
        } else if (projectCost.value.data[0].profit_company > 100) {
          projectCost.value.data[0].profit_company = 100;
        }
      }
    }
    watchEffect(() => {
      if (Project.value.data) {
        if (Project.value.data.start_project && Project.value.data.deadline) {
          diffProjectStart();
        }
        if (projectCost.value.data) {
          percentage.profit_team =
            (Project.value.data.profit_team /
              Project.value.data.project_value) *
            100;
          percentage.profit_company =
            (Project.value.data.profit_company /
              Project.value.data.project_value) *
            100;
          input.profit_team = computed(() => {
            return (
              (Project.value.data.project_value * percentage.profit_team) / 100
            );
          });
          input.profit_company = computed(() => {
            return (
              (Project.value.data.project_value * percentage.profit_company) /
              100
            );
          });
          input.tax = computed(() => {
            return (
              (Project.value.data.project_value *
                projectCost.value.data[0].tax) /
              100
            );
          });
        }
        Project.value.data.start_project = new Date(
          Project.value.data.start_project
        );
        Project.value.data.deadline = new Date(Project.value.data.deadline);
      }
    });

    const update = () => {
      isLoading.value = true;
      isDisabled.value = true;
      store
        .dispatch("project/updateData", {
          id: Project.value.data.id,
          client_id: Project.value.data.client.id,
          pic_id: Project.value.data.pic.id,
          name: Project.value.data.name,
          start_project: Project.value.data.start_project,
          deadline: Project.value.data.deadline,
          estimation: Project.value.data.estimation,
          project_value: Project.value.data.project_value,
          accomodation: Project.value.data.accomodation,
          profit_team: input.profit_team,
          profit_company: input.profit_company,
          tax: input.tax,
          status: Project.value.data.status,
          type: Project.value.data.type,
          monthly_fee: Project.value.data.monthly_fee,
          addTax: addTax.value,
        })
        .then((res) => {
          store.dispatch("project/getAllProjects");
          isLoading.value = false;
          isDisabled.value = false;
          /*
           *reset input form
           */
          Project.value.data.client = "";
          Project.value.data.pic = "";
          Project.value.data.name = "";
          Project.value.data.deadline = "";
          Project.value.data.estimation = "";
          Project.value.data.project_value = "";
          Project.value.data.accomodation = "";
          Project.value.data.profit_team = "";
          Project.value.data.profit_company = "";
          Project.value.data.tax = "";
          Project.value.data.progres = "";
          Project.value.data.status = "";
          Project.value.data.type = "";
          Project.value.data.monthly_fee = "";
          // * close modal after insert
          emit("close");
        })
        .catch((err) => {
          isLoading.value = false;
          isDisabled.value = false;
          validation.client = err.response.data.client_id;
          validation.pic = err.response.data.pic_id;
          validation.name = err.response.data.name;
          validation.deadline = err.response.data.deadline;
          validation.estimation = err.response.data.estimation;
          validation.project_value = err.response.data.project_value;
          validation.accomodation = err.response.data.accomodation;
          validation.profit_team = err.response.data.profit_team;
          validation.profit_company = err.response.data.profit_company;
          validation.tax = err.response.data.tax;
          validation.status = err.response.data.status;
          validation.type = err.response.data.type;
          validation.monthly_fee = err.response.data.monthly_fee;
        });
    };
    store.dispatch("client/getAllData");
    const clients = computed(() => {
      return store.getters["client/getClientState"];
    });
    const isSupShow = ref(true);
    const isSupInputShow = ref(false);
    const counter = ref(0);
    const profitTeamRef = ref(null);
    const doubleClick = () => {
      if (counter.value === 2) {
        profitTeamRef.value.focus();
        isSupInputShow.value = true;
        isSupShow.value = false;
        counter.value = 0;
      }
      counter.value++;
    };
    const hideInput = () => {
      isSupInputShow.value = false;
      isSupShow.value = true;
    };
    const types = ref(["ONE TIME", "MONTHLY"]);
    watchEffect(() => {
      if (Project.value.data) {
        store.dispatch("pic/getAllPicsClient", Project.value.data.client.id);
      }
    });
    const pics = computed(() => {
      return store.getters["pic/getStatePicsClient"];
    });

    return {
      pics,
      update,
      isDisabled,
      isLoading,
      showing,
      modalContent,
      validation,
      closeAndClearValidation,
      clients,
      config,
      statuses,
      input,
      Project,
      currentDate,
      format,
      addTax,
      isSupShow,
      isSupInputShow,
      hideInput,
      doubleClick,
      projectCost,
      profitTeamRef,
      types,
      percentage,
    };
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease-in;
}

.slide-fade-leave-active {
  transition: all .3s ease-out;
}

.slide-fade-enter-from{
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-from {
  transform: translateY(-50px);
  opacity: 0;
}
</style>