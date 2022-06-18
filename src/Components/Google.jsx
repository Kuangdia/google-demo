import React from "react";
import {
  MainContainer,
  ContentContainer,
  NavContainer,
  NavMenuLeft,
  NavItem,
  NavMenuRight,
  NavMenuIcon,
  NavSignIcon,
  ContentLogo, 
  SearchIconWrapper,
  SearchIcon,
  SearchInput,
  MicIcon,
  IconWrapper,
  NavIconWrapper,
  NavItemIcons,
  ShortCut,
  SiteWrapper,
  SiteItem,
  AndroidIcon,
  GoogleIcon,
  YoutubeIcon,
  SteamIcon,
  SiteIconWrapper
} from './styles.jsx';

const Google = () => {
  return (
    <MainContainer>
      <NavContainer>
        <NavMenuLeft>
          <NavItem>About</NavItem>
          <NavItem>Store</NavItem>
        </NavMenuLeft>
        <NavMenuRight>
          <NavItem >AppleM</NavItem>
          <NavItem>Images</NavItem>
          <NavItemIcons>
            <NavIconWrapper>
              <NavMenuIcon />
            </NavIconWrapper>
          </NavItemIcons>
          <NavItemIcons>
            <NavIconWrapper>
              <NavSignIcon />
            </NavIconWrapper>
          </NavItemIcons>
        </NavMenuRight>
      </NavContainer>
      <ContentContainer>
        <ContentLogo src="/apple-logo.png"/>
        <SearchIconWrapper>
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          <SearchInput placeholder="Search Apple or type a URL"></SearchInput>
          <IconWrapper>
            <MicIcon src="/gmic.svg"/>
          </IconWrapper>
        </SearchIconWrapper>
        <ShortCut>
          <SiteWrapper>
          <SiteIconWrapper>
            <AndroidIcon />
          </SiteIconWrapper>
            <SiteItem>Android</SiteItem>
          </SiteWrapper>
          <SiteWrapper>
            <SiteIconWrapper>
            <GoogleIcon />
            </SiteIconWrapper>
            <SiteItem>Google</SiteItem>
          </SiteWrapper>
          <SiteWrapper>
          <SiteIconWrapper>
            <YoutubeIcon />
          </SiteIconWrapper>
            <SiteItem>Youtube</SiteItem>
          </SiteWrapper>
          <SiteWrapper>
            <SiteIconWrapper>
            <SteamIcon />
            </SiteIconWrapper>
            <SiteItem>Steam</SiteItem>
          </SiteWrapper>
        </ShortCut>
      </ContentContainer>
    </MainContainer>
  );
};

export default Google;
