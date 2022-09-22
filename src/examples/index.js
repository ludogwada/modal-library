import React, { useState } from 'react';
import Modal from '../lib/component/ModalLibrary';

const ModalExample = () => {
	const [showModal, setShowModal] = useState(false);

	const show = () => {
		setShowModal(true);
	};
	return (
		<main>
			<h1>Test ModalLibrary</h1>
			<button onClick={show}>Click</button>
			{showModal ? (
				<Modal
					showModal={showModal}
					setShowModal={setShowModal}
					content='hihihi'></Modal>
			) : null}
		</main>
	);
};
export default ModalExample;
