const Chat = ({ message }: any) => {
  return (
    <div>
      <div>
        {message.map((item: any, index: any) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
