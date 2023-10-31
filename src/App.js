import { useState  } from 'react';
import useStatus from './Hooks/StatusHook';
import useLogData from './Hooks/StateToConsole';

function App(initialStatus) {
  const [data, setData] = useState('Data from the component');
  const [status, updateStatus] = useStatus('Active');

  useLogData(data);

  return (
    <div>
      <p>{data}</p>
      <p>Status: {status}</p>
      <button onClick={() => updateStatus('Inactive')}>Change status</button>
    </div>
  );
}

export default App;

