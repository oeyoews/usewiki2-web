<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const name = ref('192.168.2.71')

async function go() {
	const url2 = `http://${name}:8000/status`
  const res = await fetch(url2, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await res.json()
  alert(data.username)
}

const { t } = useI18n()
  onMounted(async () => {
  go()
 })

</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>

    <div py-4/>

    <TheInput
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
