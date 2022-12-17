import '../Card/style.css';
const Navbar=(props)=>{
    return(
        <nav className="navbar">
             <div className="btn-group">
            {props.menuList.map((curElem)=>{
                return(
                    <>
                   
                    <button className=" btn-group__item" onClick={()=>props.filterByCatg(curElem)}>{curElem}</button>
                    
                    </>
                )
            })}
             </div>
        </nav>
    );
}
export default Navbar;