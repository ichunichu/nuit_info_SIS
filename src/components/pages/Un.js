
export function Un({setPage}){

    const dial = ["lorem rfdzhg fhdgohgofh og fhoigd", " jifodshfudsh fosdhof"," fdsijfhiushfiudshufishsf", ",kfdosnfsdhofhdsofhsdofshdo"]

    const area = [
        {"coords":[139, 191, 262, 248],
        "action":""},
    ]
    return( <>
            <img src={"./salon.png"} />
            {area.map((element)=>{
                return (<div onClick={()=>{
                    console.log("clicked lol")
                }
                } className={"area"} style={{left:element.coords[0], top:element.coords[1],
                    width:element.coords[2]-element.coords[0],height:element.coords[3]-element.coords[1]}}
                >

                </div>)
            })}
            <div>

            </div>

        </>
    )
}