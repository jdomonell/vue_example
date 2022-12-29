<template>
  <div class="container box">
    <h1 class="title">Company Details : {{ company.name }}</h1>
    <div class="columns box">
      <div class="column">
        <div class="block">
          <p class="label">Name</p>
          <p class="text">
            {{ company.name }}
          </p>
        </div>
        <div class="block">
          <p class="label">Domain</p>
          <p class="text">
            {{ company.domain }}
          </p>
        </div>
        <div class="block">
          <p class="label">Employees</p>
          <p class="text">
            {{ company.numberOfEmployees }}
          </p>
        </div>
        <div class="block">
          <p class="label">Subscriptions Per Employee</p>
          <p class="text">
            {{ company.subscriptionsPerEmployee }}
          </p>
        </div>
        <div class="block">
          <p class="label">Company Subscriptions</p>
          <p class="text">
            {{ totalSubscriptions }}
          </p>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <p class="label">Edit Employees</p>
          <CountUpdater :count="company.numberOfEmployees" @submit="handleEmployeeCountChange" />
        </div>
        <div class="box">
          <p class="label">Edit Subscriptions</p>
          <CountUpdater :count="company.subscriptionsPerEmployee" @submit="handleSubCountChange" />
        </div>
      </div>
    </div>
    <button class="button" v-on:click="handleBack()">Back</button>
  </div>
</template>

<script>
import CompanyService from '../services/CompanyService';
export default {
  name: 'view',
  data() {
    return {
      company: {},
      employees: 0,
      subCount: 0,
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
      this.subCount = subscriptionsPerEmployee;
      this.employees = this.employees;
      this.company = {
        domain,
        id,
        name,
        numberOfEmployees,
        subscriptionsPerEmployee,
      };
    });
  },
  computed: {
    totalSubscriptions() {
      const { company: { numberOfEmployees, subscriptionsPerEmployee } } = this;
      return numberOfEmployees * subscriptionsPerEmployee;
    },
  },
  methods: {
    handleBack() {
      this.$router.push('/');
    },
    handleEmployeeCountChange(count) {
      this.employees = count;
      this.company.numberOfEmployees = count;
      this.saveCompany();
    },
    handleSubCountChange(count) {
      this.subCount = count;
      this.company.subscriptionsPerEmployee = count;
      this.saveCompany();
    },
    saveCompany() {
      const { numberOfEmployees, subscriptionsPerEmployee } = this.company;
      CompanyService.saveCompany({
        numberOfEmployees,
        subscriptionsPerEmployee,
        id: this.company.id
      });
    },
  },
};
</script>
