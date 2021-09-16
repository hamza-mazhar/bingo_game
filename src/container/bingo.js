import React, { useState } from "react";
import Tile from "../components/tile"
import shuffle from "shuffle-array";

import "./styles.css";


const bbb = [
  "0  (child noises in the background)",
  "1  Hello, hello",
  "2  I need to jump another call",
  "3  can everyone go on mute",
  "4  could you please get closer to the mic",
  "5  (loud painful echo/ feedback)",
  "6  Next slide please",
  "7  can we take this offline?",
  "8  is ___ on the call?",
  "9  could you share the slides afterwards?",
  "10 can somebody grant presenter rights?",
  "11 can you email that to everyone?",
  "13 sorry I had a problems loging in",
  "14 (animal noises in the background)",
  "15 sorry I didn't found  the conference id",
  "16 i was having connection issue ",
  "17 i will have to get back to you",
  "18 who just joined?",
  "19 sorry something ___ with my calender",
  "20 do you see any screen?",
  "21 let wait for__ !",
  "22 you will send the minutes?",
  "23 sorry I was on the mute",
  "24 can you repeat please?"
]


let data = shuffle(bbb)

data.splice(12,0, ["12","CONF CALL BINGO"]);

data.reduce(
  (data, value, index) => ({ ...data, [index]: value }),
  {}
);


let diagonalCheckerWinCount = (obj) => {
  let count = 0;
  const range = [0, 1, 2, 3, 4];
  if(Object.keys(obj).length<5){
    count = 0;
  }else{
    if(range.every(index => obj[index * 5 + index])){
      count++
    }
    if(range.every(index => obj[index * 5 + 4 - index])){
      count++
    }
  }
  return count;
}

let lineChecker = (obj,col) => {
  let flag = true;
  let keysObject = Object.keys(obj)
  for(let i = 0; i< col;i++){
    if(!keysObject.includes(col[i].toString()) ){
      return false
    }
  }
  for(let i = 0 ; i < col.length; i++){
    if(!obj[col[i]]){
      flag = false
    }
  }
  return flag
}


let lineCheckerWinCount = (obj,range) => {
  let count = 0;

  if(Object.keys(obj).length<5){
    count = 0;
  }else{
    for(let i = 0 ; i< range.length; i++){
      if(lineChecker(obj,range[i])){
        count++;
      }
    }
  }
  return count
}

// let rowCheckerWinCount = (obj) => {
//   let count = 0;
//   let rowRange = [
//       [0,1,2,3,4],
//       [5,6,7,8,9],
//       [10,11,12,13,14],
//       [15,16,17,18,19],
//       [20,21,22,23,24],
//   ]
//   if(Object.keys(obj).length<5){
//     count = 0;
//   }else{
//     for(let i = 0 ; i< rowRange.length; i++){
//       if(lineChecker(obj,rowRange[i])){
//         count++;
//       }
//     }
//   }
//   return count
// }


function BingoGame() {
  const [state, setState] = useState({checked: {12: true}});
  const [bingoCounter, setCounter] = useState(0);
  const isWon = checked => {
    let columnRange = [
      [0,5,10,15,20],
      [1,6,11,16,21],
      [2,7,12,17,22],
      [3,8,13,18,23],
      [4,9,14,19,24],
    ];
    let rowRange = [
      [0,1,2,3,4],
      [5,6,7,8,9],
      [10,11,12,13,14],
      [15,16,17,18,19],
      [20,21,22,23,24],
    ]
    let count = diagonalCheckerWinCount(checked) + lineCheckerWinCount(checked,columnRange) +
      lineCheckerWinCount(checked,rowRange)
    setCounter(count)
  };
  const toggle = id =>
    setState(state => {
      const checked = {...state.checked, [id]: !state.checked[id]};
      const won = isWon(checked);
      return {
        ...state,
        checked,
        won
      };
    });

  return (
    <div className="App">
      <h1>Bingo</h1>
      <div className="wrapper">
        {Object.keys(data).map(id => (
          <>
            <Tile
              key={id}
              id={id}
              isSet={!!state.checked[id]}
              onToggle={() => toggle(id)}
            >
              {data[id]}
            </Tile>
          </>

        ))}
      </div>
      {!!bingoCounter && bingoCounter > 0 ?
        [...Array(bingoCounter)].map((e, i) => <span className="busterCards" key={i}>♦ Bingo </span>)
        : <></>}
    </div>
  );
}

export default BingoGame;

