export interface Instance {
  id: string
  name: string
  sections: Section[]
}

export interface Section {
  name: string
  entities: Entity[]
  required?: boolean
}

export interface Entity {
  id: string
  name: string
  type: 'BOOLEAN' | 'STRING' | 'FILE'
}

export interface Values {
  [entityId: string]: string
}
