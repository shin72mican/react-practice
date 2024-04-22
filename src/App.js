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
  return link.isActive ? {backgroundColor: 'Yellow'} : undefined;
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
        <li><NavLink style={ isCurrent } to="/">トップ</NavLink></li>
        <li><NavLink style={ isCurrent } to="/hello">Hello</NavLink></li>
        <li><NavLink style={ isCurrent } to="/article">公開記事</NavLink></li>
      </ul>
      <hr />
      <Outlet />

    </div>
  );
}

export default App;
