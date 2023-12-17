

import './App.css'
import {Aside} from "@/components/aside";
import {AppInput} from "@/components/app-input";
import searchIcon from '@/assets/search.svg'
import {AppButton} from "@/components/app-button";
import usersJson from '../public/users.json'
import {User, UserCard} from "@/components/users/user-card.tsx";
import {ChangeEvent, useMemo, useState} from "react";
import {AddNewUserModal} from "@/components/modals/add-new-user-modal.tsx";
import menuIcon from '@/assets/menu.svg'
import {MessageModal} from "@/components/modals/message-modal.tsx";
function App() {
  const [users, setUsers] = useState(usersJson ?? [])
  const [show, setShow] = useState(false)
  const [asideShow, setAsideShow] = useState(false)
  const [search, setSearch] = useState('')
  const [messageModal, setMessageModal] = useState(false)
  const [messageModalText, setMessageModalText] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const filteredUsers = useMemo(() => users.filter(user =>
      user.email.toLowerCase().includes(search.toLowerCase())),[users, search])

  const deleteUser = (user: User) => {
    setUsers(prev => prev.filter(item => item.id !== user.id))
    setMessageModal(true)
    setMessageModalText('Пользователь успешно удален')
  }

  const editUser = (user: User) => {
    setUsers(prev => prev.map(item => item.id === user.id ? user : item))
    setMessageModal(true)
    setMessageModalText('Пользователь успешно обновлен')
  }

  return (
    <div className={'wrapper'} onClick={() => setAsideShow(false)}>
     <Aside onClose={setAsideShow} show={asideShow}/>
      <div className='max-w-[1135px] w-full mx-auto md:rounded-[15px] md:shadow bg-white md:overflow-x-hidden md:overflow-y-scroll md:h-[590px] md:mt-[53px] py-[15px] px-[29px] md:mr-[100px]'>
        <div className="flex items-center flex-col gap-[15px] md:gap-0 md:flex-row justify-around">
          <div className={'text-[26px] font-semibold mr-auto flex gap-[13px]'}>
            <img onClick={(event) => {
              event.stopPropagation()
              setAsideShow(true)
            }} className={'md:hidden'} src={menuIcon} alt="menu"/>
            Команда</div>
          <div className="flex flex-col md:flex-row gap-[10px] w-full justify-end">
            <div className="max-w-[650px] w-full">
              <AppInput value={search} onChange={onChange} inputSize={'sm'} placeholder={'Поиск'} suffix={<img src={searchIcon} alt={'search icon'}/>}/>
            </div>
           <AppButton fz={18} onClick={() => setShow(true)} size={'sm'}>Добавить пользователя</AppButton>
          </div>
        </div>
        <div className="mt-[24px] md:mt-[16px]">
          {filteredUsers.map((user) =>
              <UserCard onDeleteUser={deleteUser} onEditUser={editUser} key={user.id} user={user}/>
          )}
        </div>
      </div>

      <AddNewUserModal mode={'add'} onSubmit={form => {
        setUsers(prev => [...prev, {id: prev.length + 1, ...form}])
        setShow(false)
        setMessageModal(true)
        setMessageModalText('Пользователь успешно создан')
      }} onClose={setShow} show={show}/>
      <MessageModal show={messageModal} message={messageModalText} onClose={setMessageModal}/>
    </div>
  )
}

export default App
