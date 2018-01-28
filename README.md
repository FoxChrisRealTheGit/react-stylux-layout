# react-stylux

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. It should also be noted that no items are responsive, and are only psuedo responsive to the extent that flex-wrap is responsive. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm install --save react-stylux-layout
```

## How To Use Stylux

### Included in the layout version of react-stylux is:
* Containers 1-5
* Holders 1-13


### Step by step:

Stylux utilizes three main components and flex-box to handle layouts effectively. As an example, import Container1, Holder1, and Navbar1:

```
import {
    Container1,
    Holder1,
    NavBar1,
} from 'react-stylux';
```

Now you can use these components like any other component!

```
<Container1>
    <Holder1>
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1>
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
Children are passed into the block level component to render based on type. In the example above, NavBar1 is used in conjunction with Holder1. This will create two spaces, and create two navbars center aligned. As a special note, every navbar block is hooked up with a className to psuedo render a logo based on href/to address info using the font awesome library.

props can be passed into every item to further create a custom expierence:
```
<Container1>
    <Holder1
        block1="2">
        <NavBar1>
            <Link to="">Item1</Link>
            <Link to="">Item2</Link>
            <Link to="">Item3</Link>
        </NavBar1>
        <NavBar1
            align="flex-end"
            navbarWidth="60%">
            <Link to="facebook.com"></Link>
            <Link to="twitter.com"></Link>
            <Link to="instagram.com"></Link>
        </NavBar1>
    </Holder1>
</Container1>
```
This is just a basic example of what can be done with stylux. Basic documentation on the current blocks can be seen below, a more comprehensive website is currently being worked on.

## Documentation:

Each element will be shown with an example of the possible props equal to the default props, if no default is set then the prop will have no equals.
Each elements will then be shown is an example of children accepted.

### Layout Specific


#### Containers (possible name change expected)


##### Container1
```
<Container1
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    textColor = 'yellow'
    background = 'white'
    padding = '0'
    margin = '0'
    >
```
This accepts one child and renders it
```
<Container1>
    <Holder1>
    </Holder1>
</Container1>
```

##### Container2
```
<Container2
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 ='center'
    block2 ='1'
    justifyBlock2 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts two children and renders them
```
<Container2>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container2>
```

##### Container3
```
<Container3
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 ='1'
    justifyBlock3 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin ='10px 0'
    >
```
This accepts three children and renders them
```
<Container3>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container3>
```

##### Container4
```
<Container4
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts four children and renders them
```
<Container4>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container4>
```

##### Container5
```
<Container5
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts five children and renders them
```
<Container5>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
    <Holder1>
    </Holder1>
</Container5>
```


#### Holders 

##### Holder1
```
<Holder1
    display = 'flex'
    direction = 'row'
    block1direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts two children and renders them
```
<Holder1>
    <Block2 />
    <Block2 />
</Holder1>
```

##### Holder2
```
<Holder2
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts three children and renders them
```
<Holder2>
    <Block2 />
    <Block2 />
    <Block2 />
</Holder2>
```

##### Holder3
```
<Holder3
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts four children and renders them
```
<Holder3>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder3>
```

##### Holder4
```
<Holder4
    display = 'flex'
    direction = 'row'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts five children and renders them
```
<Holder4>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder4>
```

##### Holder5
```
<Holder5
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts two children and renders them
```
<Holder5>
    <Block2 />
    <Block2 />
</Holder5>
```

##### Holder6
```
<Holder6
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts three children and renders them
```
<Holder6>
    <Block2 />
    <Block2 />
    <Block2 />
</Holder6>
```

##### Holder7
```
<Holder7
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts four children and renders them
```
<Holder7>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder7>
```

##### Holder8
```
<Holder8
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts five children and renders them
```
<Holder8>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder8>
```

##### Holder9
```
<Holder9
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts six children and renders them
```
<Holder9>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder9>
```

##### Holder10
```
<Holder10
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts seven children and renders them
```
<Holder10>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder10>
```

##### Holder11
```
<Holder11
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    alignBlock8 = 'center'
    block8 = '1'
    block8BorderLeft
    block8BorderRight
    block8BorderTop
    block8BorderBottom
    block8Border
    justifyBlock8 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts eight children and renders them
```
<Holder11>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder11>
```

