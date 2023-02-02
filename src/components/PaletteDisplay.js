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
          "hexCode": "000000",
          "bestName": "Dude Turn The Lights Back On",
          "votes": 5351
        },
        {
          "hexCode": "000001",
          "bestName": "It's Still Basically Black",
          "votes": 729
        },
        {
          "hexCode": "000002",
          "bestName": "Still Black",
          "votes": 121
        },
        {
          "hexCode": "000003",
          "bestName": "So Close To Black It Hurts",
          "votes": 145
        },
        {
          "hexCode": "000004",
          "bestName": "Blackerererer",
          "votes": 27
        },
        {
          "hexCode": "000005",
          "bestName": "Jet Black Heart",
          "votes": 16
        },
        {
          "hexCode": "000006",
          "bestName": "Abaddon",
          "votes": 16
        },
        {
          "hexCode": "000007",
          "bestName": "Double O Seven",
          "votes": 56
        },
        {
          "hexCode": "000008",
          "bestName": "Closed Eyes",
          "votes": 26
        },
        {
          "hexCode": "000009",
          "bestName": "Really Dark Blue",
          "votes": 29
        },
        {
          "hexCode": "00000a",
          "bestName": "Minecraft Void",
          "votes": 26
        },
        {
          "hexCode": "00000b",
          "bestName": "Orb Black",
          "votes": 15
        },
        {
          "hexCode": "00000c",
          "bestName": "Hyperdark Navy",
          "votes": 13
        },
        {
          "hexCode": "00000d",
          "bestName": "Ood",
          "votes": 12
        },
        {
          "hexCode": "00000e",
          "bestName": "Still Blue",
          "votes": 10
        },
        {
          "hexCode": "00000f",
          "bestName": "OOF",
          "votes": 225
        },
        {
          "hexCode": "000010",
          "bestName": "Darkened Navy Blue",
          "votes": 23
        },
        {
          "hexCode": "000011",
          "bestName": "I Swear I'm Blue",
          "votes": 11
        },
        {
          "hexCode": "000012",
          "bestName": "Empty Night Skies",
          "votes": 14
        },
        {
          "hexCode": "000013",
          "bestName": "Unlucky Black",
          "votes": 16
        },
        {
          "hexCode": "000014",
          "bestName": "Community Radio Station",
          "votes": 8
        },
        {
          "hexCode": "000015",
          "bestName": "Inky",
          "votes": 10
        },
        {
          "hexCode": "000016",
          "bestName": "Data Expunged",
          "votes": 10
        },
        {
          "hexCode": "000017",
          "bestName": "Mysterious Winds",
          "votes": 11
        },
        {
          "hexCode": "000018",
          "bestName": "Less Light Black",
          "votes": 7
        },
        {
          "hexCode": "000019",
          "bestName": "Covid",
          "votes": 4
        },
        {
          "hexCode": "00001a",
          "bestName": "When Does Blue Become Black",
          "votes": 10
        },
        {
          "hexCode": "00001b",
          "bestName": "Dark Deep Blue Ocean",
          "votes": 7
        },
        {
          "hexCode": "00001c",
          "bestName": "Hadal Zone",
          "votes": 15
        },
        {
          "hexCode": "00001d",
          "bestName": "Flat Navy",
          "votes": 7
        },
        {
          "hexCode": "00001e",
          "bestName": "Unpopular Dark Blue",
          "votes": 5
        },
        {
          "hexCode": "00001f",
          "bestName": "Sunk Navy Blue",
          "votes": 11
        },
        {
          "hexCode": "000020",
          "bestName": "Black Sapphire",
          "votes": 13
        },
        {
          "hexCode": "000021",
          "bestName": "Time Void",
          "votes": 13
        },
        {
          "hexCode": "000022",
          "bestName": "Hadopelagic Water",
          "votes": 12
        },
        {
          "hexCode": "000023",
          "bestName": "Ocean Floor Blue",
          "votes": 7
        },
        {
          "hexCode": "000024",
          "bestName": "Midnight",
          "votes": 6
        },
        {
          "hexCode": "000025",
          "bestName": "Quarter Navy",
          "votes": 4
        },
        {
          "hexCode": "000026",
          "bestName": "Dark Corners Of Space",
          "votes": 10
        },
        {
          "hexCode": "000027",
          "bestName": "Thirty Ninth Shade",
          "votes": 3
        },
        {
          "hexCode": "000028",
          "bestName": "Midnight In The Deep",
          "votes": 6
        },
        {
          "hexCode": "000029",
          "bestName": "Dark Blue But Dark",
          "votes": 6
        },
        {
          "hexCode": "00002a",
          "bestName": "Dark And Rainy",
          "votes": 5
        },
        {
          "hexCode": "00002b",
          "bestName": "To Be Blue Or Not To Be Blue",
          "votes": 10
        },
        {
          "hexCode": "00002c",
          "bestName": "Just Very Dark Blue",
          "votes": 10
        },
        {
          "hexCode": "00002d",
          "bestName": "Mosquito Blue",
          "votes": 6
        },
        {
          "hexCode": "00002e",
          "bestName": "Sweet Dreams",
          "votes": 6
        },
        {
          "hexCode": "00002f",
          "bestName": "Abyssal Ultraviolet",
          "votes": 11
        },
        {
          "hexCode": "000030",
          "bestName": "Edge Of Space",
          "votes": 22
        },
        {
          "hexCode": "000031",
          "bestName": "Aristocrate",
          "votes": 8
        },
        {
          "hexCode": "000032",
          "bestName": "DEN Blue",
          "votes": 4
        },
        {
          "hexCode": "000033",
          "bestName": "Abyssopelagic Water",
          "votes": 8
        },
        {
          "hexCode": "000034",
          "bestName": "Blue Sheen",
          "votes": 7
        },
        {
          "hexCode": "000035",
          "bestName": "Bluack",
          "votes": 4
        },
        {
          "hexCode": "000036",
          "bestName": "Mariana Trench  Blues",
          "votes": 4
        },
        {
          "hexCode": "000037",
          "bestName": "Antartica's Skies",
          "votes": 6
        },
        {
          "hexCode": "000038",
          "bestName": "Oivina",
          "votes": 5
        },
        {
          "hexCode": "000039",
          "bestName": "Bolden Bolt",
          "votes": 4
        },
        {
          "hexCode": "00003a",
          "bestName": "Black Of Blues",
          "votes": 8
        },
        {
          "hexCode": "00003b",
          "bestName": "Close Your Eyes And See",
          "votes": 4
        },
        {
          "hexCode": "00003c",
          "bestName": "Morrigan's Blue",
          "votes": 6
        },
        {
          "hexCode": "00003d",
          "bestName": "Spatial Navy",
          "votes": 8
        },
        {
          "hexCode": "00003e",
          "bestName": "Cetacean Blue",
          "votes": 5
        },
        {
          "hexCode": "00003f",
          "bestName": "Sapphire's Blood",
          "votes": 2
        },
        {
          "hexCode": "000040",
          "bestName": "Misali Midnight",
          "votes": 5
        },
        {
          "hexCode": "000041",
          "bestName": "Stinky Sea",
          "votes": 4
        },
        {
          "hexCode": "000042",
          "bestName": "The Answer",
          "votes": 27
        },
        {
          "hexCode": "000043",
          "bestName": "Over Ripe Blueberry",
          "votes": 5
        },
        {
          "hexCode": "000044",
          "bestName": "Priest Socks",
          "votes": 8
        },
        {
          "hexCode": "000045",
          "bestName": "Pervert Blue",
          "votes": 9
        },
        {
          "hexCode": "000046",
          "bestName": "Prestigious",
          "votes": 4
        },
        {
          "hexCode": "000047",
          "bestName": "Stellacha",
          "votes": 5
        },
        {
          "hexCode": "000048",
          "bestName": "Starless Galaxies",
          "votes": 5
        },
        {
          "hexCode": "000049",
          "bestName": "Indium Blue",
          "votes": 5
        },
        {
          "hexCode": "00004a",
          "bestName": "Serdaigle",
          "votes": 7
        },
        {
          "hexCode": "00004b",
          "bestName": "Mysterical",
          "votes": 6
        },
        {
          "hexCode": "00004c",
          "bestName": "Revel",
          "votes": 2
        },
        {
          "hexCode": "00004d",
          "bestName": "Tesseract Blue",
          "votes": 9
        },
        {
          "hexCode": "00004e",
          "bestName": "Nobody Thinks About Letters",
          "votes": 6
        },
        {
          "hexCode": "00004f",
          "bestName": "Effy",
          "votes": 4
        },
        {
          "hexCode": "000050",
          "bestName": "Neptunes Castle",
          "votes": 5
        },
        {
          "hexCode": "000051",
          "bestName": "Very Very Good Blue",
          "votes": 5
        },
        {
          "hexCode": "000052",
          "bestName": "Deepest Cool Navy Blue NoRd NoGn",
          "votes": 5
        },
        {
          "hexCode": "000053",
          "bestName": "Dark Rich Indigo",
          "votes": 2
        },
        {
          "hexCode": "000054",
          "bestName": "Blueberry Ripple",
          "votes": 5
        },
        {
          "hexCode": "000055",
          "bestName": "Alucard's Night",
          "votes": 5
        },
        {
          "hexCode": "000056",
          "bestName": "Void Heir",
          "votes": 22
        },
        {
          "hexCode": "000057",
          "bestName": "Old World Mysticism",
          "votes": 5
        },
        {
          "hexCode": "000058",
          "bestName": "Bleu ZOZO",
          "votes": 9
        },
        {
          "hexCode": "000059",
          "bestName": "Somber Melody",
          "votes": 10
        },
        {
          "hexCode": "00005a",
          "bestName": "Irrealistic",
          "votes": 3
        },
        {
          "hexCode": "00005b",
          "bestName": "Rign",
          "votes": 4
        },
        {
          "hexCode": "00005c",
          "bestName": "Dreaming Of Cobalt",
          "votes": 6
        },
        {
          "hexCode": "00005d",
          "bestName": "Uncommon Blue",
          "votes": 2
        },
        {
          "hexCode": "00005e",
          "bestName": "Vibing Under The Night",
          "votes": 8
        },
        {
          "hexCode": "00005f",
          "bestName": "Deep Sea Swims",
          "votes": 9
        },
        {
          "hexCode": "000060",
          "bestName": "Stygian Blue",
          "votes": 6
        },
        {
          "hexCode": "000061",
          "bestName": "Chaos Blue",
          "votes": 1
        },
        {
          "hexCode": "000062",
          "bestName": "Royal's Grieving",
          "votes": 2
        },
        {
          "hexCode": "000063",
          "bestName": "Galaxy Wonder",
          "votes": 12
        },
        {
          "hexCode": "000064",
          "bestName": "Sixty-Four",
          "votes": 4
        },
        {
          "hexCode": "000065",
          "bestName": "Legionary Blue",
          "votes": 2
        },
        {
          "hexCode": "000066",
          "bestName": "Alone In The Dark",
          "votes": 14
        },
        {
          "hexCode": "000067",
          "bestName": "Just A Dark Blue",
          "votes": 3
        },
        {
          "hexCode": "000068",
          "bestName": "So Close To Nice",
          "votes": 7
        },
        {
          "hexCode": "000069",
          "bestName": "Nice Blue",
          "votes": 124
        },
        {
          "hexCode": "00006a",
          "bestName": "Teen Blues",
          "votes": 5
        },
        {
          "hexCode": "00006b",
          "bestName": "David Blue",
          "votes": 14
        },
        {
          "hexCode": "00006c",
          "bestName": "Schwedenbl",
          "votes": 5
        },
        {
          "hexCode": "00006d",
          "bestName": "Not Like Others",
          "votes": 2
        },
        {
          "hexCode": "00006e",
          "bestName": "Eyes Half Closed",
          "votes": 6
        },
        {
          "hexCode": "00006f",
          "bestName": "Sting Blue",
          "votes": 5
        },
        {
          "hexCode": "000070",
          "bestName": "Eye Of The Storm",
          "votes": 3
        },
        {
          "hexCode": "000071",
          "bestName": "Midnight Race",
          "votes": 3
        },
        {
          "hexCode": "000072",
          "bestName": "Grandpa Loves The Sky",
          "votes": 4
        },
        {
          "hexCode": "000073",
          "bestName": "Alexander Hamilton But Blue",
          "votes": 8
        },
        {
          "hexCode": "000074",
          "bestName": "North Beach",
          "votes": 5
        },
        {
          "hexCode": "000075",
          "bestName": "I Give Up Right Here",
          "votes": 4
        },
        {
          "hexCode": "000076",
          "bestName": "Exploration Blue",
          "votes": 5
        },
        {
          "hexCode": "000077",
          "bestName": "Scotch Blue",
          "votes": 7
        },
        {
          "hexCode": "000078",
          "bestName": "Katia Blue",
          "votes": 3
        },
        {
          "hexCode": "000079",
          "bestName": "L'man Blue",
          "votes": 3
        },
        {
          "hexCode": "00007a",
          "bestName": "Deap Thoughts",
          "votes": 3
        },
        {
          "hexCode": "00007b",
          "bestName": "Ocean Nebula",
          "votes": 5
        },
        {
          "hexCode": "00007c",
          "bestName": "Nostalgic 90's Blue",
          "votes": 3
        },
        {
          "hexCode": "00007d",
          "bestName": "Dark Night Blue",
          "votes": 11
        },
        {
          "hexCode": "00007e",
          "bestName": "Mickey's Manor",
          "votes": 2
        },
        {
          "hexCode": "00007f",
          "bestName": "Half Blue",
          "votes": 5
        },
        {
          "hexCode": "000080",
          "bestName": "Navy",
          "votes": 49
        },
        {
          "hexCode": "000081",
          "bestName": "Twilight Zone's Night",
          "votes": 2
        },
        {
          "hexCode": "000082",
          "bestName": "Blue Screen Blues",
          "votes": 7
        },
        {
          "hexCode": "000083",
          "bestName": "Bismuth",
          "votes": 4
        },
        {
          "hexCode": "000084",
          "bestName": "Twilight Sky",
          "votes": 4
        },
        {
          "hexCode": "000085",
          "bestName": "Shipwreck Sunken Blue",
          "votes": 8
        },
        {
          "hexCode": "000086",
          "bestName": "Schooley Navy",
          "votes": 4
        },
        {
          "hexCode": "000087",
          "bestName": "Kikuchi Kyrin",
          "votes": 2
        },
        {
          "hexCode": "000088",
          "bestName": "Indian Blue",
          "votes": 6
        },
        {
          "hexCode": "000089",
          "bestName": "Midnight Beach Walk",
          "votes": 2
        },
        {
          "hexCode": "00008a",
          "bestName": "Brand New School",
          "votes": 4
        },
        {
          "hexCode": "00008b",
          "bestName": "Dark Blue",
          "votes": 34
        },
        {
          "hexCode": "00008c",
          "bestName": "Dehydrated Ocean",
          "votes": 6
        },
        {
          "hexCode": "00008d",
          "bestName": "I'm Blue Da Ba Dee",
          "votes": 5
        },
        {
          "hexCode": "00008e",
          "bestName": "Eight Eye",
          "votes": 1
        },
        {
          "hexCode": "00008f",
          "bestName": "Deep   Ocean   Blue",
          "votes": 9
        },
        {
          "hexCode": "000090",
          "bestName": "Deep Sea Reef",
          "votes": 9
        },
        {
          "hexCode": "000091",
          "bestName": "Sharp Mind",
          "votes": 6
        },
        {
          "hexCode": "000092",
          "bestName": "Blue Screen 101",
          "votes": 2
        },
        {
          "hexCode": "000093",
          "bestName": "Revolutionary Blue",
          "votes": 7
        },
        {
          "hexCode": "000094",
          "bestName": "Deep Evening Night Blue",
          "votes": 4
        },
        {
          "hexCode": "000095",
          "bestName": "National Taiwan Blue",
          "votes": 6
        },
        {
          "hexCode": "000096",
          "bestName": "Space Agency",
          "votes": 8
        },
        {
          "hexCode": "000097",
          "bestName": "Ancient Azul",
          "votes": 8
        },
        {
          "hexCode": "000098",
          "bestName": "Wow Space Blue",
          "votes": 4
        },
        {
          "hexCode": "000099",
          "bestName": "99 Years",
          "votes": 10
        },
        {
          "hexCode": "00009a",
          "bestName": "Neptune's Midnight",
          "votes": 2
        },
        {
          "hexCode": "00009b",
          "bestName": "Frenetic Blue",
          "votes": 3
        },
        {
          "hexCode": "00009c",
          "bestName": "Duke Blue",
          "votes": 9
        },
        {
          "hexCode": "00009d",
          "bestName": "Poloshirt Blue",
          "votes": 2
        },
        {
          "hexCode": "00009e",
          "bestName": "Don't Hug Me I'm Scared",
          "votes": 5
        },
        {
          "hexCode": "00009f",
          "bestName": "Diane Blue",
          "votes": 1
        },
        {
          "hexCode": "0000a0",
          "bestName": "Microsoft Dark Blue",
          "votes": 15
        },
        {
          "hexCode": "0000a1",
          "bestName": "Navy Malfunction",
          "votes": 9
        },
        {
          "hexCode": "0000a2",
          "bestName": "Colonel Chip Martin",
          "votes": 2
        },
        {
          "hexCode": "0000a3",
          "bestName": "Big Big Page",
          "votes": 2
        },
        {
          "hexCode": "0000a4",
          "bestName": "Printer's Favorite Blue",
          "votes": 3
        },
        {
          "hexCode": "0000a5",
          "bestName": "Kule Telo",
          "votes": 2
        },
        {
          "hexCode": "0000a6",
          "bestName": "Infinity Bright Blue",
          "votes": 3
        },
        {
          "hexCode": "0000a7",
          "bestName": "Dark Sea",
          "votes": 3
        },
        {
          "hexCode": "0000a8",
          "bestName": "After Eight Blue",
          "votes": 4
        },
        {
          "hexCode": "0000a9",
          "bestName": "Pseudoangel Blue",
          "votes": 3
        },
        {
          "hexCode": "0000aa",
          "bestName": "An Error Has Occured",
          "votes": 7
        },
        {
          "hexCode": "0000ab",
          "bestName": "Pure Focus",
          "votes": 5
        },
        {
          "hexCode": "0000ac",
          "bestName": "Greek Island",
          "votes": 5
        },
        {
          "hexCode": "0000ad",
          "bestName": "What Would Jesus Blue",
          "votes": 24
        },
        {
          "hexCode": "0000ae",
          "bestName": "BSOD Blue",
          "votes": 4
        },
        {
          "hexCode": "0000af",
          "bestName": "Jeopardy Blue",
          "votes": 4
        },
        {
          "hexCode": "0000b0",
          "bestName": "Depressed Ocean Blue",
          "votes": 5
        },
        {
          "hexCode": "0000b1",
          "bestName": "Sad Jazz Blues",
          "votes": 3
        },
        {
          "hexCode": "0000b2",
          "bestName": "Vantage",
          "votes": 5
        },
        {
          "hexCode": "0000b3",
          "bestName": "REM Pod Blue",
          "votes": 2
        },
        {
          "hexCode": "0000b4",
          "bestName": "Royal Throne",
          "votes": 3
        },
        {
          "hexCode": "0000b5",
          "bestName": "Corporate Hate Blue",
          "votes": 9
        },
        {
          "hexCode": "0000b7",
          "bestName": "Goodluck Cheer Blue",
          "votes": 4
        },
        {
          "hexCode": "0000b8",
          "bestName": "Evangelin",
          "votes": 3
        },
        {
          "hexCode": "0000b9",
          "bestName": "Taso Blue",
          "votes": 1
        },
        {
          "hexCode": "0000ba",
          "bestName": "Myros",
          "votes": 2
        },
        {
          "hexCode": "0000bb",
          "bestName": "Natarandall Blue",
          "votes": 8
        },
        {
          "hexCode": "0000bc",
          "bestName": "Keese Blue",
          "votes": 2
        },
        {
          "hexCode": "0000bd",
          "bestName": "Sumberflue",
          "votes": 3
        },
        {
          "hexCode": "0000be",
          "bestName": "Belgique",
          "votes": 3
        },
        {
          "hexCode": "0000bf",
          "bestName": "Poetaytoe Blue",
          "votes": 3
        },
        {
          "hexCode": "0000c0",
          "bestName": "Misali Lapis",
          "votes": 9
        },
        {
          "hexCode": "0000c1",
          "bestName": "I See One Blue",
          "votes": 5
        },
        {
          "hexCode": "0000c2",
          "bestName": "Nerd Blue",
          "votes": 6
        },
        {
          "hexCode": "0000c3",
          "bestName": "Wanna-blue",
          "votes": 3
        },
        {
          "hexCode": "0000c4",
          "bestName": "Explosive Blue",
          "votes": 8
        },
        {
          "hexCode": "0000c5",
          "bestName": "The Theme Of Water",
          "votes": 3
        },
        {
          "hexCode": "0000c6",
          "bestName": "SeeSyx",
          "votes": 3
        },
        {
          "hexCode": "0000c7",
          "bestName": "Bleu De Travail",
          "votes": 2
        },
        {
          "hexCode": "0000c8",
          "bestName": "Hot Blu",
          "votes": 1
        },
        {
          "hexCode": "0000c9",
          "bestName": "Central Podcast",
          "votes": 7
        },
        {
          "hexCode": "0000ca",
          "bestName": "Besunken Navy",
          "votes": 4
        },
        {
          "hexCode": "0000cb",
          "bestName": "Darker Than Almost Blue",
          "votes": 2
        },
        {
          "hexCode": "0000cc",
          "bestName": "Lady Of The Sea",
          "votes": 11
        },
        {
          "hexCode": "0000cd",
          "bestName": "Medium Blue",
          "votes": 14
        },
        {
          "hexCode": "0000ce",
          "bestName": "Forgotten Bright Blue",
          "votes": 5
        },
        {
          "hexCode": "0000cf",
          "bestName": "Deep Sea Cobalt",
          "votes": 6
        },
        {
          "hexCode": "0000d0",
          "bestName": "Levi",
          "votes": 5
        },
        {
          "hexCode": "0000d1",
          "bestName": "Forever And Always",
          "votes": 5
        },
        {
          "hexCode": "0000d2",
          "bestName": "Ground Zero Blue",
          "votes": 3
        },
        {
          "hexCode": "0000d3",
          "bestName": "Atlanticus",
          "votes": 4
        },
        {
          "hexCode": "0000d4",
          "bestName": "Supa Dupa Blue",
          "votes": 6
        },
        {
          "hexCode": "0000d5",
          "bestName": "Lesson Blue",
          "votes": 5
        },
        {
          "hexCode": "0000d6",
          "bestName": "I Skinned Sonic The Hedgehog",
          "votes": 8
        },
        {
          "hexCode": "0000d7",
          "bestName": "Chrtien",
          "votes": 4
        },
        {
          "hexCode": "0000d8",
          "bestName": "Local Band Gig Lighting",
          "votes": 6
        },
        {
          "hexCode": "0000d9",
          "bestName": "Beauney",
          "votes": 4
        },
        {
          "hexCode": "0000da",
          "bestName": "Pure Blue Just Blue",
          "votes": 5
        },
        {
          "hexCode": "0000db",
          "bestName": "Doesn't Get Much Bluer Than This",
          "votes": 14
        },
        {
          "hexCode": "0000dc",
          "bestName": "District Of Columbia",
          "votes": 5
        },
        {
          "hexCode": "0000dd",
          "bestName": "Bluealicious",
          "votes": 8
        },
        {
          "hexCode": "0000de",
          "bestName": "Phone Blue",
          "votes": 7
        },
        {
          "hexCode": "0000df",
          "bestName": "Stigma Blue",
          "votes": 5
        },
        {
          "hexCode": "0000e0",
          "bestName": "My Inner Depression",
          "votes": 8
        },
        {
          "hexCode": "0000e1",
          "bestName": "Oceanic Royalty",
          "votes": 3
        },
        {
          "hexCode": "0000e2",
          "bestName": "It Gotta Be Blue",
          "votes": 2
        },
        {
          "hexCode": "0000e3",
          "bestName": "Boys Can Cry",
          "votes": 5
        },
        {
          "hexCode": "0000e4",
          "bestName": "Beckstar",
          "votes": 2
        },
        {
          "hexCode": "0000e5",
          "bestName": "Zdzis Blue",
          "votes": 2
        },
        {
          "hexCode": "0000e6",
          "bestName": "Blobus",
          "votes": 6
        },
        {
          "hexCode": "0000e7",
          "bestName": "Berry Blue",
          "votes": 5
        },
        {
          "hexCode": "0000e8",
          "bestName": "Ballpen Blue",
          "votes": 3
        },
        {
          "hexCode": "0000e9",
          "bestName": "Ocean Deep Trench",
          "votes": 5
        },
        {
          "hexCode": "0000ea",
          "bestName": "Its In The Game",
          "votes": 5
        },
        {
          "hexCode": "0000eb",
          "bestName": "Is This Google Blue",
          "votes": 7
        },
        {
          "hexCode": "0000ec",
          "bestName": "Blue University",
          "votes": 6
        },
        {
          "hexCode": "0000ed",
          "bestName": "Finn Terzo",
          "votes": 7
        },
        {
          "hexCode": "0000ee",
          "bestName": "Firefox Hyperlink",
          "votes": 19
        },
        {
          "hexCode": "0000ef",
          "bestName": "Isn't It Still Blue",
          "votes": 3
        },
        {
          "hexCode": "0000f0",
          "bestName": "Oxford Blues",
          "votes": 10
        },
        {
          "hexCode": "0000f1",
          "bestName": "Chrystal Blue",
          "votes": 1
        },
        {
          "hexCode": "0000f2",
          "bestName": "Rich Royal Blue",
          "votes": 8
        },
        {
          "hexCode": "0000f3",
          "bestName": "French Arms",
          "votes": 4
        },
        {
          "hexCode": "0000f4",
          "bestName": "Oof Number 4",
          "votes": 4
        },
        {
          "hexCode": "0000f5",
          "bestName": "Reloader Blue",
          "votes": 7
        },
        {
          "hexCode": "0000f6",
          "bestName": "Do You Even Blue",
          "votes": 3
        },
        {
          "hexCode": "0000f7",
          "bestName": "Fulfillment Blue",
          "votes": 5
        },
        {
          "hexCode": "0000f8",
          "bestName": "Every Ocean In Paintings",
          "votes": 8
        },
        {
          "hexCode": "0000f9",
          "bestName": "Assistance Blue",
          "votes": 5
        },
        {
          "hexCode": "0000fa",
          "bestName": "Impostor Blue",
          "votes": 12
        },
        {
          "hexCode": "0000fb",
          "bestName": "Friendly Blue",
          "votes": 5
        },
        {
          "hexCode": "0000fc",
          "bestName": "Literally Blue",
          "votes": 7
        },
        {
          "hexCode": "0000fd",
          "bestName": "2 Steps Closer From The Blue",
          "votes": 7
        },
        {
          "hexCode": "0000fe",
          "bestName": "Very Close To Blue",
          "votes": 14
        },
        {
          "hexCode": "0000ff",
          "bestName": "Blue",
          "votes": 1334
        },
        {
          "hexCode": "000100",
          "bestName": "The Darkest Green",
          "votes": 122
        },
        {
          "hexCode": "000101",
          "bestName": "Voidish-Cyan",
          "votes": 22
        },
        {
          "hexCode": "000102",
          "bestName": "Dehydrated Blueberry",
          "votes": 14
        },
        {
          "hexCode": "000103",
          "bestName": "Ocean's Deepest Water",
          "votes": 26
        },
        {
          "hexCode": "000104",
          "bestName": "Untouchable Abyss",
          "votes": 3
        },
        {
          "hexCode": "000105",
          "bestName": "Cartoon Network Black",
          "votes": 11
        },
        {
          "hexCode": "000106",
          "bestName": "Scp 106",
          "votes": 6
        },
        {
          "hexCode": "000107",
          "bestName": "Api",
          "votes": 2
        },
        {
          "hexCode": "000108",
          "bestName": "Boredom Black",
          "votes": 9
        },
        {
          "hexCode": "000109",
          "bestName": "Ragequit Black",
          "votes": 3
        },
        {
          "hexCode": "00010a",
          "bestName": "Supreme Darkness Blue",
          "votes": 4
        },
        {
          "hexCode": "00010b",
          "bestName": "Hypersomnia",
          "votes": 5
        },
        {
          "hexCode": "00010c",
          "bestName": "GBluack",
          "votes": 3
        },
        {
          "hexCode": "00010d",
          "bestName": "Christmas In Illinois",
          "votes": 4
        },
        {
          "hexCode": "00010e",
          "bestName": "Criminel",
          "votes": 3
        },
        {
          "hexCode": "00010f",
          "bestName": "Deep Bit Of The Ocean",
          "votes": 6
        },
        {
          "hexCode": "000110",
          "bestName": "6 Black",
          "votes": 1
        },
        {
          "hexCode": "000111",
          "bestName": "Binary Blue 7",
          "votes": 12
        },
        {
          "hexCode": "000112",
          "bestName": "Risks",
          "votes": 4
        },
        {
          "hexCode": "000113",
          "bestName": "Pillar Of Autumn",
          "votes": 4
        },
        {
          "hexCode": "000114",
          "bestName": "Turn On Your Camera",
          "votes": 3
        },
        {
          "hexCode": "000115",
          "bestName": "Walnut Ink",
          "votes": 3
        },
        {
          "hexCode": "000116",
          "bestName": "Isolation Tank",
          "votes": 5
        },
        {
          "hexCode": "000117",
          "bestName": "Spartan Night",
          "votes": 5
        },
        {
          "hexCode": "000118",
          "bestName": "Laptop Black",
          "votes": 2
        },
        {
          "hexCode": "000119",
          "bestName": "Late Worm Blue",
          "votes": 4
        },
        {
          "hexCode": "00011a",
          "bestName": "Princess Luna Blue",
          "votes": 6
        },
        {
          "hexCode": "00011b",
          "bestName": "Not A Star In The Sky",
          "votes": 5
        },
        {
          "hexCode": "00011c",
          "bestName": "Hopeless Black",
          "votes": 7
        },
        {
          "hexCode": "00011d",
          "bestName": "In The Navywavey",
          "votes": 1
        },
        {
          "hexCode": "00011e",
          "bestName": "Submarine Shadow",
          "votes": 4
        },
        {
          "hexCode": "00011f",
          "bestName": "Abyss Blue",
          "votes": 3
        },
        {
          "hexCode": "000120",
          "bestName": "Army Navy Air Force",
          "votes": 3
        },
        {
          "hexCode": "000121",
          "bestName": "Dementors",
          "votes": 9
        },
        {
          "hexCode": "000122",
          "bestName": "Hell BIue",
          "votes": 1
        },
        {
          "hexCode": "000123",
          "bestName": "Magic Of The Night",
          "votes": 9
        },
        {
          "hexCode": "000124",
          "bestName": "Depths Of The Pacific",
          "votes": 6
        },
        {
          "hexCode": "000125",
          "bestName": "Publule",
          "votes": 3
        },
        {
          "hexCode": "000126",
          "bestName": "First Hint Of Dawn",
          "votes": 7
        },
        {
          "hexCode": "000127",
          "bestName": "Apollo 12",
          "votes": 2
        },
        {
          "hexCode": "000128",
          "bestName": "Sick Of Nebulas",
          "votes": 4
        },
        {
          "hexCode": "000129",
          "bestName": "Starless  Night",
          "votes": 2
        },
        {
          "hexCode": "00012a",
          "bestName": "Surgical",
          "votes": 3
        },
        {
          "hexCode": "00012b",
          "bestName": "Sky At 3am",
          "votes": 4
        },
        {
          "hexCode": "00012c",
          "bestName": "Cool Kid Dark",
          "votes": 1
        },
        {
          "hexCode": "00012d",
          "bestName": "Berserk Button",
          "votes": 2
        },
        {
          "hexCode": "00012e",
          "bestName": "Deep Night",
          "votes": 2
        },
        {
          "hexCode": "00012f",
          "bestName": "Hidden Green In It",
          "votes": 1
        },
        {
          "hexCode": "000130",
          "bestName": "The Goddess Of The Night",
          "votes": 2
        },
        {
          "hexCode": "000131",
          "bestName": "Ariadne And Her Labyrinth",
          "votes": 3
        },
        {
          "hexCode": "000132",
          "bestName": "Dark Abyss",
          "votes": 2
        },
        {
          "hexCode": "000133",
          "bestName": "Desolation",
          "votes": 3
        },
        {
          "hexCode": "000134",
          "bestName": "In Midnight",
          "votes": 1
        },
        {
          "hexCode": "000135",
          "bestName": "Night Sky",
          "votes": 15
        },
        {
          "hexCode": "000136",
          "bestName": "Little Planet",
          "votes": 5
        },
        {
          "hexCode": "000137",
          "bestName": "Kitty Winter",
          "votes": 2
        },
        {
          "hexCode": "000138",
          "bestName": "Starry Cosmos",
          "votes": 6
        },
        {
          "hexCode": "000139",
          "bestName": "Navy Square",
          "votes": 1
        },
        {
          "hexCode": "00013a",
          "bestName": "The Depths Of The Ocean",
          "votes": 6
        },
        {
          "hexCode": "00013b",
          "bestName": "Nightmare Blue",
          "votes": 5
        },
        {
          "hexCode": "00013c",
          "bestName": "A Lone Wolf",
          "votes": 2
        },
        {
          "hexCode": "00013d",
          "bestName": "Deaths Blue",
          "votes": 4
        },
        {
          "hexCode": "00013e",
          "bestName": "An Even Coat Of Phthalo Blue",
          "votes": 1
        },
        {
          "hexCode": "00013f",
          "bestName": "47 Meters Down",
          "votes": 4
        },
        {
          "hexCode": "000140",
          "bestName": "Dreaming Of The Days",
          "votes": 8
        },
        {
          "hexCode": "000141",
          "bestName": "Late Blue",
          "votes": 2
        },
        {
          "hexCode": "000142",
          "bestName": "Invasion Blue",
          "votes": 5
        },
        {
          "hexCode": "000143",
          "bestName": "Creepy Shade",
          "votes": 4
        },
        {
          "hexCode": "000144",
          "bestName": "Celestial Midnight",
          "votes": 4
        },
        {
          "hexCode": "000145",
          "bestName": "Stay With Me Under The Stars",
          "votes": 6
        },
        {
          "hexCode": "000146",
          "bestName": "Navy Mulberry",
          "votes": 1
        },
        {
          "hexCode": "000147",
          "bestName": "Shattered Memory",
          "votes": 13
        },
        {
          "hexCode": "000148",
          "bestName": "Blindfolded",
          "votes": 4
        },
        {
          "hexCode": "000149",
          "bestName": "Batman Color",
          "votes": 3
        },
        {
          "hexCode": "00014a",
          "bestName": "Almost Nightime But Not Quite",
          "votes": 4
        },
        {
          "hexCode": "00014b",
          "bestName": "The Prussian",
          "votes": 1
        },
        {
          "hexCode": "00014c",
          "bestName": "Edith Blue",
          "votes": 4
        },
        {
          "hexCode": "00014d",
          "bestName": "Shadow Navy Blue",
          "votes": 2
        },
        {
          "hexCode": "00014e",
          "bestName": "Pacific Blu",
          "votes": 2
        },
        {
          "hexCode": "00014f",
          "bestName": "Midnight Squall",
          "votes": 6
        },
        {
          "hexCode": "000150",
          "bestName": "Khaioo",
          "votes": 2
        },
        {
          "hexCode": "000151",
          "bestName": "Reckles",
          "votes": 1
        },
        {
          "hexCode": "000152",
          "bestName": "Ehlers Danlos",
          "votes": 2
        },
        {
          "hexCode": "000153",
          "bestName": "Stylo Plume",
          "votes": 3
        },
        {
          "hexCode": "000154",
          "bestName": "Forever Midnight",
          "votes": 6
        },
        {
          "hexCode": "000155",
          "bestName": "The Unknown Lurking",
          "votes": 3
        },
        {
          "hexCode": "000156",
          "bestName": "French Book",
          "votes": 3
        },
        {
          "hexCode": "000157",
          "bestName": "Dark Blue Night",
          "votes": 3
        },
        {
          "hexCode": "000158",
          "bestName": "Night Vison",
          "votes": 2
        },
        {
          "hexCode": "000159",
          "bestName": "Blood Of The Smurfs",
          "votes": 6
        },
        {
          "hexCode": "00015a",
          "bestName": "Teen Idle",
          "votes": 1
        },
        {
          "hexCode": "00015b",
          "bestName": "Deep Seas",
          "votes": 2
        },
        {
          "hexCode": "00015c",
          "bestName": "Detention For You",
          "votes": 1
        },
        {
          "hexCode": "00015d",
          "bestName": "Cooler Than U",
          "votes": 2
        },
        {
          "hexCode": "00015e",
          "bestName": "Royal Cape",
          "votes": 3
        },
        {
          "hexCode": "00015f",
          "bestName": "Tiny Amount Of Green",
          "votes": 1
        },
        {
          "hexCode": "000160",
          "bestName": "The Uncharted Cosmos",
          "votes": 5
        },
        {
          "hexCode": "000161",
          "bestName": "The Dark Cold Abandon Ocean",
          "votes": 2
        },
        {
          "hexCode": "000162",
          "bestName": "The RCB",
          "votes": 1
        },
        {
          "hexCode": "000163",
          "bestName": "Snail Blue",
          "votes": 2
        },
        {
          "hexCode": "000164",
          "bestName": "Rcn B Ymca",
          "votes": 1
        },
        {
          "hexCode": "000165",
          "bestName": "101 Blue And A Green",
          "votes": 1
        },
        {
          "hexCode": "000166",
          "bestName": "Jayme",
          "votes": 1
        },
        {
          "hexCode": "000167",
          "bestName": "Zaswe",
          "votes": 1
        },
        {
          "hexCode": "000168",
          "bestName": "Saus",
          "votes": 1
        },
        {
          "hexCode": "000169",
          "bestName": "Splash Mountain Patagonia",
          "votes": 1
        },
        {
          "hexCode": "00016a",
          "bestName": "Turn To Page",
          "votes": 1
        },
        {
          "hexCode": "00016b",
          "bestName": "Bgi",
          "votes": 1
        },
        {
          "hexCode": "00016c",
          "bestName": "Where Joy Goes To Die",
          "votes": 1
        },
        {
          "hexCode": "00016d",
          "bestName": "Cannot Sleep Blue",
          "votes": 1
        },
        {
          "hexCode": "00016e",
          "bestName": "No Color Is Without Name",
          "votes": 1
        },
        {
          "hexCode": "00016f",
          "bestName": "The Last Of The 160s",
          "votes": 1
        },
        {
          "hexCode": "000170",
          "bestName": "I Could Beat This",
          "votes": 1
        },
        {
          "hexCode": "000171",
          "bestName": "Slight Green Blue",
          "votes": 2
        },
        {
          "hexCode": "000172",
          "bestName": "The Cooler Shade Of Blue",
          "votes": 1
        },
        {
          "hexCode": "000173",
          "bestName": "Crunch",
          "votes": 4
        },
        {
          "hexCode": "000174",
          "bestName": "The Opposite Of Facebook",
          "votes": 1
        },
        {
          "hexCode": "000175",
          "bestName": "A Worth While Snack",
          "votes": 1
        },
        {
          "hexCode": "000176",
          "bestName": "Dark Deep Blue No Red",
          "votes": 1
        },
        {
          "hexCode": "000177",
          "bestName": "Alpharad Blue",
          "votes": 2
        },
        {
          "hexCode": "000178",
          "bestName": "Hurts My Eyes Ow",
          "votes": 1
        },
        {
          "hexCode": "000179",
          "bestName": "So Blue Basically Black",
          "votes": 1
        },
        {
          "hexCode": "00017a",
          "bestName": "Dupe Me Now",
          "votes": 1
        },
        {
          "hexCode": "00017b",
          "bestName": "The Dark Side Of The Ocean",
          "votes": 1
        },
        {
          "hexCode": "00017c",
          "bestName": "When In The Course Of Color",
          "votes": 1
        },
        {
          "hexCode": "00017d",
          "bestName": "Zaviar",
          "votes": 2
        },
        {
          "hexCode": "00017e",
          "bestName": "''I Couldn't Make A Name'' Blue",
          "votes": 4
        },
        {
          "hexCode": "00017f",
          "bestName": "Green Extended Blue",
          "votes": 1
        },
        {
          "hexCode": "000180",
          "bestName": "One Hundred And Eighty",
          "votes": 1
        },
        {
          "hexCode": "000181",
          "bestName": "Biograph Maybe",
          "votes": 1
        },
        {
          "hexCode": "000182",
          "bestName": "Oneonethirty",
          "votes": 1
        },
        {
          "hexCode": "000183",
          "bestName": "Contribiting Be Like",
          "votes": 1
        },
        {
          "hexCode": "000184",
          "bestName": "Navy Blue's 2nd Cousin",
          "votes": 3
        },
        {
          "hexCode": "000185",
          "bestName": "Who Else Is Color Spreeing",
          "votes": 1
        },
        {
          "hexCode": "000186",
          "bestName": "Olleh Blue",
          "votes": 1
        },
        {
          "hexCode": "000187",
          "bestName": "Drowning In Her Eyes",
          "votes": 2
        },
        {
          "hexCode": "000188",
          "bestName": "Bii",
          "votes": 1
        },
        {
          "hexCode": "000189",
          "bestName": "The Dark Blue",
          "votes": 3
        },
        {
          "hexCode": "00018a",
          "bestName": "There Are 16 Million",
          "votes": 1
        },
        {
          "hexCode": "00018b",
          "bestName": "Indigo Dragonfly",
          "votes": 7
        },
        {
          "hexCode": "00018c",
          "bestName": "Blopblap",
          "votes": 1
        },
        {
          "hexCode": "00018d",
          "bestName": "Some Random Emoticon",
          "votes": 1
        },
        {
          "hexCode": "00018e",
          "bestName": "Sue Me Boy",
          "votes": 1
        },
        {
          "hexCode": "00018f",
          "bestName": "Missing Thought",
          "votes": 4
        },
        {
          "hexCode": "000190",
          "bestName": "Policia Blue",
          "votes": 4
        },
        {
          "hexCode": "000191",
          "bestName": "Get ME To 200",
          "votes": 1
        },
        {
          "hexCode": "000192",
          "bestName": "Royal Apricity",
          "votes": 2
        },
        {
          "hexCode": "000193",
          "bestName": "I Am Confused",
          "votes": 1
        },
        {
          "hexCode": "000194",
          "bestName": "Indigoite",
          "votes": 3
        },
        {
          "hexCode": "000195",
          "bestName": "How Are There More Of These",
          "votes": 1
        },
        {
          "hexCode": "000196",
          "bestName": "I Was Wondering The Same Thing",
          "votes": 3
        },
        {
          "hexCode": "000197",
          "bestName": "Named Blue",
          "votes": 1
        },
        {
          "hexCode": "000198",
          "bestName": "Carpe",
          "votes": 2
        },
        {
          "hexCode": "000199",
          "bestName": "Navy's Little Brother",
          "votes": 2
        },
        {
          "hexCode": "00019a",
          "bestName": "Coming Soon 200",
          "votes": 1
        },
        {
          "hexCode": "00019b",
          "bestName": "Sacred Bleu",
          "votes": 3
        },
        {
          "hexCode": "00019c",
          "bestName": "Midnight Reflected",
          "votes": 3
        },
        {
          "hexCode": "00019d",
          "bestName": "19 Days",
          "votes": 2
        },
        {
          "hexCode": "00019e",
          "bestName": "Bloo Bloo Bloo Bloo Blue",
          "votes": 3
        },
        {
          "hexCode": "00019f",
          "bestName": "Only 14 Million More Need Names",
          "votes": 2
        },
        {
          "hexCode": "0001a0",
          "bestName": "Go Worse BSU",
          "votes": 2
        },
        {
          "hexCode": "0001a1",
          "bestName": "Half Palindromic Blue",
          "votes": 3
        },
        {
          "hexCode": "0001a2",
          "bestName": "Please Enter A Blue",
          "votes": 2
        },
        {
          "hexCode": "0001a3",
          "bestName": "Any Blue Will Do",
          "votes": 2
        },
        {
          "hexCode": "0001a4",
          "bestName": "You Can't Hide 420",
          "votes": 2
        },
        {
          "hexCode": "0001a5",
          "bestName": "The Bluest It Can Get",
          "votes": 2
        },
        {
          "hexCode": "0001a6",
          "bestName": "Here's A Blue There's A Blue",
          "votes": 1
        },
        {
          "hexCode": "0001a7",
          "bestName": "Institutional Blue",
          "votes": 2
        },
        {
          "hexCode": "0001a8",
          "bestName": "KnightJay",
          "votes": 1
        },
        {
          "hexCode": "0001a9",
          "bestName": "I'm From Another Blueniverse",
          "votes": 1
        },
        {
          "hexCode": "0001aa",
          "bestName": "One Battery To Go",
          "votes": 1
        },
        {
          "hexCode": "0001ab",
          "bestName": "Bluscrod",
          "votes": 2
        },
        {
          "hexCode": "0001ac",
          "bestName": "I Bought An Air Conditioner",
          "votes": 1
        },
        {
          "hexCode": "0001ad",
          "bestName": "1 Ad",
          "votes": 3
        },
        {
          "hexCode": "0001ae",
          "bestName": "AE Guys",
          "votes": 1
        },
        {
          "hexCode": "0001af",
          "bestName": "Life Could Be A Blue",
          "votes": 2
        },
        {
          "hexCode": "0001b0",
          "bestName": "Zerob",
          "votes": 3
        },
        {
          "hexCode": "0001b1",
          "bestName": "True Sorrow",
          "votes": 1
        },
        {
          "hexCode": "0001b2",
          "bestName": "To Be Or Not To Blue",
          "votes": 3
        },
        {
          "hexCode": "0001b3",
          "bestName": "Crayfish Blood",
          "votes": 2
        },
        {
          "hexCode": "0001b4",
          "bestName": "One Blue",
          "votes": 3
        },
        {
          "hexCode": "0001b5",
          "bestName": "Maritime",
          "votes": 2
        },
        {
          "hexCode": "0001b6",
          "bestName": "Mossy Water Blue",
          "votes": 2
        },
        {
          "hexCode": "0001b7",
          "bestName": "Jeopardy Blue Blue",
          "votes": 1
        },
        {
          "hexCode": "0001b8",
          "bestName": "Benjamin Lou E",
          "votes": 1
        },
        {
          "hexCode": "0001b9",
          "bestName": "Who Can Do It",
          "votes": 1
        },
        {
          "hexCode": "0001ba",
          "bestName": "The Deepest Royal Blue",
          "votes": 1
        },
        {
          "hexCode": "0001bb",
          "bestName": "Ultra Ultra Ultra Ultra Ultra",
          "votes": 3
        },
        {
          "hexCode": "0001bc",
          "bestName": "400 In The Morning",
          "votes": 1
        },
        {
          "hexCode": "0001bd",
          "bestName": "A B Between A Band",
          "votes": 1
        },
        {
          "hexCode": "0001be",
          "bestName": "Be The 1",
          "votes": 2
        },
        {
          "hexCode": "0001bf",
          "bestName": "Velvet Curtain Blue",
          "votes": 1
        },
        {
          "hexCode": "0001c0",
          "bestName": "The Blue Of Oz",
          "votes": 2
        },
        {
          "hexCode": "0001c1",
          "bestName": "I Know You Blue",
          "votes": 3
        },
        {
          "hexCode": "0001c2",
          "bestName": "My Cup Blue",
          "votes": 2
        },
        {
          "hexCode": "0001c3",
          "bestName": "Blueby Traps",
          "votes": 3
        },
        {
          "hexCode": "0001c4",
          "bestName": "Please Be Descriptive And Blue",
          "votes": 2
        },
        {
          "hexCode": "0001c5",
          "bestName": "Dlue",
          "votes": 2
        },
        {
          "hexCode": "0001c6",
          "bestName": "Lightly Swirled Tapwater",
          "votes": 4
        },
        {
          "hexCode": "0001c7",
          "bestName": "Number 2 Blue",
          "votes": 1
        },
        {
          "hexCode": "0001c8",
          "bestName": "''I'm Not Funny Anymore'' Blue",
          "votes": 1
        },
        {
          "hexCode": "0001c9",
          "bestName": "Dark Dauntless Blue",
          "votes": 2
        },
        {
          "hexCode": "0001ca",
          "bestName": "My Sisters Glasses",
          "votes": 2
        },
        {
          "hexCode": "0001cb",
          "bestName": "Joes Favorite Color",
          "votes": 2
        },
        {
          "hexCode": "0001cc",
          "bestName": "Struck Blue",
          "votes": 2
        },
        {
          "hexCode": "0001cd",
          "bestName": "Deep Sea December Blue",
          "votes": 1
        },
        {
          "hexCode": "0001ce",
          "bestName": "Ice Indigo",
          "votes": 3
        },
        {
          "hexCode": "0001cf",
          "bestName": "Dot Exe",
          "votes": 1
        },
        {
          "hexCode": "0001d0",
          "bestName": "It Happened One Nightblue",
          "votes": 1
        },
        {
          "hexCode": "0001d1",
          "bestName": "0d0",
          "votes": 2
        },
        {
          "hexCode": "0001d2",
          "bestName": "Dupe Blue",
          "votes": 1
        },
        {
          "hexCode": "0001d3",
          "bestName": "Modern Times Blue",
          "votes": 1
        },
        {
          "hexCode": "0001d4",
          "bestName": "Blue Panther",
          "votes": 1
        },
        {
          "hexCode": "0001d5",
          "bestName": "BIue But Something's Wrong",
          "votes": 2
        },
        {
          "hexCode": "0001d6",
          "bestName": "00blue00",
          "votes": 1
        },
        {
          "hexCode": "0001d7",
          "bestName": "Citizen Blue",
          "votes": 1
        },
        {
          "hexCode": "0001d8",
          "bestName": "Unreal Deepblue",
          "votes": 1
        },
        {
          "hexCode": "0001d9",
          "bestName": "What The Blue",
          "votes": 2
        },
        {
          "hexCode": "0001da",
          "bestName": "Incomparable Blue",
          "votes": 1
        },
        {
          "hexCode": "0001db",
          "bestName": "One Decibel Blue",
          "votes": 2
        },
        {
          "hexCode": "0001dc",
          "bestName": "It Still Looks Blue",
          "votes": 1
        },
        {
          "hexCode": "0001dd",
          "bestName": "Closer To Blue",
          "votes": 1
        },
        {
          "hexCode": "0001de",
          "bestName": "Yeou",
          "votes": 2
        },
        {
          "hexCode": "0001df",
          "bestName": "Submit This Blue",
          "votes": 1
        },
        {
          "hexCode": "0001e0",
          "bestName": "Mary Had A Little Blue",
          "votes": 1
        },
        {
          "hexCode": "0001e1",
          "bestName": "0 Red 225 Blue",
          "votes": 1
        },
        {
          "hexCode": "0001e2",
          "bestName": "Bluerererer",
          "votes": 2
        },
        {
          "hexCode": "0001e3",
          "bestName": "Blue With A Name",
          "votes": 1
        },
        {
          "hexCode": "0001e4",
          "bestName": "All Submissions Are Blue",
          "votes": 2
        },
        {
          "hexCode": "0001e5",
          "bestName": "Propose A New Blue",
          "votes": 1
        },
        {
          "hexCode": "0001e6",
          "bestName": "New Super Mario Blue",
          "votes": 1
        },
        {
          "hexCode": "0001e7",
          "bestName": "Blue But Only Half Of It",
          "votes": 2
        },
        {
          "hexCode": "0001e8",
          "bestName": "Blue's Baby Brother",
          "votes": 1
        },
        {
          "hexCode": "0001e9",
          "bestName": "Try A Different Blue",
          "votes": 1
        },
        {
          "hexCode": "0001ea",
          "bestName": "Eyeburning Blue",
          "votes": 2
        },
        {
          "hexCode": "0001eb",
          "bestName": "Sunny Days Sweepin' Blue",
          "votes": 2
        },
        {
          "hexCode": "0001ec",
          "bestName": "Dark Blurple",
          "votes": 1
        },
        {
          "hexCode": "0001ed",
          "bestName": "Sunshine On Water",
          "votes": 1
        },
        {
          "hexCode": "0001ee",
          "bestName": "HTML Unclicked Hyperlink",
          "votes": 2
        },
        {
          "hexCode": "0001ef",
          "bestName": "Unavoidably Blue",
          "votes": 3
        },
        {
          "hexCode": "0001f0",
          "bestName": "Blue Has Been Used",
          "votes": 1
        },
        {
          "hexCode": "0001f1",
          "bestName": "Refresh It And Then It's Blue",
          "votes": 1
        },
        {
          "hexCode": "0001f2",
          "bestName": "So It Will Be Blue",
          "votes": 1
        },
        {
          "hexCode": "0001f3",
          "bestName": "Refresh It And Turn Blue",
          "votes": 1
        },
        {
          "hexCode": "0001f4",
          "bestName": "Color Of My Dream",
          "votes": 1
        },
        {
          "hexCode": "0001f5",
          "bestName": "Character Color",
          "votes": 2
        },
        {
          "hexCode": "0001f6",
          "bestName": "Blue But No Name",
          "votes": 1
        },
        {
          "hexCode": "0001f7",
          "bestName": "Blue Without A Name",
          "votes": 1
        },
        {
          "hexCode": "0001f8",
          "bestName": "He Choose The Blue One",
          "votes": 1
        },
        {
          "hexCode": "0001f9",
          "bestName": "I'm Not Blueing It Blue",
          "votes": 1
        },
        {
          "hexCode": "0001fa",
          "bestName": "Schedule Blue",
          "votes": 2
        },
        {
          "hexCode": "0001fb",
          "bestName": "Unclassified Blue",
          "votes": 1
        },
        {
          "hexCode": "0001fc",
          "bestName": "Not As Blue As You Think",
          "votes": 2
        },
        {
          "hexCode": "0001fd",
          "bestName": "Choose Blue",
          "votes": 1
        },
        {
          "hexCode": "0001fe",
          "bestName": "Neo Blue",
          "votes": 5
        },
        {
          "hexCode": "0001ff",
          "bestName": "Blue Enough",
          "votes": 12
        },
        {
          "hexCode": "000200",
          "bestName": "Midnight Plain",
          "votes": 5
        },
        {
          "hexCode": "000201",
          "bestName": "Voided Aquamarine",
          "votes": 5
        },
        {
          "hexCode": "000202",
          "bestName": "London Taxi Black",
          "votes": 8
        },
        {
          "hexCode": "000203",
          "bestName": "Dark But Not To Dark",
          "votes": 20
        },
        {
          "hexCode": "000204",
          "bestName": "Total Eclipse Of The Heartt",
          "votes": 3
        },
        {
          "hexCode": "000205",
          "bestName": "Idk Man Black Sus",
          "votes": 2
        },
        {
          "hexCode": "000206",
          "bestName": "Bone Black",
          "votes": 3
        },
        {
          "hexCode": "000207",
          "bestName": "Enclave",
          "votes": 4
        },
        {
          "hexCode": "000208",
          "bestName": "Sea Of Shadows",
          "votes": 12
        },
        {
          "hexCode": "000209",
          "bestName": "Anxiety's Black",
          "votes": 4
        },
        {
          "hexCode": "00020a",
          "bestName": "The Feeling Of Alone",
          "votes": 4
        },
        {
          "hexCode": "00020b",
          "bestName": "Penguin's Top Hat",
          "votes": 3
        },
        {
          "hexCode": "00020c",
          "bestName": "Half Past Midnight",
          "votes": 3
        },
        {
          "hexCode": "00020d",
          "bestName": "Dark Matter In Deep Space",
          "votes": 4
        },
        {
          "hexCode": "00020e",
          "bestName": "Blackishy",
          "votes": 5
        },
        {
          "hexCode": "00020f",
          "bestName": "Event Horizon",
          "votes": 6
        },
        {
          "hexCode": "000210",
          "bestName": "Bottom Of The Ocean Blue",
          "votes": 4
        },
        {
          "hexCode": "000211",
          "bestName": "Black But Not Really",
          "votes": 1
        },
        {
          "hexCode": "000212",
          "bestName": "Death's Doorstep",
          "votes": 2
        },
        {
          "hexCode": "000213",
          "bestName": "Styx Bl",
          "votes": 3
        },
        {
          "hexCode": "000214",
          "bestName": "Midnight Eclipse Black",
          "votes": 11
        },
        {
          "hexCode": "000215",
          "bestName": "Turned Off Phone Screen",
          "votes": 3
        },
        {
          "hexCode": "000216",
          "bestName": "Sea Of Crows",
          "votes": 3
        },
        {
          "hexCode": "000217",
          "bestName": "Depression",
          "votes": 36
        },
        {
          "hexCode": "000218",
          "bestName": "Hey I Think The Toasters On Fire",
          "votes": 6
        },
        {
          "hexCode": "000219",
          "bestName": "When The Light Switch Is Halfway",
          "votes": 2
        },
        {
          "hexCode": "00021a",
          "bestName": "The Abyssopelagic Zone",
          "votes": 3
        },
        {
          "hexCode": "00021b",
          "bestName": "I THINK My Printer's Color",
          "votes": 2
        },
        {
          "hexCode": "00021c",
          "bestName": "Opal's Blue",
          "votes": 7
        },
        {
          "hexCode": "00021d",
          "bestName": "Weemer",
          "votes": 2
        },
        {
          "hexCode": "00021e",
          "bestName": "Blugsie",
          "votes": 1
        },
        {
          "hexCode": "00021f",
          "bestName": "Not Blue But Not Black",
          "votes": 2
        },
        {
          "hexCode": "000220",
          "bestName": "Trapped In A Suitcase Blue",
          "votes": 3
        },
        {
          "hexCode": "000221",
          "bestName": "Apple Startup Screen Blue",
          "votes": 4
        },
        {
          "hexCode": "000222",
          "bestName": "42 In Quaddecimal",
          "votes": 3
        },
        {
          "hexCode": "000223",
          "bestName": "To Ashes Blue",
          "votes": 2
        },
        {
          "hexCode": "000224",
          "bestName": "Dxpression",
          "votes": 2
        },
        {
          "hexCode": "000225",
          "bestName": "Your Classmate Emo's Color",
          "votes": 1
        },
        {
          "hexCode": "000226",
          "bestName": "Mozaik Role",
          "votes": 4
        },
        {
          "hexCode": "000227",
          "bestName": "Water Too Deep",
          "votes": 3
        },
        {
          "hexCode": "000228",
          "bestName": "Is It Blue Or Black",
          "votes": 3
        },
        {
          "hexCode": "000229",
          "bestName": "Deepest Midnight Ocean",
          "votes": 3
        },
        {
          "hexCode": "00022a",
          "bestName": "He's Standing There Menacingly",
          "votes": 2
        },
        {
          "hexCode": "00022b",
          "bestName": "Moon's Background",
          "votes": 3
        },
        {
          "hexCode": "00022c",
          "bestName": "Ruff",
          "votes": 2
        },
        {
          "hexCode": "00022d",
          "bestName": "Poisonous Fogs",
          "votes": 1
        },
        {
          "hexCode": "00022e",
          "bestName": "Darkest Navy Blue",
          "votes": 11
        },
        {
          "hexCode": "00022f",
          "bestName": "Shadow Of The Night",
          "votes": 2
        },
        {
          "hexCode": "000230",
          "bestName": "Nearly Midnight",
          "votes": 7
        },
        {
          "hexCode": "000231",
          "bestName": "Quiet Summer Nights",
          "votes": 1
        },
        {
          "hexCode": "000232",
          "bestName": "A Man A Plan A Canal Panama Blue",
          "votes": 1
        },
        {
          "hexCode": "000233",
          "bestName": "Dark Sea Blue",
          "votes": 2
        },
        {
          "hexCode": "000234",
          "bestName": "Mariana's Blue",
          "votes": 1
        },
        {
          "hexCode": "000235",
          "bestName": "Diving Through Depths",
          "votes": 1
        },
        {
          "hexCode": "000236",
          "bestName": "Shy Guy",
          "votes": 2
        },
        {
          "hexCode": "000237",
          "bestName": "It's Clearly Blue But Eh",
          "votes": 2
        },
        {
          "hexCode": "000238",
          "bestName": "Star Stroon Night",
          "votes": 6
        },
        {
          "hexCode": "000239",
          "bestName": "Inbetween Black And Navy",
          "votes": 1
        },
        {
          "hexCode": "00023a",
          "bestName": "Have You Seen This Blue",
          "votes": 1
        },
        {
          "hexCode": "00023b",
          "bestName": "Dead Nights",
          "votes": 2
        },
        {
          "hexCode": "00023c",
          "bestName": "Blueish Balck",
          "votes": 1
        },
        {
          "hexCode": "00023d",
          "bestName": "Deep Empty Night Sky",
          "votes": 5
        },
        {
          "hexCode": "00023e",
          "bestName": "The Water's Shadows",
          "votes": 1
        },
        {
          "hexCode": "00023f",
          "bestName": "The Unending Depths Of The Ocean",
          "votes": 3
        },
        {
          "hexCode": "000240",
          "bestName": "Deathly Blue",
          "votes": 4
        },
        {
          "hexCode": "000241",
          "bestName": "Mind Reading Blue",
          "votes": 2
        },
        {
          "hexCode": "000242",
          "bestName": "Arabian Night",
          "votes": 8
        },
        {
          "hexCode": "000243",
          "bestName": "Talia Blue",
          "votes": 1
        },
        {
          "hexCode": "000244",
          "bestName": "Dark Blue Glass",
          "votes": 2
        },
        {
          "hexCode": "000245",
          "bestName": "Deep-Web Blue",
          "votes": 3
        },
        {
          "hexCode": "000246",
          "bestName": "Bottom Of The Ocean",
          "votes": 3
        },
        {
          "hexCode": "000247",
          "bestName": "Maritime Navy",
          "votes": 5
        },
        {
          "hexCode": "000248",
          "bestName": "12am Sadness",
          "votes": 3
        },
        {
          "hexCode": "000249",
          "bestName": "Deep Dark Blue Ocean",
          "votes": 2
        },
        {
          "hexCode": "00024a",
          "bestName": "Midnight Poet",
          "votes": 4
        },
        {
          "hexCode": "00024b",
          "bestName": "Midnight Piano Blue",
          "votes": 2
        },
        {
          "hexCode": "00024c",
          "bestName": "Rough Blue",
          "votes": 1
        },
        {
          "hexCode": "00024d",
          "bestName": "Future Blue",
          "votes": 1
        },
        {
          "hexCode": "00024e",
          "bestName": "Darkn't Blue",
          "votes": 1
        },
        {
          "hexCode": "00024f",
          "bestName": "Slurp Slurp",
          "votes": 1
        },
        {
          "hexCode": "000250",
          "bestName": "Sphere Blue",
          "votes": 1
        },
        {
          "hexCode": "000251",
          "bestName": "Blue's Bluebird",
          "votes": 2
        },
        {
          "hexCode": "000252",
          "bestName": "Shadow Of A Blue",
          "votes": 2
        },
        {
          "hexCode": "000253",
          "bestName": "Midnight Spring Pond",
          "votes": 2
        },
        {
          "hexCode": "000254",
          "bestName": "Dark Waterfall",
          "votes": 2
        },
        {
          "hexCode": "000255",
          "bestName": "Draconian Blue",
          "votes": 3
        },
        {
          "hexCode": "000256",
          "bestName": "Navy To The 8th",
          "votes": 2
        },
        {
          "hexCode": "000257",
          "bestName": "Midnight Zone",
          "votes": 1
        },
        {
          "hexCode": "000258",
          "bestName": "Morning Blue Shadows",
          "votes": 2
        },
        {
          "hexCode": "000259",
          "bestName": "Warm Summer Night",
          "votes": 1
        },
        {
          "hexCode": "00025a",
          "bestName": "Shadow Blocked Blue",
          "votes": 1
        },
        {
          "hexCode": "00025b",
          "bestName": "Assault Navy",
          "votes": 1
        },
        {
          "hexCode": "00025c",
          "bestName": "Starless Space",
          "votes": 4
        },
        {
          "hexCode": "00025d",
          "bestName": "Dark Blue Ocean Riff",
          "votes": 1
        },
        {
          "hexCode": "00025e",
          "bestName": "Space Blue",
          "votes": 8
        },
        {
          "hexCode": "00025f",
          "bestName": "City Of Stars City Of Stars",
          "votes": 1
        },
        {
          "hexCode": "000260",
          "bestName": "Sepia Blue",
          "votes": 2
        },
        {
          "hexCode": "000261",
          "bestName": "Crystal Gems Blue",
          "votes": 1
        },
        {
          "hexCode": "000262",
          "bestName": "Gone With The Blue",
          "votes": 3
        },
        {
          "hexCode": "000263",
          "bestName": "Zigzablue",
          "votes": 3
        },
        {
          "hexCode": "000264",
          "bestName": "Shadow Blocked Blue Jay",
          "votes": 1
        },
        {
          "hexCode": "000265",
          "bestName": "Deep Arctic Glacier Water",
          "votes": 2
        },
        {
          "hexCode": "000266",
          "bestName": "Introvert Blue",
          "votes": 3
        },
        {
          "hexCode": "000267",
          "bestName": "The Fitness Gram Pacer Blue",
          "votes": 1
        },
        {
          "hexCode": "000268",
          "bestName": "Serious Man Blue",
          "votes": 1
        },
        {
          "hexCode": "000269",
          "bestName": "Deep Sea Destiny",
          "votes": 4
        },
        {
          "hexCode": "00026a",
          "bestName": "TV Dark Blue",
          "votes": 1
        },
        {
          "hexCode": "00026b",
          "bestName": "Sleepy Midnight Blue Sky",
          "votes": 2
        },
        {
          "hexCode": "00026c",
          "bestName": "Navy Light Dark Blu",
          "votes": 2
        },
        {
          "hexCode": "00026d",
          "bestName": "Crxsmart",
          "votes": 1
        },
        {
          "hexCode": "00026e",
          "bestName": "Sugar Blue",
          "votes": 3
        },
        {
          "hexCode": "00026f",
          "bestName": "The Empire Strikes Blue",
          "votes": 3
        },
        {
          "hexCode": "000270",
          "bestName": "Not Yet The Abyssal Plains",
          "votes": 1
        },
        {
          "hexCode": "000271",
          "bestName": "And Miles To Go Before I Sleep",
          "votes": 3
        },
        {
          "hexCode": "000272",
          "bestName": "Tom Blue",
          "votes": 1
        },
        {
          "hexCode": "000273",
          "bestName": "Midnight Ghoul",
          "votes": 4
        },
        {
          "hexCode": "000274",
          "bestName": "6 Hours After Midnight Blue",
          "votes": 2
        },
        {
          "hexCode": "000275",
          "bestName": "Royal Ash Sky",
          "votes": 7
        },
        {
          "hexCode": "000276",
          "bestName": "Irmak",
          "votes": 5
        },
        {
          "hexCode": "000277",
          "bestName": "Midnight Space Blue",
          "votes": 1
        },
        {
          "hexCode": "000278",
          "bestName": "Bass Guitar Blue",
          "votes": 3
        },
        {
          "hexCode": "000279",
          "bestName": "Not So Deep Blue",
          "votes": 1
        },
        {
          "hexCode": "00027a",
          "bestName": "Depression Irl",
          "votes": 6
        },
        {
          "hexCode": "00027b",
          "bestName": "Briskett",
          "votes": 1
        },
        {
          "hexCode": "00027c",
          "bestName": "Dark Eyes Of Spongebob",
          "votes": 2
        },
        {
          "hexCode": "00027d",
          "bestName": "Abience",
          "votes": 7
        },
        {
          "hexCode": "00027e",
          "bestName": "Deep Winter Water",
          "votes": 4
        },
        {
          "hexCode": "00027f",
          "bestName": "Parrot Blue",
          "votes": 2
        },
        {
          "hexCode": "000280",
          "bestName": "Messy Stressy Deppressy",
          "votes": 7
        },
        {
          "hexCode": "000281",
          "bestName": "Santa Barbara Blue",
          "votes": 2
        },
        {
          "hexCode": "000282",
          "bestName": "Staring At Your Ceiling Vibe",
          "votes": 2
        },
        {
          "hexCode": "000283",
          "bestName": "Yankees",
          "votes": 2
        },
        {
          "hexCode": "000284",
          "bestName": "Intense Moonlit Night",
          "votes": 2
        },
        {
          "hexCode": "000285",
          "bestName": "Deep Prisessa",
          "votes": 2
        },
        {
          "hexCode": "000286",
          "bestName": "Basically Indigo",
          "votes": 4
        },
        {
          "hexCode": "000287",
          "bestName": "Dark Cobalt 135",
          "votes": 2
        },
        {
          "hexCode": "000288",
          "bestName": "Phantomhive",
          "votes": 1
        },
        {
          "hexCode": "000289",
          "bestName": "Timadia",
          "votes": 1
        },
        {
          "hexCode": "00028a",
          "bestName": "Kraken Time",
          "votes": 4
        },
        {
          "hexCode": "00028b",
          "bestName": "Blueberry Plum Danish",
          "votes": 1
        },
        {
          "hexCode": "00028c",
          "bestName": "Navy Blue Abyss",
          "votes": 3
        },
        {
          "hexCode": "00028d",
          "bestName": "Waking Up In A Submarine",
          "votes": 4
        },
        {
          "hexCode": "00028e",
          "bestName": "Butterfly Blue Dark",
          "votes": 1
        },
        {
          "hexCode": "00028f",
          "bestName": "When You Loose The Final Hot Dog",
          "votes": 3
        },
        {
          "hexCode": "000290",
          "bestName": "Niwalablewaz",
          "votes": 1
        },
        {
          "hexCode": "000291",
          "bestName": "Nevernight",
          "votes": 4
        },
        {
          "hexCode": "000292",
          "bestName": "292 BLUe",
          "votes": 2
        },
        {
          "hexCode": "000293",
          "bestName": "Deep Dreamy Blue Wowie",
          "votes": 1
        },
        {
          "hexCode": "000294",
          "bestName": "Tears I Cried After My Math Test",
          "votes": 4
        },
        {
          "hexCode": "000295",
          "bestName": "I Propose Nothing",
          "votes": 1
        },
        {
          "hexCode": "000296",
          "bestName": "Reaching The Surface",
          "votes": 2
        },
        {
          "hexCode": "000297",
          "bestName": "Tranquility Of Cobalt Glass",
          "votes": 2
        },
        {
          "hexCode": "000298",
          "bestName": "The Middle Ocean",
          "votes": 2
        },
        {
          "hexCode": "000299",
          "bestName": "Nosepass Navy",
          "votes": 3
        },
        {
          "hexCode": "00029a",
          "bestName": "Hexadecimal Beast",
          "votes": 2
        },
        {
          "hexCode": "00029b",
          "bestName": "Jon's Shirt",
          "votes": 2
        },
        {
          "hexCode": "00029c",
          "bestName": "Disney Parks",
          "votes": 1
        },
        {
          "hexCode": "00029d",
          "bestName": "Jack In The Blue",
          "votes": 1
        },
        {
          "hexCode": "00029e",
          "bestName": "Dark Hibiscuses Blue",
          "votes": 2
        },
        {
          "hexCode": "00029f",
          "bestName": "Peacock In A Shadow",
          "votes": 1
        },
        {
          "hexCode": "0002a0",
          "bestName": "Drifting Away From Shore",
          "votes": 4
        },
        {
          "hexCode": "0002a1",
          "bestName": "Deadly Blue Ring Octopus",
          "votes": 7
        },
        {
          "hexCode": "0002a2",
          "bestName": "Far From Shore",
          "votes": 4
        },
        {
          "hexCode": "0002a3",
          "bestName": "Space Oceans",
          "votes": 1
        },
        {
          "hexCode": "0002a4",
          "bestName": "Starling's Head",
          "votes": 2
        },
        {
          "hexCode": "0002a5",
          "bestName": "Blue Millipede",
          "votes": 2
        },
        {
          "hexCode": "0002a6",
          "bestName": "Maybe Persian Blue I Dont Know",
          "votes": 1
        },
        {
          "hexCode": "0002a7",
          "bestName": "Cosalt",
          "votes": 2
        },
        {
          "hexCode": "0002a8",
          "bestName": "The Unknown Fish In The Ocean",
          "votes": 4
        },
        {
          "hexCode": "0002a9",
          "bestName": "Blue From Feeling Like",
          "votes": 2
        },
        {
          "hexCode": "0002aa",
          "bestName": "Im Suffocating",
          "votes": 2
        },
        {
          "hexCode": "0002ab",
          "bestName": "That Specific Bottle Of Shampoo",
          "votes": 2
        },
        {
          "hexCode": "0002ac",
          "bestName": "Sea Water Doesnt Taste Very Good",
          "votes": 2
        },
        {
          "hexCode": "0002ad",
          "bestName": "Into The Unknown Of The Sea",
          "votes": 2
        },
        {
          "hexCode": "0002ae",
          "bestName": "Speeding Rip Current",
          "votes": 2
        },
        {
          "hexCode": "0002af",
          "bestName": "Wow That's Royal Blue",
          "votes": 1
        },
        {
          "hexCode": "0002b0",
          "bestName": "Cobalt At Night",
          "votes": 1
        },
        {
          "hexCode": "0002b1",
          "bestName": "Poseidon's Planet",
          "votes": 1
        },
        {
          "hexCode": "0002b2",
          "bestName": "Shrimps With Sweaters",
          "votes": 1
        },
        {
          "hexCode": "0002b3",
          "bestName": "Nightly Fog O' The Sea",
          "votes": 1
        },
        {
          "hexCode": "0002b4",
          "bestName": "Bret",
          "votes": 1
        },
        {
          "hexCode": "0002b5",
          "bestName": "2B Continued In 5",
          "votes": 1
        },
        {
          "hexCode": "0002b6",
          "bestName": "2B Continued In 6",
          "votes": 1
        },
        {
          "hexCode": "0002b7",
          "bestName": "2B Continued In 7",
          "votes": 1
        },
        {
          "hexCode": "0002b8",
          "bestName": "2B Continued In 8",
          "votes": 1
        },
        {
          "hexCode": "0002b9",
          "bestName": "2B Continued In 9",
          "votes": 1
        },
        {
          "hexCode": "0002ba",
          "bestName": "2B Allocated",
          "votes": 1
        },
        {
          "hexCode": "0002bb",
          "bestName": "2B Broken",
          "votes": 1
        },
        {
          "hexCode": "0002bc",
          "bestName": "2B Continued",
          "votes": 1
        },
        {
          "hexCode": "0002bd",
          "bestName": "2B Delivered",
          "votes": 1
        },
        {
          "hexCode": "0002be",
          "bestName": "Or Not To Be",
          "votes": 1
        },
        {
          "hexCode": "0002bf",
          "bestName": "BF Plus BF",
          "votes": 1
        },
        {
          "hexCode": "0002c0",
          "bestName": "Septavia",
          "votes": 1
        },
        {
          "hexCode": "0002c1",
          "bestName": "Ishalamga",
          "votes": 1
        },
        {
          "hexCode": "0002c2",
          "bestName": "Looking Left Hex Person",
          "votes": 1
        },
        {
          "hexCode": "0002c3",
          "bestName": "Posiedon's Royalty",
          "votes": 2
        },
        {
          "hexCode": "0002c4",
          "bestName": "Quack Blue",
          "votes": 1
        },
        {
          "hexCode": "0002c5",
          "bestName": "Flipped 2c5 Is 2c5",
          "votes": 1
        },
        {
          "hexCode": "0002c6",
          "bestName": "The Night Blue",
          "votes": 1
        },
        {
          "hexCode": "0002c7",
          "bestName": "Russen Blue",
          "votes": 1
        },
        {
          "hexCode": "0002c8",
          "bestName": "Lonely Hexed Blue",
          "votes": 1
        },
        {
          "hexCode": "0002c9",
          "bestName": "Close To 2d0",
          "votes": 1
        },
        {
          "hexCode": "0002ca",
          "bestName": "Closer To 2d0",
          "votes": 1
        },
        {
          "hexCode": "0002cb",
          "bestName": "Closerer To 2d0",
          "votes": 1
        },
        {
          "hexCode": "0002cc",
          "bestName": "Wildcat Blue",
          "votes": 4
        },
        {
          "hexCode": "0002cd",
          "bestName": "Deep Darkened Blue",
          "votes": 1
        },
        {
          "hexCode": "0002ce",
          "bestName": "Closererer To 2d0",
          "votes": 1
        },
        {
          "hexCode": "0002cf",
          "bestName": "Closest To 2d0",
          "votes": 1
        },
        {
          "hexCode": "0002d0",
          "bestName": "2d0 Blue",
          "votes": 1
        },
        {
          "hexCode": "0002d1",
          "bestName": "Medium Blue But With Green",
          "votes": 3
        },
        {
          "hexCode": "0002d2",
          "bestName": "Voilette",
          "votes": 2
        },
        {
          "hexCode": "0002d3",
          "bestName": "2D 3D Blue",
          "votes": 4
        },
        {
          "hexCode": "0002d4",
          "bestName": "2 Divided By 4 Is A Half",
          "votes": 4
        },
        {
          "hexCode": "0002d5",
          "bestName": "Azul Bem Azul",
          "votes": 5
        },
        {
          "hexCode": "0002d6",
          "bestName": "2 Monopoly Dice Blue",
          "votes": 3
        },
        {
          "hexCode": "0002d7",
          "bestName": "Barett",
          "votes": 1
        },
        {
          "hexCode": "0002d8",
          "bestName": "Minecraft Water Overlay Blue",
          "votes": 2
        },
        {
          "hexCode": "0002d9",
          "bestName": "Royal Jump Blue",
          "votes": 2
        },
        {
          "hexCode": "0002da",
          "bestName": "DADA Blue",
          "votes": 1
        },
        {
          "hexCode": "0002db",
          "bestName": "Two Decibel Blue",
          "votes": 1
        },
        {
          "hexCode": "0002dc",
          "bestName": "Darkish Blue Marker",
          "votes": 1
        },
        {
          "hexCode": "0002dd",
          "bestName": "Deedee Deedee Blue",
          "votes": 1
        },
        {
          "hexCode": "0002de",
          "bestName": "Blue Pen On Wet Paper",
          "votes": 2
        },
        {
          "hexCode": "0002df",
          "bestName": "Comme Des Garons",
          "votes": 1
        },
        {
          "hexCode": "0002e0",
          "bestName": "736 Blue",
          "votes": 1
        },
        {
          "hexCode": "0002e1",
          "bestName": "Kid's Crayon Drawing Sky",
          "votes": 3
        },
        {
          "hexCode": "0002e2",
          "bestName": "Battleship Coordinates Blue",
          "votes": 1
        },
        {
          "hexCode": "0002e3",
          "bestName": "Shimmering Deep Blue Glass",
          "votes": 2
        },
        {
          "hexCode": "0002e4",
          "bestName": "Slightly Dark Blue Ice",
          "votes": 1
        },
        {
          "hexCode": "0002e5",
          "bestName": "Deux E Cinq Bleu",
          "votes": 1
        },
        {
          "hexCode": "0002e6",
          "bestName": "Who Put Green In My Pure Blue",
          "votes": 1
        },
        {
          "hexCode": "0002e7",
          "bestName": "KARL",
          "votes": 3
        },
        {
          "hexCode": "0002e8",
          "bestName": "Most Royal Blue",
          "votes": 3
        },
        {
          "hexCode": "0002e9",
          "bestName": "Blue MnMs",
          "votes": 1
        },
        {
          "hexCode": "0002ea",
          "bestName": "Double Micro Transaction  Blue",
          "votes": 1
        },
        {
          "hexCode": "0002eb",
          "bestName": "Marios Blue",
          "votes": 1
        },
        {
          "hexCode": "0002ec",
          "bestName": "Hot Sulfur Blue",
          "votes": 1
        },
        {
          "hexCode": "0002ed",
          "bestName": "Azulosiz",
          "votes": 2
        },
        {
          "hexCode": "0002ee",
          "bestName": "Sarnen Indigo",
          "votes": 1
        },
        {
          "hexCode": "0002ef",
          "bestName": "Visibly Green",
          "votes": 2
        },
        {
          "hexCode": "0002f0",
          "bestName": "Look With Your Eyes",
          "votes": 1
        },
        {
          "hexCode": "0002f1",
          "bestName": "Vroom Vroom Turquoise",
          "votes": 1
        },
        {
          "hexCode": "0002f2",
          "bestName": "Pop Of Blue",
          "votes": 3
        },
        {
          "hexCode": "0002f3",
          "bestName": "Google Docs Dark",
          "votes": 3
        },
        {
          "hexCode": "0002f4",
          "bestName": "I Cant Believe Its Not Pure",
          "votes": 1
        },
        {
          "hexCode": "0002f5",
          "bestName": "Im Blue Dabadeee Dabadie",
          "votes": 1
        },
        {
          "hexCode": "0002f6",
          "bestName": "I Asked For No Blue",
          "votes": 2
        },
        {
          "hexCode": "0002f7",
          "bestName": "Too Bold To Be Blue",
          "votes": 2
        },
        {
          "hexCode": "0002f8",
          "bestName": "The Bluest Blu That Ever Did Blu",
          "votes": 2
        },
        {
          "hexCode": "0002f9",
          "bestName": "Pixel Blu",
          "votes": 1
        },
        {
          "hexCode": "0002fa",
          "bestName": "Midnights Become My Afternoons",
          "votes": 2
        },
        {
          "hexCode": "0002fb",
          "bestName": "Laguna Beach Blue",
          "votes": 2
        },
        {
          "hexCode": "0002fc",
          "bestName": "Shock Bleu",
          "votes": 1
        },
        {
          "hexCode": "0002fd",
          "bestName": "A Big Blue",
          "votes": 4
        },
        {
          "hexCode": "0002ff",
          "bestName": "Dual Blue",
          "votes": 4
        },
        {
          "hexCode": "000300",
          "bestName": "Court Of Nightmares",
          "votes": 32
        },
        {
          "hexCode": "000301",
          "bestName": "The Nearly Perfect Void",
          "votes": 36
        },
        {
          "hexCode": "000302",
          "bestName": "302 Away From Black",
          "votes": 11
        },
        {
          "hexCode": "000303",
          "bestName": "Its Not Black Yet",
          "votes": 14
        },
        {
          "hexCode": "000304",
          "bestName": "My Lovely Soul",
          "votes": 4
        },
        {
          "hexCode": "000305",
          "bestName": "Miami Black",
          "votes": 3
        },
        {
          "hexCode": "000306",
          "bestName": "Nefarious",
          "votes": 8
        },
        {
          "hexCode": "000307",
          "bestName": "Lurking",
          "votes": 1
        },
        {
          "hexCode": "000308",
          "bestName": "Nucita",
          "votes": 6
        },
        {
          "hexCode": "000309",
          "bestName": "Very Very Navy Blue",
          "votes": 2
        },
        {
          "hexCode": "00030a",
          "bestName": "Midnight Angel Blue",
          "votes": 4
        },
        {
          "hexCode": "00030b",
          "bestName": "Complete Silence",
          "votes": 2
        },
        {
          "hexCode": "00030c",
          "bestName": "Serious Sea",
          "votes": 3
        },
        {
          "hexCode": "00030d",
          "bestName": "Fallen Shadow",
          "votes": 4
        },
        {
          "hexCode": "00030e",
          "bestName": "Charred Navy Grey",
          "votes": 1
        },
        {
          "hexCode": "00030f",
          "bestName": "Darkside Of The Night",
          "votes": 5
        },
        {
          "hexCode": "000310",
          "bestName": "Quantum Answer",
          "votes": 2
        },
        {
          "hexCode": "000311",
          "bestName": "24 O'clock",
          "votes": 2
        },
        {
          "hexCode": "000312",
          "bestName": "Dark Midnight Sky",
          "votes": 1
        },
        {
          "hexCode": "000313",
          "bestName": "Phantomias Blue",
          "votes": 1
        },
        {
          "hexCode": "000314",
          "bestName": "Blackberry Pi",
          "votes": 4
        },
        {
          "hexCode": "000315",
          "bestName": "Darkening Blue",
          "votes": 1
        },
        {
          "hexCode": "000316",
          "bestName": "Plug Black",
          "votes": 1
        },
        {
          "hexCode": "000317",
          "bestName": "Edgy Emo",
          "votes": 4
        },
        {
          "hexCode": "000318",
          "bestName": "Dark Gazelle",
          "votes": 2
        },
        {
          "hexCode": "000319",
          "bestName": "Cromax",
          "votes": 1
        },
        {
          "hexCode": "00031a",
          "bestName": "Sad Jazz Blue",
          "votes": 6
        },
        {
          "hexCode": "00031b",
          "bestName": "Shooting Blackout",
          "votes": 1
        },
        {
          "hexCode": "00031c",
          "bestName": "Lost Seretonin",
          "votes": 5
        },
        {
          "hexCode": "00031d",
          "bestName": "Blueblackberry",
          "votes": 1
        },
        {
          "hexCode": "00031e",
          "bestName": "Checkered Black",
          "votes": 2
        },
        {
          "hexCode": "00031f",
          "bestName": "Hidden Mysteries",
          "votes": 4
        },
        {
          "hexCode": "000320",
          "bestName": "Airbus Dark Blue",
          "votes": 3
        },
        {
          "hexCode": "000321",
          "bestName": "Space Shuttle Navy",
          "votes": 5
        },
        {
          "hexCode": "000322",
          "bestName": "Dark Blue Clock",
          "votes": 2
        },
        {
          "hexCode": "000323",
          "bestName": "The One Who Lights Up The World",
          "votes": 2
        },
        {
          "hexCode": "000324",
          "bestName": "The Moon At Midnight",
          "votes": 3
        },
        {
          "hexCode": "000325",
          "bestName": "Monsters In The Closet",
          "votes": 3
        },
        {
          "hexCode": "000326",
          "bestName": "Leagues Under The Sea",
          "votes": 3
        },
        {
          "hexCode": "000327",
          "bestName": "Polluted Night Sky",
          "votes": 2
        },
        {
          "hexCode": "000328",
          "bestName": "Sabotage Blue",
          "votes": 1
        },
        {
          "hexCode": "000329",
          "bestName": "A Midnight Walk Beneath The Star",
          "votes": 7
        },
        {
          "hexCode": "00032a",
          "bestName": "Navy Sweater",
          "votes": 3
        },
        {
          "hexCode": "00032b",
          "bestName": "What Is Down There",
          "votes": 2
        },
        {
          "hexCode": "00032e",
          "bestName": "The Deep End",
          "votes": 7
        },
        {
          "hexCode": "00032f",
          "bestName": "Late Night Sky",
          "votes": 4
        },
        {
          "hexCode": "000330",
          "bestName": "Witching Cobalt",
          "votes": 5
        },
        {
          "hexCode": "000331",
          "bestName": "Tourniquet's Ethereal Aurora",
          "votes": 3
        },
        {
          "hexCode": "000333",
          "bestName": "Atlantis Bottom",
          "votes": 5
        },
        {
          "hexCode": "000334",
          "bestName": "Deep Christmas Night",
          "votes": 1
        },
        {
          "hexCode": "000336",
          "bestName": "Cavernous Pro Blue",
          "votes": 2
        },
        {
          "hexCode": "000337",
          "bestName": "Midnight Sky In A Photograph",
          "votes": 3
        },
        {
          "hexCode": "000338",
          "bestName": "Moonless Night",
          "votes": 5
        },
        {
          "hexCode": "000339",
          "bestName": "Violation",
          "votes": 3
        },
        {
          "hexCode": "00033b",
          "bestName": "Crazy Dark Indigo",
          "votes": 3
        },
        {
          "hexCode": "00033d",
          "bestName": "Yo Dead",
          "votes": 2
        },
        {
          "hexCode": "00033e",
          "bestName": "Exther",
          "votes": 3
        },
        {
          "hexCode": "00033f",
          "bestName": "My Mom's Living Room Walls",
          "votes": 7
        },
        {
          "hexCode": "000340",
          "bestName": "Nyctophiles",
          "votes": 3
        },
        {
          "hexCode": "000341",
          "bestName": "Just Before It Goes Pitch Black",
          "votes": 3
        },
        {
          "hexCode": "000342",
          "bestName": "Abandoned Corridor",
          "votes": 6
        },
        {
          "hexCode": "000343",
          "bestName": "Heather",
          "votes": 1
        },
        {
          "hexCode": "000345",
          "bestName": "Long Winter Nights Sky",
          "votes": 6
        },
        {
          "hexCode": "000347",
          "bestName": "Mysterious Midnight Sky",
          "votes": 1
        },
        {
          "hexCode": "000348",
          "bestName": "Navyest Blue",
          "votes": 1
        },
        {
          "hexCode": "00034a",
          "bestName": "Drifting Off To Sleep",
          "votes": 2
        },
        {
          "hexCode": "00034c",
          "bestName": "Your Eyes See The Night Sky",
          "votes": 3
        },
        {
          "hexCode": "00034d",
          "bestName": "Twilight",
          "votes": 2
        },
        {
          "hexCode": "00034e",
          "bestName": "Terrestrial",
          "votes": 2
        },
        {
          "hexCode": "00034f",
          "bestName": "Night Sky",
          "votes": 4
        },
        {
          "hexCode": "000350",
          "bestName": "Too Low",
          "votes": 1
        },
        {
          "hexCode": "000351",
          "bestName": "Food Depression",
          "votes": 1
        },
        {
          "hexCode": "000352",
          "bestName": "Emo Robot",
          "votes": 4
        },
        {
          "hexCode": "000353",
          "bestName": "Shuppet Sapphire",
          "votes": 1
        },
        {
          "hexCode": "000354",
          "bestName": "Kraken Eye",
          "votes": 3
        },
        {
          "hexCode": "000355",
          "bestName": "Goth Whale",
          "votes": 3
        },
        {
          "hexCode": "000356",
          "bestName": "Irsyadheckre",
          "votes": 1
        },
        {
          "hexCode": "000357",
          "bestName": "Deep Night",
          "votes": 2
        },
        {
          "hexCode": "000359",
          "bestName": "The Twilight Blue Of The Sea",
          "votes": 4
        },
        {
          "hexCode": "00035a",
          "bestName": "Pluto Dark Blue",
          "votes": 1
        },
        {
          "hexCode": "00035b",
          "bestName": "Loyal Royal Blue",
          "votes": 1
        },
        {
          "hexCode": "00035c",
          "bestName": "Ineviteble Blue",
          "votes": 4
        },
        {
          "hexCode": "00035d",
          "bestName": "Takeover",
          "votes": 1
        },
        {
          "hexCode": "00035e",
          "bestName": "3am Thoughts",
          "votes": 3
        },
        {
          "hexCode": "00035f",
          "bestName": "Midnight Water Rose",
          "votes": 1
        },
        {
          "hexCode": "000360",
          "bestName": "No Scope",
          "votes": 5
        },
        {
          "hexCode": "000361",
          "bestName": "Goodnight Tears",
          "votes": 4
        },
        {
          "hexCode": "000362",
          "bestName": "Lagoona Lake",
          "votes": 2
        },
        {
          "hexCode": "000363",
          "bestName": "Depressed Color Blue",
          "votes": 3
        },
        {
          "hexCode": "000364",
          "bestName": "Minor Key Blue",
          "votes": 3
        },
        {
          "hexCode": "000365",
          "bestName": "Yearly Blue",
          "votes": 2
        },
        {
          "hexCode": "000366",
          "bestName": "Starry Night Without Some Stars",
          "votes": 3
        },
        {
          "hexCode": "000367",
          "bestName": "Edgy Drawing Blue",
          "votes": 2
        },
        {
          "hexCode": "000368",
          "bestName": "Global Nights",
          "votes": 2
        },
        {
          "hexCode": "000369",
          "bestName": "Dark View",
          "votes": 3
        },
        {
          "hexCode": "00036a",
          "bestName": "Dark Blue Jay",
          "votes": 2
        },
        {
          "hexCode": "00036b",
          "bestName": "Icy Oceans Of Waters",
          "votes": 2
        },
        {
          "hexCode": "00036d",
          "bestName": "Halftone",
          "votes": 1
        },
        {
          "hexCode": "000370",
          "bestName": "Dark Ocean Blue V1",
          "votes": 1
        },
        {
          "hexCode": "000374",
          "bestName": "Beldum Blue",
          "votes": 1
        },
        {
          "hexCode": "000375",
          "bestName": "Midnight Metang",
          "votes": 1
        },
        {
          "hexCode": "000376",
          "bestName": "Midnight Metagross",
          "votes": 1
        },
        {
          "hexCode": "000379",
          "bestName": "Deep Ocean Dungun",
          "votes": 3
        },
        {
          "hexCode": "00037a",
          "bestName": "Eleanor Touchet",
          "votes": 3
        },
        {
          "hexCode": "00037b",
          "bestName": "Perovo Blue",
          "votes": 2
        },
        {
          "hexCode": "00037d",
          "bestName": "A Stormy London Dream",
          "votes": 5
        },
        {
          "hexCode": "00037e",
          "bestName": "Noble Freedom",
          "votes": 4
        },
        {
          "hexCode": "000380",
          "bestName": "Take My Life",
          "votes": 1
        },
        {
          "hexCode": "000381",
          "bestName": "Latios Lazuli",
          "votes": 1
        },
        {
          "hexCode": "000382",
          "bestName": "Kyogre Cobalt",
          "votes": 1
        },
        {
          "hexCode": "000384",
          "bestName": "Ominous Blue",
          "votes": 2
        },
        {
          "hexCode": "000386",
          "bestName": "CPU Blue",
          "votes": 3
        },
        {
          "hexCode": "000387",
          "bestName": "Royal Silk Lining",
          "votes": 2
        },
        {
          "hexCode": "000388",
          "bestName": "Oh No My Phone Died",
          "votes": 1
        },
        {
          "hexCode": "00038d",
          "bestName": "Sense Of Peace",
          "votes": 1
        },
        {
          "hexCode": "000390",
          "bestName": "Chocolate Blue",
          "votes": 4
        },
        {
          "hexCode": "000391",
          "bestName": "Grown Boy Blue",
          "votes": 1
        },
        {
          "hexCode": "000392",
          "bestName": "Gaming Cobalt",
          "votes": 2
        },
        {
          "hexCode": "000393",
          "bestName": "Royal Piplup",
          "votes": 1
        },
        {
          "hexCode": "000395",
          "bestName": "Royal Empoleon",
          "votes": 1
        },
        {
          "hexCode": "000396",
          "bestName": "Hellenic Blue",
          "votes": 5
        },
        {
          "hexCode": "000397",
          "bestName": "Bright Dark Skys",
          "votes": 3
        },
        {
          "hexCode": "000398",
          "bestName": "My Life",
          "votes": 3
        },
        {
          "hexCode": "000399",
          "bestName": "Dark Dolphin Shoals",
          "votes": 1
        },
        {
          "hexCode": "00039a",
          "bestName": "Freddi",
          "votes": 1
        },
        {
          "hexCode": "00039b",
          "bestName": "Lupuro",
          "votes": 1
        },
        {
          "hexCode": "00039c",
          "bestName": "Kenyan Blue",
          "votes": 1
        },
        {
          "hexCode": "00039d",
          "bestName": "Cikis",
          "votes": 3
        },
        {
          "hexCode": "00039e",
          "bestName": "Turn The Thermostat Up",
          "votes": 3
        },
        {
          "hexCode": "0003a0",
          "bestName": "Royal",
          "votes": 7
        },
        {
          "hexCode": "0003a1",
          "bestName": "Borleon",
          "votes": 4
        },
        {
          "hexCode": "0003a2",
          "bestName": "MC Navy Blue",
          "votes": 2
        },
        {
          "hexCode": "0003a3",
          "bestName": "THE COOLER Dark Winter Mornings",
          "votes": 4
        },
        {
          "hexCode": "0003a4",
          "bestName": "Danish Purple",
          "votes": 1
        },
        {
          "hexCode": "0003a5",
          "bestName": "Deep In Royal",
          "votes": 2
        },
        {
          "hexCode": "0003a6",
          "bestName": "Nah Who Named This Dark Blue",
          "votes": 3
        },
        {
          "hexCode": "0003a7",
          "bestName": "Sanfave",
          "votes": 2
        },
        {
          "hexCode": "0003a8",
          "bestName": "Blubele",
          "votes": 1
        },
        {
          "hexCode": "0003a9",
          "bestName": "Carole Baskin Blue",
          "votes": 1
        },
        {
          "hexCode": "0003aa",
          "bestName": "The City Of Indgoi",
          "votes": 1
        },
        {
          "hexCode": "0003ab",
          "bestName": "Noxious Cobalt Blue",
          "votes": 5
        },
        {
          "hexCode": "0003ac",
          "bestName": "Cartoon Nigth",
          "votes": 2
        },
        {
          "hexCode": "0003ad",
          "bestName": "Azrasila",
          "votes": 2
        },
        {
          "hexCode": "0003ae",
          "bestName": "Maroso",
          "votes": 1
        },
        {
          "hexCode": "0003af",
          "bestName": "Aquatic Dark Blue",
          "votes": 2
        },
        {
          "hexCode": "0003b0",
          "bestName": "Youre Cute Jeans",
          "votes": 4
        },
        {
          "hexCode": "0003b1",
          "bestName": "Late Night Jog",
          "votes": 1
        },
        {
          "hexCode": "0003b2",
          "bestName": "Deep Crescent Blue",
          "votes": 2
        },
        {
          "hexCode": "0003b3",
          "bestName": "Burnt Blueberry",
          "votes": 3
        },
        {
          "hexCode": "0003b4",
          "bestName": "Crying Soul",
          "votes": 2
        },
        {
          "hexCode": "0003b5",
          "bestName": "Alien Skyest",
          "votes": 3
        },
        {
          "hexCode": "0003b6",
          "bestName": "Deep Blue",
          "votes": 1
        },
        {
          "hexCode": "0003b7",
          "bestName": "Benedict Cumberblue",
          "votes": 2
        },
        {
          "hexCode": "0003b8",
          "bestName": "Roy",
          "votes": 2
        },
        {
          "hexCode": "0003b9",
          "bestName": "Student User Background",
          "votes": 1
        },
        {
          "hexCode": "0003ba",
          "bestName": "Bluest Bluish Blue",
          "votes": 3
        },
        {
          "hexCode": "0003bb",
          "bestName": "Calm Mysterious Lake",
          "votes": 4
        },
        {
          "hexCode": "0003bc",
          "bestName": "Color Of Main Charcters Eyes",
          "votes": 3
        },
        {
          "hexCode": "0003bd",
          "bestName": "Parneon",
          "votes": 5
        },
        {
          "hexCode": "0003be",
          "bestName": "Neptune Colour",
          "votes": 2
        },
        {
          "hexCode": "0003c0",
          "bestName": "Deep Blue Ocean",
          "votes": 6
        },
        {
          "hexCode": "0003c2",
          "bestName": "Dwight Howard",
          "votes": 3
        },
        {
          "hexCode": "0003c3",
          "bestName": "It Can Not Wait",
          "votes": 2
        },
        {
          "hexCode": "0003c4",
          "bestName": "Cloak Of The Ocean",
          "votes": 1
        },
        {
          "hexCode": "0003c5",
          "bestName": "SonicDaHedegehog",
          "votes": 4
        },
        {
          "hexCode": "0003c6",
          "bestName": "Bright Dark Plain Blue",
          "votes": 1
        },
        {
          "hexCode": "0003c7",
          "bestName": "Midnight Madness Blue",
          "votes": 2
        },
        {
          "hexCode": "0003c9",
          "bestName": "Churned Blue",
          "votes": 2
        },
        {
          "hexCode": "0003ca",
          "bestName": "Say Blue Without Saying Blue",
          "votes": 3
        },
        {
          "hexCode": "0003cb",
          "bestName": "Winter Light Evening",
          "votes": 3
        },
        {
          "hexCode": "0003cc",
          "bestName": "Royal Curtain Blue",
          "votes": 4
        },
        {
          "hexCode": "0003cd",
          "bestName": "Bluest Nebulae",
          "votes": 2
        },
        {
          "hexCode": "0003ce",
          "bestName": "Me On Mondays",
          "votes": 2
        },
        {
          "hexCode": "0003cf",
          "bestName": "Deep Aquatic Bold Blue",
          "votes": 1
        },
        {
          "hexCode": "0003d0",
          "bestName": "Royal Blue Macaw Feathers",
          "votes": 6
        },
        {
          "hexCode": "0003d1",
          "bestName": "I Love Sky",
          "votes": 3
        },
        {
          "hexCode": "0003d2",
          "bestName": "Not Joshua Ray",
          "votes": 3
        },
        {
          "hexCode": "0003d4",
          "bestName": "Cartoon Like Blue",
          "votes": 3
        },
        {
          "hexCode": "0003d5",
          "bestName": "Nintendo 3DS Blue",
          "votes": 2
        },
        {
          "hexCode": "0003db",
          "bestName": "Pure Contrast Blue",
          "votes": 1
        },
        {
          "hexCode": "0003e0",
          "bestName": "Jens",
          "votes": 1
        },
        {
          "hexCode": "0003e2",
          "bestName": "Discover The Unknown",
          "votes": 1
        },
        {
          "hexCode": "0003e3",
          "bestName": "Ocean From Behind Closed Eyes",
          "votes": 1
        },
        {
          "hexCode": "0003e8",
          "bestName": "Kilo Blue",
          "votes": 2
        },
        {
          "hexCode": "0003f2",
          "bestName": "Radical Robins Egg",
          "votes": 3
        },
        {
          "hexCode": "0003f3",
          "bestName": "The Brightest Blue In The World",
          "votes": 1
        },
        {
          "hexCode": "0003f5",
          "bestName": "Neptune Sans",
          "votes": 1
        },
        {
          "hexCode": "0003f6",
          "bestName": "Skies Of Unknown",
          "votes": 1
        },
        {
          "hexCode": "0003f9",
          "bestName": "Blue Or False",
          "votes": 4
        },
        {
          "hexCode": "0003fa",
          "bestName": "That Old Feeling",
          "votes": 1
        },
        {
          "hexCode": "0003fc",
          "bestName": "Neon Blueberries Uwu",
          "votes": 2
        },
        {
          "hexCode": "0003fd",
          "bestName": "Natural Blue",
          "votes": 1
        },
        {
          "hexCode": "0003ff",
          "bestName": "Very Much Blue",
          "votes": 6
        },
        {
          "hexCode": "000400",
          "bestName": "Black But Secretly Green",
          "votes": 2
        },
        {
          "hexCode": "000401",
          "bestName": "Goth Child",
          "votes": 3
        },
        {
          "hexCode": "000402",
          "bestName": "Darkness My Old Friend",
          "votes": 4
        },
        {
          "hexCode": "000403",
          "bestName": "Forbidden Black",
          "votes": 5
        },
        {
          "hexCode": "000404",
          "bestName": "Black Not Found",
          "votes": 7
        },
        {
          "hexCode": "000405",
          "bestName": "Where The Moon Never Shines",
          "votes": 15
        },
        {
          "hexCode": "000406",
          "bestName": "Post Awareness",
          "votes": 3
        },
        {
          "hexCode": "000407",
          "bestName": "Dark Mind Space",
          "votes": 2
        },
        {
          "hexCode": "000408",
          "bestName": "Ace Of Spades",
          "votes": 4
        },
        {
          "hexCode": "000409",
          "bestName": "Noirdesspoir",
          "votes": 1
        },
        {
          "hexCode": "00040a",
          "bestName": "Umbrella Academy Black",
          "votes": 4
        },
        {
          "hexCode": "00040b",
          "bestName": "Deepest Despair",
          "votes": 1
        },
        {
          "hexCode": "00040c",
          "bestName": "Enhanced Senses",
          "votes": 1
        },
        {
          "hexCode": "00040d",
          "bestName": "Dark Dark Dark Dark Dark Blue",
          "votes": 2
        },
        {
          "hexCode": "00040e",
          "bestName": "Marianna Trench Blue",
          "votes": 1
        },
        {
          "hexCode": "00040f",
          "bestName": "Black Mamba",
          "votes": 5
        },
        {
          "hexCode": "000410",
          "bestName": "Now This Is A Dark Lake",
          "votes": 2
        },
        {
          "hexCode": "000411",
          "bestName": "JohnWick",
          "votes": 1
        },
        {
          "hexCode": "000412",
          "bestName": "Monsters Under The Bed",
          "votes": 2
        },
        {
          "hexCode": "000413",
          "bestName": "Homestuck Black",
          "votes": 11
        },
        {
          "hexCode": "000414",
          "bestName": "Not Navy But Not Black",
          "votes": 4
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
          "hexCode": "00042a",
          "bestName": "My Depression",
          "votes": 1
        },
        {
          "hexCode": "00042b",
          "bestName": "Midnight Ravens",
          "votes": 5
        },
        {
          "hexCode": "00042c",
          "bestName": "Abacadabaca",
          "votes": 1
        },
        {
          "hexCode": "00042d",
          "bestName": "Depressed Kingdom",
          "votes": 3
        },
        {
          "hexCode": "00042e",
          "bestName": "Dark Day",
          "votes": 2
        },
        {
          "hexCode": "00042f",
          "bestName": "Midnight With A Starry Sky",
          "votes": 1
        },
        {
          "hexCode": "000430",
          "bestName": "Stinky Ink",
          "votes": 3
        },
        {
          "hexCode": "000431",
          "bestName": "A Knifes Shadow",
          "votes": 3
        },
        {
          "hexCode": "000432",
          "bestName": "Chaos Before The Storm",
          "votes": 3
        },
        {
          "hexCode": "000433",
          "bestName": "Dreaming Of Midnight",
          "votes": 3
        },
        {
          "hexCode": "000436",
          "bestName": "Midnight Carolina Blue",
          "votes": 5
        },
        {
          "hexCode": "000438",
          "bestName": "Las Vegas By Night",
          "votes": 3
        },
        {
          "hexCode": "000439",
          "bestName": "Dark Mysteries",
          "votes": 3
        },
        {
          "hexCode": "00043b",
          "bestName": "Bowling Ball BLue",
          "votes": 4
        },
        {
          "hexCode": "00043d",
          "bestName": "Dark Night",
          "votes": 4
        },
        {
          "hexCode": "00043e",
          "bestName": "Orbital Collapse",
          "votes": 3
        },
        {
          "hexCode": "00043f",
          "bestName": "Midnight In The City",
          "votes": 3
        },
        {
          "hexCode": "000440",
          "bestName": "Trapped At The Bottom Of The Sea",
          "votes": 4
        },
        {
          "hexCode": "000441",
          "bestName": "Deep Ocean",
          "votes": 4
        },
        {
          "hexCode": "000442",
          "bestName": "Depth Of The Night",
          "votes": 3
        },
        {
          "hexCode": "000443",
          "bestName": "Lotturple",
          "votes": 1
        },
        {
          "hexCode": "000444",
          "bestName": "Three Fours Blue",
          "votes": 4
        },
        {
          "hexCode": "000445",
          "bestName": "Dark Escape",
          "votes": 2
        },
        {
          "hexCode": "000446",
          "bestName": "Munchlax Midnight",
          "votes": 1
        },
        {
          "hexCode": "000447",
          "bestName": "Midnight Smog",
          "votes": 4
        },
        {
          "hexCode": "000448",
          "bestName": "Deep Dark Sea Blue",
          "votes": 3
        },
        {
          "hexCode": "000449",
          "bestName": "Lands End Blue",
          "votes": 4
        },
        {
          "hexCode": "00044a",
          "bestName": "The Deepest Crevice",
          "votes": 2
        },
        {
          "hexCode": "00044b",
          "bestName": "Looking At Oil On Pavement",
          "votes": 1
        },
        {
          "hexCode": "00044c",
          "bestName": "Skinny Fish",
          "votes": 1
        },
        {
          "hexCode": "00044d",
          "bestName": "Midnight Cleared",
          "votes": 3
        },
        {
          "hexCode": "00044e",
          "bestName": "Mariana Trench Water",
          "votes": 1
        },
        {
          "hexCode": "00044f",
          "bestName": "Royal Octopus",
          "votes": 2
        },
        {
          "hexCode": "000450",
          "bestName": "Immeasurable Bleu",
          "votes": 2
        },
        {
          "hexCode": "000451",
          "bestName": "Skorupi Sapphire",
          "votes": 1
        },
        {
          "hexCode": "000452",
          "bestName": "Midnight Beauty",
          "votes": 3
        },
        {
          "hexCode": "000453",
          "bestName": "Daviyon",
          "votes": 2
        },
        {
          "hexCode": "000454",
          "bestName": "Tardis",
          "votes": 15
        },
        {
          "hexCode": "000455",
          "bestName": "Sleeping Under The Stars",
          "votes": 3
        },
        {
          "hexCode": "000456",
          "bestName": "Squid Game Survivor Blue",
          "votes": 3
        },
        {
          "hexCode": "000457",
          "bestName": "Witch's Blue",
          "votes": 6
        },
        {
          "hexCode": "000458",
          "bestName": "You Should Go To Bed",
          "votes": 1
        },
        {
          "hexCode": "000459",
          "bestName": "The Deadness In My Eyes",
          "votes": 2
        },
        {
          "hexCode": "00045a",
          "bestName": "Whales In Space",
          "votes": 2
        },
        {
          "hexCode": "00045b",
          "bestName": "Spam Container Blue",
          "votes": 1
        },
        {
          "hexCode": "00045c",
          "bestName": "Blue Sky Beyond",
          "votes": 1
        },
        {
          "hexCode": "00045d",
          "bestName": "Home Of The Anglerfish",
          "votes": 2
        },
        {
          "hexCode": "00045e",
          "bestName": "Hamilton Depression",
          "votes": 4
        },
        {
          "hexCode": "00045f",
          "bestName": "Midnight Cashmere",
          "votes": 2
        },
        {
          "hexCode": "000460",
          "bestName": "Almost Sky Fall",
          "votes": 2
        },
        {
          "hexCode": "000463",
          "bestName": "Sapphire Fantasy",
          "votes": 2
        },
        {
          "hexCode": "000464",
          "bestName": "Blue Step",
          "votes": 2
        },
        {
          "hexCode": "000466",
          "bestName": "Waters At Dusk",
          "votes": 3
        },
        {
          "hexCode": "000467",
          "bestName": "Navy Pacific",
          "votes": 2
        },
        {
          "hexCode": "000469",
          "bestName": "Qivore",
          "votes": 1
        },
        {
          "hexCode": "00046b",
          "bestName": "Mariana Trench",
          "votes": 3
        },
        {
          "hexCode": "00046d",
          "bestName": "Joel Wilding",
          "votes": 1
        },
        {
          "hexCode": "00046e",
          "bestName": "Endless Drowning",
          "votes": 4
        },
        {
          "hexCode": "00046f",
          "bestName": "Definitely Not Cerulean",
          "votes": 1
        },
        {
          "hexCode": "000470",
          "bestName": "Almost Royal",
          "votes": 5
        },
        {
          "hexCode": "000471",
          "bestName": "Preordered Navy",
          "votes": 3
        },
        {
          "hexCode": "000472",
          "bestName": "Bowler Hats",
          "votes": 1
        },
        {
          "hexCode": "000473",
          "bestName": "Star Galaxy",
          "votes": 1
        },
        {
          "hexCode": "000474",
          "bestName": "Jay",
          "votes": 2
        },
        {
          "hexCode": "000475",
          "bestName": "Ocean Afloat",
          "votes": 5
        },
        {
          "hexCode": "000476",
          "bestName": "Igk",
          "votes": 1
        },
        {
          "hexCode": "000478",
          "bestName": "A Midnight Affair",
          "votes": 3
        },
        {
          "hexCode": "000479",
          "bestName": "Depth Of The Ocean",
          "votes": 4
        },
        {
          "hexCode": "00047a",
          "bestName": "The Thunder Dome",
          "votes": 2
        },
        {
          "hexCode": "00047c",
          "bestName": "Bright Blue Irony",
          "votes": 1
        },
        {
          "hexCode": "00047d",
          "bestName": "Dark Sea",
          "votes": 1
        },
        {
          "hexCode": "00047e",
          "bestName": "Warm Ocean Darkness",
          "votes": 1
        },
        {
          "hexCode": "00047f",
          "bestName": "Dark Blue Purple Blue",
          "votes": 1
        },
        {
          "hexCode": "000480",
          "bestName": "Dark But Starry Night",
          "votes": 1
        },
        {
          "hexCode": "000481",
          "bestName": "Darkish Sad Sky",
          "votes": 1
        },
        {
          "hexCode": "000482",
          "bestName": "Night Sky's Bright",
          "votes": 2
        },
        {
          "hexCode": "000485",
          "bestName": "Fear Of The Depth",
          "votes": 6
        },
        {
          "hexCode": "000487",
          "bestName": "Korbin Blue",
          "votes": 2
        },
        {
          "hexCode": "000489",
          "bestName": "Dark Toilet Duck",
          "votes": 3
        },
        {
          "hexCode": "000490",
          "bestName": "Manaphy Midnight",
          "votes": 1
        },
        {
          "hexCode": "000494",
          "bestName": "Arctic Morning Sky",
          "votes": 1
        },
        {
          "hexCode": "000496",
          "bestName": "Cubs",
          "votes": 1
        },
        {
          "hexCode": "000499",
          "bestName": "Pacific Batch Bomb",
          "votes": 2
        },
        {
          "hexCode": "0004a7",
          "bestName": "Sarpado",
          "votes": 1
        },
        {
          "hexCode": "0004aa",
          "bestName": "Starch Red",
          "votes": 2
        },
        {
          "hexCode": "0004af",
          "bestName": "Demna Guguberidze",
          "votes": 3
        },
        {
          "hexCode": "0004b2",
          "bestName": "Void That Is The Ocean",
          "votes": 1
        },
        {
          "hexCode": "0004b7",
          "bestName": "Divergent",
          "votes": 1
        },
        {
          "hexCode": "0004b9",
          "bestName": "Motherland Russki",
          "votes": 1
        },
        {
          "hexCode": "0004bb",
          "bestName": "Soyet",
          "votes": 3
        },
        {
          "hexCode": "0004bc",
          "bestName": "Jesus Blue",
          "votes": 1
        },
        {
          "hexCode": "0004c0",
          "bestName": "Dark Lululemon Poolside",
          "votes": 1
        },
        {
          "hexCode": "0004c8",
          "bestName": "Reverse Lemons",
          "votes": 3
        },
        {
          "hexCode": "0004c9",
          "bestName": "Different Night",
          "votes": 2
        },
        {
          "hexCode": "0004cb",
          "bestName": "Mistique",
          "votes": 3
        },
        {
          "hexCode": "0004cc",
          "bestName": "Dolphin Shoals",
          "votes": 4
        },
        {
          "hexCode": "0004cd",
          "bestName": "Heavy Bloob",
          "votes": 1
        },
        {
          "hexCode": "0004ce",
          "bestName": "The Purple Which Isnt Purple",
          "votes": 2
        },
        {
          "hexCode": "0004cf",
          "bestName": "Rivervale",
          "votes": 1
        },
        {
          "hexCode": "0004d3",
          "bestName": "Looks Like Royal Blue",
          "votes": 2
        },
        {
          "hexCode": "0004d4",
          "bestName": "Why Does It Matter",
          "votes": 2
        },
        {
          "hexCode": "0004d5",
          "bestName": "Helpless Brain Fog",
          "votes": 2
        },
        {
          "hexCode": "0004d6",
          "bestName": "Beckygordita",
          "votes": 3
        },
        {
          "hexCode": "0004d7",
          "bestName": "Blue Ocean Bottom",
          "votes": 1
        },
        {
          "hexCode": "0004d8",
          "bestName": "Obnoxius Subaru",
          "votes": 1
        },
        {
          "hexCode": "0004d9",
          "bestName": "Bright Poolside",
          "votes": 2
        },
        {
          "hexCode": "0004da",
          "bestName": "Platnium Star",
          "votes": 5
        },
        {
          "hexCode": "0004db",
          "bestName": "Blue French Horn",
          "votes": 2
        },
        {
          "hexCode": "0004dc",
          "bestName": "Triple Digit Blue",
          "votes": 2
        },
        {
          "hexCode": "0004dd",
          "bestName": "GoodbyeBlue",
          "votes": 1
        },
        {
          "hexCode": "0004de",
          "bestName": "Blue But Bluerer",
          "votes": 3
        },
        {
          "hexCode": "0004df",
          "bestName": "Dark Oc",
          "votes": 1
        },
        {
          "hexCode": "0004e0",
          "bestName": "Iranian High School Uniform",
          "votes": 4
        },
        {
          "hexCode": "0004e1",
          "bestName": "Indigo Indaue",
          "votes": 2
        },
        {
          "hexCode": "0004e2",
          "bestName": "Just Really Really Blue",
          "votes": 4
        },
        {
          "hexCode": "0004e3",
          "bestName": "Rich Blue Tang",
          "votes": 3
        },
        {
          "hexCode": "0004e4",
          "bestName": "Bloo H",
          "votes": 1
        },
        {
          "hexCode": "0004e5",
          "bestName": "Blue Rosa",
          "votes": 1
        },
        {
          "hexCode": "0004e6",
          "bestName": "New Years Eve",
          "votes": 1
        },
        {
          "hexCode": "0004e7",
          "bestName": "Occasional Sapphire",
          "votes": 4
        },
        {
          "hexCode": "0004e8",
          "bestName": "Eye Pain 21",
          "votes": 3
        },
        {
          "hexCode": "0004e9",
          "bestName": "PlayStation Teal",
          "votes": 2
        },
        {
          "hexCode": "0004ea",
          "bestName": "StereoBlue",
          "votes": 1
        },
        {
          "hexCode": "0004eb",
          "bestName": "Blue It",
          "votes": 3
        },
        {
          "hexCode": "0004ec",
          "bestName": "Pacific Rim Blue",
          "votes": 2
        },
        {
          "hexCode": "0004ed",
          "bestName": "Blue Bird Flye",
          "votes": 3
        },
        {
          "hexCode": "0004ee",
          "bestName": "Edge Of The Cosmos",
          "votes": 5
        },
        {
          "hexCode": "0004ef",
          "bestName": "Blubed Up",
          "votes": 2
        },
        {
          "hexCode": "0004f0",
          "bestName": "Royaly Dark  Blue",
          "votes": 3
        },
        {
          "hexCode": "0004f2",
          "bestName": "Bluest Bright",
          "votes": 3
        },
        {
          "hexCode": "0004f3",
          "bestName": "Lapiz Lauzil",
          "votes": 3
        },
        {
          "hexCode": "0004f4",
          "bestName": "The Dark Deep Trench",
          "votes": 3
        },
        {
          "hexCode": "0004f5",
          "bestName": "Karuzo",
          "votes": 1
        },
        {
          "hexCode": "0004f6",
          "bestName": "True Blue",
          "votes": 4
        },
        {
          "hexCode": "0004f7",
          "bestName": "Not Red",
          "votes": 4
        },
        {
          "hexCode": "0004f8",
          "bestName": "Blue Pride Color",
          "votes": 2
        },
        {
          "hexCode": "0004f9",
          "bestName": "Deep Ocean Frog Very Special",
          "votes": 2
        },
        {
          "hexCode": "0004fa",
          "bestName": "Adventurous Electric Blue",
          "votes": 13
        },
        {
          "hexCode": "0004fb",
          "bestName": "The Soul Of A Dead Man",
          "votes": 4
        },
        {
          "hexCode": "0004fc",
          "bestName": "VHS Indigo",
          "votes": 3
        },
        {
          "hexCode": "0004fd",
          "bestName": "Dolor De Cabeza Por Tristeza",
          "votes": 1
        },
        {
          "hexCode": "0004fe",
          "bestName": "Triangle",
          "votes": 3
        },
        {
          "hexCode": "0004ff",
          "bestName": "Sans",
          "votes": 76
        },
        {
          "hexCode": "000500",
          "bestName": "Abyssal One",
          "votes": 6
        },
        {
          "hexCode": "000501",
          "bestName": "Les Invisibles",
          "votes": 6
        },
        {
          "hexCode": "000502",
          "bestName": "Swamp Black",
          "votes": 6
        },
        {
          "hexCode": "000503",
          "bestName": "A Secret Soul",
          "votes": 6
        },
        {
          "hexCode": "000504",
          "bestName": "Lineart Black Swag",
          "votes": 2
        },
        {
          "hexCode": "000505",
          "bestName": "The Default Color Of Black",
          "votes": 13
        },
        {
          "hexCode": "000506",
          "bestName": "Chassis Five-Zero-Six",
          "votes": 2
        },
        {
          "hexCode": "000507",
          "bestName": "Black Lace",
          "votes": 2
        },
        {
          "hexCode": "000508",
          "bestName": "Broken Galaxy",
          "votes": 2
        },
        {
          "hexCode": "000509",
          "bestName": "Stargazers",
          "votes": 5
        },
        {
          "hexCode": "00050a",
          "bestName": "Nothing But Emptiness",
          "votes": 5
        },
        {
          "hexCode": "00050b",
          "bestName": "Corvidae",
          "votes": 1
        },
        {
          "hexCode": "00050c",
          "bestName": "Navy Seal Blue",
          "votes": 1
        },
        {
          "hexCode": "00050d",
          "bestName": "Dreadnaught",
          "votes": 7
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
        {
          "hexCode": "000512",
          "bestName": "Atrociraptor Marshalli",
          "votes": 3
        },
        {
          "hexCode": "000513",
          "bestName": "Young Tophat",
          "votes": 1
        },
        {
          "hexCode": "000514",
          "bestName": "Eternal Sadness Its Sad",
          "votes": 2
        },
        {
          "hexCode": "000515",
          "bestName": "Meteor Shower Is Coming",
          "votes": 2
        },
        {
          "hexCode": "000516",
          "bestName": "I'm So So Sorry Friend",
          "votes": 2
        },
        {
          "hexCode": "000517",
          "bestName": "3 Am",
          "votes": 4
        },
        {
          "hexCode": "000518",
          "bestName": "Midnight Zone's Water",
          "votes": 2
        },
        {
          "hexCode": "000519",
          "bestName": "Dark Blue That Looks Black",
          "votes": 1
        },
        {
          "hexCode": "00051a",
          "bestName": "Night Skyn't",
          "votes": 1
        },
        {
          "hexCode": "00051b",
          "bestName": "DeepDiving",
          "votes": 1
        },
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
          "hexCode": "00051e",
          "bestName": "Ocean Midnights",
          "votes": 3
        }
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
        }), ()=>{
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