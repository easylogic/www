# Layer 

Layer is the most basic unit for drawing on the screen. One layer can have child layers. The child Layer has relative coordinates inside the parent. A layer can be the target of a transition or animation.


::: tip
In the ElementView, ArtBoard is represented as a Layer. In other words, you can take advantage of all the decorating features that a Layer has.

You can't put ArtBoard inside ArtBoard.
:::


Currently supported layers are Rect, Circle, Image, Text, Cube, Path, Polygon, and Star.

# CSS based layer

#### Rect

It is a rectangular Layer.

#### Circle

Added a border-radius attribute to the Rect to make it a circular Layer.

::: tip
The Rect can also be a Circle by adjusting the border-radius.
:::

#### Text

To make Text more convenient, we have created a Text Layer separately.

How to use is the same as Rect and the function to edit text is added.

#### Image

A Layer that can represent an Image.

You can use image formats supported by web browsers such as gif, jpg, png, and svg.

#### Cube

Although it is experimental, it is a component designed to make it easier to use the 3d features of css.

::: tip

Currently you can set the background-color and background-image properties of each layer inside. All are included in the timeline animation target.

:::


Experiments with further expansion will continue.


# SVG based layer

It has its own SVG-related editor and makes it easy to combine CSS and SVG environments.

#### Path

Layer to create SVG path elements.


#### Polygon

Similar to Path, but it is a layer that can draw only polygons.

It also supports its own editor for editing Polygons.

#### Star

This layer is made to create a patterned layer to increase the utilization of the polygon.

You can easily create a Star shape.