##### Holder12
```
<Holder12
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    alignBlock8 = 'center'
    block8 = '1'
    block8BorderLeft
    block8BorderRight
    block8BorderTop
    block8BorderBottom
    block8Border
    justifyBlock8 = 'center'
    alignBlock9 = 'center'
    block9 = '1'
    block9BorderLeft
    block9BorderRight
    block9BorderTop
    block9BorderBottom
    block9Border
    justifyBlock9 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts nine children and renders them
```
<Holder12>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder12>
```

##### Holder13
```
<Holder12
    display = 'flex'
    direction = 'column'
    alignBlock1 = 'center'
    block1 = '1'
    block1BorderLeft
    block1BorderRight
    block1BorderTop
    block1BorderBottom
    block1Border
    justifyBlock1 = 'center'
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    alignBlock8 = 'center'
    block8 = '1'
    block8BorderLeft
    block8BorderRight
    block8BorderTop
    block8BorderBottom
    block8Border
    justifyBlock8 = 'center'
    alignBlock9 = 'center'
    block9 = '1'
    block9BorderLeft
    block9BorderRight
    block9BorderTop
    block9BorderBottom
    block9Border
    justifyBlock9 = 'center'
    alignBlock10 = 'center'
    block10 = '1'
    block10BorderLeft
    block10BorderRight
    block10BorderTop
    block10BorderBottom
    block10Border
    justifyBlock10 = 'center'
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    >
```
This accepts ten children and renders them
```
<Holder13>
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
    <Block2 />
</Holder13>
```


## Feature Wish List

**Will be added soon** 


## Built With

* [React](http://www.reactjs.org) - The library used

## Code of Conduct

a link should go to the code of conduct

## Contributing

No Contributions will be accepted outside of the project team until the project is out of full Alpha Testing


## Versioning
for a more detailed list of changes, please refer to the changelog

**0.2.0**
* Added media queries to containers, holders, headings, and pargaraphs
* added display ability through props
* updated readme

**0.1.0**
* major name changes will break all prior versions, see changelog
* Heading/Paragraph blocks have text align, height and width props available
* css reset hooked up to every block

**0.0.12**
* documentation added to readme

**0.0.10** works
* this is the furthest back that is mostly working


## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give ackknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style


## Changelog
**0.2.0**
* fixed carousel componentWillUnmount - still needs testing, will probably still show error in console
* added smdis && mddis to every container, holder, heading blocks, paragraph blocks, and image blocks
* added media queries for max-width 481px and minwidth 482px max-wdith 1200px everything else should render above 1200px
* adding in placeholder sizes until more responsive testing occurs
* readme updated for changes
* new animation and responsive design sections added to readme

**0.1.6**
* added lifecycle componentWillUnmount to carousels to stop interval
* added lifecycle componentWillRecieveProps to most blocks to allow for render updates

**0.1.5**
* added Table1 and Table2
* added animation path to blocks (feature not fully implemented)
* added the outline for animation integration into basic blocks (feature not fully implemented)
* moved most children to array into componentdidmount to set children on state
* fixed navbar1 classname & id
* lowered dropdownnav5 default text size
* fixed horizontal ticker 1
* readme updated for changes

**0.1.4**

* fixed dropdownnav1
* added togglePlace onto toggler2, this uses flexDirection to change toggle place eg 'column-reverse' || 'row' etc...
* changed toggler1 position to fixed from absolute, still changeable through props.
* added modul1, popup with an x close in the upper right corner
* navigation font sizes adjusted (needs more work)

* readme updated for changes


**0.1.3**

* Fixed Holders 8-13 block 5 styles
* got rid of a tags in Brands, will rework Brand Blocks
* text-shadow added to headings and paragraphs
* border, border-left, border-right, border-top, border-bottom added to headings, paragraphs, holders, and toggler 1 & 2
* added box-shadow to dropdownnav1 and toggler1
* border-radius, text-align, and color added to dropdownnav1
* color also added to navbar, subnav 1 & 2
* got rid of default yellow hover highlight will be allow for easier adjusting of this soon
* toggler 1 now has z-index of 2000
* color, border, weight, shadow, margin, padding, variant, and background added to the toggler 1 & 2 button

* readme updated to reflect the changes

**0.1.0**
* text align added to heading and paragraph blocks
* Width and Height now available for heading and paragraph blocks

* mainHeading name changed to H1 + num
* Heading name changed to H2 + num
* SubHeading name changed to H3 + num
* SecondarySubHeading name changed to H4 + num
* Paragraph name changed to P + num
* PullQuote name changed to PLQ + num

* z Index of 1000 added to the DropDownNav1
* z Index of 200 added to the SubNavBAr1, this fixes a stacking issue

* css reset hooked up to every block

* readme updated to reflect changes

* fixed Holder4 block 3-5 styles

**0.0.12**
* readme was updated with minor documentation

**0.0.10**
* baselineish that things are mostly working