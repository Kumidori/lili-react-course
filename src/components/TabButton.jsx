export default function TabButton({children, onSelect}) {
 return ( 
    <li>
        <button onClick={handleClick}>{children}</button>
  </li>
 );
}