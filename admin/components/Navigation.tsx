import * as React from 'react'
import { Menu } from '@contember/admin'

export const Navigation = () => (
	<Menu>
		<Menu.Item>
			<Menu.Item title="Dashboard" to="index" />
			<Menu.Item title="Beers" to="listBeer" />
			<Menu.Item title="#1: New request" to="createBeer" />
			<Menu.Item title="#2: Beers to taste" to="beersToTaste" />
		</Menu.Item>
	</Menu>
)