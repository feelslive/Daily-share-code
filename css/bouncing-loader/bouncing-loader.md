说明
注:1rem 通常是16px 。

@keyframes定义了一个具有两种状态的动画，其中元素更改opacity并使用transform: translateY()在2D平面上进行transform: translateY() 。

.bouncing-loader是弹跳圆圈的父容器，使用display: flex和justify-content: center将它们放置在中心位置。

.bouncing-loader > div ，将父级的三个子div作为样式。 div的宽度和高度为1rem ，使用border-radius: 50%将它们从正方形变成圆形。

margin: 3rem 0.2rem 指定每个圆的上边距/下边距为3rem 和左/右边距0.2rem 以便它们不直接接触对方，给它们一些呼吸空间。

animation是各种动画属性的缩写属性：使用animation-name ， animation-duration ， animation-iteration-count ， animation-direction 。

nth-child(n)目标是其父元素的第n个子元素。

animation-delay分别用于第二个和第三个div ，以便每个元素不会同时启动动画。

浏览器支持
95.3 %
