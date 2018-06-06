import React, { Component } from 'react'; 
import Flip from 'react-reveal/Flip'; 
import Fade from 'react-reveal/Fade'; 
import Rotate from 'react-reveal/Rotate'; 
import Zoom from 'react-reveal/Zoom'; 
import Bounce from 'react-reveal/Bounce'; 
import Roll from 'react-reveal/Roll'

class Latihan extends Component { 
    render() { 
        return ( 
            <div> 
                <Zoom> 
                    <center> 
                    <img alt="" src="http://img.bisnis.com/thumb/posts/2017/10/26/703434/pabrik-kembang-api-meledak.jpg?w=600&h=400" />  
                    </center> 
                </Zoom> 
            </div> 
        );
    }
}
export default Latihan;