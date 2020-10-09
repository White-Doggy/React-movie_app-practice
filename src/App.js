import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Naviation";


function App() {
  return <HashRouter> 
    {/* BrowserRouter 사용 시 주소가 정상화 되긴 하지만, git hub 연동이 귀찮아짐 */}
    <Navigation />
    <Route path="/" exact={true} component={Home} />
    {/* 
    /와 /about은 동일 형태의 연장선으로 보고 둘다 호출해버리게 됨
    그래서 exact={true} 를 추가해 완전히 동일한 경우만 컴포넌트 호출하도록 함
    */}
    <Route path="/about" component={About} />
    <Route path="/movie-detail" component={Detail} />
  </HashRouter>
}

export default App;