import { prefix, prefixStyle } from "./prefix";
import { KeyframeOptions } from '../types';

function getLine(key: string, styles: Record<string, string>): string {
  if (key === 'from') {
    key = '0%';
  }
  if (key === 'to') {
    key = '100%';
  }
  if (key.indexOf('%') === -1) {
    key += '%';
  }
  return `${key}{${getStyle(styles)}}`;
}

function getStyle(styles: Record<string, string>): string {
  let buf = '';

  Object.keys(styles).forEach(key => {
    buf += `${prefixStyle(key)}: ${styles[key]};`;
  });

  return buf;
}


export default function createKeyframe(name: string, options: KeyframeOptions): string {
  let buf = `@${prefix}keyframes ${name} {`;

  Object.keys(options).forEach(key => {
    buf += getLine(key, options[key]);
  });

  buf += '}';

  return buf;
}
