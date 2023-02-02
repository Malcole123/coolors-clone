import React , { Component } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function AddBtnComponent(data){
    const { showAdd , currentIndex, totalSlides} = data.props;
    if(showAdd === 'true'){
        let addDirection = currentIndex < totalSlides - 2 ? 'right' : 'left';
        return <Fab 
        color="white" 
        aria-label="add"
        data-add-pos={ currentIndex }
        data-add-direction= { addDirection }
        onClick={ data.triggerColorAdd }
        >
            <AddIcon />
        </Fab>    
    }else{
        return <div></div>
    }
}

function ColorSlideStyling(colorHex){
    return {backgroundColor:`${colorHex}`}
}



class ColorSlide extends Component {
    render() {     
      return (
        <div className='app-color-display' style={ ColorSlideStyling(this.props.colorHex) }>
            <div className='app-color-action-wrapper app-color-add-indicator app-color-add-indicator-left'>
           
            </div>
            
            <div className='app-color-action-wrapper app-color-add-indicator app-color-add-indicator-right'>
                <AddBtnComponent 
                props={this.props}
                triggerColorAdd= { this.props.newSlideRequest}
                />
            </div>
        </div>
      )
    }
}



export default ColorSlide