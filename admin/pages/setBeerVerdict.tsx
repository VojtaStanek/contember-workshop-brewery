import { AnyUploadField, DataGridPage, EditPage, Field, FieldView, GenericCell, LinkButton, NumberCell, NumberField, RadioField, TextareaField, TextCell } from "@contember/admin";
import * as React from "react";

export default () => (
	<EditPage
		entity="Beer(id=$id)"
		rendererProps={{
			title: (
				<>
					Verdict for beer <Field field="name" /> from <Field field="brewery.name" />
				</>
			)
		}}
		redirectOnSuccess="beersForVerdict"
	>
		<p>
			Taste score: <Field field="tasteScore" />
		</p>

		<p>
			<FieldView<string>
				field="chemialPdfUrl"
				render={(accessor) => <iframe src={accessor.value!} width="100%" height="500px" />}
			/>
		</p>


		<RadioField
			field="verdict"
			label="Final verdict"
			options={[
				{
					label: "☑ Pass",
					value: "passed",
				},
				{
					label: <><span style={{ display: 'inline-block', width: '1em', height: '1em', background: 'red', borderRadius: '50%' }} /> Fail</>,
					value: "failed",
				},
			]}
		/>

		<TextareaField
			field="finalComment"
			label="Comment"
		/>
	</EditPage>
)
