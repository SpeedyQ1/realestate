import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import React from 'react'
import { Padding } from '@mui/icons-material';

function ReactSimplyCarouselExample() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
    return (
      <div>
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        > 
        <div style={{ width: 500, height: 300, background: '#ff80ed'  }}>
            <img src="https://photos.zillowstatic.com/fp/3a945822fa32eb9ca5796d933b4709fb-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#065535' }}>
            <img src="https://photos.zillowstatic.com/fp/24d10c833d97f2f94f0fcedbcb17c6d2-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#000000' }}>
            <img src="https://photos.zillowstatic.com/fp/1cfb45365af5f4ea18564f0475af5e42-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#133337' }}>
            <img src="https://photos.zillowstatic.com/fp/e4ab87ec8340a2bb78fd4327c5b96c72-p_e.jpg" alt="" />
          </div>
          <div style={{ width:500, height: 300, background: '#ffc0cb' }}>
            <img src="https://photos.zillowstatic.com/fp/390b391887b1534a4b4f96c8a12316ba-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#ffffff' }}>
            <img src="https://photos.zillowstatic.com/fp/95441fe03c234ed7fe290d1f1295ad0a-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#ffe4e1' }}>
            <img src="https://photos.zillowstatic.com/fp/92bbc8f7e2549b639fc8d0b14b28d503-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#008080' }}>
            <img src="https://photos.zillowstatic.com/fp/38bbcd719d181bc4f2983712995b2d5c-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#ff0000' }}>
            <img src="https://photos.zillowstatic.com/fp/14b50b0d998ad2460fa1be874f2ef484-p_e.jpg" alt="" />
          </div>
          <div style={{ width: 500, height: 300, background: '#e6e6fa' }}>
            <img src="https://photos.zillowstatic.com/fp/402547bb2ca995d805c03a478888d1bf-p_e.jpg" alt="" />
          </div>
        </ReactSimplyCarousel>
      </div>
    );
        }

        export default ReactSimplyCarouselExample;
