<template>

      <Mainsection />
      <Event />
      <Salones />
        <HomeBlog />
        <SendMail />
</template>

<script>
import Mainsection from '../Home/components/Main-section.vue'
import Event from '../Home/components/Event.vue'
import Salones from '../Home/components/Salones.vue'
import HomeBlog from '../Home/components/HomeBlog.vue'
import SendMail from '../Home/components/SendMail.vue'
export default {
    components:{
        Mainsection,
        Event,
        Salones,
        HomeBlog,
        SendMail
    }
}
</script>

<style>

</style>