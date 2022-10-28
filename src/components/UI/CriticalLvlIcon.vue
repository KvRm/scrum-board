<template>
  <div>
    <FontAwesomeIcon
      icon="fa-solid fa-circle-exclamation"
      :color="criticalColor"
    />
  </div>
</template>

<script lang="ts">
import { TaskCriticalLvl } from '@/types'
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    criticalLvl: {
      type: String as PropType<TaskCriticalLvl>,
      required: true
    }
  },

  setup(props) {
    const criticalColor = computed<string>(() => {
      if (props.criticalLvl === TaskCriticalLvl.veryHigh) return 'rgba(255, 59, 59)'
      if (props.criticalLvl === TaskCriticalLvl.high) return 'rgba(255, 101, 12)'
      if (props.criticalLvl === TaskCriticalLvl.medium) return 'rgba(0, 0, 255)'
      if (props.criticalLvl === TaskCriticalLvl.low) return 'rgba(0, 115, 90)'
      return ''
    })

    return {
      criticalColor
    }
  }
})
</script>

<style scoped>
svg {
  width: 20px;
  height: 20px;
}
</style>
