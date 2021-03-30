import React from 'react';
import { Button } from './Button';
import './BioSection.css';

function BioSection() {
    return (
        <>
            <div className='bio_block' id="biosection" style={{backgroundImage: 'url(images/bio_section_banner_bg.jpg)'}}>
                <div className='bio_container'>
                    <div className='bio_wrapper'>
                        <h2>Rólam röviden</h2>
                        <h3>Csákány Krisztián vagyok, 23 éves. Zentán születtem, Szerbiában. Horgoson éltem 21 éves koromig. <br />Ekkor alalkult úgy a sors, hogy Magyarországon sikerült munkát vállalnom. <br />Elöször a szakmámban helyezkedtem el gépésztechnikusként a Mercedes Benz kecskeméti gyárában, majd Szegeden a Dél-Alföldi Regionális Társadalomtudományi Kutatási Egyesület keretein belül dolgoztam grafikusként. <br />Jelenleg is ezen a pályán mozgok. Föbb profilom a grafika/modellezés.</h3>
                        <div className='bio_btn'>
                            <Button className='btns' href='/about' buttonStyle='btn--outline' buttonSize='btn--large'>
                                BÖVEBBEN
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BioSection;