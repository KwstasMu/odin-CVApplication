function PersonalInfo({ data, update }) {
  const handleChange = (e) => {
    const updated = { ...data, [e.target.name]: e.target.value };
    update(updated);
  };

  const handleClick = () => {
    const updated = { ...data, editing: !data.editing };
    update(updated);
  };

  return (
    <>
      <section className="personalInfo">
        <form>
          <fieldset className="personalFieldset">
            <legend>Personal info</legend>
            {data.editing ? (
              <>
                <label>First Name:</label>
                <input
                  autoFocus
                  name="firstName"
                  type="text"
                  value={data.firstName}
                  onChange={handleChange}
                ></input>

                <label>Last Name</label>
                <input
                  name="lastName"
                  type="text"
                  value={data.lastName}
                  onChange={handleChange}
                ></input>

                <label>Email:</label>
                <input
                  name="email"
                  type="email"
                  value={data.email}
                  onChange={handleChange}
                ></input>

                <label>Phone:</label>
                <input
                  name="phone"
                  type="text"
                  value={data.phone}
                  onChange={handleChange}
                ></input>
              </>
            ) : (
              <>
                <h1>{data.firstName + ' ' + data.lastName}</h1>
                <p>{data.email}</p>
                <p>{data.phone}</p>
              </>
            )}
          </fieldset>
          <button
            type="button"
            className="editBtn personalEdit"
            onClick={handleClick}
          >
            {data.editing ? <i className="bi bi-floppy"></i> : <i className="bi bi-three-dots"></i>}
          </button>
        </form>
      </section>
    </>
  );
}

export default PersonalInfo;
