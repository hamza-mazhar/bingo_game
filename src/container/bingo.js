import React, { useState } from "react";
import Modal from "./Modal"
import Tile from "../components/tile"
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
  " CONF CALL BINGO",
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
];


function BingoGame() {
  const [state, setState] = useState({ checked: {} });
  const [isOpen,setOpen] = useState(false)
  const isWon = checked => {
    const range = [0, 1, 2, 3, 4];
    return (
      undefined !==
      range.find(row => range.every(column => checked[row * 5 + column])) ||
      undefined !==
      range.find(column => range.every(row => checked[row * 5 + column])) ||
      range.every(index => checked[index * 5 + index]) ||
      range.every(index => checked[index * 5 + 4 - index])
    );
  };
  const toggle = id =>
    setState(state => {
      const checked = { ...state.checked, [id]: !state.checked[id] };
      const won = isWon(checked);
      won? handleOpen(true):handleClose(false)
      return {
        ...state,
        checked,
        won
      };
    });

  const handleClose = value =>{
    setOpen(value)
  }
  const handleOpen = value => {
    setOpen(value)
  }
  return (
    <div className="App">
      <h1>Bingo</h1>
      <div className="wrapper">
        {Object.keys(bbb).map(id => (
          <Tile
            key={id}
            id={id}
            isSet={!!state.checked[id]}
            onToggle={() => toggle(id)}
          >
            {bbb[id]}
          </Tile>
        ))}
      </div>
      {state.won ?
                <Modal visible={isOpen} >
                  <h3 className="dialog__title">
                    Win
                  </h3>
                  <p className="dialog__txt">
                    Congratulation You Win the Game!
                  </p>
                  <button onClick={() => handleClose(false)} type="button" className="btn btn--close dialog__btn">
                    Close
                  </button>
                </Modal>
          : null}
    </div>
  );
}

export default BingoGame;

