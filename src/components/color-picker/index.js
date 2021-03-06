import React from "react";
import { SketchPicker } from "react-color";

class ColorPicker extends React.Component {
    state = {
        displayColorPicker: false,
        isShown: false
    }

    handleClick = () => {
        this.setState({displayColorPicker: !this.state.displayColorPicker})
    };

    handleClose = () => {
        this.setState({displayColorPicker: false})
    };

    handleChangeComplete = (color) => {
        this.props.onColorChange(color)
    };

    render() {
        console.log('render ColorPicker')
        const styles = {
            color: {
                display: 'flex',
                height: '40px',
                borderRadius: '10px',
                background: `${this.props.color}`,
            },
            /*swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },*/
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        }

        return (
            <div>
                <div style={styles.swatch} onClick={this.handleClick}>
                    <div style={styles.color} />
                </div>
                {
                    this.state.displayColorPicker ? <div style={styles.popover}>
                        <div style={styles.cover} onClick={this.handleClose}/>
                        <SketchPicker width="auto" color={this.props.color} onChangeComplete={this.handleChangeComplete}/>
                    </div> : null
                }
            </div>
        )
    }
}

export default ColorPicker
