import { DataGridPage, GenericCell, LinkButton, NumberCell, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
	<DataGridPage entities="Beer[tasteScore=null]" rendererProps={{ title: "🍻 to taste" }}>
		<TextCell field="name" header="Name" />
		<NumberCell field="alcohol" header="Alcohol contents" />
		<TextCell field="brewery.name" header="Brewery" />
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="scoreBeer(id:$entity.id)">Taste</LinkButton>
		</GenericCell>
	</DataGridPage>
)
