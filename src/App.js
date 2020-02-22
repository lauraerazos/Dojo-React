import React from 'react';
import Layout from './container/layout/layout';

import Tasks from './container/tasks/task';


function App() {
  return (
    <div className="App">
      <Layout>
        <Tasks/>
      </Layout>
    </div>
  );
}

export default App;
