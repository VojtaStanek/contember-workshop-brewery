import * as React from 'react'
import { Field, FloatField, GenericPage, LocationField, MultiEditPage, Repeater, TextField } from '@contember/admin'

export default () => (
	<MultiEditPage entities="Brewery">
		<Field field="id" />
		<TextField label="Name" field="name" />
		<FloatField label="Latitude" field="locationLat" />
		<FloatField label="Longitude" field="locationLng" />
		<LocationField label="Location" latitudeField="locationLat" longitudeField="locationLng" />

		<Repeater label="Beers" field="beers" orderBy={undefined}>
			<TextField label="Name" field="name" />
		</Repeater>
	</MultiEditPage>
)
