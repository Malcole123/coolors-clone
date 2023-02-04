import React , { Component } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Alert, Slide, Button } from '@mui/material';


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

function colorSlideStyling({bgColor, contrastColor}){
    let fontColor = contrastColor || "#fff";
    return {
      backgroundColor:bgColor,
      color:fontColor,
    }
}


function CardActionNotification({active ,message , variant}){
    let use_message = message || "";
    let use_severity = variant || 'success';
    let use_active = active || false;
    return (
        <div className='app-color-action-wrapper app-color-action-notification'>
            <Slide 
                direction='up'
                in={ use_active }          
            >
                          <Alert severity= { use_severity}
            style={
                {
                    borderRadius:'0px',
                    width:'100%',

                }
            }
            >{ use_message }</Alert>
            </Slide>
  
        </div>
    )
}

class ColorSlide extends Component {
    constructor(props){
        super(props);
        this.state = {
            alertData:{
                alertActive:false,
                alertMessage:"",
                alertVariant:"",
                alertDirection:"",
            },
            useDirection:"up",
            colorTester:{},
            contrastHex:"#fff",
        }
        this.alertCntrl = this.alertCntrl.bind(this);
        this.cardClickHandle = this.cardClickHandle.bind(this);
    }

    alertCntrl({state, message, variant}){
        this.setState({alertData:{
            alertActive:state,
            alertMessage:message,
            alertVariant:variant,
        }})
    }

    cardClickHandle(){
        let copyText = this.props.colorHex;
        navigator.clipboard.writeText(copyText);
        this.alertCntrl({
            state:true,
            message:"Hex Value copied to clipboard",
            variant:"info"
        })
        setTimeout(()=>{
            this.alertCntrl({
                state:false,
                message:"",
                variant:'info',
            })
        },5000)
    }


    render() {    
      return (
        <div className='app-color-display' style={ colorSlideStyling({bgColor:this.props.colorHex,contrastColor:this.props.colorContrast}) }
        >
            <div className='app-color-action-wrapper app-color-add-indicator app-color-add-indicator-left'>
                    
            </div>
            
            <div className='app-color-action-wrapper app-color-add-indicator app-color-add-indicator-right'>
                <AddBtnComponent 
                props={this.props}
                triggerColorAdd= { this.props.newSlideRequest}
                />
            </div>

            <div className='app-color-action-wrapper app-color-action-details'>


                    <div className='app-color-action-label'>
                            <div className='app-color-actions-additional'>

                            </div>
                            <h3 className='app-color-hex-code'
                            onClick = { this.cardClickHandle }
                            >
                                  { this.props.colorHex }
                            </h3>
                            <div>
                                 <Button
                            color="inherit"
                            variant="outlined"
                            onClick = { this.cardClickHandle }
                            >
                                Copy
                            </Button>
                            </div>
                    </div>
            </div>
            <CardActionNotification
                active = { this.state.alertData.alertActive }
                message={ this.state.alertData.alertMessage }
                variant={ this.state.alertData.alertVariant }
            />
        </div>
      )
    }
}



export default ColorSlide