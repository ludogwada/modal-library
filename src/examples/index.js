import React, { useState } from 'react';
import Modal from '../lib/component/ModalLibrary';
import './index.css';

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
					classeName='modal'
					textStyle='text'
					showModal={showModal}
					setShowModal={setShowModal}
					content='hello World'></Modal>
			) : null}
		</main>
	);
};
export default ModalExample;
