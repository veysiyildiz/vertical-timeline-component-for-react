
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import { Timeline, TimelineItem }  from '../../src';

import './styles.css';
import 'purecss/build/pure.css';

const documentationImports = {};
const timelineElements = [
  <TimelineItem
    key={'001'}
    date="11/2010 – Present"
    className="custom--class"
    style={{color: '#e86971'}}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
  </TimelineItem>,
  <TimelineItem
    key={'002'}
    date="04/2009 – 11/2010"
    className="custom--class"
    dateInnerStyle={{background: '#61b8ff', color: '#000'}}
    bodyContainerStyle={{background: '#ddd', padding: '20px', borderRadius: '8px', boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)' }}
  >
    <h3 style={{color: '#61b8ff'}}>Title, Company</h3>
    <h4 style={{color: '#61b8ff'}}>Subtitle</h4>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>

  </TimelineItem>,
  <TimelineItem
    key={'003'}
    date="11/2008 – 04/2009"
    className="custom--class"
    dateInnerStyle={{background: '#f7d286'}}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>

  </TimelineItem>,
  <TimelineItem
    key={'004'}
    date="08/2008 – 11/2008"
    className="custom--class"
    dateInnerStyle={{background: '#76bb7f'}}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>
    <p>Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.</p>

  </TimelineItem>
];

const pages = [
  {
    path: '/',
    title: 'Documentation',
    content: pageLoader(() => import('../../README.md')),
  },
  {
    path: '/demo',
    title: 'Demo',
    content: () => <Timeline lineColor={'#ddd'}>{timelineElements}</Timeline>,
  }
];


ReactDOM.render(
  <Fragment>
    <GithubCorner
      href="https://github.com/veysiyildiz/vertical-timeline-component-for-react"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      styles={{display: 'block'}}
      theme={{ }}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />,
      }}
      title="Vertical Timeline Component For React"
    />
  </Fragment>,
  document.getElementById('catalog'),
);
