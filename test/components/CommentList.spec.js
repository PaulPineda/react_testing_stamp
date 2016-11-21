import React from 'react';

// we won't need to have long relative paths once Karma
// is wired up ti run our tests through webpack
import CommentList from '../../src/components/CommentList';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

describe('(Component) CommentList', () =>{

  // enzyme's describeWithDOM helper used for tests
  // that depend on mounting the components
  //describeWithDOM('Lifecycle methods', () =>{  <<-- describeWithDOM deprecated
    it('calls componentDidMount', () =>{
      spyLifecycle(CommentList);

      const props = {
        onMount: () => {},  // an anonymous function in ES6
        isActive: false
      };

      // use destructuring to pass props down and then mount component
      mount(<CommentList {...props} />);

      // CommentList's componentDidMount should have been called
      //spyLifecycle attaches sinon spys so we can make thi assertion:
      expect(
        CommentList.protoype.componentDidMount.calledOnce
      ).to.be.true;
    });

    it('call onMount prop once it mounts', () =>{
      // create a spy for the onMount function
      const props = { onMount: sinon.spy() };

      mount(<CommentList {...props} />);

      expect(props.onMount.calledOnce).to.be.true;
    });
  //});
});
