import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import List from '../js/components/list';

describe('List component', function() {
    it('Renders a list',  function() {
        const title = 'Main';

        const renderer = TestUtils.createRenderer();
        renderer.render(<List title={title} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('list');
        result.type.should.equal('div');

        const children = result.props.children;
        children.length.should.equal(3);
        children[2].type.should.equal('form');
        // result.props.should.have.property('cards');
        // result.props.should.have.property('onChange');
        // result.props.should.have.property('onSubmit');
        // result.props.should.have.property('title');
    });
});