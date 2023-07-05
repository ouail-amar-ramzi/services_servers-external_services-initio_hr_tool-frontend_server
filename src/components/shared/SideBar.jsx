import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import logo from '../../assets/logo-green.svg'
import user from '../../assets/main/profile/user.svg'

const SideBar = () => {

    const navLinks = [
        {
            linkTitle: "Admin",
            linkHref: "/app/admin",
            linkIcon: "eos-icons:admin"
        },
        {
            linkTitle: "Events",
            linkHref: "/app/events",
            linkIcon: "ic:baseline-event"
        },
        {
            linkTitle: "Members",
            linkHref: "/app/members",
            linkIcon: "mdi:users-outline"
        },
        {
            linkTitle: "Settings",
            linkHref: "/app/settings",
            linkIcon: "ic:round-settings"
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLogout = (e) => {
        console.log('User logged out');
    }

    return (
        <>
            <nav className='bg-white p-10 flex items-center flex-col justify-start'>
                {/* Logo */}
                <div>
                    <img src={logo} alt="initio logo" className='mb-6' />
                </div>

                {/* Nav links */}
                <ul className='flex flex-col gap-4 mt-6'>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index} className={`text-initio-green-primary ${(index == currentIndex) ? 'bg-initio-green-secondary rounded-3xl bg-opacity-10' : ''} transition px-4 py-2 rounded-lg font-normal gap-4`}>
                                <Link onClick={() => {setCurrentIndex(_prev => index)}} to={link.linkHref} className='flex items-center justify-start'>
                                    <Icon icon={link.linkIcon} className='w-8 h-8 inline-block mr-2'/>
                                    <p className='inline-block'> {link.linkTitle} </p>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                {/* User */}
                <div className='w-full mt-auto px-8 py-2 flex flex-col items-center text-white bg-gradient-green-black rounded-xl'>
                    <img src={user} alt="user picture" className='w-24 h-24 p-0.5 bg-gradient-150 from-initio-green-primary via-initio-green-secondary to-white rounded-full' />
                    <h2 className='font-normal text-xl text-transparent bg-clip-text bg-gradient-to-r from-initio-green-secondary-light to-initio-white-secondary'>Name Surname</h2>
                    <h3 className='font-normal text-sm text-[#DEDEDE]'>HR manager</h3>
                </div>

                {/* Logout */}
                <button className='mt-6' onClick={handleLogout}><Icon icon='iconamoon:exit-light' className='w-8 h-8 mr-2 inline-block p-1.5 rounded-full text-initio-white-primary bg-gradient-green-black' /> Logout</button>
            </nav>
        </>
    )
}

export default SideBar;