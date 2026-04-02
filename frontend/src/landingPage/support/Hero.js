import React from 'react'

function Hero() {
    return ( 
        <div className='container-fluid p-5 ' id="supportHero">
            <div className=' text-center' id="supportWrapper">
                <h3 className='fs-5'>Support Portal</h3>
                <a href='' >Track Tickets</a>
            </div>
            <div className='container' id="supportWrapper1">
                <div className='row text-left p-3 '>
                <div className='col-6 p-5 '>
                    <h1 className='fs-5'>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg: Hoe do I activate F&O, why is my order getting rejected..' className='mb-2 mt-2 p-3 w-100'  /><br/>
                    <a href=''>Track account opening</a> &nbsp;
                    <a href=''>Track segment activation</a> &nbsp;
                    <a href=''>Intraday margins</a> &nbsp;
                    <a href=''>Kite user manual </a> &nbsp;
                </div>
                <div className='col-6 p-5 '>
                    <h1 className='fs-5'>Featured</h1>
                    <ol>
                        <li><a href=''>Current takeover and delisting</a></li>
                        <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
            </div>
        </div>
     );
}

export default Hero;