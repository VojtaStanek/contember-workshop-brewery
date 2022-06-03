import * as React from 'react'
import { Menu } from '@contember/admin'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="Dashboard" to="index" />
			<Menu.Item title="Beers" to="listBeer" />
			<Menu.Item title="#1: New request" to="createBeer" />
			<Menu.Item title="#2: Beers to taste" to="beersToTaste" />
			<Menu.Item title="#3: Beers to analyze" to="beersToAnalyze" />
			<Menu.Item title="#4: Beers for verdict" to="beersForVerdict" />
			<Menu.Item title="#5: Beers to certify" to="beersToCertify" />
		</Menu.Item>
	</Menu>
)
