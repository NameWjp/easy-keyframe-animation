export default function loadStyle(css: string): HTMLStyleElement {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
  return style;
}
