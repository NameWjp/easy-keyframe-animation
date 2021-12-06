import createKeyframe from './utils/createKeyframe';
import loadStyle from './utils/loadStyle';
import { KeyframeOptions, KeyframesMap, AnimationOptions } from './types';
import { prefixStyle } from './utils/prefix';

const defaultAnimationOptions = {
  duration: '1s',
  timingFunction: 'ease',
  delay: '0s',
  iterationCount: 1,
  direction: 'normal',
  fillMode: 'both',
  playState: 'running',
};

class KeyframeAnimation {
  keyframesMap: KeyframesMap;

  constructor() {
    this.keyframesMap = {};
  }

  registerKeyframe(name: string, options: KeyframeOptions): void {
    this.unregisterKeyframe(name);
    const keyframeStr = createKeyframe(name, options);
    const styleEl = loadStyle(keyframeStr);
    styleEl.setAttribute('data-name', name);

    this.keyframesMap[name] = {
      styleEl,
    };
  }

  unregisterKeyframe(name: string) {
    if (this.keyframesMap.hasOwnProperty(name)) {
      const styleEl = this.keyframesMap[name].styleEl;
      styleEl.parentNode?.removeChild(styleEl);
      delete this.keyframesMap[name];
    }
  }

  addAnimation(el: HTMLElement, options: string | AnimationOptions, cb?: () => void): Promise<void> {
    if (typeof options === 'string') {
      options = { name: options };
    }

    const animationOptions = Object.assign({}, defaultAnimationOptions, options);

    return new Promise<void>((resolve) => {
      const animationEnd = () => {
        el.removeEventListener('animationend', animationEnd);
        resolve();
        cb?.();
      };

      el.addEventListener('animationend', animationEnd);

      const styles = [
        animationOptions.name,
        animationOptions.duration,
        animationOptions.timingFunction,
        animationOptions.delay,
        animationOptions.iterationCount,
        animationOptions.direction,
        animationOptions.fillMode,
        animationOptions.playState
      ];

      el.style[prefixStyle('animation') as any] = styles.join(' ');
    });
  }

  removeAnimation(el: HTMLElement) {
    el.style[prefixStyle('animation') as any] = 'none';
  }

  pauseAnimation(el: HTMLElement) {
    el.style[prefixStyle('animationPlayState') as any] = 'paused';
  }

  recoverAnimation(el: HTMLElement) {
    el.style[prefixStyle('animationPlayState') as any] = 'running';
  }
}

export default new KeyframeAnimation;
