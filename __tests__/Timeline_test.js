import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Timeline from '../src/Timeline';

describe('Timeline', () => {
  it('should have the timeline--wrapper classname', () => {
    const component = shallow(
      <Timeline>
        <div>
          <div>test1</div>
          <div>test2</div>
        </div>
      </Timeline>,
    );
    expect(component.hasClass('timeline--wrapper')).to.equal(true);
  });
  it('should have the timeline--animate classname', () => {
    const component = shallow(
      <Timeline>
        <div>
          <div>test1</div>
          <div>test2</div>
        </div>
      </Timeline>,
    );
    const innerDiv = component.find('.timeline');
    expect(innerDiv.hasClass('timeline--animate')).to.equal(true);
  });

  it('should not have the timeline--animate classname', () => {
    const component = shallow(
      <Timeline animate={false}>
        <div>
          <div>test1</div>
          <div>test2</div>
        </div>
      </Timeline>,
    );
    const innerDiv = component.find('.timeline');
    expect(innerDiv.hasClass('timeline--animate')).to.equal(false);
  });
});
