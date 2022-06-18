import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";
import { RiAppleLine } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import { FcAndroidOs, FcGoogle, FcStart, FcSteam, } from "react-icons/fc"

export const MainContainer = styled.div`
  width: 100%;
`;

export const ContentContainer = styled.div`
  padding-top: 60px;
  height: 460px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  font-family: Arial;
  font-size: 14px;
`;

export const NavMenuLeft = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  padding-left: 15px;
`;

export const NavMenuRight = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavItem = styled.li`
  font-size: 13px;
  padding-right: 15px;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const NavMenuIcon = styled(CgMenuGridO)`
  font-size: 24px;
`;

export const NavSignIcon = styled(RiAppleLine)`
  font-size: 24px;
`;

export const ContentLogo = styled.img`
  height: 200px;
  width: 400px;
`; 

export const SearchIcon = styled(TbSearch)`
  font-size: 18px;
  color: rgb(110, 110, 110);
`;

export const MicIcon = styled.img`
  font-size: 24px;
`;

export const SearchIconWrapper = styled.div`
  position: relative;
  width: 40%;
  height: 45px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  border: 1px solid rgb(233, 233, 233);
  box-shadow: 0px 0px 8px 1px rgb(221, 221, 221);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 85%;
  outline: none;
  border-style: none;

  &::placeholder {
    font-size: 16px;
    color: rgb(110, 110, 110);
  }
`;

export const IconWrapper = styled.div`
  padding: 0px 20px;
`

export const NavIconWrapper = styled.div`
  position: center;
  display: inline-block;
  transition: background-color 0.25sl
  height: 2em;
  padding: 0.5em;
  border-radius: 50%;

  &:hover {
    background-color: rgba(0, 0, 0, .15);
    cursor: pointer;
  }
`;

export const NavItemIcons = styled.div`

`;

export const ShortCut = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  height: 150px;
  border-size: border-box;
`;

export const SiteWrapper = styled.div`
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 4px;
  width: 120px;

  &:hover {
    background-color: rgb(233, 233, 233);
    cursor: pointer;
  }
`;

export const SiteItem = styled.p`
  font-family: roboto;
  font-size: 16px;
`;

export const AndroidIcon = styled(FcAndroidOs)`
  font-size: 28px;
`;

export const GoogleIcon = styled(FcGoogle)`
  font-size: 28px; 
`;

export const YoutubeIcon = styled(FcStart)`
  font-size: 28px;
`;

export const SteamIcon = styled(FcSteam)`
  font-size: 28px;
`;

export const SiteIconWrapper = styled.div`
  height: 1.8em;
  padding: 0.7em;
  border-radius: 50%;
  background-color: rgba(241, 243, 244, 1);
  cursor: pointer;
`;
