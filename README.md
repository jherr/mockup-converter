Mockup Converter
================

So you have your [Bootstrap mockups](https://v4-alpha.getbootstrap.com/) in hand and now you want to make an awesome application based on [reactstrap]() components. But now you realize you are going to need to hand translate the class names in your mockups into props on your components.

```html
<button class="btn btn-large">OK!</button>
```

Needs to become:

```jsx
import { Button, } from 'reactstrap';

render() {
  return (
    <Button size="lg">OK!</Button>
  );
}
```

What a hassle! So let's fix that with `mockup-converter`. Simply install it:

```
$ npm install mockup-converter -g
```

And either run it on your file:

```
$ mockup-converter mymockup.html
```

Or run it through STDIN to `mockup-converter`:

```
$ cat mymockup.html | mockup-converter
```

Which means you can do cool things like running it through the [FilterText](https://github.com/yhirose/vscode-filtertext) extension in VSCode.

![Demo](./images/demo.gif)

# What does this handle?

Currently the converter only handles `Button` and `ButtonGroup`. But more support is on the way.
