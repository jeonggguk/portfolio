<script setup>
import Profile from './components/Profile.vue'
import TechStack from './components/TechStack.vue'
import Projects from './components/Projects.vue'
import Hobby from './components/Hobby.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Profile />
    <TechStack />
    <Projects />
    <Hobby />
    <Footer />
  </div>
</template>

<style>
/* App 전역 스타일 */
#app {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 모든 요소의 기본 마진/패딩 제거 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 브라우저 기본 스타일 완전 제거 */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
</style>
