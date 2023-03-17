import FontAwesome_ttf from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import icomoon from '../assets/fonts/Icomoon.ttf';

const IconsCSS = `
@font-face {
  src: url(${FontAwesome_ttf});
  font-family: FontAwesome;
}
@font-face {
  src: url(${icomoon});
  font-family: Icomoon;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = IconsCSS;
} else {
  style.appendChild(document.createTextNode(IconsCSS));
}

document.head.appendChild(style);
