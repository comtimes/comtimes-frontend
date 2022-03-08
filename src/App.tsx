/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import ArticleDetailView from 'components/ArticleDetailView';
import ArticleListView from 'components/ArticleListView';
import { Route, Routes } from 'react-router';

function App() {
  return <div className='App'>
          <Routes>
              <Route path='/' element={<ArticleListView />} />
              <Route path='/post' element={<ArticleListView />} />
              <Route path='/post/:id' element={<ArticleDetailView />} />
          </Routes>
      </div>
  }

export default App;
