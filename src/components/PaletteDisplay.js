import React , { Component, useState } from 'react';
import axios from 'axios';
import ColorSlide from './ColorSlide';
import { LinearProgress, Button , Chip, Stack} from '@mui/material';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';


import ColorContrastChecker from 'color-contrast-checker'

function PaletteController ({initialCount , displayResults, columnControl }) {
    const [count, setCount] = useState(initialCount);
    const [ componentMount , setComponentMount ] = useState(null)
    const detectNewItem = ()=>{
        let new_count = count + 1;
        setCount(new_count);

    }
    
    const updateComponentState = (val)=>{
        setComponentMount(val);
    }
    
    return (
    <div className='full-width app-palette-display' id='appPaletteDisplay' 
        style={    
            {        
                width:"100%",
                display:"grid",
                gridTemplateColumns:`repeat(${columnControl},1fr)`,
                flex:1,
            } 
        } 
    >
            <ColorDisplayList
                cardAddFunction = {
                    detectNewItem
                }
                colorResults = { 
                    displayResults
                }
                currentShow = {
                    count
                }
                componentMounted = {
                    componentMount
                }
                mountAction = {
                    updateComponentState
                }
            />
        </div> 
    );
}

const constrastTester = new ColorContrastChecker();

function returnHigherContrast(color1,color2, bgColor){
    let colorOneRGB = constrastTester.getRGBFromHex(color1.replaceAll("#",""));
    let colorTwoRGB = constrastTester.getRGBFromHex(color2.replaceAll("#",""));
    let bgColorRGB = constrastTester.getRGBFromHex(bgColor.replaceAll("#",""));

    let colorOneLRGB = constrastTester.calculateLRGB(colorOneRGB);
    let colorTwoLRGB = constrastTester.calculateLRGB(colorTwoRGB);
    let bgColorLRGB = constrastTester.calculateLRGB(bgColorRGB);

    let colorOneLuminance = constrastTester.calculateLuminance(colorOneLRGB);
    let colorTwoLuminance = constrastTester.calculateLuminance(colorTwoLRGB);
    let bgColorLuminance = constrastTester.calculateLuminance(bgColorLRGB);

    let colorOneRatio = constrastTester.getContrastRatio(colorOneLuminance , bgColorLuminance);
    let colorTwoRatio = constrastTester.getContrastRatio(colorTwoLuminance, bgColorLuminance );
    if(bgColorLuminance <= 0.25){
        if(colorOneRatio - 3.75 >= colorTwoRatio){
            return color1; 
        }else{
            return color2;
        }
    }else{
        if(colorOneRatio >= colorTwoRatio){
            return color1;
        }else{
            return color2;
        }
    }
}

function contrastChecker(bgColor){
    let lightColor = "#ffffff";
    let darkColor = "#000000";
    let useColor = returnHigherContrast(lightColor, darkColor, bgColor);
    return useColor
}


function PaletteActionControls({totalSlides,currentSlide}){

    const paletteUndoAction = ()=>{
        let target = currentSlide - 1 ;
       return target;
    }

    const paletteNextAction = ()=>{
        let target = currentSlide + 1 ;
        return target
    }

    const paletteRemoveControlAction = ()=>{
        //Removes control from UI
    }

    const PaletteUndoControls = (current, total )=>{
        let chips = ['previous', 'next'];
        let chip_map = chips.map((undoAction, index)=>{
            let use_dt = {}
            if(undoAction=== 'previous'){
                use_dt =  {
                    label:undoAction,
                    useIcon:()=>{
                        return <UndoIcon />
                    },
                    useFunction:paletteUndoAction,
                    removeFunction:paletteRemoveControlAction,
                }
            }else{
                use_dt = {
                    label:undoAction,
                    useIcon:()=>{
                        return <RedoIcon />
                    },
                    useFunction:paletteNextAction,
                    removeFunction:paletteRemoveControlAction,
                }
            }
        
            return (
                <Chip
                    key = { `apppal-ete-key-${index}`}
                    color="primary"
                    label={ use_dt.label }
                    clickable = { true }
                    onClick={ use_dt.useFunction }
                    onDelete={ use_dt.removeFunction }
                    deleteIcon={ use_dt.useIcon()}
                />
            )     
        })
        return chip_map;
    }

    return (
    <div className='app-palette-controls'>
        <Stack direction="row" spacing={ 1 }>
            <PaletteUndoControls
                current = { currentSlide }
                total = { totalSlides }
            />
        </Stack>
    </div>
    )
}


