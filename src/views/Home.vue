<template>
  <div class="container box is-max-desktop">
    <div class="title">Companies</div>
    <div class="box" v-for="company in companies" :key="company.id">
      <h2 class="subtitle">{{ company.name }}</h2>
      <div class="buttons">
        <button :id="company.id" v-on:click="handleViewCompany($event)" class="button is-light">
          View
        </button>
        <button :id="company.id" v-on:click="handleEditCompany($event)" class="button is-info">
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import CompanyService from '../services/CompanyService';

export default {
  name: 'home',
  data() {
    return {
      companies: null,
    };
  },
  created() {
    this.getCompanies();
  },
  methods: {
    getCompanies() {
      CompanyService.getAll().then((res) => {
        this.companies = res;
      });
    },
    handleViewCompany({ currentTarget: { id: companyId } }) {
      this.$router.push(`view/${companyId}`);
    },
    handleEditCompany({ currentTarget: { id: companyId } }) {
      this.$router.push(`edit/${companyId}`);
    },
  },
};
</script>
