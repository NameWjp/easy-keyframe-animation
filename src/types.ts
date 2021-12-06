export type KeyframeOptions = {
  [key: string]: Record<string, unknown>
}

export type KeyframesMap = {
  [key: string]: {
    styleEl: HTMLStyleElement,
  }
}

export type AnimationOptions = {
  name: string,
  duration?: string,
  timingFunction?: string,
  delay?: string,
  iterationCount?: number,
  direction?: string,
  fillMode?: string,
  playState?: string,
}
