import { CreatePage, EditPage, FloatField, SelectField, TextField } from "@contember/admin";
import * as React from "react";
import { BeerForm } from "../components/BeerForm";

export default () => (
	<EditPage entity="Beer(id=$id)" redirectOnSuccess="listBeer">
		<BeerForm />
	</EditPage>
)