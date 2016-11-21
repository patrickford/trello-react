import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';

describe('Board component', function() {
    it('Renders the board',  function() {
        const title = "Main";

        const renderer = TestUtils.createRenderer();
        renderer.render(<Board title={title} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
        result.type.should.equal('div');

        const children = result.props.children;
        children.length.should.equal(4);
        children[1].props.should.have.property('title');
    });
});