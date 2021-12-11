import React from "react";
import { List } from "antd";

import "./App.css";
import { useStreamers } from "./hooks/useStreamers";
import { ListItem } from "./components/ListItem";

const App: React.FC = () => {
  const { streamers } = useStreamers();

  return (
    <div className="App">
      <List
        className="score-list"
        itemLayout="horizontal"
        dataSource={streamers}
        size="small"
        renderItem={(item, index) => <ListItem item={item} index={index} />}
      />
    </div>
  );
};

export default App;
