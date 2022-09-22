import React, { useState } from 'react';
import { Modal } from '../lib';

const ModalExample = () => {
	const [showModal, setShowModal] = useState(false);

	const show = () => {
		setShowModal(true);
	};
	return (
		<div>
			index
			<button onClick={show}>Click</button>
			{showModal ? (
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					content='hihihi'></Modal>
			) : null}
		</div>
	);
};
export default ModalExample;
