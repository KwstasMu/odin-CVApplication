function PracticalInfo({ data, update, deleteCompany }) {
  const handleChange = (e) => {
    const updated = { ...data, [e.target.name]: e.target.value };
    update(updated);
  };

  const handleClick = () => {
    const updated = { ...data, editing: !data.editing };
    update(updated);
  };

  const delCompany = () => {
    deleteCompany(data.id);
  };

  return (
    <>
      <section className="practice">
        <form>
          {data.editing ? (
            <>
              <label>Company:</label>
              <input
                autoFocus
                type="text"
                name="companyName"
                value={data.companyName}
                onChange={handleChange}
              ></input>
              <label>Position:</label>
              <input
                type="text"
                name="position"
                value={data.position}
                onChange={handleChange}
              ></input>{' '}
              <label>Responsibilies:</label>
              <textarea
                name="responsibilities"
                value={data.responsibilities}
                onChange={handleChange}
              ></textarea>
              <label>From:</label>
              <input
                type="date"
                name="started"
                value={data.started}
                onChange={handleChange}
              ></input>
              <label>Until:</label>
              <input
                type="date"
                name="ended"
                title="Don't fill if you are still working there."
                value={data.ended}
                onChange={handleChange}
              ></input>
              <button
                id={data.id}
                className="deleteBtn"
                type="button"
                onClick={delCompany}
              >
                Delete Practice
              </button>
            </>
          ) : (
            <>
              <h1>Company: {data.companyName}</h1>
              <h2>Postition: {data.position}</h2>
              <p>Responsibilities: {data.responsibilities}</p>
              <p>From: {data.started}</p>
              <p>Until: {data.ended ? data.ended : 'today'}</p>
            </>
          )}

          <button type="button" className="editBtn" onClick={handleClick}>
            {data.editing ? <i className="bi bi-floppy"></i> : <i className="bi bi-three-dots"></i>}
          </button>
          <hr></hr>
        </form>
      </section>
    </>
  );
}

export default PracticalInfo;
