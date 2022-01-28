import React from 'react';

const Support = () => {
    return <>
        <div className="webSupport myWebSupport">
            <div className="container">
                <div className="row align-items-center">
                    <div data-aos='fade-up' className="col-2">
                        <i><img src="/assets/image/contactBg.svg" alt="" /></i>
                    </div>
                    <div data-aos='fade-up' className="col-10">
                        <h1>Нужна команда для поддержки вашего сервиса?</h1>
                        <p>Коротко опишите свои задачи и узнайте, как и чем мы можем помочь в развитии вашего бизнеса</p>
                        <a className='btn myBtn' href="tel: +998943698058">Call Us</a>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Support;