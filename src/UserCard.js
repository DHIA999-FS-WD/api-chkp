import "./userCard.css";

const UserCard = ({ name, phone, email, company, adress }) => {
  return (
    <div className="userCard">
      <h2>{name}</h2>
      <p>
        <span>Phone Number :</span> {phone}
      </p>
      <p>
        <span>Email :</span> {email}
      </p>
      <p>
        <span>Company :</span> {company}
      </p>
      <p>
        <span>Adress:</span> {adress}
      </p>
    </div>
  );
};

export default UserCard;
