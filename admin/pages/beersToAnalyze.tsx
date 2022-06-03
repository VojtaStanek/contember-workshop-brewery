import { DataGridPage, GenericCell, LinkButton, NumberCell, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
	<DataGridPage entities="Beer[tasteScore!=null && chemialPdfUrl=null]" rendererProps={{ title: "🍻 to analyze 🧪" }}>
		<TextCell field="name" header="Name" />
		<NumberCell field="alcohol" header="Alcohol contents" />
		<TextCell field="brewery.name" header="Brewery" />
		<NumberCell field="tasteScore" header="Score" hidden />
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="beerLabResult(id:$entity.id)">Upload result</LinkButton>
		</GenericCell>
	</DataGridPage>
)
