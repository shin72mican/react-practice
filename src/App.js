// import logo from './logo.svg';
import './App.css';

// import MyHello from './MyHello';
// import MyType from './MyType';
// import MyAttrMulti from './MyAttrMulti';

// import MyEvent from './MyEvent';

// import MyState from './MyState';

// import MyParent from './MyParent';

// import MyForm from './MyForm';
// import MyFormUn from './MyFormUn';

// import MyDialog from './MyDialog';

// import { Link, Outlet } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';

const isCurrent = (link) =>  {
  // return link.isActive ? {backgroundColor: 'Yellow'} : undefined;
  return link.isActive ? 'current' : undefined;
}

const App = () => {
  // const data = {
  //   name: '山田権左衛門',
  //   age: 18,
  //   sex: '男'
  // }
  return (
    <div>
      {/* <MyHello name="山田" />

      <MyType value="山田" />
      <MyType value={'鈴木'} />
      <MyType value={ 108 } />
      <MyType value={ true } />
      <MyType value={ ['うめ', 'もも', 'さくら'] } />
      <MyType value={ {name: "山田太郎", age: 40} } />
      <MyType value={ () => console.log('Hoge') } />

      <MyAttrMulti { ...data } />

      <MyEvent greet="Hello" /> */}

      {/* <MyState /> */}

      {/* <MyParent /> */}

      {/* <MyForm /> */}

      {/* <MyFormUn /> */}

      {/* <div id="panel"></div>
      <MyDialog /> */}

      <ul>
        <li><NavLink end className={ isCurrent } to="/">トップ</NavLink></li>
        <li><NavLink className={ isCurrent } to="/hello">Hello</NavLink></li>
        <li><NavLink className={ isCurrent } to="/article/13">公開記事No.13</NavLink></li>
        <li><NavLink className={ isCurrent } to="/article/108">公開記事No.108</NavLink></li>
        <li><NavLink className={ isCurrent } to="/search/react/router">検索結果</NavLink></li>
      </ul>
      <hr />
      <Outlet />

    </div>
  );
}

export default App;
