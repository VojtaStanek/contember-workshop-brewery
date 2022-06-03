import { AnyUploadField, DataGridPage, EditPage, Field, GenericCell, LinkButton, NumberCell, NumberField, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
	<EditPage
		entity="Beer(id=$id)"
		rendererProps={{
			title: (
				<>
					Upload lab result of beer <Field field="name" /> from <Field field="brewery.name" />
				</>
			)
		}}
		redirectOnSuccess="beersToAnalyze"
	>
		<AnyUploadField urlField="chemialPdfUrl" label="PDF of the result" acceptMimeTypes="application/pdf" />
	</EditPage>
)
