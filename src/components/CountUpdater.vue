<template>
  <div class="field has-addons">
    <div class="control">
      <div class="control">
        <input type="number" class="input" v-model="myCount" />
      </div>
    </div>
    <div class="control">
      <button type="submit" class="button" v-on:click="handleSubmit()">
        update
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CountUpdater',
  props: {
    count: Number,
    keyName: String
  },
  data() {
    return { myCount: 0 };
  },
  created() {
    this.myCount = this.count;
  },
  watch: {
    count: {
      immediate: true,
      handler(val) {
        this.myCount = Number(val);
      },
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', Number(this.myCount), this.keyName);
    },
  },
};
</script>
