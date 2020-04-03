import React, { useState, useEffect } from 'react';
import { Row, Col} from 'react-materialize';
import Item from '../components/Card'




function ShoeBoard() {
    const [state, setState] = useState({
        array: [0, 1, 0, 1, 0, 1]
    })

    useEffect(() => {
        rssScrape()
    }, [])
    
    function rssScrape() {
        fetch('https://hypebeast.com/footwear/feed')
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
          console.log(data);
        //   const items = data.querySelectorAll("item");
        //   let html = ``;
        //   items.forEach(el => {
        //     html += `
        //       <article>
        //         <img src="${el.querySelector("link").innerHTML}/image/large.png" alt="">
        //         <h2>
        //           <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
        //             ${el.querySelector("title").innerHTML}
        //           </a>
        //         </h2>
        //       </article>
        //     `;
        //   });
        //   document.body.insertAdjacentHTML("beforeend", html);
        });
    }
    return (
        <div className="container">
           
            <Row>

                {state.array.map(item => (
                    <Col
                        s={12}
                        m={6}><Item /></Col>))}
            </Row>

        </div>
    )
};

export default ShoeBoard;

