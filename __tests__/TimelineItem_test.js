import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass,
} from 'react-dom/test-utils';
import TimelineItem from '../src/TimelineItem';

describe('TimelineItem', () => {
  it('should have the entry classname', () => {
    const component = renderIntoDocument(<TimelineItem />);
    findRenderedDOMComponentWithClass(component, 'entry');
  });
  describe('when children is empty', () => {
    it('should have the timeline-item--no-children classname', () => {
      const component = renderIntoDocument(<TimelineItem />);
      findRenderedDOMComponentWithClass(
        component,
        'timeline-item--no-children',
      );
    });

    it('should have the timeline-item--no-children classname', () => {
      const componentWithDate = renderIntoDocument(
        <TimelineItem date="2008" />,
      );
      findRenderedDOMComponentWithClass(
        componentWithDate,
        'timeline-item--no-children',
      );
    });

    it('should not have the timeline-item--no-children classname', () => {
      const component = renderIntoDocument(
        <TimelineItem>
          <div>My Child</div>
        </TimelineItem>,
      );
      expect(
        scryRenderedDOMComponentsWithClass(
          component,
          'timeline-item--no-children',
        ).length,
      ).toBe(0);
    });
  });
});
