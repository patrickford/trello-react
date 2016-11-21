import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function() {
    it('Renders a card',  function() {
        const text = 'This is some text';

        const renderer = TestUtils.createRenderer();
        renderer.render(<Card text={text} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('card');
        result.type.should.equal('div');

        const children = result.props.children;
        children.should.equal(text);
    });
});