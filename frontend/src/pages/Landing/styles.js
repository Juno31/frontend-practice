//React
import styled from 'styled-components'

export const MainTitle = styled.h1`

`

export const TitleContainer = styled.div`
    width: max-content;
    height: max-content;
    
    margin-left: 30px;

    display: flex;
    flex-flow: column nowrap;

    &:hover{
        #titlewrapper{
            transform: rotateY(25deg) rotateX(20deg) scale(1.3);
            gap: 4px;
            & svg{
                fill: #4480f7;
            }

            & h3{
                color: #4480f7;
            }
        }
        #title2wrapper{
            height: max-content;
            opacity: 1;
        }
    }

    cursor: pointer;
`

export const TitleWrapper = styled.div`
    width: 200px;
    height: 40px;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 5px;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
`

export const Title = styled.h3`
    color: black;
`

export const Title2Wrapper = styled.div`
    height: 0px;
    max-height: 40px;
    margin-left: 50px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    transition-delay: 0.4s;
    
    display: flex;
    align-items: center;
    gap: 5px;

    overflow: hidden;

    transform-style: preserve-3d;
    
    &:hover{
        &{
            transform: scale(1.1);
            transform-style: preserve-3d;
            transition: all 0.3s ease-in-out;
        }

        & h3{
            color: #4480f7;
        }    
        & svg{
            fill: #4480f7;
        }    
    }
`