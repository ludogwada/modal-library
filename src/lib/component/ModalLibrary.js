import React, { useCallback, useEffect } from 'react';

import './ModalLibrary.css';

const Modal = (props) => {
	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && props.showModal) {
				props.setShowModal(false);
			}
		},
		[props]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return (
		<>
			{props.showModal ? (
				<section className='container-modal'>
					<div className={props.modal}>
						<span className={props.textStyle}>{props.content}</span>
						<button
							className='modal-cross'
							aria-label='Close modal'
							onClick={() => props.setShowModal(false)}>
							X
						</button>
					</div>
				</section>
			) : null}
		</>
	);
};

export default Modal;
