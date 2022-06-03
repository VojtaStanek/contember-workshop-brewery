import { Button, ButtonOwnProps, DataGridPage, EntityAccessor, GenericCell, Icon, LinkButton, NumberCell, Stack, TextCell, toThemeClass, useDialog, useEntity, useMutationState, usePersistWithFeedback } from "@contember/admin";
import * as React from "react";

export const DeleteEntityButton = React.memo((props: any) => {
	const { children, immediatePersist, className, ...rest } = props
	const parentEntity = useEntity()
	const triggerPersist = usePersistWithFeedback()
	const isMutating = useMutationState()
	const dialog = useDialog()
	const onClick = React.useCallback(async () => {
		let ok = false
		try {
			ok = await dialog.openDialog({
				content: ({ reject, resolve }) => (
					<Stack direction="horizontal">
						<Button onClick={() => resolve(true)} intent="danger" distinction="primary">Delete</Button>
						<Button onClick={() => reject()}>No!</Button>
					</Stack>
				)
			})
		} catch(e) {}
		if (!ok) {
			return 
		}
		
		parentEntity.deleteEntity()

		if (triggerPersist) {
			triggerPersist().catch(() => {})
		}
	}, [triggerPersist, props.immediatePersist, parentEntity, dialog])

	if (!(parentEntity instanceof EntityAccessor)) {
		return null
	}

	let defaultProps: ButtonOwnProps = {
		size: 'small',
		flow: 'circular',
		distinction: 'seamless',
		bland: true,
	}

	return (
		<Button
			distinction="primary"
			{...defaultProps}
			{...rest}
			className={[
				className,
				toThemeClass(null, 'danger', ':hover'),
			].join(' ')}
			disabled={isMutating || rest.disabled}
			onClick={onClick}
		>
			{children || <Icon blueprintIcon="trash" />}
		</Button>
	)
})

export default () => (
	<DataGridPage entities="Beer" rendererProps={{ actions: <LinkButton to="createBeer">Create new</LinkButton> }}>
		<TextCell field="name" header="Name" />
		<NumberCell field="alcohol" header="Alcohol contents" />
		<TextCell field="brewery.name" header="Brewery" />
		<GenericCell shrunk canBeHidden={false}>
			<LinkButton to="editBeer(id:$entity.id)">Edit</LinkButton>
		</GenericCell>
		<GenericCell shrunk canBeHidden={false}>
			<DeleteEntityButton immediatePersist />
		</GenericCell>
	</DataGridPage>
)
