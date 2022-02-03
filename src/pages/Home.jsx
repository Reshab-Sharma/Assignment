
import React, { useEffect,useState} from 'react';
import ReactPaginate from "react-paginate";
import "./home.css";
import {debounce} from "lodash"
import Post from '../components/post/Post';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const Home = () => {
    const[userPost, setUserPost]= useState([]);
    const [filter, setFilter] = useState('');
    
    

   const handleChange=(e)=>{
    
      setFilter(e.target.value);
   };
     

   
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async()=>{
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> res.json())
        .then((data)=> setUserPost(data))
        .catch((err)=>{
            console.log(err);
        })
      }
      const [pageNumber, setPageNumber] = useState(0)

      const usersPerPage=4
      const pagesVisited=pageNumber * usersPerPage
      const displayUsers = userPost.slice(pagesVisited, pagesVisited + usersPerPage);
        
   const pageCount = Math.ceil(userPost.length / usersPerPage);
   const changePage= ({selected})=>{
     setPageNumber(selected);
   };
  

  return <div>
         <div className='container'>
      <div className="nav">
          <div className="h1-nav">
      <h1 className='cont-h1'>Assignment</h1>

          </div>
          <div className="search">

<input  type="text" placeholder="search..." className='input-cont' value={filter} onChange={handleChange
}  />
<SearchIcon/>

</div>

      </div>

  </div>
  <div className="svg">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="0.3" d="M0,96L60,101.3C120,107,240,117,360,106.7C480,96,600,64,720,58.7C840,53,960,75,1080,117.3C1200,160,1320,224,1380,256L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

  </div>
  
     
     { 
           displayUsers.filter((val)=>{
             if(filter==""){
               return val
             }else if(val.title.toLowerCase().includes(filter.toLowerCase())){
               return val
             }
           }).map((items)=>(
              
           < Link to={`/postpage/${items.id}`} className="link">
           
<Post userPost={userPost} id={items.id} key={items.id} title={items.title} body={items.body}/>
           </Link>))
             
               
            
               


             
         }
     
    <ReactPaginate
    previousLabel={"Previous"}
    nextLabel={"Next"}
    pageCount={pageCount}
    onPageChange={changePage}
    containerClassName={'paginationbttn'}
    previousLinkClassName={'previousbttn'}
    nextLinkClassName={'nextbttn'}
    disabledClassName={'paginationdisabled'}
    activeClassName={'paginationactive'}
    />
  </div>;
};

export default Home;
