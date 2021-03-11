import React from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
const BgElement = Element.BgElement;

const Corrousel = () => {

    return (
        <BannerAnim prefixCls="banner-user">

            <Element
                prefixCls="banner-user-elem"
                key="0"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        background: '#E5E7E7',
                    }}
                />
                <div className="banner-anim-elem-content">
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Los Animales No Se Abandonan
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    >
                        Son Una Responsabilidad Para Siempre
                    </TweenOne>
                </div>
            </Element>

            <Element
                prefixCls="banner-user-elem"
                key="1"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        background: '#468DC6',
                    }}
                />
                <div className="banner-anim-elem-content" >
                    <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                        Aprende A Cuidar A Los Animales
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                        animation={{ y: 30, opacity: 0, type: 'from', delay: 200 }}
                    >
                        Ellos Son Importantes
                    </TweenOne>
                </div>
            </Element>

        </BannerAnim>
    )
}
export default Corrousel;