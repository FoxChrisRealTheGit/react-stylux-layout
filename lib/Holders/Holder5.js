import React, { Component } from 'react';
import '../css/reset.css'
import StyleSheet from 'nestingstyles';
/* Start of Holder 5 Component */
export default class Holder5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            block1: props.block1 || '1',
            block1BorderLeft: props.b1BLeft,
            block1BorderRight: props.b1BRight,
            block1BorderTop: props.b1BTop,
            block1BorderBottom: props.b1BBottom,
            block1Border: props.b1Border,
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            block2BorderLeft: props.b2BLeft,
            block2BorderRight: props.b2BRight,
            block2BorderTop: props.b2BTop,
            block2BorderBottom: props.b2BBottom,
            block2Border: props.b2Border,
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            textColor: props.textColor || 'black',
            background: props.background || 'white',
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
        }
    }
    render() {
        const holderstyles = StyleSheet.create({
            holderstyles: {
            width: '100%',
            display: this.state.display,
            flexDirection: this.state.direction,
            flexWrap: 'wrap',
            background: this.state.text,
            justifyContent: this.state.alignBlocks,
        },
        '@media (max-width: 440px)': {
            holderstyles: {
                display: this.state.smdis,
                flexDirection: 'column'
            }
        },
        '@media screen and (min-width: 482px) and (max-width: 1200px)': {
            holderstyles: {
                display: this.state.mddis,
                flexDirection: 'column'
            }
        },
    });
    const block1styles = StyleSheet.create({
        block1styles: {
            display: 'flex',
            flex: this.state.block1,
            flexDirection: 'column',
            flexWrap: 'wrap',
            borderLeft: this.state.block1BorderLeft,
            borderRight: this.state.block1BorderRight,
            borderTop: this.state.block1BorderTop,
            borderBottom: this.state.block1BorderBottom,
            border: this.state.b1Border,
            alignItems: this.state.alignBlock1,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock1,
        },
        '@media screen and (max-width: 481px)': {
            block1styles: {
                display: this.state.block1smdis,
            }
        },
        '@media screen and (min-width: 482px) and (max-width: 1200px)': {
            block1styles: {
                display: this.state.block1mddis,
            }
        },

    });
    const block2styles = StyleSheet.create({
        block2styles: {
            display: 'flex',
            flex: this.state.block2,
            flexDirection: 'column',
            flexWrap: 'wrap',
            borderLeft: this.state.block2BorderLeft,
            borderRight: this.state.block2BorderRight,
            borderTop: this.state.block2BorderTop,
            borderBottom: this.state.block2BorderBottom,
            border: this.state.b2Border,
            alignItems: this.state.alignBlock2,
            margin: this.state.margin,
            justifyContent: this.state.justifyBlock2,
        },
        '@media screen and (max-width: 481px)': {
            block2styles: {
                display: this.state.block2smdis,
            }
        },
        '@media screen and (min-width: 482px) and (max-width: 1200px)': {
            block2styles: {
                display: this.state.block2mddis,
            }
        },

    });
        const childs = React.Children.toArray(this.props.children);
        return (
            <section style={holderstyles.holderstyles}>
                <div style={block1styles.block1styles}>{childs[0] || <div />}</div>
                <div style={block2styles.block2styles}>{childs[1] || <div />}</div>
            </section>
        )
    }
}
/* End of Holder 5 Component */