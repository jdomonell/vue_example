const companies = [
  {
    id: 1,
    name: 'Amazon',
    domain: 'amazon.com',
    numberOfEmployees: 1404,
    subscriptionsPerEmployee: 1,
  },
  {
    id: 2,
    name: 'Google',
    domain: 'google.com',
    numberOfEmployees: 85080,
    subscriptionsPerEmployee: 5,
  },
  {
    id: 3,
    name: 'Yahoo',
    domain: 'yahoo.com',
    numberOfEmployees: 7755,
    subscriptionsPerEmployee: 4,
  },
  {
    id: 4,
    name: 'Twitter',
    domain: 'twitter.com',
    numberOfEmployees: 2565,
    subscriptionsPerEmployee: 2,
  },
];

const companiesMap = {};
companies.forEach((company) => {
  companiesMap[company.id] = company;
});


function getListOfCompanies() {
  return Object.values(companiesMap);
}

function getAll() {
  return Promise.resolve(getListOfCompanies());
}

function getById(id) {
  const company = companiesMap[id];
  return Promise.resolve(company);
}

function saveCompany(company) {
  const updatedCompany = {...companiesMap[company.id], ...company};
  companiesMap[company.id] = updatedCompany;
}

export default {
  getAll,
  getById,
  saveCompany
};
