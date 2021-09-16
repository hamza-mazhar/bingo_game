
export default function Tile({ id, children, onToggle, isSet }) {
  return (
    <>
      {id === "12"?<div   key={id} className={`tile  ${isSet ? "tile--set" : ""}`}>
          {children}
        </div> :
      <div onClick={onToggle}  key={id} className={`tile ${isSet ? "tile--set" : ""}`}>
        {children}
      </div>
      }
    </>

  );
}
