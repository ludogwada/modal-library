# Modal-library-ludogwada

A library of React components.

## Installation

Install modal-library with npm

```bash
  npm install modal-library-ludogwada
```

## Authors

- @Ludogwada](https://www.github.com/ludogwada)

## Usage/Examples

```javascript
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
```

```
css
.modal {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50% auto;
	padding: 20px;
	width: 80%;
	border: 1px solid black;
	border-radius: 10px;
	background-color: gray;
}

.text {
	font-size: x-large;
	font-weight: 700;
	color: black;
}
```
