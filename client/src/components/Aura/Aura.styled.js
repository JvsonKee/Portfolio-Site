import styled from "styled-components";

export const AuraContainer = styled.div`
    overflow: hidden;

    #up {
        position: absolute;
        height: 1000px;
        width: 900px;
        left: -100px;
        border-radius: 50%;
        background-image: linear-gradient(60deg, rgba(86, 128, 76, 1), rgba(58, 94, 88, 1));
        filter: blur(80px);
        animation: down 30s infinite;

        @media screen and (max-width: 860px) {
            height: 800px;
            width: 800px;
        }
    
        @media screen and (max-width: 700px) {
            height: 600px;
            width: 600px;
        }
    }

    #down {
        position: absolute;
        right: -120px;
        height: 900px;
        width: 900px;
        border-radius: 50%;
        background-image: linear-gradient(80deg, rgba(158, 173, 116, 0.5), rgba(152, 119, 57, 0.5));
        filter: blur(80px);
        animation: up 30s infinite;

        @media screen and (max-width: 860px) {
            height: 800px;
            width: 800px;
        }

        @media screen and (max-width: 700px) {
            height: 500px;
            width: 500px;
        }
    }

    #left {
        position: absolute;
        top: -400px;
        height: 800px;
        width: 900px;
        border-radius: 50%;
        background-image: linear-gradient(50deg, rgba(57, 152, 72, 1), rgba(124, 116, 173, 0.8));
        filter: blur(80px);
        animation: left 30s infinite;

        @media screen and (max-width: 860px) {
            height: 800px;
            width: 800px;
        }

        @media screen and (max-width: 700px) {
            top: -200px;
            height: 500px;
            width: 500px;
        }
    }

    #right {
        position: absolute;
        bottom: 100px;
        height: 700px;
        width: 900px;
        border-radius: 50%;
        background-image: linear-gradient(80deg, rgba(98, 105, 169, 0.5), rgba(166, 139, 97, 0.4));
        filter: blur(80px);
        animation: right 30s infinite;

        @media screen and (max-width: 860px) {
            height: 800px;
            width: 800px;
        }

        @media screen and (max-width: 700px) {
            height: 500px;
            width: 500px;
        }
    }

    @keyframes down {
        0%, 100% {
            top: 400px;
        }

        70% {
            top: 500px;
        }
    }

    @keyframes down {
        0%, 100% {
            bottom: 400px;
        }

        70% {
            bottom: 100px;
        }
    }

    @keyframes up {
        0%, 100% {
            bottom: -100px;
        }

        70% {
            bottom: 500px;
        }
    }

    @keyframes up {
        0%, 100% {
            top: -100px;
        }

        70% {
            top: 150px;
        }
    }

    @keyframes left {
        0%, 100% {
            right: -100px;
        }

        70% {
            right: 1300px;
        }
    }

    @keyframes left {
        0%, 100% {
            left: -100px;
        }

        70% {
            left: 700px;
        }
    }

    @keyframes right {
        0%, 100% {
            left: -100px;
        }

        70% {
            left: 1300px;
        }
    }

    @keyframes right {
        0%, 100% {
            right: -100px;
        }

        70% {
            right: 700px;
        }
    }

    @media screen and (max-width: 860px) {
        @keyframes down {
            0%, 100% {
                top: 400px;
            }

            70% {
                top: 500px;
            }
        }

        @keyframes down {
            0%, 100% {
                bottom: 100px;
            }

            70% {
                bottom: 400px;
            }
        }

        @keyframes left {
            0%, 100% {
                right: -100px;
            }

            70% {
                right: 200px;
            }
        }

        @keyframes left {
            0%, 100% {
                left: -150px;
            }

            70% {
                left: 100px;
            }
        }

        @keyframes right {
            0%, 100% {
                left: -100px;
            }

            70% {
                left: 300px;
            }
        }

        @keyframes right {
            0%, 100% {
                right: -100px;
            }

            70% {
                right: 200px;
            }
        }
    }
`

export const Section = styled.section`

`