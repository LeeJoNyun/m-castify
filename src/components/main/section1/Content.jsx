import React from 'react';
import { ContentStyle } from './style';
import GsapSection from './GsapSection';

const Content = () => {
    return (
        <ContentStyle>
            <span className="title">나만의 케이스, 여기서 시작</span>
            <GsapSection />
        </ContentStyle>
    );
};

export default Content;
