import { createRouter, createWebHistory } from "vue-router";
import Props from "@/views/01-props/Father.vue";
import Event from "@/views/02-custom-event/Father.vue";
import Bus from "@/views/03-mitt/Father.vue";
import Model from "@/views/04-v-model/Father.vue";
import AttrsListeners from "@/views/05-$attrs/Father.vue";
import RefChildrenParent from "@/views/06-$refs-$parent/Father.vue";
import ProvideInject from "@/views/07-provide-inject/Father.vue";
import Pinia from "@/views/08-pinia/Father.vue";
import Slot from "@/views/09-slot/Father.vue";

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
    {
      path: "/attrs",
      component: AttrsListeners,
    },
    {
      path: "/ref-parent",
      component: RefChildrenParent,
    },
    {
      path: "/provide-inject",
      component: ProvideInject,
    },
    {
      path: "/pinia",
      component: Pinia,
    },
    {
      path: "/slot",
      component: Slot,
    },
  ],
});
export { router };
