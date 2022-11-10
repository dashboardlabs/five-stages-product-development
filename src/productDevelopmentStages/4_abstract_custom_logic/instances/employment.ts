import { Instance } from '../types'

const employment: Instance = {
  id: 'employment',
  name: 'Employment',
  sections: [
    {
      name: 'Patient information',
      fields: [
        {
          id: 'PATIENT_FIRST_NAME',
          name: 'First name',
          type: 'STRING'
        },
        {
          id: 'PATIENT_LAST_NAME',
          name: 'Last name',
          type: 'STRING'
        },
        {
          id: 'PATIENT_BIRTHDAY',
          name: 'Birthday',
          type: 'STRING'
        },
        {
          id: 'PATIENT_CIVIL_STATUS',
          name: 'Civil status',
          type: 'STRING'
        },
        {
          id: 'PATIENT_SEX',
          name: 'Sex',
          type: 'STRING'
        }
      ]
    },
    {
      name: 'Employment',
      fields: [
        {
          id: 'EMPLOYMENT_EMPLOYED',
          name: 'I am currently employed',
          type: 'BOOLEAN'
        },
        {
          id: 'EMPLOYMENT_ID',
          name: 'Employee ID',
          type: 'FILE'
        },
        {
          id: 'EMPLOYMENT_EMPLOYER',
          name: 'Employer',
          type: 'STRING'
        },
        {
          id: 'EMPLOYMENT_EMPLOYER_PHONE_NUMBER',
          name: 'Employer phone number',
          type: 'STRING'
        },
        {
          id: 'EMPLOYMENT_JOB_TITLE',
          name: 'Job title',
          type: 'STRING'
        }
      ]
    },
    {
      name: 'Laboratory services',
      fields: [
        {
          id: 'LABORATORY_SERVICES_CBC',
          name: 'Complete blood count (CBC)',
          type: 'BOOLEAN'
        },
        {
          id: 'LABORATORY_SERVICES_X_RAY',
          name: 'X-ray',
          type: 'BOOLEAN'
        },
        {
          id: 'LABORATORY_SERVICES_CLINICAL_CHEMISTRY',
          name: 'Clinical chemistry',
          type: 'BOOLEAN'
        },
        {
          id: 'LABORATORY_SERVICES_ULTRASOUND',
          name: 'Ultrasound',
          type: 'BOOLEAN'
        },
        {
          id: 'LABORATORY_SERVICES_URINALYSIS',
          name: 'Urinalysis',
          type: 'BOOLEAN'
        },
        {
          id: 'LABORATORY_SERVICES_FECALYSIS',
          name: 'Fecalysis',
          type: 'BOOLEAN'
        }
      ]
    }
  ]
}

export default employment
