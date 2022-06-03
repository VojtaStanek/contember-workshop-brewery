import { CreatePage, FloatField, SelectField, TextField } from "@contember/admin";
import * as React from "react";
import { BeerForm } from "../components/BeerForm";

export default () => (
	<CreatePage entity="Beer" redirectOnSuccess="listBeer">
		<BeerForm />
	</CreatePage>
)