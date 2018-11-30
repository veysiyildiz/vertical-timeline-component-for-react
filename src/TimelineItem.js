import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';
import './TimelineItem.css';

class TimelineItem extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const {
      id,
      children,
      dateText,
      dateStyle,
      dateComponent,
      dateInnerStyle,
      bodyContainerStyle,
      style,
      className,
      visibilitySensorProps,
    } = this.props;
    const { visible } = this.state;
    return (
      <div
        id={id}
        className={classNames(className, 'entry', {
          'timeline-item--no-children': children === '',
        })}
        style={style}
      >
        <VisibilitySensor
          {...visibilitySensorProps}
          onChange={this.onVisibilitySensorChange}
        >
          <Fragment>
            <div className="title">
              <div className={`${visible ? 'bounce-in' : 'is-hidden'}`}>
                {dateComponent !== null ? (
                  dateComponent
                ) : (
                  <span style={dateStyle} className="timeline-item-date">
                    <time
                      style={dateInnerStyle}
                      className="timeline-item-dateinner"
                      title={dateText}
                    >
                      {dateText}
                    </time>
                  </span>
                )}
              </div>
            </div>
            <div className="body">
              <div
                className={`body-container ${
                  visible ? 'bounce-in' : 'is-hidden'
                }`}
                style={bodyContainerStyle}
              >
                {children}
              </div>
            </div>
          </Fragment>
        </VisibilitySensor>
      </div>
    );
  }
}

TimelineItem.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  dateStyle: PropTypes.shape({}),
  dateInnerStyle: PropTypes.shape({}),
  bodyContainerStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  dateText: PropTypes.string,
  dateComponent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
  ]),
  visibilitySensorProps: PropTypes.shape({}),
};

TimelineItem.defaultProps = {
  id: '',
  children: '',
  dateComponent: null,
  className: '',
  dateStyle: null,
  bodyContainerStyle: null,
  dateInnerStyle: null,
  style: null,
  dateText: '',
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 50 } },
};

export default TimelineItem;
