import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import history from '../history';

import Home from './Pages/Home';
import Resume from './Pages/Resume';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DataCreate from './Pages/dataCreate';
import DataEdit from './Pages/DataEdit';
import DataDelete from './Pages/dataDelete';
import DataList from './Pages/dataList';
import DataShow from './Pages/dataShow';
import ImageUploader from './Pages/ImageUploader';
import DataHeader from './Pages/dataHeader';

function App() {
  return (
    <HistoryRouter history={history}>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/client" element={<DataHeader />}>
          <Route path="/client/data/new" element={<DataCreate />} />
          <Route path="/client/data/edit/:id" element={<DataEdit />} />
          <Route path="/client/data/delete/:id" element={<DataDelete />} />
          <Route path="/client/data/show" element={<DataShow />} />
          <Route path="/client/Image" element={<ImageUploader />} />
          <Route path="/client" element={<DataList />} />
        </Route>

      </Routes>

    </HistoryRouter>

  );
}

export default App;
