import React , { Component, useState } from 'react';
import ColorSlide from './ColorSlide';

function PaletteController ({initialCount}) {
    const [count, setCount] = useState(initialCount);
    const detectNewItem = ()=>{
        let new_count = count + 1;
        setCount(new_count);

    }
    return (
    <div className='full-width app-palette-display' id='appPaletteDisplay' 
        style={    
            {        
                width:"100%",
                display:"grid",
                gridTemplateColumns:`repeat(${count},1fr)`,
                flex:1,
            } 
        } 
    >
            <ColorDisplayList
                cardAddFunction = {
                    detectNewItem
                }
            />
        </div> 
    );
  }

function ColorDisplayList(data){
    let fetchItems = [
        {
            "hexCode": "00051c",
            "bestName": "What Lies Beneath",
            "votes": 3
          },
          {
            "hexCode": "00051d",
            "bestName": "Isabella",
            "votes": 2
          },
          {
            "hexCode": "000415",
            "bestName": "Dignified Blue",
            "votes": 1
          },
          {
            "hexCode": "000416",
            "bestName": "Wow Am I Depressed Or What",
            "votes": 5
          },
          {
            "hexCode": "000417",
            "bestName": "Magpie Feathers",
            "votes": 4
          },
          {
            "hexCode": "000418",
            "bestName": "That's Like Honestly Black Dood",
            "votes": 4
          },
          {
            "hexCode": "000419",
            "bestName": "Mildly Infuriating",
            "votes": 2
          },
          {
            "hexCode": "00041a",
            "bestName": "Abyss Blue",
            "votes": 3
          },
          {
            "hexCode": "00041b",
            "bestName": "Cottage Nights",
            "votes": 4
          },
          {
            "hexCode": "00041c",
            "bestName": "Depression In The Rain",
            "votes": 3
          },
          {
            "hexCode": "00041d",
            "bestName": "Low Sea Trench",
            "votes": 2
          },
          {
            "hexCode": "00041e",
            "bestName": "Darkest Midnight Blue Tone",
            "votes": 1
          },
          {
            "hexCode": "00041f",
            "bestName": "Star Studded Midnight Sky",
            "votes": 6
          },
          {
            "hexCode": "000420",
            "bestName": "Haha Nice",
            "votes": 23
          },
          {
            "hexCode": "000421",
            "bestName": "Is That Black Or Dark Blue",
            "votes": 3
          },
          {
            "hexCode": "000422",
            "bestName": "Barely Blue Black",
            "votes": 2
          },
          {
            "hexCode": "000423",
            "bestName": "Deep As Earth",
            "votes": 2
          },
          {
            "hexCode": "000424",
            "bestName": "Reaper Blue",
            "votes": 6
          },
          {
            "hexCode": "000425",
            "bestName": "Navy's Edge",
            "votes": 1
          },
          {
            "hexCode": "000426",
            "bestName": "The Zone",
            "votes": 5
          },
          {
            "hexCode": "000427",
            "bestName": "Gridlock Midnight Blue",
            "votes": 2
          },
          {
            "hexCode": "000428",
            "bestName": "Purplish Dark Black",
            "votes": 1
          },
          {
            "hexCode": "000429",
            "bestName": "Super Dark Blueberry",
            "votes": 3
          },
          {
            "hexCode": "00051e",
            "bestName": "Ocean Midnights",
            "votes": 3
          },
          {
            "hexCode": "00050e",
            "bestName": "Blindfold",
            "votes": 4
          },
          {
            "hexCode": "00050f",
            "bestName": "Not-quite-black",
            "votes": 3
          },
          {
            "hexCode": "000510",
            "bestName": "Blue Of Midnight",
            "votes": 3
          },
          {
            "hexCode": "000511",
            "bestName": "Winter Midnight",
            "votes": 4
          },

    ]
    let items = [
        {
            listIndex:0,
            showAddIcon:'true',
            colorName:"",
            colorHex:"#787372",
        },
        {
            listIndex:1,
            showAddIcon:'true',
            colorName:"",
            colorHex:"#412234",
        },
        {
            listIndex:2,
            showAddIcon:'true',
            colorName:"",
            colorHex:"#347FC4",
        },
        {
            listIndex:3,
            showAddIcon:'true',
            colorName:"",
            colorHex:"#BB4430",
        },
        {
            listIndex:4,
            showAddIcon:'false',
            colorName:"",
            colorHex:"#000002",
        },
    ];
    const [ colorList, setColorList  ] = useState(items);

    const addNewPaletteCard = async (ev)=>{
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
    
    const createCard = async (pos)=>{
        let colorChoices = fetchItems;
        let randomChoice = Math.floor(Math.random() * colorChoices.length);
        let pick = colorChoices[randomChoice];
        let useHex = pick.hexCode.includes("#") ? pick.hexCode : `#${pick.hexCode}`
        let create_item = {
            isNew:true,
            listIndex:pos,
            showAddIcon:'true',
            colorName:pick.bestName,
            colorHex:useHex,
        }
        console.log(create_item)
        return create_item;
    }

    const placeCard = ({ placeIndex , createdCard })=>{
        setColorList([...colorList, createdCard].map((item,index)=>{
            if(item.listIndex >= placeIndex && item.isNew !== true){
                item.listIndex = item.listIndex + 1;
            }

            return item 
        }).sort((a,b)=>{
            return a.listIndex - b.listIndex;
        }) , ()=>{
            console.log(colorList)

        })
    }

    return [...colorList].map((slide,index)=>{
        return  <ColorSlide 
        currentIndex={ index }
        totalSlides={ items.length }
        showAdd={ slide.showAddIcon } 
        colorHex={ slide.colorHex }
        newSlideRequest={ addNewPaletteCard }
        />
    })
}

/* Mutation Handlers  */

class Palette extends Component { 
   render() {  
      return (
        <div className='full-width app-bg-white app-palette-wrapper'>
            <div className='full-width app-palette-header app-stndrd-padding'>
                <div className='app-palette-instruction'>
                    Press Spacebar to generate new palette.
                </div>
            </div>
            <PaletteController
                initialCount={ 5 }
            />
        </div>
      )
    }
}



export default Palette