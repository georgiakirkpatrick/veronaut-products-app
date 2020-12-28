// import React from 'react';
// import ReactDOM from 'react-dom';
// import renderer from 'react-test-renderer';
// import FormHeader from './FormHeader';

// describe('FormHeader', () => {
//         it ('renders without crashing', () => {
//             const div = document.createElement('div');
//             ReactDOM.render(<FormHeader />, div);
//             ReactDOM.unmountComponentAtNode(div);
//         });
    
//         it ('render the UI as expected', () => {
//             const tree = renderer
//                 .create(<FormHeader />)
//                 .toJSON();
//             expect(tree).toMatchSnapshot()
//         });
//     });