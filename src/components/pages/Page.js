import styles from "../jeu.module.css";



export function Page({background,clickable}){

    return( <>
            <img src={background} />

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