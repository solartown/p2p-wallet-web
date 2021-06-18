import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { styled } from '@linaria/react';
import * as H from 'history';

import Logo from 'assets/images/logo.png';
import { COLUMN_LEFT_WIDTH, COLUMNS_GRID_GUTTER } from 'components/common/Layout/constants';
import { Icon } from 'components/ui';

import { ScrollFix } from '../ScollFix';
import { HEADER_HEIGHT } from './constants';

const Wrapper = styled.header`
  position: relative;

  height: ${HEADER_HEIGHT}px;
`;

const FixedContainer = styled.div`
  position: fixed;
  z-index: 1;

  width: 100%;
  height: ${HEADER_HEIGHT}px;

  background: #fff;
  border-bottom: 1px solid #f6f6f8;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
`;

const ScrollFixContainer = styled(ScrollFix)`
  height: 100%;
  padding: 0 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;
  max-width: 796px;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const LogoLink = styled(Link)`
  color: #000;
  font-weight: bold;
  font-size: 22px;
  line-height: 120%;
  text-decoration: none;
`;

const LogoImg = styled.img`
  width: 108px;
  height: 38px;
`;

const BreadcrumbWrapper = styled.div`
  position: absolute;
  left: ${COLUMN_LEFT_WIDTH + COLUMNS_GRID_GUTTER}px;

  display: flex;
  align-items: center;

  color: #a3a5ba;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
`;

const BackIcon = styled(Icon)`
  width: 22px;
  height: 22px;
  margin-left: -2px;

  color: #a3a5ba;

  transform: rotate(90deg);
`;

const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 16px;

  background: #f6f6f8;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background: #eff3ff;

    ${BackIcon} {
      color: #5887ff;
    }
  }
`;

export type BreadcrumbType = {
  currentName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  backTo?: string | Partial<H.Location<any>>;
};

type Props = {
  breadcrumb?: BreadcrumbType;
};

export const Header: FunctionComponent<Props> = ({ breadcrumb }) => {
  const connected = useSelector((state) => state.wallet.connected);

  return (
    <Wrapper>
      <FixedContainer>
        <ScrollFixContainer>
          <MainContainer>
            <Content>
              <LogoLink to={connected ? '/wallets' : '/'}>
                <LogoImg src={Logo} />
              </LogoLink>
              {breadcrumb ? (
                <BreadcrumbWrapper>
                  {breadcrumb.backTo ? (
                    <BackLink to={breadcrumb.backTo}>
                      <BackIcon name="chevron" />
                    </BackLink>
                  ) : undefined}
                  {breadcrumb.currentName}
                </BreadcrumbWrapper>
              ) : undefined}
            </Content>
          </MainContainer>
        </ScrollFixContainer>
      </FixedContainer>
    </Wrapper>
  );
};
