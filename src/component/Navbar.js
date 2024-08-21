import React from 'react'
import Button from 'react-bootstrap/Button';
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const menuList = ['Women', 'Men', 'Baby', 'Kids','H&M HOme', 'Sport', 'Sale', '지속가능성'];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(`/login`);
  }
  return (
    <div>
      <div>
        <div className='login-button'>
            <CiUser  size={70}/>
            <Button className="loginBtn" variant="primary"  onClick={() => { goToLogin(); }}>로그인</Button>
        </div>
      </div>
      
      <div className='nav-section'>
        <img width = {100} src="https://th.bing.com/th/id/OIP.V3k4wm5U44DQ2DkYhhpcCAHaEK?rs=1&pid=ImgDetMain"/>
      </div>
      <div className='menu-area'>
        <div className='menu-list'>
          
                {menuList.map((menu) => (
                    <div>{menu}</div>
                ))}
           
            
        </div>
        <div className='search-area'>
            <form className='w-[500px] relative'>
                <div className='relative'>
                    <input type="search" placeholder='검색어를 입력하세요' className='search-input2'/>
                    <button>
                    <FaSearch />
                    </button>
                </div>    
            </form>   
        </div>
       
      </div>
    </div>
  )
}

export default Navbar
