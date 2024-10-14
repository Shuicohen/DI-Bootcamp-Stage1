interface UserCardProps {
    name?: string;
    age?: number;
}

const UserCard: React.FC<UserCardProps> = ({ name = "Unknown", age = 0 }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age > 0 ? age : "Not Provided"}</p>
        </div>
    );
};

export default UserCard;