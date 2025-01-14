import { createRouter, createWebHistory } from "vue-router";
import Props from "@/views/01-props/Father.vue";
import Event from "@/views/02-custom-event/Father.vue";
import Bus from "@/views/03-mitt/Father.vue";
import Model from "@/views/04-v-model/Father.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/props",
      component: Props,
    },
    {
      path: "/event",
      component: Event,
    },
    {
      path: "/mitt",
      component: Bus,
    },
    {
      path: "/model",
      component: Model,
    },
  ],
});
export { router };
