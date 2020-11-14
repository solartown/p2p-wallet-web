import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as web3 from '@solana/web3.js';
import { styled } from 'linaria/react';
import { rgba } from 'polished';

import { AmountUSDT } from 'components/common/AmountUSDT';
import { Avatar } from 'components/ui';
import { openModal } from 'store/actions/modals';
import { getConfirmedTransaction } from 'store/actions/solana';
import { SHOW_MODAL_TRANSACTION_DETAILS } from 'store/constants/modalTypes';
import { RootState, TokenAccount } from 'store/types';
import { useDecodeSystemProgramInstructions } from 'utils/hooks/instructions/useDecodeSystemProgramInstructions';
import { useDecodeTokenRegInstructions } from 'utils/hooks/instructions/useDecodeTokenRegInstractions';
import { usePopulateTokenInfo } from 'utils/hooks/usePopulateTokenInfo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 69px;
  padding: 15px;

  background: #fff;

  border-radius: 12px 12px;
  cursor: pointer;
`;

const AvatarStyled = styled(Avatar)`
  width: 32px;
  height: 32px;
  margin-right: 15px;

  background: #c4c4c4;
`;

const Content = styled.div`
  flex: 1;

  font-size: 14px;
  line-height: 17px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;

  color: #000;
  font-weight: 500;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;

  color: ${rgba('#000', 0.3)};
`;

type Props = {
  signature: string;
  publicKey: web3.PublicKey;
};

export const TransactionRow: FunctionComponent<Props> = ({ signature, publicKey }) => {
  const dispatch = useDispatch();
  const transaction = useSelector(
    (state: RootState) => state.entities.transactionsNormalized[signature],
  );
  const tokenAccount: TokenAccount = useSelector(
    (state: RootState) => state.entities.tokens.items[publicKey.toBase58()],
  );

  const { mint } = tokenAccount?.parsed || { amount: 0 };
  let { symbol } = usePopulateTokenInfo({ mint: mint?.toBase58() });

  const { type, lamports } = useDecodeSystemProgramInstructions(
    transaction?.transaction.instructions,
  );

  const { transfer } = useDecodeTokenRegInstructions(transaction?.transaction.instructions);

  useEffect(() => {
    dispatch(getConfirmedTransaction(signature));
  }, []);

  const handleClick = () => {
    dispatch(openModal(SHOW_MODAL_TRANSACTION_DETAILS, { signature }));
  };

  // TODO: dirty
  let amount = 0;
  if (type) {
    symbol = 'SOL';
    amount = (lamports || 0) / web3.LAMPORTS_PER_SOL;
  } else if (transfer) {
    amount = (transfer.amount || 0) / web3.LAMPORTS_PER_SOL;
  } else {
    // TODO: other types
    return null;
  }

  return (
    <Wrapper onClick={handleClick}>
      <AvatarStyled />
      <Content>
        <Top>
          <div>{type || (transfer && 'Transfer')}</div>{' '}
          <AmountUSDT value={amount} symbol={symbol} />
        </Top>
        <Bottom>
          <div>{transaction?.slot} SLOT</div>
          <div>
            {amount} {symbol}
          </div>
        </Bottom>
      </Content>
    </Wrapper>
  );
};
