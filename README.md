
## Full Documentation
[![codecov](https://codecov.io/gh/veysiyildiz/vertical-timeline-component-for-react/branch/master/graph/badge.svg)](https://codecov.io/gh/veysiyildiz/vertical-timeline-component-for-react) [![Build Status](https://travis-ci.org/veysiyildiz/vertical-timeline-component-for-react.svg?branch=master)](https://travis-ci.org/veysiyildiz/vertical-timeline-component-for-react) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/veysiyildiz/vertical-timeline-component-for-react/issues)

[npm](https://www.npmjs.com/package/vertical-timeline-component-for-react) / [demo](https://veysiyildiz.github.io/vertical-timeline-component-for-react)

[![Vertical-Timeline-Component-React.gif](https://i.postimg.cc/3wZYZ0Kq/Vertical-Timeline-Component-React.gif)](https://postimg.cc/1g4kmtV0)

## Install

```code
$ npm i vertical-timeline-component-for-react
```


## Usage

```code|lang-jsx
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    style={{ color: '#e86971' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        11/2008 – 04/2009
      </div>
    )}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>
```


## Timeline Props

### `animate={ Boolean }`

Enable or disable animations on elements (default: true).

### `className={ String }`

Add extra class name to root div element.

### `lineColor={ String }`

Choose your timeline color (default: `'#000'`).

## TimelineItem Props

### `className={ String }`

Add extra class name to root div element.

### `style={ Object }`

Add extra style to root div element.
You can change color of timeline points by adding color to style prop.

### `dateText={ String }`

Date of the element.

### `dateStyle={ Object }`

Add extra style to `'timeline-item-date'` span element.

### `dateInnerStyle={ Object }`

Add extra style to `'timeline-item-dateinner'` time element.

### `dateComponent={ JSX }`

Add custom date Component
When you use `'dateComponent'` the props `'dateText'`, `'dateStyle'` and `'dateInnerStyle'` will be ignored. 

### `bodyContainerStyle={ Object }`

Add extra style to `'body-container'` div element.

### `visibilitySensorProps={ Object }`

Custom props pass to VisibilitySensor component (default: { partialVisibility: true, offset: { bottom: 50 } }).
*See [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) for more information.*


## Showcase

* [(Veysi YILDIZ Cv)](https://veysiyildiz.github.io/).

### Launch demo

```code
$ npm run start
```

### Run tests

```code
$ npm run test
```

### Watch tests

```code
$ npm run test:watch
```

### Run lint

```code
$ npm run test:lint
```

## License

*vertical-timeline-component-for-react* is available under MIT. See [LICENSE](./LICENSE.txt) for more details.