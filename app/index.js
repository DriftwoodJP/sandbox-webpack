function component() {
  let element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());


import Person from './lib/person';

class Friend extends Person {
    constructor(name) {
      super(name);
    }
    callName() {
      alert(this.name);
    }
}

let friend = new Friend('Foo');

friend.callName();


import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.your-class').slick();

import styles from './stylesheets/style.css';
