import styled from 'styled-components';

export const SpinnerWrap = styled.div`
  body {
    overflow: hidden;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    overflow: hidden;
  }

  .item-1 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-1 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 100ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-1>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #dacbfe;
  }

  @keyframes right-1 {
    0% {
        transform: rotate(36deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(36deg) translateY(-100px);
    }

    87% {
        transform: rotate(36deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-2 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-2 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-2>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #cdb8fd;
  }

  @keyframes right-2 {
    0% {
        transform: rotate(72deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(72deg) translateY(-100px);
    }

    87% {
        transform: rotate(72deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-3 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-3 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-3>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #bfa4fd;
  }

  @keyframes right-3 {
    0% {
        transform: rotate(108deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(108deg) translateY(-100px);
    }

    87% {
        transform: rotate(108deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-4 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-4 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 400ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-4>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #b291fc;
  }

  @keyframes right-4 {
    0% {
        transform: rotate(144deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(144deg) translateY(-100px);
    }

    87% {
        transform: rotate(144deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-5 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-5 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 500ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-5>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #a47efc;
  }

  @keyframes right-5 {
    0% {
        transform: rotate(180deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(180deg) translateY(-100px);
    }

    87% {
        transform: rotate(180deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-6 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-6 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 600ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-6>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #966bfc;
  }

  @keyframes right-6 {
    0% {
        transform: rotate(216deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(216deg) translateY(-100px);
    }

    87% {
        transform: rotate(216deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-7 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-7 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 700ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-7>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #8958fb;
  }

  @keyframes right-7 {
    0% {
        transform: rotate(252deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(252deg) translateY(-100px);
    }

    87% {
        transform: rotate(252deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-8 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-8 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 800ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-8>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #7b44fb;
  }

  @keyframes right-8 {
    0% {
        transform: rotate(288deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(288deg) translateY(-100px);
    }

    87% {
        transform: rotate(288deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-9 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-9 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 900ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-9>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #6e31fa;
  }

  @keyframes right-9 {
    0% {
        transform: rotate(324deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(324deg) translateY(-100px);
    }

    87% {
        transform: rotate(324deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }

  .item-10 {
    width: 100px;
    height: 100px;
    position: absolute;
    animation: right-10 3s infinite cubic-bezier(0, 0, 0.49, 1.02);
    animation-delay: 1000ms;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-10>* {
    width: 25px;
    height: 25px;
    background: #F583A1;
    border-radius: 50%;
    background-color: #601efa;
  }

  @keyframes right-10 {
    0% {
        transform: rotate(360deg) translateY(0px);
    }

    33%,
    66%,
    100% {
        transform: rotate(360deg) translateY(-100px);
    }

    87% {
        transform: rotate(360deg) translateY(0px);
    }

    100% {
        transform: rotate(0deg) translateY(0px);
    }
  }
`;
