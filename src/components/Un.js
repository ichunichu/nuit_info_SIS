
export function Un({setPage}){
    return( 
        <button onClick={()=>{
            console.log("o");
            setPage("deux")
            
        }}>BONJOUR</button>
    )
}