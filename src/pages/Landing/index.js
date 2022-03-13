//React
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

//Assets
import { ReactComponent as Folder } from '../../assets/svg/folder.svg'

//Css
import {
    MainTitle,
    TitleContainer,
    TitleWrapper,
    Title,
    Title2Wrapper,
} from './styles'

const source = [    // file data
    {
        name: 'Home',
        path: '/',
        small: [
            {
                name: 'stroke',
                path: '/svg/?small=stroke'
            },
            {
                name: 'pulse',
                path: '/svg/?small=pulse'
            },
            {
                name: 'circle',
                path: '/svg/?small=circle'
            }

        ]
    },
    {
        name: 'Svg',
        path: '/svg',
        small: [
            {
                name: 'stroke',
                path: '/svg/?small=stroke'
            },
            {
                name: 'pulse',
                path: '/svg/?small=pulse'
            },
            {
                name: 'circle',
                path: '/svg/?small=circle'
            }
        ]
    },
    {
        name: 'Animation',
        path: '/animation',
        small: [
            {
                name: 'stroke',
                path: '/svg/?small=stroke'
            },
            {
                name: 'pulse',
                path: '/svg/?small=pulse'
            },
            {
                name: 'circle',
                path: '/svg/?small=circle'
            }
        ]
    }
]

function Index() {
    const navigate = useNavigate();

    return (
        <Fragment>
            <MainTitle>Archive of Frontend Practices</MainTitle>
            {source.map(function (obj, index) {

                return (
                    <TitleContainer key={'TitleContainer' + index}>
                        <TitleWrapper id='titlewrapper'>
                            <Folder />
                            <Title onClick={function () { navigate(obj.path) }}>{obj.name}</Title>
                        </TitleWrapper>
                        {obj.small.map(function (semi, index) {

                            return (
                                <Title2Wrapper id='title2wrapper' key={'Title2Wrapper' + index}>
                                    <Folder />
                                    <Title onClick={function () { navigate(semi.path) }}>{semi.name}</Title>
                                </Title2Wrapper>
                            )
                        })}
                    </TitleContainer>
                )
            })}
        </Fragment>
    )
}

export default Index