function PaletteLoaderControl({ isFetching , override, btnFunction, totalSlides, currentSlide}){
    if(isFetching === true || override === true){
        return (
            <div className='app-palette-loader'>
                <LinearProgress />  
            </div> 
        )
    }else{
        return (
            <span className='app-palette-controller-wrapper'>
                <PaletteActionControls
                totalSlides = { totalSlides  }
                currentSlide = { currentSlide }
                paletteNextAction = { (data)=>{
                    // console.log(data)
                }}
                paletteUndoAction = { (ev)=>{
                   // console.log(ev)
                }}
                />
                <Button
                    variant="contained"
                    color="success"
                    onClick = { btnFunction }
                >
                    Generate New 
                </Button>
            </span>
        )
    }
}

function ColorDisplayList(data){
    const { colorResults, currentShow } = data;
    let maxShow = parseInt(currentShow)
    let colorMutable = [...colorResults].splice(0 , maxShow);
    //Format results for component use
    let use_results = [...colorMutable].map((item,index)=>{
        //let show_icon = index < maxShow - 1 ? 'true' : 'false';
        let recommendedContrast = contrastChecker(item)
        return {
            isNew:true,
            listIndex:index,
            showAddIcon:'false', // Change to show icon when new palette feature added 
            colorName:"",
            colorHex:`#${item}`,
            colorContrast:recommendedContrast,
        };
    })
    //Set results to store for mutation across components 
    const addNewPaletteCard = async (ev)=>{
        //Function for adding new palette card - > triggered by button press on slide
        const { cardAddFunction } = data;
            //Current index of card 
            let currentPos = ev.currentTarget.getAttribute("data-add-pos");
            let addPos = parseInt(currentPos) + 1;
            let newCard = await createCard(addPos);
            placeCard({
                placeIndex:addPos,
                createdCard:newCard,
            });
            //onNewCardAdded(colorList.length)
            cardAddFunction();
    }
    
    const createCard = async (pos, hex, name, isNew)=>{
        //Function for creating any color card to be used on component
        let create_item = {
            isNew:isNew,
            listIndex:pos,
            showAddIcon:'false',
            colorName:name,
            colorHex:hex,
        }
        return create_item;
    }

    const placeCard = ({ placeIndex , createdCard })=>{
        //Places created card in component
  
    }

    return [...use_results].map((slide,index)=>{
        return  <ColorSlide 
        key= {`color-palette-slide-${index}`}
        currentIndex={ index }
        totalSlides={ colorMutable.length }
        showAdd={ slide.showAddIcon } 
        colorHex={ slide.colorHex }
        colorContrast={ slide.colorContrast }
        newSlideRequest={ addNewPaletteCard }
        />
    })
}


