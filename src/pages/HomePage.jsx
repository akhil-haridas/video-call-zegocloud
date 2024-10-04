import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const onJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Room Code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={onJoinRoom}>Join</button>
    </div>
  );
};

export default HomePage;
