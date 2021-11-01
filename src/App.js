import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'antd/dist/antd.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from 'axios/lib/helpers/cookies';
import { getResult, getPredict } from './Api';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import useApp from './useApp';
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function App() {
  // const [cards, setCards] = useState(['A', 'K', 'Q', '4', '5', '6']);
  const [BankerCards, setBankerCards] = useState([]);
  const [PlayerCards, setPlayerCards] = useState([]);
  const [result, setResult] = useState('');
  const [sugges, setSugges] = useState('');
  const [tik, setTik] = useState(false);
  const [play, setPlay] = useState(false);
  const [wait, setWait] = useState(true);
  const [score, setScore] = useState({
    player: '0',
    banker: '0',
  });
  const [tile,setTile] = useState({
    bank: "",
    play:""
  })
  const { res, predict } = useApp();
  const notify = () => {
    const response = predict[Math.floor(Math.random() * predict.length)];
    toast.info(response.Predict, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTile({
      bank: response.Banker,
      play: response.Player
    })
    setSugges(response.Predict);
    setTik(true);
  };
  const handleClick = (value) => {
    setTik(true);
    setWait(true);
    const Loading = setTimeout(() => {
      setWait(false);
      if (play) {
        const response = res[Math.floor(Math.random() * res.length)];
        setBankerCards(response.Banker_Cards);
        setPlayerCards(response.Player_Cards);
        setResult(response.Results);
        setScore({
          player: response.Player_Score,
          banker: response.Banker_Score,
        });
        if (value === response.Results) {
          toast.error('you lose!!!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success('you win!!!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    }, 3000);
  };

  useEffect(() => {
    const Loading = setTimeout(() => {
      setWait(false);
    }, 3000);
  }, []);
  return (
    <React.Fragment>
      <div className="wrapper flex relative">
        <div style={{boxShadow:"2px 2px 2px 2px #999999",}} className="container">
          <div
            style={
              wait
                ? {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, .5)',
                    zIndex: '800',
                    top: '0',
                    left: '0',
                  }
                : null
            }
            className="back_Gr"
          >
            {' '}
          </div>
          {wait ? (
            <div className="count-down">
              <div className="timer-wrapper">
                <CountdownCircleTimer
                  size={150}
                  isPlaying
                  duration={3}
                  colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                  onComplete={() => [false, 1000]}
                >
                  {renderTime}
                </CountdownCircleTimer>
              </div>
            </div>
          ) : null}

          <div>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
          <div className="bcr-top">
            <div style={{position:"relative"}} className="tile">
            {play? <span style={{color: 'rgb(117, 35, 35)',fontSize:"20px",fontWeight:"900", position:"absolute", top:"-20px", left:"50px"}}>{`${tile.play}%`}</span>: null}
              <div className="item">
                <div className="player">PLAYER</div>
                <div
                  style={{ color: 'rgb(117, 35, 35)', marginLeft: '5px' }}
                  className="score"
                >
                  {score.player}
                </div>
              </div>
            </div>
            <div style={{position:"relative"}} className="tile">
           {play?<span style={{color: '#ba9510',fontSize:"20px",fontWeight:"900", position:"absolute", top:"-20px", left:"200px"}}>{`${tile.bank}%`}</span> : null} 
              <div className="item">
                <div
                  style={{ color: '#ba9510', marginRight: '5px' }}
                  className="score"
                >
                  {score.banker}
                </div>
                <div className="banker">BANKER</div>{' '}
              </div>
            </div>
          </div>
          <div className="cards">
            <div className="cards__item">
              <div className="card">
                {PlayerCards[0] ? (
                  <img src={require(`./img/${PlayerCards[0]}.jpg`).default} />
                ) : (
                  <img src={require(`./img/matsau.jpg`).default} />
                )}
              </div>
              <div className="card">
                {PlayerCards[1] ? (
                  <img src={require(`./img/${PlayerCards[1]}.jpg`).default} />
                ) : (
                  <img src={require(`./img/matsau.jpg`).default} />
                )}
              </div>
              <div className="card">
                {PlayerCards[2] ? (
                  <img src={require(`./img/${PlayerCards[2]}.jpg`).default} />
                ) : (
                  <img src={require(`./img/matsau.jpg`).default} />
                )}
              </div>
            </div>
            <div className="cards__item">
              <div className="card">
                {BankerCards[0] ? (
                  <img src={require(`./img/${BankerCards[0]}.jpg`).default} />
                ) : (
                  <img src={require(`./img/matsau.jpg`).default} />
                )}
              </div>
              <div className="card">
                {BankerCards[1] ? (
                  <img src={require(`./img/${BankerCards[1]}.jpg`).default} />
                ) : (
                  <img src={require(`./img/matsau.jpg`).default} />
                )}
              </div>
              <div className="card">
                {BankerCards[2] ? (
                  <img src={require(`./img/${BankerCards[2]}.jpg`).default} />
                ) : (
                  <img src={require(`./img/matsau.jpg`).default} />
                )}
              </div>
            </div>
          </div>
          <div className="options">
            <div className="options__center">
              <a
                className={
                  sugges == 'Tier' && tik ? 'option wobble-bottom' : 'option'
                }
                rel="wobble-bottom"
                style={{ color: '#3cf24e' }}
                onClick={() => {
                  handleClick('tie');
                  setPlay(false);
                }}
              >
                TIE
              </a>
              <a
                onClick={() => {
                  handleClick('Banker wins');
                  setPlay(false);
                }}
                style={{ color: 'yellow' }}
                className={
                  sugges == 'Banker wins' ? 'option wobble-bottom' : 'option'
                }
              >
                BANKER
              </a>
              <a
                onClick={() => {
                  handleClick('Player wins');
                  setPlay(false);
                }}
                style={{ color: 'rgb(117, 35, 35)' }}
                className={
                  sugges == 'Player wins' && tik
                    ? 'option wobble-bottom'
                    : 'option'
                }
              >
                PLAYER
              </a>
            </div>

            <div
              className="start"
              onClick={() => {
                setPlay(true);
                notify();
              }}
            >
              Start
            </div>
          </div>
        </div>
        <img
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            transform: 'rotate(50px)',
          }}
          src={require(`./unnamed.png`).default}
        />
      </div>
    </React.Fragment>
  );
}

export default React.memo(App);
