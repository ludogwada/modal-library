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
					content='Add your text'></Modal>
			) : null}
		</main>
	);
};
export default ModalExample;
```
