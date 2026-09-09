function EducationalInfo({ data, update, deleteSchool }) {
  const handleChange = (e) => {
    const updated = { ...data, [e.target.name]: e.target.value };
    update(updated);
  };

  const handleClick = () => {
    const updated = { ...data, editing: !data.editing };
    update(updated);
  };

  const delSchool = () => {
    deleteSchool(data.id);
  };

  return (
    <>
      <section className="school">
        <form>
          {data.editing ? (
            <>
              <label>School:</label>
              <input
                autoFocus
                type="text"
                name="school"
                value={data.school}
                onChange={handleChange}
              ></input>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
              ></input>
              <label>Date:</label>
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleChange}
              ></input>

              <button
                id={data.id}
                className="deleteBtn"
                type="button"
                onClick={delSchool}
              >
                Delete School
              </button>
            </>
          ) : (
            <>
              <h1>School: {data.school}</h1>
              <h2>Title: {data.title}</h2>
              <p>Date: {data.date}</p>
            </>
          )}

          <button type="button" className="editBtn" onClick={handleClick}>
            {data.editing ? (
              <i className="bi bi-floppy"></i>
            ) : (
              <i className="bi bi-three-dots"></i>
            )}
          </button>
          <hr></hr>
        </form>
      </section>
    </>
  );
}

export default EducationalInfo;
