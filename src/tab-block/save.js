import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from "@wordpress/block-editor";

export default function save( props ) {
	const { attributes } = props;
	let { index, parentBlockId, isActive } = attributes;

	if( ! index ) {
		index = 0;
	}

	return (
		<div { ...useBlockProps.save( {
			id: `tab-${parentBlockId}-${index}`,
			className: isActive ? 'active' : ''
		} ) }>
			<InnerBlocks.Content />
		</div>
	);
}
