import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1 className='mb-4'>Pricing</h1>
                <h3 className='text-muted fs-5'>Free equity investments and flat 20 traday and F&O trades</h3>
            </div>
            <div className='row p-5 mt-5 text-center'>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h4 className='fs-4'>Free equity delivery</h4>
                    <p className='text-muted mt-3'>Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h4 className='fs-4'>Intraday and F&O trades</h4>
                    <p className='text-muted mt-3'>Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media/images/pricingEquity.svg'/>
                    <h4 className='fs-4'>Free direct MF</h4>
                    <p className='text-muted mt-3'>Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;