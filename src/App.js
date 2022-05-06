import './categories.styles.scss'
import './App.css';
import CategoryItem from './components/category-item/category-item.component';

const App = () => {
  const categories = [
    { 
      id:1,
      title:'Hats',
      imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&w=1000&q=80',
      subtitle: 'Shop Now'
    },
    {
      id:2,
      title:'Jackets',
      imageUrl: 'https://www.realmenrealstyle.com/wp-content/uploads/2021/08/5-1.jpg',
      subtitle: 'Shop Now'
    },
    {
      id:3,
      title:'Sneakers',
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2021/02/whitesneakers-2048px-0427.jpg?auto=webp&quality=60&crop=1.91:1&width=1200',
      subtitle: 'Shop Now'
    },
    {
      id:4,
      title:'Womens',
      imageUrl: 'https://media.gettyimages.com/photos/modern-woman-picture-id696869378?s=612x612',
      subtitle: 'Shop Now'
    },
    {
      id:5,
      title:'Mens',
      imageUrl: 'https://thumbs.dreamstime.com/b/side-view-fashion-man-holding-his-leather-jacket-looking-away-camera-against-blue-sky-35062606.jpg',
      subtitle: 'Shop Now'
    },
  ]

  return (
    <div className='categories-container'>
      {
        categories.map((category)=>(
          <CategoryItem  key={category.id} category={category} />
        ))
      }
    </div>
  );
}

export default App;
