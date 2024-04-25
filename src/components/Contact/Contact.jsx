import css from "./Contact.module.css";

const Contact = ({ name, number, id, deleteContact, createdAt }) => {
  const date = createdAt.slice(0, 10);
  const time = createdAt.slice(11, 16);
  return (
    <div className={css.contactContainer}>
      <h1 className={css.name}>{name}</h1>

      <a href={`tel:${number}`} className={css.number}>
        📞{number}
      </a>

      <p className={css.date}>
        Added: 📆{date} 🕒{time}
      </p>

      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
