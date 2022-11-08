export interface Form {
	id: string
	name: string
	sections: Section[]
}

export interface Section {
	name: string
	fields: Field[]
	required?: boolean
}

export interface Field {
	id: string
	name: string
	type: 'BOOLEAN' | 'STRING' | 'FILE'
}

export interface Values {
	[fieldId: string]: string
}
