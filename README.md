# easy-keyframe-animation
一个使用 js 动态创建 animation 和 keyframe 的库，支持 typescript，兼容各类浏览器。

## 使用
### 安装
```
npm install -S easy-keyframe-animation
```
### 导出实例
```js
import keyframeAnimation from 'easy-keyframe-animation';
```
### 注册 keyframe
```js
keyframeAnimation.registerKeyframe('move', {
  0: {
    transform: `translate3d(0, 0, 0)`
  },
  100: {
    transform: `translate3d(0, 99px, 0)`
  }
});
```
### 挂载动画
```js
keyframeAnimation.addAnimation(el, {
  name: 'move',
  duration: '4s',
});
```

## API
### registerKeyframe(name: string, options: KeyframeOptions): void
注册一个 keyframe
#### name
注册的 keyframe 名称
#### options
对应 [keyframes](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes) 的每一项。key 可以是 from，to 等关键字，填入 number 时会自动添加百分号。Record&lt;string, string&gt; 对应动画的每一帧，左侧是变化的属性，右侧是变化的值（需要自行拼接成字符串）
### unregisterKeyframe(name: string): void
注销一个 keyframe
#### name
注销的 keyframe 名称
### addAnimation(el: HTMLElement, options: string | AnimationOptions, cb?: () => void): Promise&lt;void&gt;
挂载一个动画到 el 上，默认返回 Promise，动画完成后会 resolve
#### el
挂载dom
#### options
动画配置的可选项
#### cb
动画完成的回调函数
### removeAnimation(el: HTMLElement): void
移除一个元素的动画
#### el
移除dom
### pauseAnimation(el: HTMLElement): void
暂停一个元素的动画
#### el
暂停dom
### recoverAnimation(el: HTMLElement): void
恢复一个暂停元素的动画
#### el
恢复dom
