import { Form } from '../types'

export default {
  id: 'contact',
  name: 'Contact form',
  sections: [{
    name: 'Patient information',
    fields: [{
      id: 'PATIENT_PROFILE_PHOTO',
      name: 'Profile photo',
      type: 'FILE'
    }, {
      id: 'PATIENT_FIRST_NAME',
      name: 'First name',
      type: 'STRING'
    }, {
      id: 'PATIENT_LAST_NAME',
      name: 'Last name',
      type: 'STRING'
    }, {
      id: 'PATIENT_BIRTHDAY',
      name: 'Birthday',
      type: 'STRING'
    }, {
      id: 'PATIENT_CIVIL_STATUS',
      name: 'Civil status',
      type: 'STRING'
    }, {
      id: 'PATIENT_SEX',
      name: 'Sex',
      type: 'STRING'
    }, {
      id: 'PATIENT_NATIONALITY',
      name: 'Nationality',
      type: 'STRING'
    }]
  }, {
    name: 'Contact - email',
    fields: [{
      id: 'CONTACT_EMAIL',
      name: 'Email',
      type: 'STRING'
    }, {
      id: 'CONTACT_PROMOTIONS',
      name: 'Email me promotional materials',
      type: 'BOOLEAN'
    }]
  }, {
    name: 'Contact - phone',
    fields: [{
      id: 'CONTACT_PHONE',
      name: 'Phone',
      type: 'STRING'
    }, {
      id: 'CONTACT_EMERGENCY',
      name: 'This is my primary contact',
      type: 'BOOLEAN'
    }]
  }]
} as Form