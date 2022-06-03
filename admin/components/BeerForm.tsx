import { Component, FloatField, SelectField, TextField } from "@contember/admin";
import * as React from "react";

export const BeerForm = Component(
	() => (
		<>
			<SelectField label="Brewery" field="brewery" options="Brewery.name" />
			<TextField label="Name" field="name" />
			<FloatField label="Alcohol" field="alcohol" />
		</>
	),
)