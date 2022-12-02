import './index.css'
import Slider from "react-slick"

export function Index({setPage}){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
    <>

        <header>
            <img src="./logo.png" alt=""/>
        </header>

        <div className="game">
            <p className="game_desc"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error iure ducimus sunt animi rerum magni ea corrupti magnam provident, dolore ipsam sapiente similique mollitia voluptas incidunt eius quia modi molestiae.
            Odio tempore eaque error consequatur dignissimos porro, pariatur consectetur rem ad aspernatur nisi iusto alias blanditiis laudantium, harum dolore natus tenetur perferendis hic ipsam exercitationem asperiores dolor quibusdam mollitia! Deserunt!
            Nihil alias, doloribus expedita assumenda quae incidunt, aliquam, itaque aliquid quidem illo aut dolor doloremque voluptatibus quam voluptatem. Minima nobis exercitationem facilis totam tenetur voluptatibus tempora dolor? Explicabo, unde iure!</p>
            <button className="launch_game" onClick={()=>{
                setPage("contact")
            }}> Jouer  </button>
        </div> 

        <div className="info">
            <br/>

            <div className="info_list">
            <Slider {...settings}>
                <div className='card'>
                    <p><strong>1</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatibus amet quidem ut doloribus, ipsum deleniti, mollitia possimus consequuntur tempora harum quis enim quas! Eos ea deserunt mollitia iure rerum!
                    Commodi, molestiae! Quibusdam, nemo. Sit, voluptatum quibusdam temporibus cumque quia ex voluptas. Eum totam voluptatibus aliquam alias aliquid facere dolores autem, deleniti optio, unde labore iure repudiandae molestias sunt nemo?</p>

                </div>
                <div className='card'>
                    <p><strong>2</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatibus amet quidem ut doloribus, ipsum deleniti, mollitia possimus consequuntur tempora harum quis enim quas! Eos ea deserunt mollitia iure rerum!
                    Commodi, molestiae! Quibusdam, nemo. Sit, voluptatum quibusdam temporibus cumque quia ex voluptas. Eum totam voluptatibus aliquam alias aliquid facere dolores autem, deleniti optio, unde labore iure repudiandae molestias sunt nemo?</p>

                </div>
                <div className='card'>
                    <p><strong>3</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatibus amet quidem ut doloribus, ipsum deleniti, mollitia possimus consequuntur tempora harum quis enim quas! Eos ea deserunt mollitia iure rerum!
                    Commodi, molestiae! Quibusdam, nemo. Sit, voluptatum quibusdam temporibus cumque quia ex voluptas. Eum totam voluptatibus aliquam alias aliquid facere dolores autem, deleniti optio, unde labore iure repudiandae molestias sunt nemo?</p>

                </div>
                <div className='card'>
                    <p><strong>4</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatibus amet quidem ut doloribus, ipsum deleniti, mollitia possimus consequuntur tempora harum quis enim quas! Eos ea deserunt mollitia iure rerum!
                    Commodi, molestiae! Quibusdam, nemo. Sit, voluptatum quibusdam temporibus cumque quia ex voluptas. Eum totam voluptatibus aliquam alias aliquid facere dolores autem, deleniti optio, unde labore iure repudiandae molestias sunt nemo?</p>

                </div>
                <div className='card'>
                    <p><strong>5</strong></p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas voluptatibus amet quidem ut doloribus, ipsum deleniti, mollitia possimus consequuntur tempora harum quis enim quas! Eos ea deserunt mollitia iure rerum!
                    Commodi, molestiae! Quibusdam, nemo. Sit, voluptatum quibusdam temporibus cumque quia ex voluptas. Eum totam voluptatibus aliquam alias aliquid facere dolores autem, deleniti optio, unde labore iure repudiandae molestias sunt nemo?</p>

                </div>


            </Slider>


            </div>
        </div>
    </>
    )
}