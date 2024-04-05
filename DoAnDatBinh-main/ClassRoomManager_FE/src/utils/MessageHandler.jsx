import { message } from 'antd';

const messageHandler = {
  success: (content) => {
    message.success(content);
  },
  error: (content) => {
    message.error(content);
  },
  warning: (content) => {
    message.warning(content);
  },
};

export default messageHandler;
