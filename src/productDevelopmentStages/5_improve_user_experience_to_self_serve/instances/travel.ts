import { Instance } from '../types'

const travel: Instance = {
  id: 'travel',
  name: 'Travel',
  sections: [
    {
      name: 'Patient information',
      required: true,
      entities: [
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
          id: 'PATIENT_SEX',
          name: 'Sex',
          type: 'STRING'
        }
      ]
    },
    {
      name: 'Passport',
      entities: [
        {
          id: 'PASSPORT_IMAGE',
          name: 'Passport image',
          type: 'FILE'
        },
        {
          id: 'PASSPORT_NUMBER',
          name: 'Passport number',
          type: 'STRING'
        },
        {
          id: 'PASSPORT_ISSUING_COUNTRY',
          name: 'Issuing country',
          type: 'STRING'
        },
        {
          id: 'PASSPORT_EXPIRY_DATE',
          name: 'Expiry date',
          type: 'STRING'
        }
      ]
    },
    {
      name: 'Vaccination record',
      entities: [
        {
          id: 'VACCINATION_RECORD_CARD',
          name: 'Vaccination card',
          type: 'FILE'
        },
        {
          id: 'VACCINATION_RECORD_FIRST_DOSE',
          name: 'First dose',
          type: 'BOOLEAN'
        },
        {
          id: 'VACCINATION_RECORD_FIRST_DOSE_BRAND',
          name: 'First dose brand',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_FIRST_DOSE_DATE',
          name: 'First dose date',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_SECOND_DOSE',
          name: 'Second dose',
          type: 'BOOLEAN'
        },
        {
          id: 'VACCINATION_RECORD_SECOND_DOSE_BRAND',
          name: 'Second dose brand',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_SECOND_DOSE_DATE',
          name: 'Second dose date',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_THIRD_DOSE',
          name: 'Third dose',
          type: 'BOOLEAN'
        },
        {
          id: 'VACCINATION_RECORD_THIRD_DOSE_BRAND',
          name: 'Third dose brand',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_THIRD_DOSE_DATE',
          name: 'Third dose date',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_FOURTH_DOSE',
          name: 'Fourth dose',
          type: 'BOOLEAN'
        },
        {
          id: 'VACCINATION_RECORD_FOURTH_DOSE_BRAND',
          name: 'Fourth dose brand',
          type: 'STRING'
        },
        {
          id: 'VACCINATION_RECORD_FOURTH_DOSE_DATE',
          name: 'Fourth dose date',
          type: 'STRING'
        }
      ]
    },
    {
      name: 'Travel details',
      entities: [
        {
          id: 'TRAVEL_DESTINATION',
          name: 'Destination',
          type: 'STRING'
        },
        {
          id: 'TRAVEL_DEPARTURE_DATE',
          name: 'Departure date',
          type: 'STRING'
        }
      ]
    }
  ]
}

export default travel
