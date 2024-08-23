import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Navbar = ({ isLoggedIn, setAuthenticate }) => {
  const menuList = ['Women', 'Men', 'Baby', 'Kids','H&M HOme', 'Sport', 'Sale', '지속가능성'];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate(`/login`);
  }

  const handleLogout = () => {
    setAuthenticate(false); // 로그아웃 상태로 변경
    navigate(`/`);
  }

  const goToMainPage = () => {
    navigate("/");
  }

  const search = (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // 폼이 제출되지 않도록 기본 동작을 막음
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`);
    }
  }

  return (
    <div>
      <div>
        <div className='login-button'>
            <CiUser  size={70}/>
            {isLoggedIn ? (
                <Button className="loginBtn" variant="primary"  onClick={handleLogout}>로그아웃</Button>
            ) : (

              <Button className="loginBtn" variant="primary" onClick={goToLogin}>
                로그인
              </Button>
            )}
        </div>
      </div>
      
      <div className='nav-section'>
        <img className='logo-img' width = {100} src="https://th.bing.com/th/id/OIP.V3k4wm5U44DQ2DkYhhpcCAHaEK?rs=1&pid=ImgDetMain" onClick={goToMainPage}/>
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
                    <input type="search" placeholder='검색어를 입력하세요' className='search-input2'  onKeyDown={search} />
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