/* Mutation Handlers  */

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            paletteFilter:5, //Number of columns to show on instance
            fetchResults:[], // All Fetch results - > Formatted for undo functionality 
            currentDisplay:{
                paletteViewPos:0,
                id:"",
                colors:[], //Array or color hex to show on instance
                tags:[], //Identifiers
            },
            uiCols:5,
            uiState:'desktop' // 'desktop' or 'mobile'
        }
        this.fetchPaletteResults = this.fetchPaletteResults.bind(this);
        this.formatFetchedResults = this.formatFetchedResults.bind(this);
        this.setPaletteDisplay = this.setPaletteDisplay.bind(this);
        this.generateNewPallete = this.generateNewPallete.bind(this);
        this.btnPaletteGenerate = this.btnPaletteGenerate.bind(this);
    }

    async fetchPaletteResults({size_limit}){
        //Max allowed --> Hard coding from API
        if(size_limit > 7){
            return {
                ok:false,
            }
        }
        let dt = await axios.get("https://www.colr.org/json/schemes/random/7", {
            params:{
                scheme_size_limit:`=>${size_limit}`,
            }
        }).then(response=>{
            const { schemes } = response.data;
            return {
                ok:true,
                schemes,
            }
        }).catch((err)=>{
            return {
                ok:false,
            }
        });
         return dt
    }

    formatFetchedResults(unformatted){
        //Only displays schemes that meet minimum requirement
        let use_results = [...unformatted].filter((item,index)=>{
            if(item.colors.length >= this.state.paletteFilter){
                return item;
            }
        })
        
        return use_results;
    }

    setFetchResults({ freshCall , results, callback}){
        let formatted_results = this.formatFetchedResults(results);
        //Sets fetch results after formatting 
        try{
            let useIndex = this.state.currentDisplay.paletteViewPos;
            let use_display = {};
            if(freshCall === true ){
                useIndex = 0;
                use_display = formatted_results[useIndex]
                this.setState({
                    fetchResults:formatted_results,
                },()=>{
                    this.setPaletteDisplay({
                        id:use_display.id,
                        colors:use_display.colors,
                        tags:use_display.tags,
                        currentPos:useIndex,
                    });
                    callback(true)
                });
            }else{
                let current_results = this.state.fetchResults;
                //Add results to current and use length of previous results to set start point 
                let new_results = [...current_results, ...formatted_results];
                useIndex = current_results.length; //Start from end 
                use_display = new_results[useIndex]
                this.setState({
                    fetchResults:new_results,
                },()=>{
                    this.setPaletteDisplay({
                        id:use_display.id,
                        colors:use_display.colors,
                        tags:use_display.tags,
                        currentPos:useIndex, //Use length to ensure at first of new results
                    });
                    callback(true)
                });
            }
        }catch(err){
            callback(false);
            return 
        }
   
    }

    setPaletteDisplay({ id , colors , tags, currentPos}){
        //Sets palette display to UI
        this.setState({currentDisplay:{
            paletteViewPos:currentPos,
            id,
            colors,
            tags,
        }}, ()=>{
            'new palette set'
        })
    }


    async paletteKeyboardController({keyCode, key, code}){
        //Detect spacebar
        if(key ===  " " || code === "Space" || keyCode === 32){
            await this.keyboardEventHandle('space');

        }
    }

    //Keyboard event handlers
    async keyboardEventHandle(handle_type){
        let useHandle = handle_type || "";
        switch(useHandle.toLowerCase()){
            case "space":
                this.setState({loading:true})
                this.generateNewPallete({
                    successCallback:()=>{
                        this.setState({loading:false})
                    },
                    errorCallback:()=>{
                        this.setState({loading:false})
                    },
                    timeout:800,
                })
                break
        }
  
    }

    generateNewPallete({successCallback, errorCallback, timeout}){
        let currentPos = this.state.currentDisplay.paletteViewPos;
        let results = this.state.fetchResults;
        let newPos = currentPos + 1;
        setTimeout(()=>{
            if(newPos < results.length){
                let useData = results[newPos]
                this.setPaletteDisplay({
                    id:useData.id,
                    colors:useData.colors,
                    tags:useData.tags,
                    currentPos:newPos,
                })
                successCallback()
            }else{
                const requestFunction = async ( okAction , errorAction )=>{
                    const { schemes , ok } = await this.fetchPaletteResults({size_limit:this.state.paletteFilter});
                    if(ok === true ){
                        okAction(schemes)
                    }else{
                        errorAction();
                    }
                }
                requestFunction( 
                    (schemeArray)=>{
                        this.setFetchResults({
                            freshCall:false,
                            results:schemeArray,
                            callback:()=>{
                                successCallback();
                            },
                        })
                    },
                    ()=>{
                        errorCallback();
                    },
                );
            }
        },timeout)

        //Controls pallete 
    }

    btnPaletteGenerate(){
        this.setState({loading:true});
        const resolveAction = (type)=>{
            setTimeout(()=>{
                if(type === 'success'){
                    
                }else{
                    ///Add additional error handling later 
                }
                this.setState({loading:false});
            },900)
        }
        this.generateNewPallete({
            successCallback:()=>{
                resolveAction('success')
            },
            errorCallback:()=>{
                resolveAction('error')
            },
            timeout:800,
        })
    }

    windowStateListener(){
        if(window.innerWidth <= 992){
            this.setState({uiCols:1,uiState:'mobile'})
        }else{
            this.setState({uiCols:this.state.paletteFilter, uiState:'desktop'})
        }
        
        window.addEventListener('keydown', (e)=>{
            const { key , code , keyCode } = e;
            this.paletteKeyboardController({
                keyCode,
                key,
                code,
            })
        });
        window.addEventListener('resize',(e)=>{
            if(window.innerWidth <= 992){
                this.setState({uiCols:1,uiState:'mobile'})
            }else{
                this.setState({uiCols:this.state.paletteFilter, uiState:'desktop'})
            }
        })

        
    }

    async componentDidMount(){
        const { ok , schemes } = await this.fetchPaletteResults({size_limit:this.state.paletteFilter});
        if(ok === true){
            this.setFetchResults({
                freshCall:true,
                results:schemes,
                callback:(ok)=>{
                    if(ok === true){
                        this.setState({loading:false})
                    }else{
                        // Error handle here 
                    }
                }
            })
            this.windowStateListener()
        }else{

        }         
    }

   render() {  
      return (
        <div className='full-width app-bg-white app-palette-wrapper main-app-mobile-reverse'>
            <div className='full-width app-palette-header app-stndrd-padding'>
                <div className='app-palette-instruction'>
                    Press Spacebar to generate new palette.
                </div>
                <PaletteLoaderControl
                    isFetching={ this.state.loading }
                    btnFunction = { this.btnPaletteGenerate }
                    totalSlides = { this.state.fetchResults.length }
                    currentSlide = { this.state.currentDisplay.paletteViewPos + 1}

                />
            </div>
            <PaletteController
                initialCount={ this.state.paletteFilter }
                columnControl = { this.state.uiCols }
                displayResults = { this.state.currentDisplay.colors }
            />
        </div>
      )
    }
}



export default Palette