# react-stylux

**This project is part of the larger react-stylux library.**

- **responsive testing ongoing, no sizes are set as of right now**
- **videos being worked on to explain blocks and design choices**
- **beta will be released soon and this project will be open for collaboration**

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. Responsive implementation is in its infancy and will continue to improve. There are currently three sizes, please see Responsive notes for more information.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux-layout
```

## How To Use Stylux
### Table of Contents
- [What's included](#whats-included-in-the-layout-version-of-react-stylux-is)
- [Step by Step](#step-by-step)
- [Animation Notes](#animation-notes)
- [Responsive Notes](#responsive-notes)
- [Layout](#layout-specific)
    - [Containers](#containers-possible-name-change-expected)
    - [Holders](#holders)
- [Feature Wish List](#feature-wish-list)
- [Acknowledgments](#acknowledgments)
- [Changelog](#changelog)

### Included in the layout version of react-stylux is:
* Containers 1-5
* Holders 1-13


### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container, Holder, and Navbar1:

```
import {
    Container,
    Holder,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container>
    <Holder>
        <NavBar1>
            <a href="">Item1</a>
            <a href="">Item2</a>
            <a href="">Item3</a>
        </NavBar1>
        <NavBar1>
            <a href="facebook.com"></a>
            <a href="twitter.com"></a>
            <a href="instagram.com"></a>
        </NavBar1>
    </Holder>
</Container>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container>
    <Holder
        block1="2">
        <NavBar1>
            <a href="">Item1</a>
            <a href="">Item2</a>
            <a href="">Item3</a>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <a href="facebook.com"></a>
            <a href="twitter.com"></a>
            <a href="instagram.com"></a>
        </NavBar1>
    </Holder>
</Container>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.
## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.

### Animation Notes:

**the animation library is not currently associated with this part**

### Responsive Notes:
There are two breakpoints on the follow elements:
* containers
* holders

#### Small Breakpoint:
use this through props as: smdis
the breakpoint for this is currently set at max-width: 440px (subject to change)

#### Medium Breakpoint:
use this through props as: mddis
the breakpoint for this is currently set at min-width: 441px and max-width: 760px (subject to change)


### Layout Specific


#### Containers (possible name change expected)


##### Container
```

<Container
    display = 'flex'
    direction = 'row'
    borderLeft
    borderRight
    borderTop
    borderBottom
    border
    alignBlock1 = 'center'
    block{x} = '1'
    justifyBlock{x} = 'center'
    block{x}smdis = 'flex'
    block{x}mddis = 'flex'
    background
    padding = '0'
    margin = '0'
    smdis = 'flex'
    mddis = 'flex'
    smflexDir = 'column'
    mdflexDir = 'column'
    >
```
- x = number of block, for example block1 = '2'
- This accepts up to ten children and renders then. This is still currently a useless item, but can be used for visual clarity when creating. Future use will implement a Provider to deliver themes.
```
<Container>
    <Holder1>
    </Holder1>
</Container>
```

#### Holder 

##### Holder
```
<Holder
    display = 'flex'
    direction = 'row'
    borderLeft
    borderRight
    borderTop
    borderBottom
    border
    block{x}direction = 'row'
    alignBlock{x} = 'center'
    block{x} = '1'
    block{x}BorderLeft
    block{x}BorderRight
    block{x}BorderTop
    block{x}BorderBottom
    block{x}Border
    justifyBlock{x} = 'center'
    block{x}smdis = 'flex'
    block{x}mddis = 'flex'
    alignBlock{x} = 'center'
    background
    padding = '0'
    margin = '10px 0'
    smdis = 'flex'
    mddis = 'flex'
    smflexDir
    mdflexDir
    >
```
- x = number of block, for example block1 = '2'
- This accepts up to twenty children and renders them. This is the current backbone for layout. Can be placed inside of itself to create very dynamic and responsive layouts.
```
<Holder>
    <Block2 />
    <Block2 />
</Holder>
```

## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should probably go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog

**0.2.1**
* fixed media queries

## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give acknowledgments to Christopher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style object
* Massive credit for the animations to Daniel Eden - animate.css - http://daneden.me/animate


## Changelog
**0.3.0**
* Removed Containers 1-5 for a dynamic Container
* Removed Holders 1-13 for a dynamic Holder
* full implementation for Container still not available, but the Holder is close to being done, it still needs optimization. Will Test current implemtation against other ways until best results are achieved.
* updated readme for changes

**0.2.3**
* updated containers and holders to be consistent with current stable version of react-stylux 0.2.9

**0.2.2**
* added overflow hidden to holders and containers
* add border, borderleft, borderright, bordertop, and borderbottom to holders and containers
* changed default sm & md flexdirection values and added props to adjust
* changed md max from 1200 to 760

**0.2.1**
* fixed smdis to 440px
* fixed mddis to 441px to 1200px
* updated readme