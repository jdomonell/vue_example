<template>
  <div class="container box">
    <div class="columns">
      <div class="column">
        <h1 class="title">Edit {{ name }}</h1>
        <form class="box">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input type="text" class="input" v-model="company.name" />
            </div>
          </div>
          <div class="field">
            <label class="label">Domain</label>
            <div class="control">
              <input type="text" class="input" v-model="company.domain" />
            </div>
          </div>
          <div class="field">
            <label class="label">Number of Employees</label>
            <div class="control">
              <input type="number" class="input" v-model="company.numberOfEmployees" />
            </div>
          </div>
          <div class="field">
            <label class="label">Subscriptions Per Employee</label>
            <div class="control">
              <input type="number" class="input" v-model="company.subscriptionsPerEmployee" />
            </div>
          </div>
          <button class="button" v-on:click.stop="handleSubmit()">
            Save
          </button>
        </form>
      </div>
    </div>
    <button class="button" v-on:click="handleBack()">Back</button>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';

export default {
  name: 'edit',
  data() {
    return {
      company: {},
      name: ""
    };
  },
  created() {
    const companyId = this.$route.params.id;
    CompanyService.getById(companyId).then(({
      domain,
      id,
      name,
      numberOfEmployees,
      subscriptionsPerEmployee,
    }) => {
      this.name = name;
      this.company = {
        domain,
        id,
        name,
        numberOfEmployees,
        subscriptionsPerEmployee,
        totalSubscriptions: numberOfEmployees * subscriptionsPerEmployee,
      };
    });
  },
  methods: {
    handleSubmit() {
      const {
        name,
        numberOfEmployees,
        subscriptionsPerEmployee,
        id
      } = this.company;
      this.name = name;
      CompanyService.saveCompany({
        name,
        numberOfEmployees,
        subscriptionsPerEmployee,
        id
      });
    },
    handleBack() {
      this.$router.push('/');
    },
  },
};
</script>
