function component() {
  let element = `
    <div class="your-class">
      <div>your content 1</div>
      <div>your content 2</div>
      <div>your content 3</div>
    </div>
  `;

  return element;
}

document.write(component());

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.your-class').slick();

import styles from './stylesheets/style.css';
