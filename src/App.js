import './App.css';
import Header from './Header.js';
import Hello from './Hello.js';
import Length from './Length.js';
import Range from './Range.js';
import Form from './Form.js';
import Converter from './Converter.js';
import Posts from './posts/Posts.js';

let posts = 
[
  {id:'1', title:'C++ proc', content:'Процедурное программирование на языке С++'},
  {id:'2', title:'C++ OOP', content:'Объектно-ориентированое программирование на языке С++'},
  {id:'3', title:'Windows Desktop Development', content:'Разработка настольных приложений для ОС Windows'}
]
function removePost(id)
{
  alert(id);
  posts = posts.filter(post => post.id != id);
}

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Hello />
      <Length />
      <Range />
      <Form />
      <Converter /> */}
      <Posts posts={posts} removePost={removePost} />
    </div>
  );
}

export default App;
