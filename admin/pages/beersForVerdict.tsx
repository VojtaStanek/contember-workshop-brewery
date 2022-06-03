import { DataGridPage, GenericCell, LinkButton, NumberCell, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
	<DataGridPage entities="Beer[tasteScore!=null && chemialPdfUrl!=null && verdict = null]" rendererProps={{ title: "🍻 to for verdict" }}>
		<TextCell field="name" header="Name" />
		<NumberCell field="alcohol" header="Alcohol contents" />
		<TextCell field="brewery.name" header="Brewery" />
		<NumberCell field="tasteScore" header="Score" hidden />
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="setBeerVerdict(id:$entity.id)">Set verdict</LinkButton>
		</GenericCell>
	</DataGridPage>
)
