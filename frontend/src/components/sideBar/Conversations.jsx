import React from "react";
import Conversation from "./Conversation";
import { useGetConversations } from "../../hooks/useGetConversatiions";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);
  return (
    <div className="flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndex={index === conversation.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
