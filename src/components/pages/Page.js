import styles from "../jeu.module.css";



export function Page({background,clickable}){

    return( <>
            <img useMap={"#infographic"} src={background} />
            <map name="infographic">

                <area shape="rect" coords="120,0,300,300"
                      href="#" onClick={()=>{
                          alert("fldji")
                }}/>
                target="_blank" alt="Mozilla"/>
            </map>
            {/*
            {clickable.map((element)=>{
                return (<div onClick={()=>{
                    console.log("clicked lol")
                }
                } className={styles.area} style={{left:element.coords[0] + "%", top:element.coords[1]+"%",
                    width:element.coords[2]-element.coords[0]+"%",height:element.coords[3]-element.coords[1]+"%"}}
                >

                </div>)
            })}
            */}

            <div>

            </div>

        </>
    )
}