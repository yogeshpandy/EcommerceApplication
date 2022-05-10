import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {

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
                    <Link className='nav-link' to='/auth'>
                        Sign In
                    </Link>
                    {/* <Link className='nav-link' to='/sign-up-form'>
                        Sign Up
                    </Link> */}
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