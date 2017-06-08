function component() {
  let element = `
    <ul class="slide">
      <li><img src="https://placeimg.com/640/240/animals"></li>
      <li><img src="https://placeimg.com/640/240/arch"></li>
      <li><img src="https://placeimg.com/640/240/nature"></li>
    </ul>
  `;

  return element;
}

document.write(component());


// slick-carousel
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './stylesheets/style.css';

$(function() {
  $('.slide').slick({
    infinite: true,
    dots: true,
  });
});
