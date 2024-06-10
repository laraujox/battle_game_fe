import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [player, setPlayer] = useState({
    name: '',
    gold: 0,
    attack_value: 0,
    hit_points: 0,
    luck_value: 0,
  });

  const [battle, setBattle] = useState({
    attacker_name: '',
    defender_name: '',
  });

  const [result, setResult] = useState(null);

  const handlePlayerChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleBattleChange = (e) => {
    setBattle({
      ...battle,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlayerSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/player/', player);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBattleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/battle/', battle);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>Create Player</h2>
          <form onSubmit={handlePlayerSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={player.name}
                onChange={handlePlayerChange}
              />
            </div>
            <div className="form-group">
              <label>Gold</label>
              <input
                type="number"
                className="form-control"
                name="gold"
                value={player.gold}
                onChange={handlePlayerChange}
              />
            </div>
            <div className="form-group">
              <label>Attack Value</label>
              <input
                type="number"
                className="form-control"
                name="attack_value"
                value={player.attack_value}
                onChange={handlePlayerChange}
              />
            </div>
            <div className="form-group">
              <label>Hit Points</label>
              <input
                type="number"
                className="form-control"
                name="hit_points"
                value={player.hit_points}
                onChange={handlePlayerChange}
              />
            </div>
            <div className="form-group">
              <label>Luck Value</label>
              <input
                type="number"
                className="form-control"
                name="luck_value"
                value={player.luck_value}
                onChange={handlePlayerChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Player
            </button>
          </form>
        </div>
        <div className="col">
          <h2>Create Battle</h2>
          <form onSubmit={handleBattleSubmit}>
            <div className="form-group">
              <label>Attacker Name</label>
              <input
                type="text"
                className="form-control"
                name="attacker_name"
                value={battle.attacker_name}
                onChange={handleBattleChange}
              />
            </div>
            <div className="form-group">
              <label>Defender Name</label>
              <input
                type="text"
                className="form-control"
                name="defender_name"
                value={battle.defender_name}
                onChange={handleBattleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Battle
            </button>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          {result && (
            <div>
              <h2>Result</h2>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;