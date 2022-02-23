import React from 'react';
import { PostsContext } from '../contexts';
import { v4 as uuidv4 } from 'uuid';

class PostsContextProvider extends React.Component {
  state = {
    posts: [
      {
        "id": uuidv4(),
        "img": 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=800&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2017%2F02%2Feiffel-tower-paris-france-EIFFEL0217.jpg',
        "title": "PARIS",
        "body": "Paris is unarguably one of the most beautiful cities in the world, the capital of France. There are a thousand things to do  in Paris and however much time you have here, it wont be enough Climb to the top of the Eiffel Tower, stroll down the Champs Elysées, visit the Louvre, see many shows and exhibitions, or simply wander along the banks of the Seine  and quite simply take the time to experience the Parisian way of life! Stepping into this whirlwind that takes you from frenzy to romanticism will leave you with enduring memories. You will be much more proficient in French and you will become aware of your ability to communicate in the language ."
      },
      {
        "id": uuidv4(),
        "img": 'https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg',
        "title": "LONDON",
        "body": "The city of London is the capital and largest city of Britain.It is located on the south side of the country on the Thames, with a population of about 8.4 million, of whom 2.7 million live in inner London neighborhoods.It has a large number of famous theaters, universities, museums, educational institutes and cultural centers around the world."
      },
      {
        "id": uuidv4(),
        "img": 'https://trashbox.ru/files/1222283_b359ee/moscow-cathedral.jpg',
        "title": "MOSCOW",
        "body": "Moscow,  capital of Russia, located in the far western part of the country. Since it was first mentioned in the chronicles of 1147, Moscow has played a vital role in Russian history. One of the most notable art museums in Moscow is the Tretyakov Gallery, which was founded by Pavel Tretyakov, a wealthy patron of the arts who donated a large private collection to the city. The Tretyakov Gallery is split into two buildings. The Old Tretyakov gallery, the original gallery in the Tretyakovskaya area on the south bank of the Moskva River, houses works in the classic Russian tradition."
      },
      {
        "id": uuidv4(),
        "img": 'https://thenomadvisor.com/wp-content/uploads/2020/02/romewhertostay-780x520.jpg',
        "title": "ROME",
        "body": "Rome,  historic city and capital of Roma provincia (province), of Lazio regione (region), and of the country of Italy. Rome is located in the central portion of the Italian peninsula, on the Tiber River about 15 miles (24 km) inland from the Tyrrhenian Sea. The origins of Rome, as of all ancient cities, are wrapped in fable. The Roman fable is of Romulus and Remus, twin sons of Mars, abandoned on the flooding Tiber and deposited by the receding waters at the foot of the Palatine. Suckled by a she-wolf, they were reared by a shepherd and grew up to found Rome. (The bronze statue of the maternally ferocious wolf, now in the city’s Capitoline Museums, is one of the best-known works among the thousands of masterpieces in Rome.)"
      },
      {
        "id": uuidv4(),
        "img": 'https://factor.am/wp-content/uploads/2019/10/Gyumri_800x534.jpg',
        "title": "GYUMRI",
        "body": "Gyumri is an urban municipal community and the second-largest city in Armenia, serving as the administrative center of Shirak Province in the northwestern part of the country. By the end of the 19th century, when the city was known as Alexandropol,[b] it was one of the largest cities of Russian-ruled Eastern Armenia with a population similar to that of Yerevan. It was renamed to Leninakan during the Soviet period. The city's population grew above 200,000 prior to the 1988 Spitak earthquake, when it was devastated. As of the 2011 census, the city had a population of 121,976, down from 150,917 reported at the 2001 census."
      },
    ],
    editPost: {
      isOpen: false,
      postId: ''
    }
  }
  openEditPost = (postId) => {
    this.setState({
      editPost: {
        isOpen: true,
        postId
      }
    })
  }
  closeEditPost = () => {
    this.setState({
      editPost: {
        isOpen: false,
        postId: ''
      }
    })
  }

  addPost = (img, title, body) => {
    const posts = [...this.state.posts];
    const newPost = {
      id: uuidv4(),
      img,
      title,
      body
    }
    posts.push(newPost);
    return this.setState(prevState => ({
      ...prevState,
      posts: posts
    }))
  }
  
  handleDelete = (id) => {
    return this.setState((prevState) => ({
      posts: prevState.posts.filter(posts => posts.id !== id),
    }))

  };

  render() {
    return (
      <PostsContext.Provider
        value={{
          posts: this.state.posts,
          editPost:this.state.editPost,
          addPost: this.addPost,
          handleDelete: this.handleDelete,
          closeEditPost: this.closeEditPost,
          openEditPost: this.openEditPost
        }}
      >
        {this.props.children}
      </PostsContext.Provider>
    )
  }
}
export default PostsContextProvider;