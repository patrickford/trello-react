import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import ListContainer from '../js/components/list-container';

describe('ListContainer component', function() {
    it('Renders a list container',  function() {
        const title = "First";

        const renderer = TestUtils.createRenderer();
        renderer.render(<ListContainer title={title} />);
        const result = renderer.getRenderOutput();

        const props = result.props;
        props.should.have.property('cards');
        props.should.have.property('onChange');
        props.should.have.property('onSubmit');
        props.should.have.property('title');
    });
});