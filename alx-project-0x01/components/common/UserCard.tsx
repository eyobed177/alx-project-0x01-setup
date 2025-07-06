import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, phone, website, company, address }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-blue-800">{name}</h2>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p><span className="font-medium">Company:</span> {company.name}</p>
        <p><span className="font-medium">Address:</span> {address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;
