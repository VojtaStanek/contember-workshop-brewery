import { Checkbox, Field, FieldView, MultiEditPage } from "@contember/admin";
import * as React from "react";

export default () => (
	<MultiEditPage
		entities="Beer[verdict=passed && certificateIssued=null]"
		rendererProps={{ 
			enableRemoving: false,
			enableAddingNew: false,
		}}
		onPersistSuccess={() => window.location.reload()}
	>
		<Field field="name" /> from <Field field="brewery.name" />
		<FieldView
			field="certificateIssued"
			render={(accessor) => {
				return <Checkbox
					notNull
					onChange={(value) => {
						accessor.updateValue(value ? new Date().toISOString() : null)
					}}
					value={accessor.value !== null}
				/>
			}}
		/>
	</MultiEditPage>
)