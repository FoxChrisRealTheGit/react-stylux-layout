# react-stylux

**This project is part of the larger react-stylux library.**

This is currently a very alpha stage project, documentation will be lack luster for a few weeks. Please stand by while testing occurs. Responsive implementation is in its infancy and will continue to improve. There are currently three sizes, please see Responsive notes for more information.



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

### Animation Notes:

**the animation library is not currently built**

### Responsive Notes:
There are two breakpoints on the follow elements:
* containers
* holders

#### Small Breakpoint:
use this through props as: smdis
the breakpoint for this is currently set at max-width: 440px (subject to change)

#### Medium Breakpoint:
use this through props as: mddis
the breakpoint for this is currently set at min-width: 441px and max-width: 1200px (subject to change)


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
    block1smdis
    block1mddis
    textColor = 'yellow'
    background = 'white'
    padding = '0'
    margin = '0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 ='center'
    block2 ='1'
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 ='1'
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin ='10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    textColor = 'black'
    background = 'white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    block6smdis
    block6mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    block6smdis
    block6mddis
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    block7smdis
    block7mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    block6smdis
    block6mddis
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    block7smdis
    block7mddis
    alignBlock8 = 'center'
    block8 = '1'
    block8BorderLeft
    block8BorderRight
    block8BorderTop
    block8BorderBottom
    block8Border
    justifyBlock8 = 'center'
    block8smdis
    block8mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    block6smdis
    block6mddis
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    block7smdis
    block7mddis
    alignBlock8 = 'center'
    block8 = '1'
    block8BorderLeft
    block8BorderRight
    block8BorderTop
    block8BorderBottom
    block8Border
    justifyBlock8 = 'center'
    block8smdis
    block8mddis
    alignBlock9 = 'center'
    block9 = '1'
    block9BorderLeft
    block9BorderRight
    block9BorderTop
    block9BorderBottom
    block9Border
    justifyBlock9 = 'center'
    block9smdis
    block9mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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
    block1smdis
    block1mddis
    alignBlock2 = 'center'
    block2 = '1'
    block2BorderLeft
    block2BorderRight
    block2BorderTop
    block2BorderBottom
    block2Border
    justifyBlock2 = 'center'
    block2smdis
    block2mddis
    alignBlock3 = 'center'
    block3 = '1'
    block3BorderLeft
    block3BorderRight
    block3BorderTop
    block3BorderBottom
    block3Border
    justifyBlock3 = 'center'
    block3smdis
    block3mddis
    alignBlock4 = 'center'
    block4 = '1'
    block4BorderLeft
    block4BorderRight
    block4BorderTop
    block4BorderBottom
    block4Border
    justifyBlock4 = 'center'
    block4smdis
    block4mddis
    alignBlock5 = 'center'
    block5 = '1'
    block5BorderLeft
    block5BorderRight
    block5BorderTop
    block5BorderBottom
    block5Border
    justifyBlock5 = 'center'
    block5smdis
    block5mddis
    alignBlock6 = 'center'
    block6 = '1'
    block6BorderLeft
    block6BorderRight
    block6BorderTop
    block6BorderBottom
    block6Border
    justifyBlock6 = 'center'
    block6smdis
    block6mddis
    alignBlock7 = 'center'
    block7 = '1'
    block7BorderLeft
    block7BorderRight
    block7BorderTop
    block7BorderBottom
    block7Border
    justifyBlock7 = 'center'
    block7smdis
    block7mddis
    alignBlock8 = 'center'
    block8 = '1'
    block8BorderLeft
    block8BorderRight
    block8BorderTop
    block8BorderBottom
    block8Border
    justifyBlock8 = 'center'
    block8smdis
    block8mddis
    alignBlock9 = 'center'
    block9 = '1'
    block9BorderLeft
    block9BorderRight
    block9BorderTop
    block9BorderBottom
    block9Border
    justifyBlock9 = 'center'
    block9smdis
    block9mddis
    alignBlock10 = 'center'
    block10 = '1'
    block10BorderLeft
    block10BorderRight
    block10BorderTop
    block10BorderBottom
    block10Border
    justifyBlock10 = 'center'
    block10smdis
    block10mddis
    textColor = 'yellow'
    background ='white'
    padding = '0'
    margin = '10px 0'
    smdis
    mddis
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

**0.2.1**
* fixed media queries

## Authors

* **Christopher Fox** -

## License

This is licensed under MIT license. If used in any project, please give acknowledgments to Christoher Fox.


## Acknowledgments

* A Giant Thank you to [Dev Mountain](https://devmountain.com/) for teaching me to code good
* A big thank you to Morten Rand-Hendriksen for your videos on flex box and the code that allows the className socialness to work
* Credit to http://meyerweb.com/eric/tools/css/reset/  for use of a reset file
* Credit to the React-Styles team (used as nestingstyles) for the code to allow for media queries through style


## Changelog
**0.2.1**
* fixed smdis to 440px
* fixed mddis to 441px to 1200px
* updated readme