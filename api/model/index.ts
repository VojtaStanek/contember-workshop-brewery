import { SchemaDefinition as def, AclDefinition as acl, InputValidation as val } from '@contember/schema-definition'

export const Brewer = acl.createRole('brewer')
export const BreweryVariable = acl.createEntityVariable('brewery', 'Brewery', Brewer)

export const Public = acl.createRole('public')

@acl.allow(Brewer, {
	when: { brewery: { id: BreweryVariable } },
	create: true,
	read: true,
	update: true,
	delete: true,
})
@acl.allow(Public, {
	when: {
		verdict: { eq: 'passed' },
		certificateIssued: { isNull: false },
	},
	read: ['name', 'alcohol', 'brewery', 'finalComment'],
})
export class Beer {
	name = def.stringColumn().notNull()
	alcohol = def.doubleColumn()
	brewery = def.manyHasOne(Brewery, 'beers').notNull()

	@val.assert(val.rules.range(0, 10), 'Score is not in the range')
	tasteScore = def.intColumn()

	chemialPdfUrl = def.stringColumn()

	verdict = def.enumColumn(def.createEnum('passed', 'failed'))
	finalComment = def.stringColumn()

	certificateIssued = def.dateColumn()
}

@acl.allow(Brewer, {
	when: { id: BreweryVariable },
	read: true,
	update: ['locationLat', 'locationLng', 'beers'],
})
@acl.allow(Public, {
	when: {
		beers: acl.canRead('name'),
	},
	read: ['name', 'beers'],
})
export class Brewery {
	name = def.stringColumn().notNull()
	locationLat = def.doubleColumn()
	locationLng = def.doubleColumn()
	beers = def.oneHasMany(Beer, 'brewery')
}
