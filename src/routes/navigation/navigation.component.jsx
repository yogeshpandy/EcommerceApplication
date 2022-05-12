import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutCurrentUser } from '../../utils/firebase/firebase.util';
import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    // console.log("Current User",currentUser)

    // const signOutUser = async() => {
    //     try {
    //         console.log("1")
    //        const response =  await signOutCurrentUser();
    //         // setCurrentUser(null)
    //        console.log("1 response", response)
    //     }
    //     catch(err) {
    //         console.log(err);
    //     }
    // }
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div><CrwnLogo /></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    {   currentUser &&
                        <span className='nav-link' onClick={async() => await signOutCurrentUser()}>
                        Sign Out {currentUser.displayName}
                        </span> 
                    }
                    {   !currentUser &&
                         <Link className='nav-link' to='/auth'>
                         SignIn 
                        </Link>
                    }
                    <Link className='nav-link' to='/games/tic-tac-toe'>
                        Game
                    </Link>
                </div>    
            </div>
            <Outlet />
        </Fragment>
    )
  }

  export default Navigation;