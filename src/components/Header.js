
export function Header({setPage}){
    return <header>
        <a href={"#"} onClick={()=>{
            setPage("index")}
        }>
            <img src="./logo.png" />
        </a>

    </header>
}