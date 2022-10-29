# Modal-library-ludogwada

A library of React components.

## Installation

Install modal-library with npm

```bash
  npm install modal-library-ludogwada
```

## Badges

![made-with-create-react-app](https://user-images.githubusercontent.com/75996200/162953332-33d7bd5c-9534-48f7-98e6-62a9be776271.svg)

## Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

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
					modalStyle='modal'
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

## Props

| Label        |   Type   | Required | Default |
| :----------- | :------: | :------: | :-----: |
| modalStyle   |  string  |   Yes    |   N/A   |
| textStyle    |  string  |    No    |   N/A   |
| showModal    | boolean  |   Yes    | 'false' |
| setShowModal | function |   Yes    |   N/A   |
| content      |  string  |   yes    |   N/A   |

## Authors

- @Ludogwada](https://www.github.com/ludogwada)
