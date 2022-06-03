import { DataGridPage, EditPage, Field, GenericCell, LinkButton, NumberCell, NumberField, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
	<EditPage
		entity="Beer(id=$id)"
		rendererProps={{
			title: (
				<>
					Score beer <Field field="name" /> from <Field field="brewery.name" />
				</>
			)
		}}
		redirectOnSuccess="beersToTaste"
	>
		<NumberField label="Score 0-10" field="tasteScore" />
	</EditPage>
)
