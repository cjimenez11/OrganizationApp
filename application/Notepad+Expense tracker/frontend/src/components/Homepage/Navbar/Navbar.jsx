import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/users/user.types';
/**
 * This is how we navigate through pages in react
 * Every button links to a page
 * 
 * It is ontop of all our pages
 * 
 */

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {auth,token,loading,error} = useSelector((state)=>state.userReducer)
  console.log(auth)

  const nav = useNavigate()
  return (
    <>
      <Box zIndex={1000} position={"fixed"} top={0} w={"100%"}  boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"}  bg={"lavender"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} cursor={"pointer"} onClick={()=>{
            nav("/")
          }} color="navy">Notes App</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
                <Button display={auth==true?"block":"none"}  bg={"plum"}m color={"navy"} onClick={()=>{
                    nav("/breathe")
                }}>Relaxer</Button>
                <Button display={auth==true?"block":"none"}  bg={"plum"}m color={"navy"} onClick={()=>{
                    nav("/expenses")
                }}>Expense Tracker</Button>
                <Button display={auth==true?"block":"none"}  bg={"plum"}m color={"navy"} onClick={()=>{
                    nav("/notes")
                }}>Notepad</Button>
                <Button display={auth==true?"none":"block"}  bg={"plum"}m color={"navy"} onClick={()=>{
                    nav("/register")
                }}>Sign up</Button>
                <Button display={auth==true?"none":"block"} bg={"plum"}m color={"navy"} onClick={()=>{
                    nav("/login")
                }}>Login</Button>
              <Button bg={"plum"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border="2px solid plum"
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;