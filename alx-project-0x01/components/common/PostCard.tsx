import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 border rounded shadow-md space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
