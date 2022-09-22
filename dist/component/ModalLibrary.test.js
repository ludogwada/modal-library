import React from 'react';
import Modal from './ModalLibrary';
import renderer from 'react-test-renderer';
describe('Modal', () => {
  it('renders properly', () => {
    const tree = renderer.create( /*#__PURE__*/React.createElement(Modal, {
      content: "new text"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});