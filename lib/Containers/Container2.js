import React, { Component } from 'react';
import '../css/reset.css'
import StyleSheet from 'nestingstyles';
export default class Container2 extends Component {
    constructor(props){
        super(props);
        this.state={
            display: props.display || 'flex',
            direction: props.direction || 'column',
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            block1: props.block1 || '1',
            alignBlock1: props.alignBlock1 || 'center',
            justifyBlock1: props.justifyBlock1 || 'center',
            block1smdis: props.block1smdis || 'flex',
            block1mddis: props.block1mddis || 'flex',
            block2: props.block2 || '1',
            alignBlock2: props.alignBlock2 || 'center',
            justifyBlock2: props.justifyBlock2 || 'center',
            block2smdis: props.block2smdis || 'flex',
            block2mddis: props.block2mddis || 'flex',
            background: props.background,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
            childs:[],
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        return this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const containerStyle = StyleSheet.create({
            containerstyles: {
                display: this.state.display.display,
                flexDirection: this.state.direction,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.border,
            },
            '@media (max-width: 440px)': {
                containerstyles: {
                    display: this.state.smdis,
                    flexDirection: this.state.smflexDir
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                containerstyles: {
                    display: this.state.mddis,
                    flexDirection: this.state.mdflexDir
                }
            },
        });
        const block1style = StyleSheet.create({
            block1styles: {
                flex: this.state.block1,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock1,
                justifyContent: this.state.justifyBlock1,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block1styles: {
                    display: this.state.block1smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block1styles: {
                    display: this.state.block1mddis,
                }
            },

        });
        const block2style = StyleSheet.create({
            block2styles: {
                flex: this.state.block2,
                background: this.state.background,
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: this.state.alignBlock2,
                justifyContent: this.state.justifyBlock2,
                margin: this.state.margin,
            },
            '@media screen and (max-width: 481px)': {
                block2styles: {
                    display: this.state.block2smdis,
                }
            },
            '@media screen and (min-width: 482px) and (max-width: 760px)': {
                block2styles: {
                    display: this.state.block2mddis,
                }
            },

        });
        return (
            <section style={containerStyle.containerstyles}>
                <div style={block1style.block1styles}>{this.state.childs[0] || <div />}</div>
                <div style={block2style.block2styles}>{this.state.childs[1] || <div />}</div>
            </section>
        )
    }
}