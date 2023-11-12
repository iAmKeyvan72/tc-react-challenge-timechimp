import { FC } from 'react';

import './_error-message.scss';

type Props = {
  error: string;
};

const ErrorMessage: FC<Props> = ({ error }) => {
  return (
    <div className="error-message">
      <p>{error}</p>
    </div>
  );
};

export default ErrorMessage;
