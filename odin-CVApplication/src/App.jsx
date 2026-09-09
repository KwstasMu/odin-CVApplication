import { useEffect, useState } from 'react';

import PersonalInfo from './components/Personalinfo.jsx';
import EducationalInfo from './components/Educationalinfo.jsx';
import PractialInfo from './components/Practicalinfo.jsx';

import './styles/App.css';

function App() {
  const [data, setData] = useState({
    person: {},
    education: [],
    practice: [],
  });

  useEffect(() => {
    let person = JSON.parse(localStorage.getItem('person'));
    if (person) {
      setData((prev) => ({ ...prev, person }));
    } else {
      person = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        editing: true,
      };
      setData((prev) => ({ ...prev, person }));
    }
  }, []);

  useEffect(() => {
    let education = JSON.parse(localStorage.getItem('education'));
    if (education) {
      setData((prev) => ({
        ...prev,
        education,
      }));
    } else {
      education = [
        {
          id: crypto.randomUUID(),
          school: '',
          title: '',
          date: '',
          editing: true,
        },
      ];
      setData((prev) => ({
        ...prev,
        education,
      }));
    }
  }, []);

  useEffect(() => {
    let practice = JSON.parse(localStorage.getItem('practice'));
    if (practice) {
      setData((prev) => ({
        ...prev,
        practice,
      }));
    } else {
      practice = [
        {
          id: crypto.randomUUID(),
          companyName: '',
          position: '',
          responsibilities: '',
          started: '',
          ended: '',
          editing: true,
        },
      ];
      setData((prev) => ({
        ...prev,
        practice,
      }));
    }
  }, []);

  function updatePersonalInfo(person) {
    setData((prev) => {
      localStorage.setItem('person', JSON.stringify(person));
      return { ...prev, person };
    });
  }

  function updateSchool(updatedSchool) {
    setData((prev) => {
      const updatedEducation = prev.education.map((school) =>
        school.id === updatedSchool.id ? updatedSchool : school,
      );
      localStorage.setItem('education', JSON.stringify(updatedEducation));
      return { ...prev, education: updatedEducation };
    });
  }

  function updateCompany(updatedCompany) {
    setData((prev) => {
      const updatedPractice = prev.practice.map((company) =>
        company.id === updatedCompany.id ? updatedCompany : company,
      );
      localStorage.setItem('practice', JSON.stringify(updatedPractice));
      return { ...prev, practice: updatedPractice };
    });
  }

  function addSchool() {
    const newOption = {
      id: crypto.randomUUID(),
      school: '',
      title: '',
      date: '',
      editing: true,
    };
    setData((prev) => ({
      ...prev,
      education: [...prev.education, newOption],
    }));
  }

  function deleteSchool(id) {
    setData((prev) => {
      const updatedEducation = prev.education.filter(
        (education) => education.id !== id,
      );

      localStorage.setItem('education', JSON.stringify(updatedEducation));
      return { ...prev, education: updatedEducation };
    });
  }

  function addPractice() {
    const newOption = {
      id: crypto.randomUUID(),
      companyName: '',
      position: '',
      responsibilities: '',
      started: '',
      ended: '',
      editing: true,
    };
    setData((prev) => ({
      ...prev,
      practice: [...prev.practice, newOption],
    }));
  }

  function deleteCompany(id) {
    setData((prev) => {
      const updatedPractice = prev.practice.filter(
        (company) => company.id !== id,
      );
      localStorage.setItem('practice', JSON.stringify(updatedPractice));
      return { ...prev, practice: updatedPractice };
    });
  }

  return (
    <>
      <PersonalInfo
        data={data.person}
        update={updatePersonalInfo}
      ></PersonalInfo>
      <section className="educationalInfo">
        <fieldset>
          <legend>Educational Info</legend>
          {data.education.map((school) => (
            <EducationalInfo
              key={school.id}
              data={school}
              update={updateSchool}
              deleteSchool={deleteSchool}
            ></EducationalInfo>
          ))}
        </fieldset>

        <button type="button" className='addBtn' onClick={addSchool}>
          Add School
        </button>
      </section>
      <section className="practicalInfo">
        <fieldset>
          <legend>Practice Info</legend>
          {data.practice.map((company) => (
            <PractialInfo
              key={company.id}
              data={company}
              update={updateCompany}
              deleteCompany={deleteCompany}
            ></PractialInfo>
          ))}
        </fieldset>

        <button type="button" className='addBtn' onClick={addPractice}>
          Add Practice
        </button>
      </section>
    </>
  );
}

export default App;
