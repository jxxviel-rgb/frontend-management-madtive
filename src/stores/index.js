import { createStore } from "vuex";
import employees from "./modules/employees.js";
import auth from "./modules/auth.js";
import user from "./modules/user.js";
import client from "./modules/client.js";
import position from "./modules/position.js";
import project from "./modules/project.js";
import team from "./modules/team.js";
import pic from "./modules/pic.js";
import message from "./modules/message.js";
import projectCost from "./modules/projectCost.js";
import cost from "./modules/cost.js";
export const store = createStore({
  modules: {
    employees,
    auth,
    user,
    client,
    position,
    project,
    team,
    pic,
    message,
    projectCost,
    cost,
  },
});
