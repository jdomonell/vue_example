<template>
  <div class="container box is-max-desktop">
    <div class="columns">
      <div class="column">
        <div class="title">Company Subscription Manager</div>
        <div class="box" v-for="company in companies" :key="company.id">
          <h1 class="subtitle is-2">{{ company.name }}</h1>
          <div class="buttons">
            <button :id="company.id" v-on:click="handleViewCompany($event)" class="button is-light">
              View and Manage Subscriptions
            </button>
            <button :id="company.id" v-on:click="handleEditCompany($event)" class="button is-info">
              Edit Company Details
            </button>
          </div>
        </div>
      </div>
      <!---->
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
