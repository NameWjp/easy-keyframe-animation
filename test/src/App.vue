<template>
  <div ref="root" class="a"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import keyframeAnimation from 'easy-keyframe-animation';

export default defineComponent({
  name: 'App',
  mounted() {
    this.runTest();
  },
  methods: {
    keyframeTest() {
      keyframeAnimation.registerKeyframe('move', {
        0: {
          transform: `translate3d(0, 0, 0)`
        },
        100: {
          transform: `translate3d(0, 99px, 0)`
        }
      });
      console.log('已注册 keyframe');
      setTimeout(() => {
        keyframeAnimation.unregisterKeyframe('move');
        console.log('已注销 keyframe')
      }, 2000);
    },
    runTest() {
      const el = this.$refs.root as HTMLElement;
      keyframeAnimation.registerKeyframe('move', {
        0: {
          transform: `translate3d(0, 0, 0)`
        },
        100: {
          transform: `translate3d(0, 99px, 0)`
        }
      });
      console.log('已注册 keyframe');
      console.log('开始动画');
      keyframeAnimation.addAnimation(el, {
        name: 'move',
        duration: '4s',
      }, () => {
        console.log('结束动画');
      });
    },
    pauseTest() {
      const el = this.$refs.root as HTMLElement;
      keyframeAnimation.registerKeyframe('move', {
        0: {
          transform: `translate3d(0, 0, 0)`
        },
        100: {
          transform: `translate3d(0, 99px, 0)`
        }
      });
      console.log('已注册 keyframe');
      console.log('开始动画');
      keyframeAnimation.addAnimation(el, {
        name: 'move',
        duration: '4s',
      }, () => {
        console.log('结束动画');
      });
      setTimeout(() => {
        keyframeAnimation.pauseAnimation(el);
        console.log('已暂停');
      }, 2000);
      setTimeout(() => {
        keyframeAnimation.recoverAnimation(el);
        console.log('已恢复');
      }, 4000);
    },
    removeTest() {
      const el = this.$refs.root as HTMLElement;
      keyframeAnimation.registerKeyframe('move', {
        0: {
          transform: `translate3d(0, 0, 0)`
        },
        100: {
          transform: `translate3d(0, 99px, 0)`
        }
      });
      console.log('已注册 keyframe');
      console.log('开始动画');
      keyframeAnimation.addAnimation(el, {
        name: 'move',
        duration: '4s',
      }, () => {
        console.log('结束动画');
      });
      setTimeout(() => {
        keyframeAnimation.removeAnimation(el);
        console.log('注销动画');
      }, 2000);
    }
  }
})
</script>

<style>
.a {
  width: 200px;
  height: 200px;
  margin: 40px;
  background: red;
}
</style>
