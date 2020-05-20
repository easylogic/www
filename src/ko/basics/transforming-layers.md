# Transforming Layers

In the case of simple move and resize, it is the part that adjusts the actual top, left, width and height of CSS.

In addition to this, CSS has a way to transform or move an object called transform.

The selected layers can use the UI for transform. The circle area in the middle of the selection area is a tool that makes it easy to transform.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oRNp2unU6jI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### Drag the circle left or right

Rotate around the X axis.

#### move up and down

Rotate around the Y axis.

#### shift + drag

Leave only the position of the selected layer and set only the position to translate.

#### shift + doubleclick

Initialize `translate` values.

#### Drag the bounced triangle

Rotate around the Z axis.

#### alt + circle drag

Set transform-origin.

Setting transform-origin lets you set the base point for rotateZ.

#### alt + circle doubleclick

Initialize `transform-origin` values.

#### If you drag the green circle

Set perspective to become a layer that can express perspective. Required attribute to use 3d function.

#### Command + circle drag

Setting translateZ (You can express the perspective by setting the `translateZ` property after the perspective is set.)